"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchExchangeRate = useCallback(async (currencyCode: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/exchange-rate?from=${currencyCode}`,
        { cache: "no-store" },
      );
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

  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleCurrencySelect = (currency: (typeof currencies)[0]) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };

  return (
    <section id="converter" className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-linear-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="text-foreground">Global finance for </span>
              <span className="text-primary">global Indians</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
              Secure, lightning fast transfers at guaranteed Google rates.
            </p>

            <Button size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#contact">
                Send Money
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Right Side - Currency Converter */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-2xl sm:rounded-3xl blur-2xl" />

              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                {/* Amount Input with Currency Selector */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    You send
                  </label>
                  <div className="relative flex items-center bg-background border border-border rounded-lg sm:rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 min-w-0 px-3 sm:px-4 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-semibold bg-transparent outline-none text-foreground rounded-l-lg sm:rounded-l-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0"
                      min="0"
                    />

                    {/* Currency Selector */}
                    <div className="relative shrink-0" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 bg-muted/50 hover:bg-muted transition-colors border-l border-border rounded-r-lg sm:rounded-r-xl cursor-pointer"
                      >
                        <span className="text-lg sm:text-xl">
                          {selectedCurrency.flag}
                        </span>
                        <span className="font-semibold text-foreground text-sm sm:text-base">
                          {selectedCurrency.code}
                        </span>
                        <ChevronDown
                          className={`size-3 sm:size-4 text-muted-foreground transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-card border border-border rounded-lg sm:rounded-xl shadow-2xl z-100 animate-in fade-in-0 zoom-in-95 duration-200">
                          <div className="max-h-60 sm:max-h-70 overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                            {currencies.map((currency) => (
                              <button
                                key={currency.code}
                                type="button"
                                onClick={() => handleCurrencySelect(currency)}
                                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-muted/70 transition-colors text-left cursor-pointer ${
                                  selectedCurrency.code === currency.code
                                    ? "bg-primary/10 text-primary"
                                    : ""
                                }`}
                              >
                                <span className="text-lg sm:text-xl">
                                  {currency.flag}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-foreground text-sm sm:text-base">
                                    {currency.code}
                                  </div>
                                  <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
                                    {currency.name}
                                  </div>
                                </div>
                                {selectedCurrency.code === currency.code && (
                                  <div className="size-1.5 sm:size-2 rounded-full bg-primary shrink-0" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 py-2.5 px-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm sm:text-base text-primary font-bold">
                      Zero fee for every transfer
                    </p>
                  </div>
                </div>

                {/* Converted Amount Display */}
                <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Recipient gets
                    </span>
                    <span className="text-lg sm:text-xl">🇮🇳</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    {isLoading ? (
                      <div className="h-8 sm:h-10 w-36 sm:w-48 bg-muted/50 animate-pulse rounded" />
                    ) : (
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground break-all">
                        {formatINR(convertedAmount)}
                      </span>
                    )}
                  </div>

                  {exchangeRate && !isLoading && (
                    <div className="mt-3 pt-3 border-t border-primary/20">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                        <span className="text-muted-foreground">
                          Exchange rate
                        </span>
                        <span className="font-medium text-primary">
                          1 {selectedCurrency.code} = {exchangeRate.toFixed(2)}{" "}
                          INR
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
