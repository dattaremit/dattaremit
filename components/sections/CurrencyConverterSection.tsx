"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr", flag: "🇨🇭" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
];

export function CurrencyConverterSection() {
  const [amount, setAmount] = useState<string>("1000");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchExchangeRate = useCallback(async (currencyCode: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/exchange-rate?from=${currencyCode}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setExchangeRate(typeof data.rate === "number" ? data.rate : null);
    } catch {
      setExchangeRate(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate(selectedCurrency.code);
    const interval = setInterval(
      () => fetchExchangeRate(selectedCurrency.code),
      15 * 60 * 1000,
    );
    return () => clearInterval(interval);
  }, [selectedCurrency, fetchExchangeRate]);

  const convertedAmount = exchangeRate
    ? (parseFloat(amount) || 0) * exchangeRate
    : 0;

  const formatINR = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <section
      id="converter"
      className="relative py-20 md:py-28 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="eyebrow mb-5">
              <span className="tabular">02</span>
              <span className="h-px w-6 bg-foreground/30" />
              Live rates
            </div>
            <h2 className="display-mixed text-[clamp(2rem,5vw,3.75rem)] text-foreground">
              <span className="font-semibold">
                Live mid-market rates,
              </span>{" "}
              <span className="font-light italic text-muted-foreground">
                updated continuously.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
              Preview the rate at a glance. The exact rate and fees for your
              transfer are locked on the review screen before you confirm.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="brand" asChild>
                <a href="#contact">
                  Start sending
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right converter */}
          <div className="lg:col-span-6 order-1 lg:order-2 w-full">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 bg-gradient-to-br from-[var(--brand)]/15 to-transparent blur-3xl"
              />

              <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-5 sm:p-7 shadow-[0_30px_80px_-40px_rgba(20,16,10,0.3)]">
                {/* You send */}
                <div>
                  <label className="eyebrow block mb-3">You send</label>
                  <div className="flex items-center rounded-2xl border border-border bg-background/70 focus-within:border-[var(--brand-deep)] focus-within:ring-[var(--brand)]/30 focus-within:ring-[3px] transition-all">
                    <input
                      type="number"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 min-w-0 px-4 sm:px-5 py-4 sm:py-5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight bg-transparent outline-none text-foreground tabular [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />
                    <div className="relative shrink-0 pr-2" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 hover:border-foreground/30 transition-colors cursor-pointer"
                        aria-haspopup="listbox"
                        aria-expanded={isDropdownOpen}
                      >
                        <span className="text-base">{selectedCurrency.flag}</span>
                        <span className="font-semibold text-sm tracking-tight">
                          {selectedCurrency.code}
                        </span>
                        <ChevronDown
                          className={`size-3.5 text-muted-foreground transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-border bg-popover shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
                          <div className="max-h-72 overflow-y-auto py-1">
                            {currencies.map((currency) => (
                              <button
                                key={currency.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCurrency(currency);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-foreground/5 transition-colors text-left cursor-pointer ${
                                  selectedCurrency.code === currency.code
                                    ? "bg-[var(--brand)]/10"
                                    : ""
                                }`}
                              >
                                <span className="text-lg">{currency.flag}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm tracking-tight">
                                    {currency.code}
                                  </div>
                                  <div className="text-xs text-muted-foreground truncate">
                                    {currency.name}
                                  </div>
                                </div>
                                {selectedCurrency.code === currency.code && (
                                  <span className="size-1.5 rounded-full bg-[var(--brand-deep)]" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider with rate chip */}
                <div className="relative py-5">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border" />
                  <div className="relative flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1.5 text-[11px] font-medium tabular">
                      {exchangeRate && !isLoading ? (
                        <>
                          <span className="size-1.5 rounded-full bg-[var(--brand-deep)] animate-pulse" />
                          1 {selectedCurrency.code} = {exchangeRate.toFixed(4)} INR
                        </>
                      ) : (
                        <span className="shimmer inline-block w-32 h-2.5 rounded-full" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Recipient gets */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="eyebrow">Recipient gets</label>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium">
                      🇮🇳 INR
                    </span>
                  </div>
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-[var(--brand)]/8 to-transparent p-5 sm:p-6">
                    {isLoading ? (
                      <span className="shimmer inline-block h-10 w-48 rounded-lg" />
                    ) : (
                      <span className="block text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight tabular text-foreground break-all">
                        {formatINR(convertedAmount)}
                      </span>
                    )}
                    <p className="mt-3 text-[11px] text-muted-foreground">
                      Indicative rate. Final rate and fees shown at confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
