"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Flag, type FlagCode } from "@/components/ui/flag";
import { CurrencySelector } from "@/components/ui/currency-selector";
import { HeroGlobe } from "@/components/ui/hero-globe";
import TextType from "@/components/TextType";
import { useUsdRate } from "@/lib/use-usd-rate";
import {
  CURRENCIES,
  DEFAULT_CURRENCY,
  formatAmount,
  formatRate,
  type CurrencyCode,
} from "@/lib/currencies";

const DEFAULT_USD = 100;

// Country names the headline types through. Drop the leading article so the
// short form reads well after "to" ("the Philippines" → "Philippines"); the
// trailing comma is part of the typed string so it animates as one unit.
const DESTINATIONS = CURRENCIES.map(
  (c) => `${c.destination.replace(/^the /, "")},`,
);

// Supported corridors shown as a compact flag strip under the CTAs.
const COUNTRIES = CURRENCIES.map((c) => ({
  code: c.code,
  flag: c.country as FlagCode,
  name: c.destination.replace(/^the /, ""),
}));

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

  const sendAmount = parseFloat(amountInput) || 0;
  const recipientGets = rate ? sendAmount * rate : 0;
  const formattedReceive = rate ? formatAmount(recipientGets, currency) : null;
  const formattedRate = rate ? formatRate(rate, currency) : null;

  return (
    <section
      id="home"
      className="relative min-h-[70svh] overflow-hidden brand-mesh"
    >
      {/* Animated globe motif — we send money worldwide. Sits behind the
          content, auto-rotating, anchored to the upper-right. */}
      <HeroGlobe className="-top-10 right-[-18%] h-[480px] w-[480px] max-w-[90vw] sm:right-[-8%] md:h-[680px] md:w-[680px]" />

      <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-12 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: editorial headline */}
          <div className="lg:col-span-7 fade-up" style={{ animationDelay: "80ms" }}>
            {/* Announcement pill — highlights UPI payouts, our newest India
                capability. Anchors to the receive card so it's discoverable. */}
            <div className="animated-border mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-foreground">
              <span className="rounded-full bg-brand/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                New
              </span>
              Pay to any
              <Image
                src="/upi.png"
                alt="UPI"
                width={40}
                height={20}
                className="h-3.5 w-auto"
              />
              ID in India
            </div>

            <h1 className="display-mixed text-[clamp(2rem,5.5vw,4rem)] text-foreground">
              <span className="font-semibold">Send money</span>
              <br />
              <span className="font-light italic text-muted-foreground">
                to{" "}
                <TextType
                  as="span"
                  text={DESTINATIONS}
                  className="text-foreground"
                  typingSpeed={90}
                  deletingSpeed={45}
                  pauseDuration={1800}
                  cursorClassName="text-brand"
                />
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
              <Button size="lg" variant="brand" asChild>
                <a href="https://app.dattaremit.com/sign-up">
                  Open an account
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            {/* Supported corridors — compact strip so the standalone section
                isn't needed. Direction matters: we only send *from* the US, and
                the listed countries are where money is *received*, so the strip
                is framed "From US → To …" rather than a flat country list. */}
            <div className="mt-10">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Where you can send money
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {/* Sender — the US is the only origin today. */}
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-3 py-1.5 text-sm font-medium text-foreground">
                  <Flag code="us" className="size-5 ring-1 ring-border" />
                  From the US
                </span>
                <ArrowUpRight className="size-4 rotate-45 text-muted-foreground" />
                {/* Recipients — these countries can only receive. */}
                <ul className="flex flex-wrap gap-2">
                  {COUNTRIES.map((country) => (
                    <li key={country.code}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/50">
                        <Flag
                          code={country.flag}
                          className="size-5 ring-1 ring-border"
                        />
                        {country.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right: transfer preview card */}
          <div
            className="lg:col-span-5 fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div className="relative rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl">
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

                {/* Payout destination — India can land in a bank account or any
                    UPI ID; other corridors are bank-account only today. */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  {currency === "INR" ? (
                    <>
                      <span>To their bank account or any</span>
                      <Image
                        src="/upi.png"
                        alt="UPI"
                        width={40}
                        height={20}
                        className="h-3.5 w-auto"
                      />
                      <span>ID</span>
                    </>
                  ) : (
                    <span>Straight to their local bank account</span>
                  )}
                </div>
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

          </div>
        </div>
      </div>
    </section>
  );
}
