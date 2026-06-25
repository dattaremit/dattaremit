"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { useUsdRate } from "@/lib/use-usd-rate";
import {
  COMPETITOR_RATES,
  DEFAULT_CURRENCY,
  formatAmount,
  formatRate,
  getCurrency,
  type CompetitorId,
  type CurrencyCode,
} from "@/lib/currencies";

const SEND_AMOUNT = 1000;

// Static display metadata per provider; the per-corridor rate/fee numbers live
// in COMPETITOR_RATES and are looked up by id for the selected currency.
const PROVIDERS: {
  id: CompetitorId;
  name: string;
  logo: string;
  logoSize: string;
  logoSizeMobile: string;
  highlight?: boolean;
  monochromeInDark?: boolean;
}[] = [
  {
    id: "dattaremit",
    name: "DattaRemit",
    logo: "/logo.png",
    logoSize: "h-10 w-32",
    logoSizeMobile: "h-8 w-28",
    highlight: true,
  },
  {
    id: "wise",
    name: "Wise",
    logo: "/wise.png",
    logoSize: "h-8 w-24",
    logoSizeMobile: "h-6 w-20",
    monochromeInDark: true,
  },
  {
    id: "remitly",
    name: "Remitly",
    logo: "/remitly.png",
    logoSize: "h-9 w-24",
    logoSizeMobile: "h-7 w-20",
    monochromeInDark: true,
  },
  {
    id: "skrill",
    name: "Skrill",
    logo: "/skrill.png",
    logoSize: "h-7 w-16",
    logoSizeMobile: "h-5 w-14",
    monochromeInDark: true,
  },
  {
    id: "xoom",
    name: "Xoom",
    logo: "/xoom.png",
    logoSize: "h-9 w-24",
    logoSizeMobile: "h-7 w-20",
    monochromeInDark: true,
  },
];

export function ComparisonSection() {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const { rate: baseRate, updatedAt: lastUpdated, isLoading } = useUsdRate(currency);
  const unit = getCurrency(currency).unit;
  const rates = COMPETITOR_RATES[currency];

  const comparisonData = PROVIDERS.map((provider) => {
    const { rateMultiplier, fee } = rates[provider.id];
    const effectiveBase = baseRate ?? 0;
    const exchangeRate = effectiveBase * rateMultiplier;
    const recipientGets = (SEND_AMOUNT - fee) * exchangeRate;

    return {
      ...provider,
      exchangeRate: formatRate(exchangeRate, currency),
      transferFee: fee === 0 ? "$0" : `$${fee.toFixed(2)}`,
      recipientGets: formatAmount(recipientGets, currency),
    };
  });

  return (
    <section
      id="compare"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="display-mixed text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
            More {unit} per dollar.
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            The amount a recipient receives when you send{" "}
            <span className="font-semibold text-foreground tabular">$1,000</span>,
            calculated using live rates.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-medium">
              Recipient currency
            </span>
            <CurrencySelector value={currency} onChange={setCurrency} size="md" />
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block w-full max-w-5xl">
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
                          row.monochromeInDark
                            ? "dark:brightness-0 dark:invert"
                            : ""
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
        <div className="md:hidden w-full max-w-md space-y-3 text-left">
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
                      row.monochromeInDark
                        ? "dark:brightness-0 dark:invert"
                        : ""
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

        {lastUpdated && (
          <p className="mt-8 text-xs text-muted-foreground tabular">
            Rates updated{" "}
            {lastUpdated.toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        )}
      </div>
    </section>
  );
}
