import { NextRequest } from "next/server";

// Never let Next.js statically optimize, prerender, or cache this route at
// build time. Each request must execute the handler so the in-memory cache
// (below) decides whether to call the backend or return the recent value.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
};

// The backend is the single source of truth for the live rate: it fetches the
// USD→INR mid-market rate and caches it server-side. This route is a thin,
// same-origin proxy so the browser never talks to the backend directly (no
// CORS) and the marketing site always shows the exact rate the product uses.
const SERVER_API_BASE =
  process.env.EXCHANGE_RATE_API_BASE ?? process.env.NEXT_PUBLIC_BASE_API_URL;

// Only USD→INR is supported end to end; the UI only ever requests USD.
const SUPPORTED = new Set(["USD"]);

interface CacheEntry {
  rate: number;
  updatedAt: string;
  fetchedAt: number;
}

// Short front cache to smooth bursts; the backend holds the authoritative
// (much longer) cache and live-rate logic.
const CACHE_TTL_MS = 15 * 60 * 1000;
const cache = new Map<string, CacheEntry>();

interface ServerRateResponse {
  success?: boolean;
  data?: {
    rate?: number;
    updatedAt?: string;
    stale?: boolean;
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fromRaw = searchParams.get("from") ?? "USD";
  const from = fromRaw.toUpperCase();

  if (!SUPPORTED.has(from)) {
    return Response.json(
      { error: `Unsupported currency: ${fromRaw}` },
      { status: 400, headers: NO_CACHE_HEADERS },
    );
  }

  if (!SERVER_API_BASE) {
    return Response.json(
      {
        error: "Exchange rate service is not configured",
        message: "Missing NEXT_PUBLIC_BASE_API_URL / EXCHANGE_RATE_API_BASE",
      },
      { status: 500, headers: NO_CACHE_HEADERS },
    );
  }

  const now = Date.now();
  const cached = cache.get(from);
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    return Response.json(
      {
        from,
        to: "INR",
        rate: cached.rate,
        updatedAt: cached.updatedAt,
        cached: true,
      },
      { headers: NO_CACHE_HEADERS },
    );
  }

  const url = `${SERVER_API_BASE.replace(/\/$/, "")}/api/exchange-rate`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Backend responded ${res.status}`);

    const body = (await res.json()) as ServerRateResponse;
    const rate = body?.data?.rate;

    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error("Invalid rate from backend");
    }

    const updatedAt = body?.data?.updatedAt ?? new Date(now).toISOString();
    cache.set(from, { rate, updatedAt, fetchedAt: now });

    return Response.json(
      {
        from,
        to: "INR",
        rate,
        updatedAt,
        cached: false,
        stale: body?.data?.stale ?? false,
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch (error) {
    // Fall back to the last good value if the backend is briefly unreachable.
    if (cached) {
      return Response.json(
        {
          from,
          to: "INR",
          rate: cached.rate,
          updatedAt: cached.updatedAt,
          cached: true,
          stale: true,
        },
        { headers: NO_CACHE_HEADERS },
      );
    }
    return Response.json(
      {
        error: "Failed to fetch exchange rate",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502, headers: NO_CACHE_HEADERS },
    );
  }
}
