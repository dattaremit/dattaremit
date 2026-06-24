import apiClient from "@/lib/api-client";
import type { CurrencyCode } from "@/lib/currencies";
import { DEFAULT_CURRENCY } from "@/lib/currencies";

// The backend is the single source of truth for the live USD→X rate: it
// fetches the mid-market rate per corridor and caches it server-side.
// /api/exchange-rate is public (no auth), so we call it from the browser via
// the shared axios client (baseURL = NEXT_PUBLIC_BASE_API_URL).
export interface ExchangeRate {
  rate: number;
  currency: CurrencyCode;
  updatedAt: string;
  stale: boolean;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

export async function fetchUsdRate(
  currency: CurrencyCode = DEFAULT_CURRENCY,
): Promise<ExchangeRate> {
  const res = await apiClient.get<ApiEnvelope<ExchangeRate>>(
    "/api/exchange-rate",
    { params: { currency } },
  );
  return res.data.data;
}
