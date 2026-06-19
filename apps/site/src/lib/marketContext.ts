import "server-only";

import { headers } from "next/headers";
import {
  advertorialMarkets,
  type AdvertorialMarketKey
} from "@/lib/advertorialMarkets";

export type MarketCurrencyCode = "USD" | "GBP" | "AUD" | "CAD";

export type MarketRates = {
  GBP: 1;
  USD: number;
  AUD: number;
  CAD: number;
  asOf: string;
  source: "live" | "fallback";
};

export type PageMarketContext = {
  marketKey: AdvertorialMarketKey;
  updatedDate: string;
  rates: MarketRates;
};

export type MarketContextProps = {
  context: PageMarketContext;
};

const FALLBACK_RATES: MarketRates = {
  GBP: 1,
  USD: 1.34,
  AUD: 1.9001,
  CAD: 1.8788,
  asOf: "2026-06-18",
  source: "fallback"
};

const MARKET_TIME_ZONES: Record<AdvertorialMarketKey, string> = {
  global: "UTC",
  us: "America/New_York",
  uk: "Europe/London",
  au: "Australia/Sydney",
  ca: "America/Toronto"
};

type FrankfurterRate = {
  date?: string;
  base?: string;
  quote?: string;
  rate?: number;
};

function marketFromCountry(country: string | null): AdvertorialMarketKey {
  switch (country?.trim().toUpperCase()) {
    case "AU":
      return "au";
    case "CA":
      return "ca";
    case "US":
      return "us";
    case "GB":
    case "UK":
      return "uk";
    default:
      return "global";
  }
}

async function getRates(): Promise<MarketRates> {
  try {
    const response = await fetch(
      "https://api.frankfurter.dev/v2/rates?base=GBP&quotes=USD,AUD,CAD",
      {
        next: { revalidate: 86_400 },
        signal: AbortSignal.timeout(2_500)
      }
    );

    if (!response.ok) return FALLBACK_RATES;

    const rows = (await response.json()) as FrankfurterRate[];
    const aud = rows.find((row) => row.quote === "AUD");
    const cad = rows.find((row) => row.quote === "CAD");
    const usd = rows.find((row) => row.quote === "USD");

    if (
      typeof usd?.rate !== "number" ||
      typeof aud?.rate !== "number" ||
      typeof cad?.rate !== "number" ||
      !Number.isFinite(usd.rate) ||
      !Number.isFinite(aud.rate) ||
      !Number.isFinite(cad.rate)
    ) {
      return FALLBACK_RATES;
    }

    return {
      GBP: 1,
      USD: usd.rate,
      AUD: aud.rate,
      CAD: cad.rate,
      asOf: aud.date ?? cad.date ?? FALLBACK_RATES.asOf,
      source: "live"
    };
  } catch {
    return FALLBACK_RATES;
  }
}

function formatUpdatedDate(marketKey: AdvertorialMarketKey) {
  const market = advertorialMarkets[marketKey];
  return new Intl.DateTimeFormat(market.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: MARKET_TIME_ZONES[marketKey]
  }).format(new Date());
}

export async function getRequestPageContext(
  explicitMarket?: AdvertorialMarketKey
): Promise<PageMarketContext> {
  const requestHeaders = await headers();
  const country =
    requestHeaders.get("x-vercel-ip-country") ??
    requestHeaders.get("cf-ipcountry") ??
    requestHeaders.get("cloudfront-viewer-country");
  const marketKey = explicitMarket ?? marketFromCountry(country);
  const rates = await getRates();

  return {
    marketKey,
    updatedDate: formatUpdatedDate(marketKey),
    rates
  };
}
