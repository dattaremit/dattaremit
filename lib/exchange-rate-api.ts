import apiClient from "@/lib/api-client";

// The backend is the single source of truth for the live USD→INR rate: it
// fetches the mid-market rate and caches it server-side. /api/exchange-rate is
// public (no auth), so we call it directly from the browser via the shared
// axios client (baseURL = NEXT_PUBLIC_BASE_API_URL).
export interface ExchangeRate {
  rate: number;
  updatedAt: string;
  stale: boolean;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

export async function fetchUsdInrRate(): Promise<ExchangeRate> {
  const res = await apiClient.get<ApiEnvelope<ExchangeRate>>(
    "/api/exchange-rate",
  );
  return res.data.data;
}
