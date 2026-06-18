export type AdvertorialMarketKey = "uk" | "au" | "ca";

export type ProductPriceKey =
  | "buudy"
  | "currentbody"
  | "omnilux"
  | "shark"
  | "drdenis";

export type MarketProductPrice = {
  price: string;
  originalPrice?: string;
  schemaPrice?: string;
  roundedPrice?: string;
  restockingFee?: string;
  fullCoveragePrice?: string;
  premiumPriceLabel?: string;
};

export type AdvertorialMarket = {
  key: AdvertorialMarketKey;
  route: string;
  locale: string;
  languageName: string;
  countryName: string;
  countryAdjective: string;
  buyerLabel: string;
  marketLabel: string;
  primaryGuideLabel: string;
  titleCountry: string;
  priceRange: string;
  currencyCode: "GBP" | "AUD" | "CAD";
  buudyUrl: string;
  productPrices: Record<ProductPriceKey, MarketProductPrice>;
  giftValues: {
    total: string;
    travelBox: string;
    ledTorch: string;
    skincareGuide: string;
  };
  popupOffer: string;
};

const legacyPound = String.fromCharCode(163);

export const advertorialMarkets: Record<
  AdvertorialMarketKey,
  AdvertorialMarket
> = {
  uk: {
    key: "uk",
    route: "/best-led-face-mask-uk-2026",
    locale: "en-GB",
    languageName: "en-GB",
    countryName: "United Kingdom",
    countryAdjective: "UK",
    buyerLabel: "UK buyers",
    marketLabel: "UK market",
    primaryGuideLabel: "Best LED Face Mask UK 2026",
    titleCountry: "the UK",
    priceRange: `${legacyPound}100 to ${legacyPound}600+`,
    currencyCode: "GBP",
    buudyUrl: "https://buudy.co.uk/products/buudy-led-mask",
    productPrices: {
      buudy: {
        price: `${legacyPound}179`,
        originalPrice: `${legacyPound}449`,
        schemaPrice: "179.00",
        roundedPrice: `${legacyPound}179`,
      },
      currentbody: {
        price: `${legacyPound}399.99`,
        roundedPrice: `${legacyPound}400`,
        restockingFee: `${legacyPound}40`,
        fullCoveragePrice: `${legacyPound}679.99`,
      },
      omnilux: {
        price: `${legacyPound}348`,
        fullCoveragePrice: `${legacyPound}696`,
      },
      shark: {
        price: `${legacyPound}299.99`,
      },
      drdenis: {
        price: `${legacyPound}455`,
        premiumPriceLabel: `nearly ${legacyPound}500`,
      },
    },
    giftValues: {
      total: `${legacyPound}128`,
      travelBox: `${legacyPound}39`,
      ledTorch: `${legacyPound}70`,
      skincareGuide: `${legacyPound}19`,
    },
    popupOffer: "GBP 179 instead of GBP 449",
  },
  au: {
    key: "au",
    route: "/best-led-face-mask-au-2026",
    locale: "en-AU",
    languageName: "en-AU",
    countryName: "Australia",
    countryAdjective: "Australian",
    buyerLabel: "Australian buyers",
    marketLabel: "Australian market",
    primaryGuideLabel: "Best LED Face Mask Australia 2026",
    titleCountry: "Australia",
    priceRange: "$100 to $700+",
    currencyCode: "AUD",
    buudyUrl: "https://au.buudy.com/products/buudy-led-mask",
    productPrices: {
      buudy: {
        price: "$299",
        originalPrice: "$498",
        schemaPrice: "299.00",
        roundedPrice: "$299",
      },
      currentbody: {
        price: "$679.99",
        roundedPrice: "$680",
        restockingFee: "$68",
        fullCoveragePrice: "$679.99",
      },
      omnilux: {
        price: "$460",
        fullCoveragePrice: "$920",
      },
      shark: {
        price: "$699.99",
      },
      drdenis: {
        price: "$706.50",
        premiumPriceLabel: "around $700",
      },
    },
    giftValues: {
      total: "$207",
      travelBox: "$39",
      ledTorch: "$149",
      skincareGuide: "$19",
    },
    popupOffer: "AUD 299 instead of AUD 498",
  },
  ca: {
    key: "ca",
    route: "/best-led-face-mask-ca-2026",
    locale: "en-CA",
    languageName: "en-CA",
    countryName: "Canada",
    countryAdjective: "Canadian",
    buyerLabel: "Canadian buyers",
    marketLabel: "Canadian market",
    primaryGuideLabel: "Best LED Face Mask Canada 2026",
    titleCountry: "Canada",
    priceRange: "$100 to $800+",
    currencyCode: "CAD",
    buudyUrl: "https://ca.buudy.com/products/buudy-led-mask",
    productPrices: {
      buudy: {
        price: "$279",
        originalPrice: "$559",
        schemaPrice: "279.00",
        roundedPrice: "$279",
      },
      currentbody: {
        price: "$639.99",
        roundedPrice: "$640",
        restockingFee: "$64",
        fullCoveragePrice: "$639.99",
      },
      omnilux: {
        price: "$551.99",
        fullCoveragePrice: "$1,104",
      },
      shark: {
        price: "$499.99",
      },
      drdenis: {
        price: "$615",
        premiumPriceLabel: "more than $600",
      },
    },
    giftValues: {
      total: "$128",
      travelBox: "$39",
      ledTorch: "$70",
      skincareGuide: "$19",
    },
    popupOffer: "CAD 279 instead of CAD 559",
  },
};

export const advertorialMarketRoutes = Object.values(advertorialMarkets).map(
  (market) => market.route,
);

export function getAdvertorialMarket(key: AdvertorialMarketKey = "uk") {
  return advertorialMarkets[key];
}

export function getAdvertorialMarketByRoute(route: string) {
  return (
    Object.values(advertorialMarkets).find(
      (market) => market.route === route,
    ) ?? advertorialMarkets.uk
  );
}
