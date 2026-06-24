// Single source of truth for the corridors the marketing site can preview.
// Keep this list in sync with the server's SUPPORTED_CURRENCIES.
export type CurrencyCode = "INR" | "PHP" | "VND" | "IDR" | "NGN";

export interface Currency {
  code: CurrencyCode;
  /** ISO 3166-1 alpha-2 country code, used to pick the flag. */
  country: "in" | "ph" | "vn" | "id" | "ng";
  /** Short country name, e.g. for the "Send money to X" headline. */
  destination: string;
  /** Plural subunit name, e.g. for "More rupees per dollar". */
  unit: string;
  /** BCP-47 locale used to format amounts and the rate for this corridor. */
  locale: string;
}

export const CURRENCIES: Currency[] = [
  { code: "INR", country: "in", destination: "India", unit: "rupees", locale: "en-IN" },
  { code: "PHP", country: "ph", destination: "the Philippines", unit: "pesos", locale: "en-PH" },
  { code: "VND", country: "vn", destination: "Vietnam", unit: "dong", locale: "vi-VN" },
  { code: "IDR", country: "id", destination: "Indonesia", unit: "rupiah", locale: "id-ID" },
  { code: "NGN", country: "ng", destination: "Nigeria", unit: "naira", locale: "en-NG" },
];

export const DEFAULT_CURRENCY: CurrencyCode = "INR";

export function getCurrency(code: CurrencyCode): Currency {
  return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
}

/** Format a recipient amount in its local currency (no fractional units). */
export function formatAmount(amount: number, code: CurrencyCode): string {
  const { locale } = getCurrency(code);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format the "1 USD = X" rate. High-magnitude currencies (VND, IDR) read better
 * as grouped whole numbers; near-parity ones (INR, PHP, NGN) keep two decimals.
 */
export function formatRate(rate: number, code: CurrencyCode): string {
  const { locale } = getCurrency(code);
  const fractionDigits = rate >= 1000 ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(rate);
}

// Per-corridor competitor spreads/fees for the comparison table. DattaRemit is
// always the 1.0 baseline (best rate, no fee); the rest are indicative figures
// per corridor — tune as you gather real quotes. Keyed by provider id.
export type CompetitorId = "dattaremit" | "wise" | "remitly" | "skrill" | "xoom";

export const COMPETITOR_RATES: Record<
  CurrencyCode,
  Record<CompetitorId, { rateMultiplier: number; fee: number }>
> = {
  INR: {
    dattaremit: { rateMultiplier: 1.0, fee: 0 },
    wise: { rateMultiplier: 0.992, fee: 6.15 },
    remitly: { rateMultiplier: 0.988, fee: 0 },
    skrill: { rateMultiplier: 0.95, fee: 0 },
    xoom: { rateMultiplier: 0.975, fee: 2.99 },
  },
  PHP: {
    dattaremit: { rateMultiplier: 1.0, fee: 0 },
    wise: { rateMultiplier: 0.991, fee: 5.5 },
    remitly: { rateMultiplier: 0.985, fee: 1.99 },
    skrill: { rateMultiplier: 0.96, fee: 0 },
    xoom: { rateMultiplier: 0.978, fee: 2.99 },
  },
  VND: {
    dattaremit: { rateMultiplier: 1.0, fee: 0 },
    wise: { rateMultiplier: 0.99, fee: 5.0 },
    remitly: { rateMultiplier: 0.983, fee: 2.99 },
    skrill: { rateMultiplier: 0.955, fee: 0 },
    xoom: { rateMultiplier: 0.972, fee: 3.99 },
  },
  IDR: {
    dattaremit: { rateMultiplier: 1.0, fee: 0 },
    wise: { rateMultiplier: 0.99, fee: 5.2 },
    remitly: { rateMultiplier: 0.984, fee: 1.99 },
    skrill: { rateMultiplier: 0.958, fee: 0 },
    xoom: { rateMultiplier: 0.974, fee: 2.99 },
  },
  NGN: {
    dattaremit: { rateMultiplier: 1.0, fee: 0 },
    wise: { rateMultiplier: 0.985, fee: 4.5 },
    remitly: { rateMultiplier: 0.978, fee: 2.99 },
    skrill: { rateMultiplier: 0.95, fee: 0 },
    xoom: { rateMultiplier: 0.97, fee: 3.99 },
  },
};
