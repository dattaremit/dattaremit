"use client";

import { Flag, type FlagCode } from "@/components/ui/flag";
import { CURRENCIES } from "@/lib/currencies";

// Strip the leading article so each card reads as a plain country name
// ("the Philippines" → "Philippines").
const COUNTRIES = CURRENCIES.map((c) => ({
  code: c.code,
  flag: c.country as FlagCode,
  name: c.destination.replace(/^the /, ""),
  unit: c.unit,
}));

export function SupportedCountriesSection() {
  return (
    <section
      id="supported-countries"
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="display-mixed text-[clamp(1.6rem,4vw,2.5rem)] font-semibold tracking-tight text-foreground">
            Supported{" "}
            <span className="font-semibold bg-gradient-to-r from-brand-deep via-brand to-mint bg-clip-text text-transparent">
              countries
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Send USD from your US bank to a local account in any of these
            corridors. More are on the way — don&apos;t see yours yet? It&apos;s
            likely coming soon.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {COUNTRIES.map((country, i) => (
            <li
              key={country.code}
              className="fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="group h-full rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 transition-colors hover:border-brand/50">
                <Flag
                  code={country.flag}
                  className="size-10 ring-1 ring-border transition-transform group-hover:scale-105"
                />
                <div className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {country.name}
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium tabular">{country.code}</span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="capitalize">{country.unit}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
