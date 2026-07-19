"use client";
import { ExpandableDescription } from "@/components/ExpandableDescription";
import React, { useState, useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  ShieldCheck,
  Check,
  Play,
} from "lucide-react";
import { motion } from "motion/react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  getAdvertorialMarket,
  type AdvertorialMarket,
  type AdvertorialMarketKey,
  type ProductPriceKey,
} from "@/lib/advertorialMarkets";
import type { MarketContextProps } from "@/lib/marketContext";
import { getMobileProsCons } from "./mobileProsCons";

function stripInlineHtml(text: string) {
  return text
    .replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function removeBulletHeading(text: string) {
  const clean = stripInlineHtml(text);
  const colonIndex = clean.indexOf(":");

  if (colonIndex > -1 && colonIndex < 70) {
    return clean.slice(colonIndex + 1).trim();
  }

  return clean;
}

function trimWords(text: string, wordLimit = 14) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordLimit) return text;

  return `${words
    .slice(0, wordLimit)
    .join(" ")
    .replace(/[,:;]+$/, "")}.`;
}

function summarizeMobilePoint(point: string) {
  const body = removeBulletHeading(point);
  const firstSentence = body.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  const compact =
    firstSentence && firstSentence.length <= 130 ? firstSentence : body;

  return trimWords(compact);
}

export function MobileProsCons({
  productId,
  marketKey,
  fallbackPros,
  fallbackCons,
}: {
  productId: number;
  marketKey: string;
  fallbackPros: string[];
  fallbackCons: string[];
}) {
  const mobileData = getMobileProsCons(marketKey, productId);
  const pros = mobileData?.pros ?? fallbackPros.map(summarizeMobilePoint);
  const cons = mobileData?.cons ?? fallbackCons.map(summarizeMobilePoint);

  return (
    <div className="md:hidden grid grid-cols-1 gap-3 mb-8">
      <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100">
        <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-emerald-700">
          Pros
        </h4>
        <ul className="space-y-2.5">
          {pros.map((pro, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
              <span dangerouslySetInnerHTML={{ __html: pro }} />
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
        <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-red-700">
          Cons
        </h4>
        <ul className="space-y-2.5">
          {cons.map((con, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
            >
              <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
              <span dangerouslySetInnerHTML={{ __html: con }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function shouldShowProductCta(product: Product) {
  return product.isWinner || product.link !== "#";
}

const criteria = [
  "Motor power and drying speed (RPM / airflow)",
  "Styling versatility (attachments and Coanda auto-wrap)",
  "Ionic technology and intelligent heat control",
  "Build quality and ergonomics",
  "Value for money and warranty",
];

type Product = {
  id: number;
  rank: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: string;
  link: string;
  isWinner: boolean;
  siliconWarning?: boolean;
  description: string[];
  pros: string[];
  cons: string[];
  metrics: Array<{ label: string; value: number }>;
};

const baseProducts: Product[] = [
  {
    id: 1,
    rank: "#1",
    name: "Muuhu 7-in-1 High-Speed Hair Dryer & Styler",
    image: "/img/hair/muuhu_product_1x1.webp",
    price: "£149",
    originalPrice: "£299",
    rating: "4.9 / 5",
    link: "#",
    isWinner: true,
    description: [
      "Our top pick is the Muuhu 7-in-1 High-Speed Hair Dryer & Styler, a salon-grade device that outperforms far more expensive rivals with a 110,000 RPM brushless motor and seven professional attachments, including two Coanda auto-wrap curlers for effortless curls and waves.",
      "A major advantage is the complete styling system: a dedicated L-shaped base, left and right auto-wrap Coanda curlers, a smoothing brush, a round volumising brush, a concentrator nozzle, and a diffuser. Intelligent heat control and negative-ion technology dry hair fast while helping protect against heat damage, all from a UK 3-pin 220-240V plug.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this styler delivers salon results at home. Currently priced at £149, it offers the best value on the market, combining a 110,000 RPM motor, seven attachments, ionic care, a 2-year warranty, and a 90-day money-back guarantee.",
    ],
    pros: [
      "Class-Leading Motor: 110,000 RPM brushless motor for fast, high-airflow drying that rivals devices costing three times as much.",
      "Complete 7-in-1 System: Seven attachments including two Coanda auto-wrap curlers, smoothing brush, round volumising brush, concentrator and diffuser, so one tool replaces a whole styling kit.",
      "Coanda Auto-Wrap: Left and right auto-wrap curlers draw hair in for salon-style curls and waves with no manual winding.",
      "Ionic + Intelligent Heat Control: Negative ions help reduce frizz while smart heat regulation helps protect hair from extreme heat damage.",
      "Outstanding Value: At £149 (was £299), it undercuts premium stylers by £200-£350 while including more attachments.",
      "Strong Assurance: Backed by a 2-year warranty and a 90-day money-back guarantee for a lower-risk trial.",
      "UK Ready: Supplied for UK 220-240V with a standard 3-pin plug, no travel adapter needed.",
    ],
    cons: [
      "Online Only: Available to buy online, not in high-street shops.",
      "Limited Stock: Popular demand means the £149 launch price may sell out.",
      "Slight Learning Curve: The Coanda auto-wrap curlers take a use or two to master, though most users are confident after the first session.",
    ],
    metrics: [
      { label: "Drying Speed", value: 97 },
      { label: "Styling Versatility", value: 98 },
      { label: "Ionic & Heat Control", value: 96 },
      { label: "Build Quality", value: 94 },
      { label: "Value for Money", value: 100 },
    ],
  },
  {
    id: 2,
    rank: "#2",
    name: "Dyson Airwrap",
    image: "/img/hair/dyson.webp",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The Dyson Airwrap is the category's best-known name, using Coanda airflow to wrap hair and a digital motor for fast drying. It is a genuine premium styler with strong brand prestige.",
      "However, at £399.99 it costs more than 2.5x our top pick while shipping fewer styling attachments overall, and its bundles still leave gaps that the seven-piece Muuhu system covers out of the box.",
      "For buyers who want the Dyson name, it remains a capable choice, but the value gap is hard to ignore once you compare motor, attachment count, and what is included in the box.",
    ],
    pros: [
      "Strong Brand & Coanda Tech: Dyson pioneered Coanda airflow wrapping and has unmatched name recognition.",
      "Good Social Proof: A 4.7-star rating from a large review base.",
      "Salon Heritage: Backed by Dyson's engineering reputation.",
    ],
    cons: [
      "Very High Price: At £399.99 it is dramatically more expensive than the £149 top pick for comparable core styling.",
      "Fewer Attachments: Standard bundles include fewer total attachments than the seven-piece system in our top pick.",
      "No Free Gift Bundle: Does not include the complimentary accessory and guide bundle offered with our top pick.",
      "Shorter Assurance: Warranty and trial terms are narrower than the 2-year warranty and 90-day guarantee on our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 92 },
      { label: "Styling Versatility", value: 84 },
      { label: "Ionic & Heat Control", value: 90 },
      { label: "Build Quality", value: 95 },
      { label: "Value for Money", value: 40 },
    ],
  },
  {
    id: 3,
    rank: "#3",
    name: "Shark FlexStyle",
    image: "/img/hair/shark.png",
    price: "£199",
    rating: "4.6 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The Shark FlexStyle rotates from a powerful dryer into a versatile styler and is a respected mid-premium option with a no-heat-damage claim.",
      "At £199 it is still more than £50 above our top pick, and it does not include a pair of Coanda auto-wrap curlers or the full seven-attachment range out of the box.",
      "It is a solid dryer-styler, but on attachment completeness and total value it trails the seven-piece £149 system.",
    ],
    pros: [
      "Dryer-to-Styler Design: Twists between a fast dryer and a styling wand.",
      "Decent Brand: Shark is a trusted home-tech name with a 4.6-star rating.",
      "No-Heat-Damage Claim: Markets gentle styling temperatures.",
    ],
    cons: [
      "Higher Price: At £199 it costs more than our £149 top pick while including fewer attachments.",
      "No Auto-Wrap Curlers: Lacks the pair of Coanda auto-wrap curlers in our top pick.",
      "Smaller Attachment Set: Does not match the seven-piece completeness of our top pick.",
      "Weaker Assurance: Trial and warranty terms are narrower than the 2-year warranty and 90-day guarantee on our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 88 },
      { label: "Styling Versatility", value: 80 },
      { label: "Ionic & Heat Control", value: 86 },
      { label: "Build Quality", value: 88 },
      { label: "Value for Money", value: 55 },
    ],
  },
  {
    id: 4,
    rank: "#4",
    name: "ghd Helios",
    image: "/img/hair/ghd.jpg",
    price: "£189",
    rating: "4.5 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The ghd Helios is a beloved professional dryer with a strong motor and a premium feel, a favourite among salon stylists.",
      "But it is a dryer only, not a styling system. It ships with a single concentrator and no Coanda auto-wrap curlers, no round brush, no diffuser, and no curl/wave function out of the box.",
      "At £189 it costs more than our £149 top pick while delivering a fraction of the styling versatility, since it cannot curl or wave hair automatically.",
    ],
    pros: [
      "Salon-Grade Dryer: Well-regarded by professionals for smooth, fast drying.",
      "Premium Build: Solid, comfortable, professional feel with a 4.5-star rating.",
      "Strong Brand: ghd is a trusted name in hair styling.",
    ],
    cons: [
      "Dryer Only, No Styling System: Ships with a single concentrator, no Coanda curlers, no brushes, no diffuser.",
      "No Auto Curl/Wave: Cannot create curls or waves automatically like our top pick's Coanda curlers.",
      "Higher Price for Less: At £189 it costs more than the £149 top pick while covering far fewer styles.",
      "No Free Gift Bundle: Misses the complimentary accessory and guide bundle included with our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 90 },
      { label: "Styling Versatility", value: 50 },
      { label: "Ionic & Heat Control", value: 82 },
      { label: "Build Quality", value: 92 },
      { label: "Value for Money", value: 52 },
    ],
  },
  {
    id: 5,
    rank: "#5",
    name: "L'Oréal AirLight Pro",
    image: "/img/hair/loreal_new.webp",
    price: "£350",
    rating: "4.3 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The L'Oréal Professionnel AirLight Pro is an infrared dryer with a premium salon positioning and two magnetic attachments.",
      "At £350 it is the most expensive on this list after Dyson, yet it ships with only two attachments and no Coanda auto-wrap curlers, so its styling range is the narrowest of the premium options.",
      "For the price, buyers get a capable dryer but not the complete seven-piece styling system or the value of our £149 top pick.",
    ],
    pros: [
      "Infrared Technology: Uses infrared light for fast, gentle drying.",
      "Salon Brand: L'Oréal Professionnel heritage with a 4.3-star rating.",
      "Magnetic Attachments: Two auto-detect magnetic heads.",
    ],
    cons: [
      "Very High Price: At £350 it is more than double our £149 top pick.",
      "Only Two Attachments: Ships with just two heads, no Coanda curlers, no full brush set, no diffuser.",
      "No Auto-Wrap Curling: Lacks the Coanda auto-wrap curlers in our top pick.",
      "Narrowest Versatility: Fewest styling options of the premium stylers reviewed.",
    ],
    metrics: [
      { label: "Drying Speed", value: 86 },
      { label: "Styling Versatility", value: 48 },
      { label: "Ionic & Heat Control", value: 84 },
      { label: "Build Quality", value: 90 },
      { label: "Value for Money", value: 38 },
    ],
  },
];

const canadaCompetitorProducts: Product[] = [];

const productPriceKeys: Record<number, ProductPriceKey> = {
  1: "buudy",
  2: "currentbody",
  3: "omnilux",
  4: "shark",
  5: "drdenis",
};

const legacyPound = String.fromCharCode(163);

function replaceMarketLanguage(text: string, market: AdvertorialMarket) {
  return text
    .replaceAll("United Kingdom", market.countryName)
    .replaceAll("UK buyers", market.buyerLabel)
    .replaceAll("the UK market", `the ${market.marketLabel}`)
    .replaceAll("UK market", market.marketLabel)
    .replaceAll("in the UK", `in ${market.titleCountry}`);
}

function replaceMarketPrices(text: string, market: AdvertorialMarket) {
  const prices = market.productPrices;

  return text
    .replaceAll(
      `${legacyPound}679.99`,
      prices.currentbody.fullCoveragePrice ?? prices.currentbody.price,
    )
    .replaceAll(`${legacyPound}399.99`, prices.currentbody.price)
    .replaceAll(
      `${legacyPound}400`,
      prices.currentbody.roundedPrice ?? prices.currentbody.price,
    )
    .replaceAll(`${legacyPound}348`, prices.omnilux.price)
    .replaceAll(`${legacyPound}269.99`, prices.shark.price)
    .replaceAll(`${legacyPound}455`, prices.drdenis.price)
    .replaceAll(
      `${legacyPound}500`,
      prices.drdenis.premiumPriceLabel ?? prices.drdenis.price,
    )
    .replaceAll(
      `${legacyPound}696`,
      prices.omnilux.fullCoveragePrice ?? prices.omnilux.price,
    )
    .replaceAll(
      `${legacyPound}449`,
      prices.buudy.originalPrice ?? prices.buudy.price,
    )
    .replaceAll(`${legacyPound}179`, prices.buudy.price)
    .replaceAll(
      `${legacyPound}40`,
      prices.currentbody.restockingFee ?? prices.currentbody.price,
    );
}

function localizeProductCopy(
  text: string,
  market: AdvertorialMarket,
  _productKey: ProductPriceKey,
) {
  if (market.key === "uk") return text;
  return replaceMarketPrices(replaceMarketLanguage(text, market), market);
}

function localizeBaseProduct(product: Product, market: AdvertorialMarket) {
  const productKey = productPriceKeys[product.id];
  const productPrice = market.productPrices[productKey];

  return {
    ...product,
    price: productPrice?.price ?? product.price,
    originalPrice: productPrice?.originalPrice ?? product.originalPrice,
    link: product.isWinner ? (market.muuhuUrl ?? "#") : product.link,
    description: product.description.map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
    pros: product.pros.map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
    cons: product.cons.map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
  };
}

function getCanadaProducts(market: AdvertorialMarket) {
  const muuhu = {
    ...localizeBaseProduct(baseProducts[0], market),
    link: market.muuhuUrl ?? "#",
    metrics: [
      { label: "Drying Speed", value: 97 },
      { label: "Styling Versatility", value: 98 },
      { label: "Ionic & Heat Control", value: 96 },
      { label: "Build Quality", value: 94 },
      { label: "Value for Money", value: 100 },
    ],
  };

  return [muuhu, ...canadaCompetitorProducts];
}

function getProductsForMarket(market: AdvertorialMarket) {
  if (market.key === "uk") return baseProducts;
  if (market.key === "ca") return getCanadaProducts(market);

  return baseProducts.map((product) => localizeBaseProduct(product, market));
}

function preventPlaceholderNavigation(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (href === "#") {
    event.preventDefault();
  }
}

type OutboundButtonProps = {
  href: string;
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
};

function OutboundButton({
  href,
  className,
  ariaLabel,
  children,
}: OutboundButtonProps) {
  return (
    <a
      href={href === "#" ? undefined : href}
      aria-label={ariaLabel}
      aria-busy="false"
      aria-disabled={href === "#" ? true : undefined}
      data-outbound-button="true"
      data-loading="false"
      className={`relative ${className}`}
    >
      <span data-outbound-content="true">{children}</span>
      <span
        data-outbound-loader="true"
        className="absolute inset-0 z-20 hidden items-center justify-center"
        role="status"
      >
        <OutboundLoader />
        <span className="sr-only">Opening website</span>
      </span>
    </a>
  );
}

export const CTAButton = ({
  href,
  text,
  className = "",
}: {
  href: string;
  text: string;
  className?: string;
}) => (
  <OutboundButton
    href={href}
    ariaLabel={text}
    className={`relative inline-flex justify-center items-center px-8 py-4 text-lg md:text-xl font-bold text-white bg-emerald-500 rounded-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-emerald-500/30 ${className}`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {text} <ChevronRight size={24} />
    </span>
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
  </OutboundButton>
);

export const MetricBar: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-emerald-500 rounded-full"
      />
    </div>
  </div>
);

export default function HairDryerAdvertorial({
  market: marketKey = "uk",
  context,
}: { market?: AdvertorialMarketKey } & MarketContextProps) {
  const market = getAdvertorialMarket(marketKey);
  const products = getProductsForMarket(market);
  const expertProfile = {
    name: "Amara Wright",
    title: "Beauty Technology Editor",
    image: "/img/hair/expert.webp",
    yearsExperience: 12,
    masksReviewed: 22,
    testingHours: 240,
  };
  const heroImage =
    market.key === "uk"
      ? "/img/hair/top5-uk.webp"
      : market.key === "ca"
      ? "/img/hair/top5-uk.webp"
      : "/img/hair/top5-uk.webp";
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;

    video.play().catch(() => {
      setIsVerdictVideoPlaying(false);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">Best Hair Dryer</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market={market.flagKey} />
              <span>{market.headingCountry} - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 size={20} className="text-white shrink-0" />
            Last updated – {context.updatedDate}
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={heroImage}
            alt={`Top hair dryers comparison for ${market.titleCountry}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
          />

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <img
                  src={expertProfile.image}
                  alt={expertProfile.name}
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    {expertProfile.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    {expertProfile.title}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                {market.key === "ca" ? (
                  <p>
                    Our editorial team compared 22 of the most popular hair
                    dryers over 240+ hours, evaluating motor speed, ionic care,
                    heat control, attachments, Coanda styling, reviews, price,
                    and warranty. Our biggest finding was simple: the most
                    expensive dryer was not always the best choice. The strongest
                    options paired a fast brushless motor, real ionic care, and a
                    complete attachment set with a fair price.
                  </p>
                ) : (
                  <p>
                    With {expertProfile.yearsExperience} years of experience in
                    hair styling and beauty technology,{" "}
                    <strong className="text-slate-900">
                      {expertProfile.name}
                    </strong>{" "}
                    is a certified beauty-technology editor. She reviewed{" "}
                    {expertProfile.masksReviewed} popular{" "}
                    {market.headingCountry} hair dryers over{" "}
                    {expertProfile.testingHours} hours, comparing motor speed,
                    ionic care, heat control, attachments, Coanda styling,
                    reviews, price, and warranty. Her biggest finding was
                    simple: the most expensive dryer was not always the best.
                    The strongest options paired a fast brushless motor, real
                    ionic care, and a complete attachment set with a fair price.
                  </p>
                )}
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              {market.key === "ca" ? null : (
                <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                  * Recommended by over 1,000 {market.buyerLabel} hair styling
                  users.
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          <p>
            Hair dryers have exploded in {market.titleCountry}, but the market
            is confusing. Prices range from{" "}
            <strong>{market.priceRange}</strong>, and many brands make almost
            identical claims about drying speed, shine, frizz control, and
            salon results.
          </p>
          {market.key === "ca" ? (
            <p>
              We compared <strong>22 of the most popular hair dryers</strong>{" "}
              over 240+ hours, evaluating motor speed, ionic care, heat control,
              attachments, Coanda styling, ease of use, reviews, price, and
              warranty.
            </p>
          ) : (
            <p>
              So we tested <strong>22 of the most popular hair dryers</strong>{" "}
              over <strong>240+ hours</strong>, comparing motor speed, ionic
              care, heat control, attachments, Coanda styling, ease of use,
              reviews, price, and warranty.
            </p>
          )}
          <p>
            The biggest finding was simple: a higher price did not always mean
            better results. The best dryers paired a fast brushless motor, real
            ionic care, and a complete attachment set with a fair price.
          </p>
          <p>
            Below, we rank the hair dryers that actually stood out, including{" "}
            {market.key === "ca"
              ? "our editorial recommendation for Canadian buyers."
              : `the one we believe offers the strongest balance of results, styling versatility, and value for ${market.buyerLabel}.`}
          </p>
        </div>

        {/* Criteria */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
          <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
            We evaluated hair dryers based on 5 criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 md:gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
                <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
            {market.key === "ca" ? (
              <>
                We compared these hair dryers based on published specifications,
                verified user feedback, and editorial criteria. Based on{" "}
                <strong>technical evaluations</strong> and{" "}
                <strong>consumer reviews</strong>, the following five models
                stood out as the best in terms of{" "}
                <strong>performance, styling versatility, safety, and affordability</strong>.
              </>
            ) : (
              <>
                Over the past three months, we have thoroughly tested{" "}
                <strong>22 different hair dryers</strong>. Based on{" "}
                <strong>hands-on evaluations</strong>, insights from{" "}
                <strong>certified beauty-technology editors</strong>, and{" "}
                <strong>thousands of consumer reviews</strong>, the following
                five models stood out as the best in terms of{" "}
                <strong>performance, styling versatility, safety, and affordability</strong>.
              </>
            )}
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-3xl shadow-sm border ${product.isWinner ? "border-emerald-500 ring-4 ring-emerald-50" : "border-slate-200"} p-6 md:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                {/* Left Column: Image & Quick Stats */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden">
                      {product.rank} {product.name}
                    </h2>

                    <div className="relative w-full mb-6">
                      <a
                        href={product.link}
                        onClick={(event) =>
                          preventPlaceholderNavigation(event, product.link)
                        }
                        className="block w-full group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                        />
                      </a>
                    </div>

                    <div className="text-center mb-2 lg:mb-6 w-full">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-extrabold text-slate-900">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-slate-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <GreenStarRating
                        rating={product.rating}
                        forceFull={product.isWinner}
                        size={24}
                        className="mb-2"
                      />
                      <p className="text-sm font-medium text-slate-500">
                        Overall rating {product.rating}
                      </p>
                    </div>

                    {shouldShowProductCta(product) && (
                      <div className="w-full hidden lg:block">
                        <CTAButton
                          href={product.link}
                          text={
                            product.isWinner ? "Official Website" : "Shop Now"
                          }
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                    <a
                      href={product.link}
                      onClick={(event) =>
                        preventPlaceholderNavigation(event, product.link)
                      }
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {product.rank} {product.name}
                    </a>
                  </h2>

                  <ExpandableDescription description={product.description} isWinner={product.isWinner} />

                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">
                      Performance Metrics
                    </h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar
                          key={idx}
                          label={metric.label}
                          value={metric.value}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mobile Pros & Cons disabled - using unified layout */}
                  {/* <MobileProsCons productId={product.id} marketKey={market.key} fallbackPros={product.pros} fallbackCons={product.cons} /> */}

                  <div className="flex flex-col gap-6 mb-8">
                    {/* Pros */}
                    <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
                      <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Pros
                      </h4>
                      <ul className="space-y-4">
                        {product.pros.map((pro, idx) => {
                          const [bold, ...rest] = pro.split(":");
                          return (
                            <li
                              key={idx}
                              className="text-base text-slate-700 flex items-start gap-3"
                            >
                              <Check
                                size={20}
                                className="text-emerald-500 shrink-0 mt-0.5"
                              />
                              <span>
                                <strong className="text-slate-900">
                                  {bold}:
                                </strong>
                                <span dangerouslySetInnerHTML={{ __html: rest.join(":") }} />
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-100">
                      <h4 className="bg-red-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Cons
                      </h4>
                      <ul className="space-y-4">
                        {product.cons.map((con, idx) => {
                          const [bold, ...rest] = con.split(":");
                          return (
                            <li
                              key={idx}
                              className="text-base text-slate-700 flex items-start gap-3"
                            >
                              <XCircle
                                size={20}
                                className="text-red-500 shrink-0 mt-0.5"
                              />
                              <span>
                                <strong className="text-slate-900">
                                  {bold}:
                                </strong>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: rest.join(":"),
                                  }}
                                />
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Editor's Tip - Free Gifts Discovery (Muuhu only) */}
                  {product.isWinner && (
                    <motion.div
                      initial={false}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50"
                    >
                      {/* Animated background elements */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
                      <div
                        className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
                          <span className="text-lg">💡</span> Editor's Tip
                        </div>

                        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                          {market.key === "ca" ? "Exclusive Canadian Offer" : "Active Offer Found"}: £127 in{" "}
                          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
                            FREE GIFTS
                          </span>
                        </h4>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                          While researching, we found Muuhu is running a
                          limited-time offer bundling these premium accessories
                          free with every hair dryer purchase.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                          {/* Premium Packaging */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                Normally £19
                              </span>
                              <img
                                src="/img/hair/muuhu-luxury-case.webp"
                                alt="Luxury Case"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Luxury Case
                            </p>
                          </div>

                          {/* Muuhu Comb */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div
                              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            >
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                Normally £79
                              </span>
                              <img
                                src="/img/hair/muuhu-comb.webp"
                                alt="Muuhu Comb"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Muuhu Comb
                            </p>
                          </div>

                          {/* Expert Hair E-Book */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div
                              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            >
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                Normally £29
                              </span>
                              <img
                                src="/img/hair/muuhu-expert-hair-ebook.webp"
                                alt="Expert Hair E-Book"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Haircare E-Book
                            </p>
                          </div>
                        </div>

                        <OutboundButton
                          href="#"
                          ariaLabel="Check Availability"
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                            Check Availability{" "}
                            <ChevronRight size={20} className="sm:hidden" />
                            <ChevronRight
                              size={24}
                              className="hidden sm:block"
                            />
                          </span>
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                        </OutboundButton>
                      </div>
                    </motion.div>
                  )}

                  {shouldShowProductCta(product) && (
                    <div className="w-full mt-8 lg:hidden">
                      <CTAButton
                        href={product.link}
                        text={
                          product.isWinner ? "Official Website" : "Shop Now"
                        }
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verdict Section - Elegant Design */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 pb-6 md:p-12 md:pb-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              {market.key === "ca" ? "Editor's Pick" : "Editor's Verdict"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center">
                <img
                  src="/img/hair/about-trust-hair-dryer.webp"
                  alt="Muuhu Hair Dryer Overview"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain drop-shadow-xl mx-auto rounded-2xl"
                />
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  <b>Muuhu 7-in-1</b> Hair Dryer
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  {market.key === "ca" ? "Current Price" : "Now at 60% off"}
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-gray-200 bg-white/70 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-base md:text-lg text-black font-sans">
                      Excellent
                    </span>
                    <GreenStarRating rating={5} size={22} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 on <GreenStarIcon size={18} />{" "}
                    <span className="font-bold text-black">Trustpilot</span>
                  </div>
                </div>

                <OutboundButton
                  href={market.muuhuUrl ?? "#"}
                  ariaLabel="Check Availability"
                  className="mx-auto w-full max-w-[240px] md:w-auto md:max-w-none bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-sm md:text-xl font-bold font-sans tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  CHECK AVAILABILITY
                </OutboundButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Disclosures */}
      <footer className="mt-20 border-t border-slate-200 bg-white px-4 py-12 pb-24 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p className="mb-2 text-lg font-bold text-slate-800">Best Hair Dryer</p>
          <p className="mb-6">© 2026 Best Hair Dryer. All rights reserved.</p>
          <div className="mx-auto mb-6 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-7 text-left text-sm leading-relaxed text-slate-700">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">Important disclosure</p>
            <p className="mb-4"><strong>Affiliate disclosure:</strong> We may receive compensation for clicks on or purchases of products featured on this site. This comes at no additional cost to you.</p>
            <p><strong>Individual results:</strong> Experiences with hair styling devices vary. Product information and examples do not guarantee a particular result.</p>
            {market.key === "ca" && (
              <p className="mt-4"><strong>Regulatory Note:</strong> Reference to certifications does not imply an endorsement of product efficacy for specific individual conditions.</p>
            )}
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <OutboundButton
          href={market.muuhuUrl ?? "#"}
          ariaLabel="Take me to the winning hair dryer"
          className="w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">{market.key === "ca" ? "View Our Top Pick" : "Take me to the winning hair dryer"}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </OutboundButton>
      </div>
    </div>
  );
}
