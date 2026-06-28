"use client";

import React from "react";
import {
  advertorialMarkets,
  type AdvertorialMarketKey
} from "@/lib/advertorialMarkets";
import type {
  MarketCurrencyCode,
  PageMarketContext
} from "@/lib/marketContext";

const POUND_PRICE_RE = /\u00C2?\u00A3\s?(\d[\d,]*(?:\.\d+)?)(\+)?/g;
const BUUDY_HOST_RE = /(^|\.)buudy\.(com|co\.uk)$/i;

function exactPrice(
  amount: number,
  marketKey: Exclude<AdvertorialMarketKey, "uk">
) {
  const prices = advertorialMarkets[marketKey].productPrices;
  const exactPrices = new Map<number, string>([
    [179, prices.buudy.price],
    [449, prices.buudy.originalPrice ?? prices.buudy.price],
    [399.99, prices.currentbody.price],
    [400, prices.currentbody.roundedPrice ?? prices.currentbody.price],
    [40, prices.currentbody.restockingFee ?? prices.currentbody.price],
    [679.99, prices.currentbody.fullCoveragePrice ?? prices.currentbody.price],
    [680, prices.currentbody.fullCoveragePrice ?? prices.currentbody.price],
    [348, prices.omnilux.price],
    [696, prices.omnilux.fullCoveragePrice ?? prices.omnilux.price],
    [269.99, prices.shark.price],
    [455, prices.drdenis.price]
  ]);

  if (marketKey === "ca" && amount === 579) return "$799.99";
  return exactPrices.get(amount);
}

function formatConvertedPrice(
  amount: number,
  currency: Exclude<MarketCurrencyCode, "GBP">,
  rate: number,
  plus: boolean
) {
  const prefix = currency === "AUD" ? "A$" : currency === "CAD" ? "C$" : "$";
  const converted = Math.round(amount * rate).toLocaleString(
    currency === "AUD" ? "en-AU" : currency === "CAD" ? "en-CA" : "en-US",
    { maximumFractionDigits: 0 }
  );
  return `~${prefix}${converted}${plus ? "+" : ""}`;
}

export function localizeMarketText(
  text: string,
  context: PageMarketContext
) {
  if (context.marketKey === "uk") return text;

  const marketKey = context.marketKey as Exclude<AdvertorialMarketKey, "uk">;
  const currency = advertorialMarkets[marketKey]
    .currencyCode as Exclude<MarketCurrencyCode, "GBP">;
  const rate = context.rates[currency];

  return text.replace(
    POUND_PRICE_RE,
    (_match, rawAmount: string, plusMarker: string | undefined) => {
      const amount = Number(rawAmount.replace(/,/g, ""));
      const exact = exactPrice(amount, marketKey);
      if (exact) return `${exact}${plusMarker ? "+" : ""}`;
      return formatConvertedPrice(amount, currency, rate, Boolean(plusMarker));
    }
  );
}

export function localizeBuudyHref(
  href: string,
  context: PageMarketContext
) {
  try {
    const url = new URL(href);
    if (!BUUDY_HOST_RE.test(url.hostname)) return href;

    const marketUrl = new URL(
      advertorialMarkets[context.marketKey].buudyUrl
    );
    marketUrl.search = url.search;
    marketUrl.hash = url.hash;
    return marketUrl.href;
  } catch {
    return href;
  }
}

function localizeValue(
  value: unknown,
  context: PageMarketContext,
  propName?: string
): unknown {
  if (typeof value === "string") {
    if (propName === "href") return localizeBuudyHref(value, context);
    if (propName === "className" || propName === "src" || propName === "id") {
      return value;
    }
    return localizeMarketText(value, context);
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, context));
  }

  if (React.isValidElement(value)) {
    return localizeNode(value, context);
  }

  if (value && typeof value === "object" && propName === "dangerouslySetInnerHTML") {
    const html = value as { __html?: unknown };
    return typeof html.__html === "string"
      ? { ...html, __html: localizeMarketText(html.__html, context) }
      : value;
  }

  return value;
}

function localizeNode(
  node: React.ReactNode,
  context: PageMarketContext
): React.ReactNode {
  if (typeof node === "string") return localizeMarketText(node, context);
  if (Array.isArray(node)) {
    return node.map((child) => localizeNode(child, context));
  }
  if (!React.isValidElement<Record<string, unknown>>(node)) return node;

  const nextProps = Object.fromEntries(
    Object.entries(node.props).map(([key, value]) => [
      key,
      key === "children"
        ? localizeNode(value as React.ReactNode, context)
        : localizeValue(value, context, key)
    ])
  );

  return React.cloneElement(node, nextProps);
}

export function MarketLocalizedContent({
  context,
  children
}: {
  context: PageMarketContext;
  children: React.ReactNode;
}) {
  return <>{localizeNode(children, context)}</>;
}
