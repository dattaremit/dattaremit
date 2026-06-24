"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchUsdRate } from "@/lib/exchange-rate-api";
import type { CurrencyCode } from "@/lib/currencies";
import { DEFAULT_CURRENCY } from "@/lib/currencies";

// Refresh cadence for the live rate. The backend caches the rate server-side,
// so polling more often than this just wastes requests.
const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

interface RateResult {
  rate: number;
  currency: CurrencyCode;
  updatedAt: Date;
}

export interface UseUsdRate {
  /** Live USD→currency rate for the requested currency, or null until loaded. */
  rate: number | null;
  /** When the rate was last reported by the backend, or null. */
  updatedAt: Date | null;
  /** True until a rate for the requested currency is available. */
  isLoading: boolean;
  /** Force an immediate refetch. */
  refetch: () => void;
}

/**
 * Fetches the live USD→currency rate from the backend and refreshes it on an
 * interval. Re-fetches whenever the selected currency changes. Shared by every
 * section that shows the rate so the fetch logic lives in one place.
 */
export function useUsdRate(currency: CurrencyCode = DEFAULT_CURRENCY): UseUsdRate {
  const [result, setResult] = useState<RateResult | null>(null);

  const refetch = useCallback(async () => {
    try {
      const data = await fetchUsdRate(currency);
      if (typeof data.rate === "number" && Number.isFinite(data.rate)) {
        setResult({
          rate: data.rate,
          currency,
          updatedAt: data.updatedAt ? new Date(data.updatedAt) : new Date(),
        });
      }
    } catch (error) {
      // Keep the last good value; the UI shows a shimmer while none is available.
      console.error("Error fetching exchange rate:", error);
    }
  }, [currency]);

  useEffect(() => {
    // refetch() only writes state after an awaited network request, never
    // synchronously, so it can't cause the cascading renders the rule guards against.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch();
    const interval = setInterval(refetch, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refetch]);

  // Derive loading from whether the cached result matches the requested
  // currency. Switching currency makes this stale until the new fetch lands, so
  // we never render an amount in the wrong currency — and we avoid a
  // synchronous setState inside the effect to do it.
  const matches = result?.currency === currency;
  return {
    rate: matches ? result!.rate : null,
    updatedAt: matches ? result!.updatedAt : null,
    isLoading: !matches,
    refetch,
  };
}
