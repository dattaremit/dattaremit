"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, Clock4 } from "lucide-react";

const SAMPLE_USD = 1000;

function formatINR(amount: number, opts?: { withDecimals?: boolean }) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: opts?.withDecimals ? 2 : 0,
    maximumFractionDigits: opts?.withDecimals ? 2 : 0,
  }).format(amount);
}

export function HeroSection() {
  const [rate, setRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRate = useCallback(async () => {
    try {
      const res = await fetch("/api/exchange-rate?from=USD", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      if (typeof data.rate === "number" && Number.isFinite(data.rate)) {
        setRate(data.rate);
      }
    } catch {
      // Leave rate null; UI shows shimmer.
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRate();
    const interval = setInterval(fetchRate, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchRate]);

  const recipientGets = rate ? SAMPLE_USD * rate : 0;
  const formattedInr = rate ? formatINR(recipientGets) : null;
  const formattedRate = rate ? rate.toFixed(2) : null;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden grain brand-mesh"
    >
      {/* Type-grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10">
        {/* Eyebrow row */}
        <div className="fade-up flex flex-wrap items-center gap-3 mb-10 md:mb-14">
          <span className="eyebrow">
            <span className="tabular">01</span>
            <span className="h-px w-6 bg-foreground/30" />
            US → India corridor
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-deep)] opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[var(--brand-deep)]" />
            </span>
            Early access open
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — editorial headline */}
          <div className="lg:col-span-7 fade-up" style={{ animationDelay: "80ms" }}>
            <h1 className="display-mixed text-[clamp(2.5rem,7vw,5.5rem)] text-foreground">
              <span className="font-semibold">Send money</span>
              <br />
              <span className="font-light italic text-muted-foreground">
                to India,
              </span>
              <br />
              <span className="font-semibold">
                without the{" "}
                <span className="brand-underline">noise</span>.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Link your US bank once, verify your identity, and send USD that
              lands as rupees in an Indian bank account within minutes.
              Transparent rates, no hidden mark-ups, and bank-grade encryption
              on every transfer.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button size="xl" variant="brand" asChild>
                <a href="#contact">
                  Open an account
                  <ArrowUpRight className="size-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-10 pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-[var(--brand-deep)]" />
                AES-256 field encryption
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock4 className="size-4 text-[var(--brand-deep)]" />
                Settles in minutes
              </span>
              <span className="inline-flex items-center gap-2">
                <PartnerIcon className="size-4 text-[var(--brand-deep)]" />
                Regulated partner: Zynk Labs
              </span>
            </div>
          </div>

          {/* Right — transfer preview card */}
          <div
            className="lg:col-span-5 fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative">
              {/* Background glow */}
              <div
                aria-hidden
                className="absolute -inset-8 bg-gradient-to-br from-[var(--brand)]/25 via-transparent to-[var(--brand-deep)]/10 blur-3xl rounded-full"
              />

              {/* Stacked floating slip */}
              <div
                aria-hidden
                className="hidden sm:block absolute -top-3 left-6 right-6 h-6 rounded-t-3xl bg-card/70 border border-border backdrop-blur-sm shadow-lg"
              />

              <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(20,16,10,0.35)] overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-border/70">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[var(--brand)]" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                    <span className="size-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    New transfer
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
                  <div className="flex items-baseline gap-2 tabular">
                    <span className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                      1,000
                    </span>
                    <span className="text-xl md:text-2xl font-light text-muted-foreground">
                      .00
                    </span>
                  </div>
                </div>

                {/* Divider with rate chip */}
                <div className="relative px-5 md:px-6">
                  <div className="absolute inset-x-5 md:inset-x-6 top-1/2 -translate-y-1/2 h-px bg-border" />
                  <div className="relative flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1.5 text-[11px] font-medium tabular">
                      <ExchangeIcon className="size-3 text-[var(--brand-deep)]" />
                      {isLoading || !formattedRate ? (
                        <span className="shimmer inline-block w-28 h-2.5 rounded-full" />
                      ) : (
                        <>
                          <span className="size-1.5 rounded-full bg-[var(--brand-deep)] animate-pulse" />
                          1 USD = {formattedRate} INR
                        </>
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium">
                      <Flag code="in" /> INR
                    </span>
                  </div>
                  {isLoading || !formattedInr ? (
                    <span className="shimmer inline-block h-10 w-48 rounded-lg" />
                  ) : (
                    <div className="flex items-baseline gap-2 tabular">
                      <span className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        {formattedInr}
                      </span>
                    </div>
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
                      Via
                    </div>
                    <div className="mt-0.5 font-semibold">UPI / IMPS</div>
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
      </div>
    </section>
  );
}

function Flag({ code }: { code: "us" | "in" }) {
  if (code === "us") {
    return (
      <span
        aria-hidden
        className="size-4 rounded-full overflow-hidden inline-block ring-1 ring-border relative bg-[#bf0a30]"
      >
        <span className="absolute inset-x-0 top-0 h-1/2 bg-white" />
        <span className="absolute left-0 top-0 w-1/2 h-1/2 bg-[#002868]" />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="size-4 rounded-full overflow-hidden inline-block ring-1 ring-border relative flex flex-col"
    >
      <span className="flex-1 bg-[#ff9933]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#138808]" />
    </span>
  );
}

function ExchangeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M17 3 21 7l-4 4" />
      <path d="M3 7h18" />
      <path d="M7 21 3 17l4-4" />
      <path d="M21 17H3" />
    </svg>
  );
}

function PartnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M12 14v2" />
    </svg>
  );
}
