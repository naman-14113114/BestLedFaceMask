import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { advertorialMarkets, type AdvertorialMarketKey } from "@/lib/advertorialMarkets";

const siteUrl = "https://www.trustpilotreview.shop";
const ogImage = `${siteUrl}/img/57-w.webp`;
const favicon = "https://img.thesitebase.net/10677/10677322/themes/17688355473bc9b44aac.png";
const robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

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
  authors: [{ name: "Trustpilot Review Shop editorial team" }],
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
    siteName: "Trustpilot Review",
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

export function advertorialMetadata(pathname: string, marketKey: AdvertorialMarketKey = "uk"): Metadata {
  const market = advertorialMarkets[marketKey];

  if (marketKey !== "uk") {
    const title = `Best LED Face Mask ${market.countryName} (2026) | Best LED Light Therapy Mask Reviews`;
    const description = `Looking for the best LED face mask in ${market.countryName}? Compare the best LED light therapy masks for wrinkles, red light therapy, at-home use, face and neck coverage, and overall value.`;
    const socialDescription = `Compare the best LED face masks in ${market.countryName} for wrinkles, red light therapy, at-home use, comfort, coverage, and overall value.`;

    return {
      ...defaultAdvertorialMetadata,
      title,
      description,
      keywords:
        `best led face mask, best led face mask ${market.countryName.toLowerCase()}, best led light therapy mask, best led mask for wrinkles, best red light therapy mask, best at home led face mask, best led light mask, best face led mask, best infrared face mask, top rated led face mask`,
      alternates: {
        canonical: `${siteUrl}${pathname}`,
        languages: {
          [market.languageName]: `${siteUrl}${pathname}`,
          "x-default": `${siteUrl}${pathname}`
        }
      },
      openGraph: {
        ...defaultAdvertorialMetadata.openGraph,
        title,
        description: socialDescription,
        url: `${siteUrl}${pathname}`,
        locale: market.locale.replace("-", "_")
      },
      twitter: {
        ...defaultAdvertorialMetadata.twitter,
        title,
        description: `Compare the best LED face masks in ${market.countryName} for wrinkles, acne, red light therapy, neck coverage, and value.`
      }
    };
  }

  return {
    ...defaultAdvertorialMetadata,
    alternates: {
      canonical: `${siteUrl}${pathname}`,
      languages: {
        "en-GB": `${siteUrl}${pathname}`,
        "x-default": `${siteUrl}${pathname}`
      }
    },
    openGraph: {
      ...defaultAdvertorialMetadata.openGraph,
      url: `${siteUrl}${pathname}`
    }
  };
}

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Trustpilot Review Shop | LED Face Mask Reviews & Buyer Guides",
  description:
    "UK-focused LED face mask reviews, buyer guides, and red light therapy comparisons covering wavelengths, safety, face and neck coverage, and value.",
  authors: [{ name: "Trustpilot Review Shop editorial team" }],
  keywords:
    "led face mask reviews, best led face mask uk, red light therapy mask uk, led mask buyer guide, led mask with neck coverage",
  icons: {
    icon: favicon
  },
  alternates: {
    canonical: `${siteUrl}/`
  },
  robots,
  openGraph: {
    title: "Trustpilot Review Shop | LED Face Mask Reviews & Buyer Guides",
    description:
      "Compare LED face masks, red light therapy devices, face and neck coverage, wavelengths, safety, and value for UK buyers.",
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Trustpilot Review Shop",
    images: [ogImage]
  }
};

export function legalMetadata(title: string): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: `${title} | Trustpilot Review Shop`,
    robots: "noindex, nofollow"
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
