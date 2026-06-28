import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { advertorialMarkets, type AdvertorialMarketKey } from "@/lib/advertorialMarkets";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

const siteUrl = SITE_URL;
const ogImage = `${siteUrl}/img/57-w.webp`;
const favicon = "https://img.thesitebase.net/10677/10677322/themes/17688355473bc9b44aac.png";
const robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const advertorialLanguages = {
  "x-default": `${siteUrl}/best-led-face-mask-2026`,
  en: `${siteUrl}/best-led-face-mask-2026`,
  "en-US": `${siteUrl}/best-led-face-mask-us-2026`,
  "en-GB": `${siteUrl}/best-led-face-mask-uk-2026`,
  "en-AU": `${siteUrl}/best-led-face-mask-au-2026`,
  "en-CA": `${siteUrl}/best-led-face-mask-ca-2026`
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: favicon
  },
  robots
};

export const defaultAdvertorialMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
  description:
    "Looking for the best LED face mask in the UK? Compare the best LED light therapy masks for wrinkles, red light therapy, at-home use, face and neck coverage, and overall value.",
  authors: [{ name: `${SITE_NAME} editorial team` }],
  keywords:
    "best led face mask, best led face mask uk, best led light therapy mask, best led mask for wrinkles, best red light therapy mask, best at home led face mask, best led light mask, best face led mask, best infrared face mask, top rated led face mask",
  icons: {
    icon: favicon
  },
  alternates: {
    canonical: "/best-led-face-mask-uk-2026",
    languages: {
      "en-GB": "/best-led-face-mask-uk-2026",
      "x-default": "/best-led-face-mask-uk-2026"
    }
  },
  robots,
  openGraph: {
    title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
    description:
      "Compare the best LED face masks in the UK for wrinkles, red light therapy, at-home use, comfort, coverage, and overall value.",
    type: "article",
    url: `${siteUrl}/best-led-face-mask-uk-2026`,
    siteName: SITE_NAME,
    images: [ogImage],
    publishedTime: "2026-06-12T00:00:00+01:00",
    modifiedTime: "2026-06-13T00:00:00+01:00"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
    description: "Compare the best LED face masks in the UK for wrinkles, acne, red light therapy, neck coverage, and value.",
    images: [ogImage]
  }
};

export function advertorialMetadata(pathname: string, marketKey: AdvertorialMarketKey = "global"): Metadata {
  const market = advertorialMarkets[marketKey];
  const region = {
    global: "",
    us: " USA",
    uk: " UK",
    au: " Australia",
    ca: " Canada"
  }[marketKey];
  const title = `Best LED Face Mask${region} (2026) | Expert Comparison`;
  const description = marketKey === "global"
    ? "Compare the best LED face masks of 2026 by wavelengths, coverage, comfort, safety, guarantee and value, with country-specific buying links."
    : `Compare the best LED face masks in ${market.countryName} for wavelengths, face and neck coverage, comfort, safety, guarantee and overall value.`;
  return {
    ...defaultAdvertorialMetadata,
    title,
    description,
    keywords: `best led face mask, best led face mask ${marketKey === "global" ? "2026" : market.countryName.toLowerCase()}, best led light therapy mask, best red light therapy mask, best at home led face mask, LED mask with neck coverage`,
    alternates: {
      canonical: `${siteUrl}${pathname}`,
      languages: advertorialLanguages
    },
    openGraph: {
      ...defaultAdvertorialMetadata.openGraph,
      title,
      description,
      locale: market.locale.replace("-", "_"),
      url: `${siteUrl}${pathname}`
    },
    twitter: {
      ...defaultAdvertorialMetadata.twitter,
      title,
      description
    }
  };
}

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE_NAME} | LED Face Mask Reviews & Buyer Guides`,
  description:
    "LED face mask reviews and country-specific buyer guides covering wavelengths, safety, face and neck coverage, guarantees, and value.",
  authors: [{ name: `${SITE_NAME} editorial team` }],
  keywords:
    "led face mask reviews, best led face mask, red light therapy mask, led mask buyer guide, led mask with neck coverage",
  icons: {
    icon: favicon
  },
  alternates: {
    canonical: `${siteUrl}/`
  },
  robots,
  openGraph: {
    title: `${SITE_NAME} | LED Face Mask Reviews & Buyer Guides`,
    description:
      "Compare LED face masks, red light therapy devices, face and neck coverage, wavelengths, safety, guarantees, and value by market.",
    type: "website",
    url: `${siteUrl}/`,
    siteName: SITE_NAME,
    images: [ogImage]
  }
};

export function legalMetadata(title: string): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: `${title} | ${SITE_NAME}`,
    robots: "noindex, nofollow"
  };
}

export function trustPageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: `${siteUrl}${pathname}` },
    robots
  };
}

export async function blogMetadata(slug: string): Promise<Metadata> {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return homeMetadata;
  }

  return {
    metadataBase: new URL(siteUrl),
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.seoKeywords,
    alternates: {
      canonical: `${siteUrl}/blog/${article.slug}`
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url: `${siteUrl}/blog/${article.slug}`,
      images: [article.image]
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.image]
    }
  };
}
