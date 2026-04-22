"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const SEND_AMOUNT = 1000;

const providers = [
  {
    id: "dattaremit",
    name: "DattaRemit",
    logo: "/logo.png",
    logoSize: "h-10 w-32",
    logoSizeMobile: "h-8 w-28",
    rateMultiplier: 1.0,
    fee: 0,
    highlight: true,
  },
  {
    id: "wise",
    name: "Wise",
    logo: "/wise.png",
    logoSize: "h-10 w-28",
    logoSizeMobile: "h-7 w-24",
    rateMultiplier: 0.992,
    fee: 6.15,
  },
  {
    id: "remitly",
    name: "Remitly",
    logo: "/remitly.png",
    logoSize: "h-9 w-24",
    logoSizeMobile: "h-7 w-20",
    rateMultiplier: 0.988,
    fee: 0,
  },
  {
    id: "skrill",
    name: "Skrill",
    logo: "/skrill.png",
    logoSize: "h-7 w-16",
    logoSizeMobile: "h-5 w-14",
    rateMultiplier: 0.95,
    fee: 0,
  },
  {
    id: "xoom",
    name: "Xoom",
    logo: "/xoom.png",
    logoSize: "h-9 w-24",
    logoSizeMobile: "h-7 w-20",
    rateMultiplier: 0.975,
    fee: 2.99,
    invertInDark: true,
  },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ComparisonSection() {
  const [baseRate, setBaseRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch("/api/exchange-rate?from=USD", {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to fetch rate");
      const data = await response.json();
      if (typeof data.rate !== "number") throw new Error("Invalid rate");
      setBaseRate(data.rate);
      setLastUpdated(data.updatedAt ? new Date(data.updatedAt) : new Date());
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchExchangeRate]);

  const comparisonData = providers.map((provider) => {
    const effectiveBase = baseRate ?? 0;
    const exchangeRate = effectiveBase * provider.rateMultiplier;
    const recipientGets = (SEND_AMOUNT - provider.fee) * exchangeRate;

    return {
      ...provider,
      exchangeRate: exchangeRate.toFixed(2),
      transferFee: provider.fee === 0 ? "$0" : `$${provider.fee.toFixed(2)}`,
      recipientGets: formatINR(recipientGets),
    };
  });

  return (
    <section
      id="compare"
      className="relative py-20 md:py-28 bg-muted/40 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="eyebrow mb-5">
            <span className="tabular">04</span>
            <span className="h-px w-6 bg-foreground/30" />
            Side by side
          </div>
          <h2 className="display-mixed text-[clamp(2rem,5vw,3.75rem)] text-foreground">
            <span className="font-semibold">More rupees</span>{" "}
            <span className="font-light italic text-muted-foreground">
              per dollar.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            The amount a recipient receives when you send{" "}
            <span className="font-semibold text-foreground tabular">$1,000</span>,
            calculated using live rates.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-5xl">
          <div className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1.3fr_1fr_1fr_1.2fr] border-b border-border bg-background/50">
              <div className="px-6 py-4 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                Provider
              </div>
              <div className="px-6 py-4 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground text-right tabular">
                Rate
              </div>
              <div className="px-6 py-4 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground text-right tabular">
                Fee
              </div>
              <div className="px-6 py-4 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground text-right tabular">
                Recipient gets
              </div>
            </div>

            <div className="divide-y divide-border">
              {comparisonData.map((row) => (
                <div
                  key={row.id}
                  className={`grid grid-cols-[1.3fr_1fr_1fr_1.2fr] items-center group transition-colors hover:bg-background/60 ${
                    row.highlight
                      ? "bg-gradient-to-r from-[var(--brand)]/12 via-[var(--brand)]/5 to-transparent relative"
                      : ""
                  }`}
                >
                  {row.highlight && (
                    <span
                      aria-hidden
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-gradient-to-b from-[var(--brand)] to-[var(--brand-deep)]"
                    />
                  )}
                  <div className="px-6 py-5 flex items-center">
                    <div className={`relative ${row.logoSize} shrink-0`}>
                      <Image
                        src={row.logo}
                        alt={row.name}
                        fill
                        className={`object-contain object-left ${
                          row.invertInDark ? "dark:invert" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`px-6 py-5 text-right tabular ${
                      row.highlight ? "font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {isLoading ? (
                      <span className="shimmer inline-block w-16 h-4 rounded" />
                    ) : (
                      row.exchangeRate
                    )}
                  </div>
                  <div
                    className={`px-6 py-5 text-right tabular ${
                      row.highlight ? "font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {row.transferFee}
                  </div>
                  <div className="px-6 py-5 text-right">
                    {isLoading ? (
                      <span className="shimmer inline-block w-24 h-5 rounded" />
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        {row.highlight && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand)]/20 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-deep)] tracking-wide uppercase">
                            <Check className="size-3" />
                            Best
                          </span>
                        )}
                        <span
                          className={`tabular ${
                            row.highlight
                              ? "font-semibold text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {row.recipientGets}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((row) => (
            <div
              key={row.id}
              className={`relative rounded-2xl border p-4 ${
                row.highlight
                  ? "bg-gradient-to-br from-[var(--brand)]/12 to-transparent border-[var(--brand)]/40"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`relative ${row.logoSizeMobile} shrink-0`}>
                  <Image
                    src={row.logo}
                    alt={row.name}
                    fill
                    className={`object-contain object-left ${
                      row.invertInDark ? "dark:invert" : ""
                    }`}
                  />
                </div>
                {row.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand)]/20 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-deep)] tracking-wide uppercase">
                    <Check className="size-3" />
                    Best
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-1">
                    Rate
                  </div>
                  {isLoading ? (
                    <span className="shimmer inline-block w-12 h-4 rounded" />
                  ) : (
                    <div
                      className={`tabular ${
                        row.highlight ? "font-semibold" : ""
                      }`}
                    >
                      {row.exchangeRate}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-1">
                    Fee
                  </div>
                  <div
                    className={`tabular ${
                      row.highlight ? "font-semibold" : ""
                    }`}
                  >
                    {row.transferFee}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-medium mb-1">
                    Receives
                  </div>
                  {isLoading ? (
                    <span className="shimmer inline-block w-16 h-4 rounded" />
                  ) : (
                    <div
                      className={`tabular font-semibold ${
                        row.highlight ? "text-foreground" : ""
                      }`}
                    >
                      {row.recipientGets}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {lastUpdated && (
            <p className="text-xs text-muted-foreground tabular">
              Rates updated{" "}
              {lastUpdated.toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
          )}
          <Button variant="brand" size="lg" asChild>
            <a href="#contact">
              Send with DattaRemit
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
