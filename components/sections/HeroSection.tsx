"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Flag } from "@/components/ui/flag";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { useUsdRate } from "@/lib/use-usd-rate";
import {
  DEFAULT_CURRENCY,
  formatAmount,
  formatRate,
  getCurrency,
  type CurrencyCode,
} from "@/lib/currencies";

const DEFAULT_USD = 1000;

export function HeroSection() {
  const [currency, setCurrency] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const { rate, isLoading } = useUsdRate(currency);
  const [amountInput, setAmountInput] = useState(String(DEFAULT_USD));
  const [isAmountFocused, setIsAmountFocused] = useState(false);

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Allow only digits and a single decimal point (max 2 decimals).
      const sanitized = e.target.value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*)\./g, "$1")
        .replace(/^(\d*\.\d{0,2}).*$/, "$1");
      setAmountInput(sanitized);
    },
    [],
  );

  const destination = getCurrency(currency).destination;
  const sendAmount = parseFloat(amountInput) || 0;
  const recipientGets = rate ? sendAmount * rate : 0;
  const formattedReceive = rate ? formatAmount(recipientGets, currency) : null;
  const formattedRate = rate ? formatRate(rate, currency) : null;

  return (
    <section
      id="home"
      className="relative min-h-[70svh] overflow-hidden brand-mesh"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-12 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: editorial headline */}
          <div className="lg:col-span-7 fade-up" style={{ animationDelay: "80ms" }}>
            <h1 className="display-mixed text-[clamp(2.5rem,7vw,5.5rem)] text-foreground">
              <span className="font-semibold">Send money</span>
              <br />
              <span className="font-light italic text-muted-foreground">
                to {destination},
              </span>
              <br />
              <span className="font-semibold bg-gradient-to-r from-brand-deep via-brand to-mint bg-clip-text text-transparent">
                in minutes.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Verify your identity, link your US bank once, and send USD that
              lands in a local bank account within minutes. Transparent rates
              and bank-grade encryption on every transfer.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button size="xl" variant="brand" asChild>
                <a href="https://app.dattaremit.com/sign-up">
                  Open an account
                  <ArrowUpRight className="size-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

          </div>

          {/* Right: transfer preview card */}
          <div
            className="lg:col-span-5 fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-border/70">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  New transfer
                </span>
                <span className="text-[11px] font-medium text-muted-foreground">
                  Preview
                </span>
              </div>

              {/* You send */}
              <div className="px-5 md:px-6 py-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
                    You send
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium">
                    <Flag code="us" /> USD
                  </span>
                </div>
                <label className="group flex items-baseline gap-1.5 tabular cursor-text w-fit">
                  <span className="text-3xl md:text-4xl font-light text-muted-foreground">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amountInput}
                    onChange={handleAmountChange}
                    onFocus={() => setIsAmountFocused(true)}
                    onBlur={() => setIsAmountFocused(false)}
                    aria-label="Amount to send in USD"
                    placeholder="0"
                    size={1}
                    style={{ width: `${Math.max(amountInput.length, 1)}ch` }}
                    className={`min-w-[1ch] bg-transparent text-4xl md:text-5xl font-semibold tracking-tight text-foreground outline-none placeholder:text-muted-foreground/40 ${
                      isAmountFocused ? "caret-brand" : "caret-transparent"
                    }`}
                  />
                  {/* Blinking caret signals the field is editable. Hidden while
                      focused so it doesn't double up with the native caret. */}
                  <span
                    aria-hidden
                    className={`-ml-0.5 inline-block h-9 md:h-11 w-[2px] rounded-full bg-brand ${
                      isAmountFocused ? "opacity-0" : "caret-blink"
                    }`}
                  />
                </label>
              </div>

              {/* Divider with rate chip */}
              <div className="relative px-5 md:px-6">
                <div className="absolute inset-x-5 md:inset-x-6 top-1/2 -translate-y-1/2 h-px bg-border" />
                <div className="relative flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-medium tabular">
                    {isLoading || !formattedRate ? (
                      <span className="shimmer inline-block w-28 h-2.5 rounded-full" />
                    ) : (
                      <>1 USD = {formattedRate} {currency}</>
                    )}
                  </span>
                </div>
              </div>

              {/* They receive */}
              <div className="px-5 md:px-6 py-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
                    They receive
                  </span>
                  <CurrencySelector value={currency} onChange={setCurrency} />
                </div>
                {isLoading || !formattedReceive ? (
                  <span className="shimmer inline-block h-10 w-48 rounded-lg" />
                ) : (
                  <span className="block text-4xl md:text-5xl font-semibold tracking-tight tabular text-foreground">
                    {formattedReceive}
                  </span>
                )}
              </div>

              {/* Footer row */}
              <div className="grid grid-cols-3 border-t border-border/70 divide-x divide-border/70 text-[11px]">
                <div className="px-4 py-3">
                  <div className="text-muted-foreground uppercase tracking-[0.14em] font-medium text-[10px]">
                    Fee
                  </div>
                  <div className="mt-0.5 font-semibold tabular">$0</div>
                </div>
                <div className="px-4 py-3">
                  <div className="text-muted-foreground uppercase tracking-[0.14em] font-medium text-[10px]">
                    Arrives
                  </div>
                  <div className="mt-0.5 font-semibold">In minutes</div>
                </div>
                <div className="px-4 py-3">
                  <div className="text-muted-foreground uppercase tracking-[0.14em] font-medium text-[10px]">
                    Secure
                  </div>
                  <div className="mt-0.5 font-semibold">Bank-grade</div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Indicative preview using live mid-market rates. Exact rate and
              fees shown before you confirm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
