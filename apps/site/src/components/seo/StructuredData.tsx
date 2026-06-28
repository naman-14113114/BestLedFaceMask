import {
  advertorialMarkets,
  type AdvertorialMarketKey,
} from "@/lib/advertorialMarkets";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

const siteUrl = SITE_URL;

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bestledfacemask.org/#organization",
      name: SITE_NAME,
      url: "https://www.bestledfacemask.org/",
      logo: {
        "@type": "ImageObject",
        url: "https://img.thesitebase.net/10677/10677322/themes/17688355473bc9b44aac.png",
      },
      description: `${SITE_NAME} publishes LED face mask comparisons and country-specific buyer guides.`,
      areaServed: "Worldwide",
      knowsAbout: [
        "LED face masks",
        "red light LED masks",
        "LED mask safety",
        "LED mask wavelengths",
        "at-home skincare technology",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bestledfacemask.org/#website",
      name: SITE_NAME,
      url: "https://www.bestledfacemask.org/",
      publisher: {
        "@id": "https://www.bestledfacemask.org/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.bestledfacemask.org/#webpage",
      url: "https://www.bestledfacemask.org/",
      name: "LED Face Mask Reviews & Buyer Guides",
      isPartOf: {
        "@id": "https://www.bestledfacemask.org/#website",
      },
      about: [
        "LED face mask reviews",
        "red light LED masks",
        "best LED face mask",
        "LED mask with neck coverage",
      ],
    },
  ],
};

const advertorialSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bestledfacemask.org/#organization",
      name: SITE_NAME,
      url: "https://www.bestledfacemask.org/",
      logo: {
        "@type": "ImageObject",
        url: "https://img.thesitebase.net/10677/10677322/themes/17688355473bc9b44aac.png",
      },
      description: `${SITE_NAME} publishes beauty technology comparisons and buyer guides for LED face masks and red light skincare devices.`,
      areaServed: "Worldwide",
      knowsAbout: [
        "LED face masks",
        "red light LED masks",
        "blue light routines for blemish-prone skin",
        "near-infrared LED skincare",
        "at-home skincare devices",
        "LED mask safety and certifications",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bestledfacemask.org/#website",
      name: SITE_NAME,
      url: "https://www.bestledfacemask.org/",
      publisher: {
        "@id": "https://www.bestledfacemask.org/#organization",
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#webpage",
      url: "https://www.bestledfacemask.org/best-led-face-mask-uk-2026",
      name: "Best LED Face Mask UK (2026)",
      isPartOf: {
        "@id": "https://www.bestledfacemask.org/#website",
      },
      about: [
        "best LED face mask UK",
        "red light LED mask",
        "LED mask with neck coverage",
        "at-home LED skincare",
      ],
      inLanguage: "en-GB",
      dateModified: "2026-06-13",
    },
    {
      "@type": "Article",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#article",
      mainEntityOfPage: {
        "@id":
          "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#webpage",
      },
      headline:
        "Best LED Face Mask UK (2026) | Best LED Light Mask Reviews",
      description:
        "A UK comparison guide covering the best LED face masks for fine lines, red light routines, at-home use, face and neck coverage, and overall value.",
      image: "https://www.bestledfacemask.org/img/57-w.webp",
      datePublished: "2026-06-12",
      dateModified: "2026-06-13",
      author: {
        "@id": "https://www.bestledfacemask.org/#organization",
      },
      publisher: {
        "@id": "https://www.bestledfacemask.org/#organization",
      },
      keywords: [
        "best led face mask",
        "best led face mask uk",
        "best led light mask",
        "best red light mask",
        "red light face mask",
        "best at home led face mask",
        "LED mask with neck coverage",
        "7 colour LED mask",
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#geo-summary", "#geo-ranking", "#geo-faq"],
      },
      hasPart: [
        {
          "@id":
            "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#itemlist",
        },
        {
          "@id":
            "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#faq",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#itemlist",
      name: "Best LED Face Masks UK 2026 Ranking",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Buudy 7 Colour LED Mask",
          url: "https://www.buudy.co.uk/products/buudy-led-mask",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "CurrentBody LED Mask",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shark CryoGlow LED Mask",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Omnilux Contour Face",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Dr. Dennis Gross DRx SpectraLite FaceWare Pro",
        },
      ],
    },
    {
      "@type": "Product",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#buudy-product",
      name: "Buudy 7 Colour LED Mask",
      description:
        "A 7 colour LED face mask with 830nm near-infrared support, built-in neck coverage, eye protection, cordless use, Buudy AI guided sessions, and a 90-day money-back policy.",
      image: "https://www.bestledfacemask.org/img/57-w.webp",
      brand: {
        "@type": "Brand",
        name: "Buudy",
      },
      category: "At-home LED skincare mask",
      offers: {
        "@type": "Offer",
        url: "https://www.buudy.co.uk/products/buudy-led-mask",
        price: "179.00",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Visible light modes",
          value: "7 colours",
        },
        {
          "@type": "PropertyValue",
          name: "Near-infrared wavelength",
          value: "830nm",
        },
        {
          "@type": "PropertyValue",
          name: "Return policy",
          value: "90-day money-back policy",
        },
      ],
    },
    {
      "@type": "VideoObject",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#dermatologist-video",
      name: "Dermatologist walkthrough of the Buudy 7 Colour LED Mask",
      description:
        "A short product walkthrough showing the Buudy LED mask fit, light modes, eye area, and full-face coverage.",
      thumbnailUrl:
        "https://www.bestledfacemask.org/assets/buudy-dermatologist-verdict-poster.jpg",
      contentUrl:
        "https://www.bestledfacemask.org/assets/buudy-dermatologist-verdict.mp4",
      uploadDate: "2026-06-12",
      duration: "PT2M6S",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best LED face mask in the UK for value?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guide ranks the Buudy 7 Colour LED Mask as the strongest value pick because it combines 7 visible colour modes, 830nm near-infrared support, face and neck coverage, eye protection, and a 90-day money-back policy at £179.",
          },
        },
        {
          "@type": "Question",
          name: "Do more expensive LED masks always perform better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The comparison found that higher price did not always mean better value. Published wavelength information, even coverage, routine consistency, comfort, and safety signals mattered more than brand prestige.",
          },
        },
        {
          "@type": "Question",
          name: "Which LED wavelengths are highlighted for the Buudy mask?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Buudy mask is described as using 7 visible colours plus 830nm near-infrared support, including red, blue, green, cyan, yellow, purple, and white light modes.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.bestledfacemask.org/best-led-face-mask-uk-2026#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bestledfacemask.org/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Best LED Face Mask UK 2026",
          item: "https://www.bestledfacemask.org/best-led-face-mask-uk-2026",
        },
      ],
    },
  ],
};

type SchemaNode = Record<string, unknown>;

function getCanadaItemListElement(buudyUrl: string) {
  return [
    {
      "@type": "ListItem",
      position: 1,
      name: "Buudy 7 Colour LED Mask",
      url: buudyUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "CurrentBody LED Mask",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kala Red Light Face Mask",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "TheraFace Mask",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Equinox LED Mask",
    },
  ];
}

function createAdvertorialSchema(marketKey: AdvertorialMarketKey) {
  const market = advertorialMarkets[marketKey];
  const routeUrl = `${siteUrl}${market.route}`;
  const countryLower = market.countryName.toLowerCase();
  const schema = JSON.parse(JSON.stringify(advertorialSchema)) as {
    "@context": string;
    "@graph": SchemaNode[];
  };

  const graph = schema["@graph"];
  const organizationNodes = graph.filter(
    (node) => node["@type"] === "Organization",
  );
  for (const node of organizationNodes) {
    node.description = `${SITE_NAME} publishes ${market.countryAdjective}-focused LED face mask reviews, red light skincare comparisons, and buyer guides.`;
    node.areaServed = market.key === "global"
      ? "Worldwide"
      : { "@type": "Country", name: market.countryName };
  }

  const website = graph.find((node) => node["@type"] === "WebSite");
  if (website) {
    website.inLanguage = market.languageName;
  }

  const webpage = graph.find((node) => node["@type"] === "WebPage");
  if (webpage) {
    webpage["@id"] = `${routeUrl}#webpage`;
    webpage.url = routeUrl;
    webpage.name = market.key === "global"
      ? "Best LED Face Mask (2026)"
      : `Best LED Face Mask ${market.countryName} (2026)`;
    webpage.about = [
      `best LED face mask ${market.countryName}`,
      "red light LED mask",
      "LED mask with neck coverage",
      "at-home LED skincare",
    ];
    webpage.inLanguage = market.languageName;
  }

  const article = graph.find((node) => node["@type"] === "Article");
  if (article) {
    article["@id"] = `${routeUrl}#article`;
    article.mainEntityOfPage = { "@id": `${routeUrl}#webpage` };
    article.headline = market.key === "global"
      ? "Best LED Face Mask (2026) | Editorial Comparison"
      : `Best LED Face Mask ${market.countryName} (2026) | Editorial Comparison`;
    article.description = `An editorial ${market.marketLabel} comparison covering LED face mask wavelengths, at-home use, face and neck coverage, return policies, and overall value.`;
    article.keywords = [
      "best led face mask",
      `best led face mask ${countryLower}`,
      "best led light mask",
      "best red light mask",
      "red light face mask",
      "best at home led face mask",
      "LED mask with neck coverage",
      "7 colour LED mask",
    ];
    article.hasPart = [
      { "@id": `${routeUrl}#itemlist` },
      { "@id": `${routeUrl}#faq` },
    ];
  }

  const itemList = graph.find((node) => node["@type"] === "ItemList");
  if (itemList) {
    itemList["@id"] = `${routeUrl}#itemlist`;
    itemList.name = `Best LED Face Masks ${market.countryName} 2026 Ranking`;
    if (market.key === "ca") {
      itemList.itemListElement = getCanadaItemListElement(market.buudyUrl);
    } else {
      const items = itemList.itemListElement;
      if (Array.isArray(items) && items[0] && typeof items[0] === "object") {
        (items[0] as SchemaNode).url = market.buudyUrl;
      }
    }
  }

  const product = graph.find((node) => node["@type"] === "Product");
  if (product) {
    product["@id"] = `${routeUrl}#buudy-product`;
    const offers = product.offers;
    if (offers && typeof offers === "object" && !Array.isArray(offers)) {
      const productOffer = offers as SchemaNode;
      productOffer.url = market.buudyUrl;
      productOffer.price = market.productPrices.buudy.schemaPrice;
      productOffer.priceCurrency = market.currencyCode;
    }
  }

  const video = graph.find((node) => node["@type"] === "VideoObject");
  if (video) {
    video["@id"] = `${routeUrl}#dermatologist-video`;
  }

  const faq = graph.find((node) => node["@type"] === "FAQPage");
  if (faq) {
    faq["@id"] = `${routeUrl}#faq`;
    const questions = faq.mainEntity;
    if (
      Array.isArray(questions) &&
      questions[0] &&
      typeof questions[0] === "object"
    ) {
      const question = questions[0] as SchemaNode;
      question.name = `What is the best LED face mask in ${market.countryName} for value?`;
      const answer = question.acceptedAnswer;
      if (answer && typeof answer === "object" && !Array.isArray(answer)) {
        (answer as SchemaNode).text =
          `The guide ranks the Buudy 7 Colour LED Mask as the strongest value pick because it combines 7 visible colour modes, 830nm near-infrared support, face and neck coverage, eye protection, and a 90-day money-back policy at ${market.productPrices.buudy.price}.`;
      }
    }
  }

  const breadcrumb = graph.find((node) => node["@type"] === "BreadcrumbList");
  if (breadcrumb) {
    breadcrumb["@id"] = `${routeUrl}#breadcrumb`;
    const breadcrumbItems = breadcrumb.itemListElement;
    if (
      Array.isArray(breadcrumbItems) &&
      breadcrumbItems[1] &&
      typeof breadcrumbItems[1] === "object"
    ) {
      const secondItem = breadcrumbItems[1] as SchemaNode;
      secondItem.name = market.primaryGuideLabel;
      secondItem.item = routeUrl;
    }
  }

  return schema;
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeStructuredData() {
  return <JsonLd data={homeSchema} />;
}

export function AdvertorialStructuredData({
  market = "uk",
}: {
  market?: AdvertorialMarketKey;
}) {
  return <JsonLd data={createAdvertorialSchema(market)} />;
}
