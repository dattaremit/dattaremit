import { NextRequest } from "next/server";
import YahooFinance from "yahoo-finance2";

// Never let Next.js statically optimize, prerender, or cache this route at
// build time. Each request must execute the handler so the in-memory 15-min
// cache (below) decides whether to call Yahoo or return the recent value.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
};

const SUPPORTED = new Set([
  "USD",
  "GBP",
  "EUR",
  "AUD",
  "CAD",
  "SGD",
  "CHF",
  "JPY",
  "NZD",
]);

interface CacheEntry {
  rate: number;
  fetchedAt: number;
}

const CACHE_TTL_MS = 15 * 60 * 1000;
const cache = new Map<string, CacheEntry>();

interface YahooQuoteShape {
  regularMarketPrice?: number;
  regularMarketTime?: Date | number;
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

  const symbol = `${from}INR=X`;
  const now = Date.now();
  const cached = cache.get(symbol);
  if (cached && now - cached.fetchedAt < CACHE_TTL_MS) {
    return Response.json(
      {
        from,
        to: "INR",
        rate: cached.rate,
        updatedAt: new Date(cached.fetchedAt).toISOString(),
        cached: true,
      },
      { headers: NO_CACHE_HEADERS },
    );
  }

  try {
    const quote = (await yahooFinance.quote(symbol)) as YahooQuoteShape;
    const rate = quote?.regularMarketPrice;

    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error("Invalid rate from Yahoo Finance");
    }

    cache.set(symbol, { rate, fetchedAt: now });

    const updatedAt = quote?.regularMarketTime
      ? new Date(quote.regularMarketTime as Date | number).toISOString()
      : new Date(now).toISOString();

    return Response.json(
      {
        from,
        to: "INR",
        rate,
        updatedAt,
        cached: false,
      },
      { headers: NO_CACHE_HEADERS },
    );
  } catch (error) {
    if (cached) {
      return Response.json(
        {
          from,
          to: "INR",
          rate: cached.rate,
          updatedAt: new Date(cached.fetchedAt).toISOString(),
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
