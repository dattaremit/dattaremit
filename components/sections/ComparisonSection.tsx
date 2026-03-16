"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const SEND_AMOUNT = 1000;
const FALLBACK_RATE = 83.5;

const providers = [
  {
    id: "dattaremit",
    name: "DattaRemit",
    logo: "/logo.png",
    logoSize: "h-12 w-36",
    logoSizeMobile: "h-10 w-32",
    rateMultiplier: 1.0,
    fee: 0,
    highlight: true,
  },
  {
    id: "wise",
    name: "Wise",
    logo: "/wise.png",
    logoSize: "h-12 w-32",
    logoSizeMobile: "h-10 w-28",
    rateMultiplier: 0.992,
    fee: 6.15,
  },
  {
    id: "remitly",
    name: "Remitly",
    logo: "/remitly.png",
    logoSize: "h-10 w-28",
    logoSizeMobile: "h-8 w-24",
    rateMultiplier: 0.988,
    fee: 0,
  },
  {
    id: "skrill",
    name: "Skrill",
    logo: "/skrill.png",
    logoSize: "h-8 w-20",
    logoSizeMobile: "h-6 w-16",
    rateMultiplier: 0.95,
    fee: 0,
  },
  {
    id: "xoom",
    name: "Xoom",
    logo: "/xoom.png",
    logoSize: "h-10 w-28",
    logoSizeMobile: "h-8 w-24",
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
  const [baseRate, setBaseRate] = useState<number>(FALLBACK_RATE);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRate = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.frankfurter.app/latest?from=USD&to=INR",
        { cache: "no-store" }
      );
      if (!response.ok) throw new Error("Failed to fetch rate");
      const data = await response.json();
      setBaseRate(data.rates.INR);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setBaseRate(FALLBACK_RATE);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();
    const interval = setInterval(fetchExchangeRate, 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchExchangeRate]);

  const comparisonData = providers.map((provider) => {
    const exchangeRate = baseRate * provider.rateMultiplier;
    const recipientGets = (SEND_AMOUNT - provider.fee) * exchangeRate;

    return {
      ...provider,
      exchangeRate: exchangeRate.toFixed(2),
      transferFee: provider.fee === 0 ? "$0" : `$${provider.fee.toFixed(2)}`,
      recipientGets: formatINR(recipientGets),
    };
  });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get more INR per USD
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much $1000 gets you with DattaRemit vs traditional methods
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-xl border bg-background overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-muted/50 text-sm font-medium text-muted-foreground">
              <div className="px-6 py-4">Provider</div>
              <div className="px-6 py-4 text-center">Exchange rate</div>
              <div className="px-6 py-4 text-center">Transfer fee</div>
              <div className="px-6 py-4 text-center">Recipient gets</div>
            </div>

            {/* Data Rows */}
            <div className="divide-y">
              {comparisonData.map((row) => (
                <div
                  key={row.id}
                  className={`grid grid-cols-4 items-center ${
                    row.highlight
                      ? "border-2 border-primary bg-primary/5"
                      : ""
                  }`}
                >
                  <div className="px-6 py-4 flex items-center">
                    <div className={`relative ${row.logoSize} flex-shrink-0`}>
                      <Image
                        src={row.logo}
                        alt={row.name}
                        fill
                        className={`object-contain object-left ${row.invertInDark ? "dark:invert" : ""}`}
                      />
                    </div>
                  </div>
                  <div className={`px-6 py-4 text-center ${row.highlight ? "font-semibold" : ""}`}>
                    {isLoading ? (
                      <span className="inline-block w-16 h-5 bg-muted animate-pulse rounded" />
                    ) : (
                      row.exchangeRate
                    )}
                  </div>
                  <div className={`px-6 py-4 text-center ${row.highlight ? "font-semibold" : ""}`}>
                    {row.transferFee}
                  </div>
                  <div className="px-6 py-4 text-center">
                    {isLoading ? (
                      <span className="inline-block w-20 h-5 bg-muted animate-pulse rounded" />
                    ) : (
                      <>
                        <span className={`font-semibold ${row.highlight ? "" : "text-foreground"}`}>
                          {row.recipientGets}
                        </span>
                        {row.highlight && (
                          <div className="flex items-center justify-center gap-1 text-sm text-primary mt-1">
                            <Check className="size-4" />
                            <span>Best value</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="rounded-xl border bg-background overflow-hidden divide-y">
            {comparisonData.map((row) => (
              <div
                key={row.id}
                className={`p-4 ${
                  row.highlight
                    ? "border-2 border-primary bg-primary/5"
                    : ""
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`relative ${row.logoSizeMobile} flex-shrink-0`}>
                    <Image
                      src={row.logo}
                      alt={row.name}
                      fill
                      className={`object-contain object-left ${row.invertInDark ? "dark:invert" : ""}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Exchange rate
                    </div>
                    {isLoading ? (
                      <span className="inline-block w-12 h-4 bg-muted animate-pulse rounded" />
                    ) : (
                      <div className={row.highlight ? "font-semibold" : ""}>
                        {row.exchangeRate}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Transfer fee
                    </div>
                    <div className={row.highlight ? "font-semibold" : ""}>
                      {row.transferFee}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Recipient gets
                    </div>
                    {isLoading ? (
                      <span className="inline-block w-14 h-4 bg-muted animate-pulse rounded" />
                    ) : (
                      <div className="font-semibold">
                        {row.recipientGets}
                      </div>
                    )}
                  </div>
                </div>

                {row.highlight && (
                  <div className="flex items-center gap-1 text-sm text-primary mt-3 pt-3 border-t border-primary/20">
                    <Check className="size-4" />
                    <span>Best value</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {lastUpdated && (
          <p className="text-center text-sm text-muted-foreground mt-4">
            Rates last updated: {lastUpdated.toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "medium",
            })}
          </p>
        )}

        <div className="text-center mt-6">
          <Button size="xl" className="group" asChild>
            <Link href="/contact">
              Send Money
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
