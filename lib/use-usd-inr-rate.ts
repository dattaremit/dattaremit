"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchUsdInrRate } from "@/lib/exchange-rate-api";

// Refresh cadence for the live rate. The backend caches the rate server-side,
// so polling more often than this just wastes requests.
const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

export interface UseUsdInrRate {
  /** Live USD→INR rate, or null until the first successful fetch. */
  rate: number | null;
  /** When the rate was last reported by the backend, or null. */
  updatedAt: Date | null;
  /** True while the very first fetch is in flight. */
  isLoading: boolean;
  /** Force an immediate refetch. */
  refetch: () => void;
}

/**
 * Fetches the live USD→INR rate from the backend and refreshes it on an
 * interval. Shared by every section that shows the rate so the fetch logic
 * lives in one place.
 */
export function useUsdInrRate(): UseUsdInrRate {
  const [rate, setRate] = useState<number | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refetch = useCallback(async () => {
    try {
      const data = await fetchUsdInrRate();
      if (typeof data.rate === "number" && Number.isFinite(data.rate)) {
        setRate(data.rate);
        setUpdatedAt(data.updatedAt ? new Date(data.updatedAt) : new Date());
      }
    } catch (error) {
      // Keep the last good value; the UI shows a shimmer while rate is null.
      console.error("Error fetching exchange rate:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // refetch() only writes state after an awaited network request, never
    // synchronously, so it can't cause the cascading renders the rule guards against.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refetch();
    const interval = setInterval(refetch, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refetch]);

  return { rate, updatedAt, isLoading, refetch };
}
