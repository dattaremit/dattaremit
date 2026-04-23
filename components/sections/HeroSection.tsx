"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, Clock4 } from "lucide-react";
import { HeroGrid } from "@/components/hero-grid";

const SAMPLE_USD = 1000;

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
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
      className="relative min-h-[90svh] overflow-hidden brand-mesh"
    >
      <HeroGrid />

      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: editorial headline */}
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
              Verify your identity, link your US bank once, and send USD that
              lands as rupees in an Indian bank account within minutes.
              Transparent rates and bank-grade encryption on every transfer.
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
            <div className="mt-10 pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-deep" />
                AES-256 field encryption
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock4 className="size-4 text-brand-deep" />
                Settles in minutes
              </span>
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
                  <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-medium tabular">
                    {isLoading || !formattedRate ? (
                      <span className="shimmer inline-block w-28 h-2.5 rounded-full" />
                    ) : (
                      <>1 USD = {formattedRate} INR</>
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
                  <span className="block text-4xl md:text-5xl font-semibold tracking-tight tabular text-foreground">
                    {formattedInr}
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
      className="size-4 rounded-full overflow-hidden inline-block ring-1 ring-border relative flex-col"
    >
      <span className="flex-1 bg-[#ff9933]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#138808]" />
    </span>
  );
}
