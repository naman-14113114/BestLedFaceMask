'use client';
import React, { useState, useRef } from 'react';
import { CheckCircle2, XCircle, Award, ChevronRight, Calendar, ShieldCheck, Check, Play } from 'lucide-react';
import { motion } from 'motion/react';
import {
  getAdvertorialMarket,
  type AdvertorialMarket,
  type AdvertorialMarketKey,
  type ProductPriceKey
} from '@/lib/advertorialMarkets';
import type { MarketContextProps } from '@/lib/marketContext';
import { getMobileProsCons } from './mobileProsCons';


const trustpilotStarTiles = [0, 1, 2, 3, 4];
const trustpilotStarPoints = "12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25";

function TrustpilotStars({ className = "", tileClassName = "h-6 w-6", iconSize = 16 }: { className?: string; tileClassName?: string; iconSize?: number }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`} aria-label="5 out of 5 stars">
      {trustpilotStarTiles.map((tile) => (
        <svg
          key={tile}
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          className={`text-[#00b67a] ${tileClassName}`}
          aria-hidden="true"
        >
          <polygon points={trustpilotStarPoints} fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

function TrustpilotSingleStar({ className = "h-5 w-5", iconSize = 14 }: { className?: string; iconSize?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={iconSize}
      height={iconSize}
      className={`inline-block align-middle text-[#00b67a] ${className}`}
      aria-label="Trustpilot star"
    >
      <polygon points={trustpilotStarPoints} fill="currentColor" />
    </svg>
  );
}

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

  return `${words.slice(0, wordLimit).join(" ").replace(/[,:;]+$/, "")}.`;
}

function summarizeMobilePoint(point: string) {
  const body = removeBulletHeading(point);
  const firstSentence = body.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  const compact = firstSentence && firstSentence.length <= 130 ? firstSentence : body;

  return trimWords(compact);
}

function MobileProsCons({ productId, marketKey, fallbackPros, fallbackCons }: { productId: number, marketKey: string, fallbackPros: string[], fallbackCons: string[] }) {
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
            <li key={idx} className="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
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
            <li key={idx} className="flex items-start gap-2.5 text-sm leading-snug text-slate-700">
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
  "Scientific effectiveness of the light wavelengths",
  "Even light distribution",
  "Comfort and fit on the face",
  "Skin-friendly, medically approved materials",
  "Adjustable light modes and intensity levels",
  "User interface and ease of operation",
  "Battery life and charging performance",
  "Product durability and build quality",
  "User feedback and real skincare results",
  "Affordability and post-purchase customer support"
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
    name: "Buudy 7 Colour LED Mask",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    rating: "4.9 / 5",
    link: "https://uk.buudy.com/products/buudy-led-mask",
    isWinner: true,
    description: [
      "Our top pick is the Buudy 7 Colour LED Mask, a medical-grade device that outperforms the competition with a 7-colour spectrum plus 830nm near-infrared. While most brands focus only on basic red light, Buudy uses targeted wavelengths to support everything from deep wrinkles and acne to inflammation, uneven tone, and overall skin recovery. This Health Canada Approved technology (with CE, FCC, and ROHS certifications) ensures professional-grade results for all skin types.",
      "A major advantage is the built-in neck coverage, a vital feature often missing from more expensive models. This allows you to treat \"turkey neck\" and sagging skin simultaneously. The cordless, rechargeable design features \"Tap Technology\" and Buudy AI guided sessions, making it simple to choose the right routine for your skin goals.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179, it offers the best value on the market, combining full-face and neck rejuvenation, advanced eye protection, and a 90-day money-back guarantee for a safer, lower-risk trial."
    ],
    pros: [
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 1,000 reviews and performed well in internal testing.",
      "7 Colour Medical Grade Spectrum: Unlike competitors that only offer 2 or 3 colours, Buudy features 7 visible colours plus 830nm near-infrared. The exact wavelengths are 633nm red, 415nm blue, 525nm green, 490nm cyan, 590nm yellow, 390nm purple, 510nm white, and 830nm near-infrared for deeper support.",
      "Dermatologist Proven: Health Canada Approved with CE, FCC, and ROHS certifications. Expert-recommended technology ensures safe, professional-grade results from the comfort of your home.",
      "Built-in Neck Coverage: Specifically designed to target \"turkey neck\" and sagging skin—a critical feature most expensive brands miss.",
      "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
      "Cordless, Portable & Guided: A hands-free, rechargeable design with \"Tap Technology\" and Buudy AI guided sessions that help match each routine to your skin concern.",
      "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
      "Cost-effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
      "90-Day Money-Back Guarantee: Buudy offers a generous 90-day trial period to test for results. If you're not satisfied, you get a full refund, which significantly reduces the risk of purchase."
    ],
    cons: [
      "Limited Availability: Available for purchase online only and exclusively in the United Kingdom.",
      "Limited Stock: There is a risk of the product being sold out due to limited stock.",
      "Learning Curve: Some users note the intuitive tap controls take a session or two to fully get used to, though most find it second nature after the first few uses."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 97 },
      { label: "Skin Comfort and Fit", value: 96 },
      { label: "Ease of Use", value: 97 },
      { label: "Material Quality", value: 96 },
      { label: "Affordability", value: 100 }
    ]
  },
  {
    id: 2,
    rank: "#2",
    name: "CurrentBody LED Mask",
    image: "/img/Untitled design.png",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    siliconWarning: true,
    description: [
      "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks.",
      "Its proprietary \"Pillow Technology\" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home.",
      "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector."
    ],
    pros: [
      "Strong Social Proof: The mask is heavily endorsed by celebrities (like Kim Kardashian and Cillian Murphy) and multiple dermatologists, and has won several beauty awards.",
      "High Review Volume: It has a 4.7-star rating based on a very large number of reviews (2,860).",
      "Clinically Studied: The company provides specific clinical data on its effectiveness for anti-aging (e.g., \"reducing wrinkles by 30%... in 8 weeks\").",
      "High-Quality Build: Features include flexible silicone for a good fit, a portable clip-on controller, and optional eye inserts for convenience."
    ],
    cons: [
      "Extremely High Price: At £399.99, it is drastically more expensive than the Buudy mask (which is £179).",
      "No Neck Coverage: The standard £400 mask is for the face only. You must purchase the \"Face & Neck Kit\" for £679.99 to get neck coverage, which comes standard with the Buudy mask.",
      "Very Limited Treatment Modes: This is an anti-aging-only device. It only offers 3 red/near-infrared wavelengths and completely lacks the 7-color versatility of the Buudy mask. It cannot be used to target acne (Blue light), dark spots (Green light), or redness (Yellow light).",
      "Not a Complete Solution: Because it only targets one concern (aging), it is not a comprehensive solution for total skin health like a multi-color mask.",
      "Costly Money-Back Guarantee: The 60-day money-back guarantee is not 100% free. Customers are charged a 10% restocking fee to return it, which would be £40 on a £400 mask.",
      "Mixed User Results: Despite the high rating, some verified reviewers report issues, stating they \"Not noticed any difference yet\" even after using it 5 times a week for a couple of months.",
      "Fit Issues: Some users note that the fit isn't perfect and that the mask can \"feel it slide down,\" even with the new straps.",
      "Silicone Mask Dangers: Recent studies have highlighted potential safety and hygiene concerns with flexible silicone LED masks. <a href='https://www.trustpilotreview.shop/silicone-led-mask-dangers' target='_blank' class='text-red-500 hover:text-red-700 underline font-bold'>Read Full Report</a>"
    ],
    metrics: [
      { label: "Light Effectiveness", value: 82 },
      { label: "Skin Comfort and Fit", value: 86 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 90 },
      { label: "Affordability", value: 42 }
    ]
  },
  {
    id: 3,
    rank: "#3",
    name: "Omnilux LED Mask",
    image: "https://img.thesitebase.net/10677/10677322/themes/1769107230af732ce69a.jpeg",
    price: "£348",
    rating: "4.6 / 5",
    link: "https://amzn.to/4s0Zcf7",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use.",
      "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments.",
      "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation."
    ],
    pros: [
      "Strong Clinical Backing: The device is FDA-cleared and dermatologist-recommended, with clinical studies showing high user satisfaction (e.g., \"95% reported brighter & plumper skin\").",
      "Good Guarantee: Offers a 30-day, no-hassle, money-back guarantee, which is more straightforward than some competitors.",
      "High-Quality Brand: Omnilux is a well-known, trusted brand that originated in the professional medical device market.",
      "Portable Design: The mask is flexible, portable, and comes with a rechargeable controller and carry bag."
    ],
    cons: [
      "Extremely High Price: At £348, it is significantly more expensive than the Buudy mask (£179).",
      "No Neck Coverage: The £348 price is for the face mask only. A separate neck and chest piece must be purchased for an additional £348, making the total cost for full coverage nearly £696.",
      "Very Limited Treatment Modes: This mask is an anti-aging device only. It is limited to just 2 light wavelengths (Red and NIR) and is missing the 5 other modes (like Blue, Green, and Yellow) that come standard with the Buudy mask.",
      "Not a Complete Solution: The company explicitly states the Contour mask \"will not clear acne breakouts\" and that customers must buy a different $395 mask (\"Omnilux Clear\") for that purpose. The Buudy mask handles both concerns in one device.",
      "Fewer LEDs: It is equipped with only 132 LEDs, which is significantly fewer than the Buudy mask's 192 high-density LEDs, offering less complete light coverage.",
      "Mixed User Results: Despite the high rating, some verified reviewers report issues, stating they \"Not noticed any difference yet\" even after using it 5 times a week for a couple of months.",
      "Silicone Mask Dangers: Recent studies have highlighted potential safety and hygiene concerns with flexible silicone LED masks. <a href='https://www.trustpilotreview.shop/silicone-led-mask-dangers' target='_blank' class='text-red-500 hover:text-red-700 underline font-bold'>Read Full Report</a>"
    ],
    metrics: [
      { label: "Light Effectiveness", value: 76 },
      { label: "Skin Comfort and Fit", value: 88 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 92 },
      { label: "Affordability", value: 45 }
    ]
  },
  {
    id: 4,
    rank: "#4",
    name: "Shark CryoGlow LED Mask",
    image: "https://img.thesitebase.net/10677/10677322/themes/1768726434a7e6301df7.png",
    price: "£299.99",
    rating: "4.6 / 5",
    link: "https://amzn.to/4b4C8WS",
    isWinner: false,
    description: [
      "The Shark CryoGlow LED Face Mask has quickly made headlines and won prestigious beauty awards since its launch. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it a unique 2-in-1 solution for facial care.",
      "Endorsed by leading beauty editors at Oprah Daily and Women's Health, this mask offers three \"chill\" levels and four distinct treatment modes, including Better Ageing and Blemish Repair. These advanced settings ensure a quick and efficient therapy session in as little as 6 to 8 minutes, utilizing proven wavelengths like Red (630nm) and Blue (415nm) light.",
      "In our experience, a single daily session is all that is required to see noticeable improvements in skin clarity and tone. The independent clinical studies and dermatologist-backed technology specifically excel at brightening the under-eye area, with users reporting that the cooling pads visibly reduce puffiness and refresh the complexion after just one use."
    ],
    pros: [
      "Unique Cooling Technology: Its main selling point is the \"Insta-Chill\" cryo-therapy for the under-eyes, a feature not found in standard LED masks, which helps to soothe and depuff.",
      "Developed with Dermatologists: The product is backed by dermatologists, which adds to its credibility.",
      "Strong Brand & Reviews: Shark is a well-known, trusted brand, and the mask has a high 4.6-star rating from over 500 reviews.",
      "Fast Treatment Times: With pre-programmed sessions as short as 6-8 minutes, it offers a very quick daily treatment."
    ],
    cons: [
      "Extremely High Price: At £299.99, it is more than double the price of the Buudy mask (£179) for what is arguably less technology.",
      "No Neck Coverage: The device is for the face only and offers no treatment for the neck, a key area of concern for aging that is included with the Buudy mask.",
      "Severely Limited Light Modes: The mask is heavily focused on its cooling gimmick and offers very few light options. It is missing 5 of the 7 wavelengths (Green, Yellow, Cyan, Purple, White) that the Buudy mask has for targeting dark spots, skin balancing, and reducing swelling.",
      "Unspecified LED Count: A major red flag. The page does not state the number of LEDs, suggesting the count is low. A lower LED count (compared to Buudy's 192 high-density LEDs) means less power and less even skin coverage.",
      "Very Heavy & Rigid: At 675g, this mask is exceptionally heavy. This, combined with a rigid (non-silicone) design, can make it uncomfortable to wear and may not fit all face shapes well.",
      "Not a Complete Solution: It's a 2-in-1 device that compromises on the LED therapy. A customer wanting to treat hyperpigmentation (Green light) or balance skin texture (Yellow light) would get no benefit from this mask."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort and Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Affordability", value: 55 }
    ]
  },
  {
    id: 5,
    rank: "#5",
    name: "Dr. Dennis Gross DRx SpectraLite",
    image: "https://m.media-amazon.com/images/I/61OfXQiidUL._AC_SL1500_.jpg",
    price: "£455",
    rating: "4.1 / 5",
    link: "https://amzn.to/4cvWiJR",
    isWinner: false,
    description: [
      "The Dr. Dennis Gross DRx SpectraLite FaceWare Pro secures the #5 spot on our list, bringing dermatologist-created clinical authority to at-home skincare. Known for its ultra-fast 3-minute treatment time, it is highly sought after by those with busy schedules. It offers a strong focus on acne and surface bacteria through its specific 415nm Blue light mode.",
      "However, the staggering £455 price point makes it an incredibly expensive investment, especially given its limitations. With a rigid, unyielding hard plastic shell, many users report significant discomfort on the bridge of the nose and uneven light coverage across different bone structures.",
      "Crucially, at this premium price, it entirely lacks neck and chest coverage. While it does provide convenience, the 162 LEDs offer a lower density of light compared to modern high-output models, and it completely misses out on 5 vital therapeutic color spectrums needed for comprehensive facial health, making it a pricey option compared to more feature-rich alternatives."
    ],
    pros: [
      "Fastest Treatment Time: Completes a full session in just 3 minutes, ideal for those in a rush.",
      "Dermatologist Created: Designed by Dr. Dennis Gross, adding a layer of clinical authority.",
      "Strong Acne Focus: The specific 415nm Blue light mode is highly effective for surface bacteria.",
      "Cordless Usability: Internal battery allows for wire-free usage during the short treatment window."
    ],
    cons: [
      "Astronomical Price Point: At £455, you are paying a massive premium for the brand name. It costs more than double the price of top-tier, multi-functional alternatives.",
      "Zero Neck & Chest Coverage: For nearly £500, the lack of a neck attachment is a glaring omission. Users risk the \"floating head\" aging effect, whereas better-value masks include neck and décolletage treatment as a standard feature.",
      "Lower LED Density: Containing only 162 LEDs, it has a lower light density than modern high-output models, resulting in larger gaps between light points on the skin.",
      "Rigid, Uncomfortable Fit: The hard plastic shell does not flex. Users with varying bone structures frequently report significant discomfort on the bridge of the nose and uneven light coverage, a stark contrast to the comfort of soft, molding silicone.",
      "Severely Limited Color Spectrum: It offers only 3 modes (Red, Blue, and Combo). It completely misses out on Green (pigmentation), Yellow (redness), Cyan, Purple, and White light therapies that come standard with Buudy.",
      "Short Battery Life: The internal battery is kept small to reduce the mask's weight, meaning it requires much more frequent charging than devices utilizing external power banks.",
      "Fragile Build: Rigid plastic masks are inherently prone to cracking or breaking if accidentally dropped, unlike durable, travel-friendly silicone options.",
      "No Eye Protection: The open-eye design allows light to bleed into your vision, which can be bothersome for light-sensitive users compared to masks with integrated eye inserts."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 75 },
      { label: "Skin Comfort and Fit", value: 45 },
      { label: "Ease of Use", value: 85 },
      { label: "Material Quality", value: 75 },
      { label: "Affordability", value: 35 }
    ]
  }
];

const canadaCompetitorProducts: Product[] = [
  {
    id: 3,
    rank: "#3",
    name: "Kala Red Light Face Mask",
    image: "/img/kala-1.jpg",
    price: "$382.49",
    rating: "4.5 / 5",
    link: "https://amzn.to/4eosr5R",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Kala Red Light Face Mask earns the third spot in the Canada ranking because it brings a credible, skin-focused LED setup at a mid-premium price. The device combines red, near-infrared, and blue light in a lightweight silicone mask, giving Canadian buyers a practical option for anti-aging support, blemish-prone skin, and general tone improvement.",
      "Its official specifications list 198 LED lights, 630nm red light, 830nm near-infrared light, 465nm blue light, 10-20 minute treatment sessions, USB-C charging, a 348g weight, and a 2-year warranty. The brand also highlights FDA-cleared and Health Canada positioning, which helps it feel more trustworthy than many generic marketplace masks.",
      "The reason it does not rank higher is coverage and versatility. At $382.49, Kala is still a face-only mask with a narrower three-wavelength setup, so it does not cover the neck or offer the broader colour range included with our top pick."
    ],
    pros: [
      "Triple-Wavelength Coverage: Uses red, near-infrared, and blue LED light, giving it a more rounded routine than red-only masks.",
      "Trust Signals: The product page highlights FDA-cleared, dermatologist-recommended, and Health Canada positioning.",
      "Lightweight Silicone Fit: At 348g, it is lighter than rigid premium masks and easier to fit into a regular skincare routine.",
      "2-Year Warranty: A longer warranty helps reduce purchase anxiety at this price point."
    ],
    cons: [
      "No Neck Coverage: It treats the face only, leaving the neck and jawline untreated unless a separate device is used.",
      "Limited Colour Range: Red, near-infrared, and blue are useful, but it lacks Green, Cyan, Yellow, Purple, and White modes for broader skin concerns.",
      "Moderate Output: The listed optical power density is practical but not the strongest in the category.",
      "Long Charging Time: A 4-hour charging time is less convenient than shorter-charge or longer-runtime systems.",
      "Price Still Adds Up: At $382.49, it costs more than the reviewed Buudy Canada offer while covering less skin area."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 78 },
      { label: "Skin Comfort and Fit", value: 84 },
      { label: "Ease of Use", value: 82 },
      { label: "Material Quality", value: 86 },
      { label: "Affordability", value: 64 }
    ]
  },
  {
    id: 4,
    rank: "#4",
    name: "TheraFace Mask",
    image: "/img/WhatsApp Image 2026-02-08 at 12.18.58 AM.jpeg",
    price: "$799.99",
    rating: "4.3 / 5",
    link: "https://amzn.to/4a6g1yt",
    isWinner: false,
    description: [
      "TheraFace Mask takes fourth place in the Canada guide. It is the most premium-feeling competitor on this list, backed by Therabody's wellness-tech reputation and built around 648 LEDs plus VibraWave massage therapy for facial tension.",
      "The mask includes Red, Blue, and Yellow light therapies, cordless use, and short 9-minute sessions. For buyers who already trust Therabody and want a high-end, hard-shell device, it has obvious appeal.",
      "The tradeoff is value. At $799.99, it is dramatically more expensive than the other masks here, still focuses on the face only, and uses a rigid, heavier headset that can feel less comfortable across different face shapes."
    ],
    pros: [
      "Massive LED Count: Uses 648 LEDs, one of the highest counts in the category.",
      "Vibration Therapy: VibraWave motors add a massage-style feature for facial tension relief.",
      "Cordless Design: Short 9-minute routines and no cord make sessions easy to start.",
      "Brand Reputation: Backed by Therabody, a major name in wellness technology."
    ],
    cons: [
      "Eye-Watering Price: At $799.99, it is the most expensive product in this Canada ranking.",
      "Zero Neck Coverage: The device treats the face only and ignores the neck and chest area.",
      "Heavy and Rigid: The hard-shell format can feel less forgiving and may not sit evenly on every face shape.",
      "Limited Spectrum: It focuses on Red, Blue, and Yellow while missing Green, Cyan, Purple, and White light modes.",
      "Risk of Floating Head Syndrome: Treating only the face can leave a visible mismatch around the jawline and neck.",
      "Short Battery Life: LED-only battery runtime is limited compared with simpler external-controller designs.",
      "Bulky Storage: The rigid premium shell takes more room to store and travel with."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 88 },
      { label: "Skin Comfort and Fit", value: 74 },
      { label: "Ease of Use", value: 84 },
      { label: "Material Quality", value: 94 },
      { label: "Affordability", value: 18 }
    ]
  },
  {
    id: 5,
    rank: "#5",
    name: "Equinox LED Mask",
    image: "/img/WhatsApp Image 2026-02-08 at 12.16.22 AM.jpeg",
    price: "$385",
    rating: "4.2 / 5",
    link: "https://amzn.to/3S4qDYu",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Equinox LED Mask rounds out the Canada top five as a technically interesting silicone option with strong spec-sheet appeal. The face-only version lists 336 LEDs, while the full face, neck, and chest kit increases the total LED count when purchased as a larger bundle.",
      "Its Glow Core-style setup uses six treatment modes built around Red, Blue, Yellow, and Near-Infrared wavelengths, including 633nm red, 415nm blue, 590nm yellow, and 830nm near-infrared. The official product information also highlights Health Canada approval, CE, FCC, ROHS, and a 2-year warranty.",
      "It ranks fifth because the $385 face-only model still leaves out neck coverage, has fewer colour options than the top pick, and asks users to manage a more complex controller setup. It is credible, but the overall value is weaker for Canadian buyers focused on full-face and neck treatment."
    ],
    pros: [
      "High Face LED Count: The face-only mask lists 336 LEDs for dense facial coverage.",
      "Six Treatment Modes: Includes combinations such as Red + NIR, Red + Blue, and Yellow + NIR.",
      "Ultra-Thin Comfort: The product positioning highlights a thinner silicone fit than many standard masks.",
      "Certification and Warranty Signals: Lists Health Canada approval, CE, FCC, ROHS, and a 2-year warranty."
    ],
    cons: [
      "Face-Only at This Price: The $385 model does not include neck and chest treatment.",
      "Limited Colour Spectrum: It uses four wavelengths and lacks Green, Cyan, Purple, and White modes.",
      "Complex Controller: Multiple modes and intensity choices can feel less simple for daily use.",
      "Inconvenient Wired Remote: The controller setup is less seamless than tap-style or fully cordless routines.",
      "Lower Overall Value: It costs more than the reviewed Buudy Canada offer while delivering less included coverage.",
      "Incomplete Anti-Aging Coverage: Without neck treatment in the face-only model, the jawline and neck can be left behind."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 72 },
      { label: "Skin Comfort and Fit", value: 80 },
      { label: "Ease of Use", value: 76 },
      { label: "Material Quality", value: 84 },
      { label: "Affordability", value: 54 }
    ]
  }
];

const productPriceKeys: Record<number, ProductPriceKey> = {
  1: "buudy",
  2: "currentbody",
  3: "omnilux",
  4: "shark",
  5: "drdenis"
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
    .replaceAll(`${legacyPound}679.99`, prices.currentbody.fullCoveragePrice ?? prices.currentbody.price)
    .replaceAll(`${legacyPound}399.99`, prices.currentbody.price)
    .replaceAll(`${legacyPound}400`, prices.currentbody.roundedPrice ?? prices.currentbody.price)
    .replaceAll(`${legacyPound}348`, prices.omnilux.price)
    .replaceAll(`${legacyPound}299.99`, prices.shark.price)
    .replaceAll(`${legacyPound}455`, prices.drdenis.price)
    .replaceAll(`${legacyPound}500`, prices.drdenis.premiumPriceLabel ?? prices.drdenis.price)
    .replaceAll(`${legacyPound}696`, prices.omnilux.fullCoveragePrice ?? prices.omnilux.price)
    .replaceAll(`${legacyPound}449`, prices.buudy.originalPrice ?? prices.buudy.price)
    .replaceAll(`${legacyPound}179`, prices.buudy.price)
    .replaceAll(`${legacyPound}40`, prices.currentbody.restockingFee ?? prices.currentbody.price);
}

function localizeProductCopy(text: string, market: AdvertorialMarket, productKey: ProductPriceKey) {
  if (market.key === "uk") return text;

  const prices = market.productPrices;

  if (productKey === "buudy") {
    if (text.startsWith("Trusted by over 16,000 customers")) {
      return `Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at ${prices.buudy.price}, it offers the best value on the market, combining full-face and neck rejuvenation, advanced eye protection, and a 90-day money-back guarantee for a safer, lower-risk trial.`;
    }

    if (text.startsWith("Cost-effective:")) {
      return `Cost-effective: Currently priced at ${prices.buudy.price}, which is a 60% discount from its regular price of ${prices.buudy.originalPrice}.`;
    }

    if (text.startsWith("Limited Availability:")) {
      return `Limited Availability: Available for purchase online only in ${market.countryName}.`;
    }
  }

  if (productKey === "currentbody") {
    if (text.startsWith("Extremely High Price:")) {
      return `Extremely High Price: At ${prices.currentbody.price}, it is drastically more expensive than the Buudy mask (which is ${prices.buudy.price}).`;
    }

    if (text.startsWith("No Neck Coverage:")) {
      return "No Neck Coverage: The standard mask is for the face only. You must purchase the \"Face & Neck Kit\" for neck coverage, which comes standard with the Buudy mask.";
    }

    if (text.startsWith("Costly Money-Back Guarantee:")) {
      return `Costly Money-Back Guarantee: The 60-day money-back guarantee is not 100% free. Customers are charged a 10% restocking fee to return it, which would be about ${prices.currentbody.restockingFee} on a ${prices.currentbody.roundedPrice} mask.`;
    }
  }

  if (productKey === "omnilux") {
    if (text.startsWith("While it carries a premium price point")) {
      return `While it carries a premium price point of ${prices.omnilux.price}, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments.`;
    }

    if (text.startsWith("Extremely High Price:")) {
      return `Extremely High Price: At ${prices.omnilux.price}, it is significantly more expensive than the Buudy mask (${prices.buudy.price}).`;
    }

    if (text.startsWith("No Neck Coverage:")) {
      return `No Neck Coverage: The ${prices.omnilux.price} price is for the face mask only. A separate neck and chest piece must be purchased for an additional cost, making the total cost for full coverage around ${prices.omnilux.fullCoveragePrice}.`;
    }
  }

  if (productKey === "shark" && text.startsWith("Extremely High Price:")) {
    return `Extremely High Price: At ${prices.shark.price}, it is significantly more expensive than the Buudy mask (${prices.buudy.price}) for what is arguably less technology.`;
  }

  if (productKey === "drdenis") {
    if (text.startsWith("However, the staggering")) {
      return `However, the staggering ${prices.drdenis.price} price point makes it an incredibly expensive investment, especially given its limitations. With a rigid, unyielding hard plastic shell, many users report significant discomfort on the bridge of the nose and uneven light coverage across different bone structures.`;
    }

    if (text.startsWith("Astronomical Price Point:")) {
      return `Astronomical Price Point: At ${prices.drdenis.price}, you are paying a massive premium for the brand name. It costs more than double the price of top-tier, multi-functional alternatives.`;
    }

    if (text.startsWith("Zero Neck & Chest Coverage:")) {
      return `Zero Neck & Chest Coverage: For ${prices.drdenis.premiumPriceLabel}, the lack of a neck attachment is a glaring omission. Users risk the "floating head" aging effect, whereas better-value masks include neck and dÃ©colletage treatment as a standard feature.`;
    }
  }

  return replaceMarketPrices(replaceMarketLanguage(text, market), market);
}

function localizeBaseProduct(product: Product, market: AdvertorialMarket) {
  const productKey = productPriceKeys[product.id];
  const productPrice = market.productPrices[productKey];

  return {
    ...product,
    price: productPrice.price,
    originalPrice: productPrice.originalPrice,
    link: product.isWinner ? market.buudyUrl : product.link,
    description: product.description.map((copy) => localizeProductCopy(copy, market, productKey)),
    pros: product.pros.map((copy) => localizeProductCopy(copy, market, productKey)),
    cons: product.cons.map((copy) => localizeProductCopy(copy, market, productKey))
  };
}

function getCanadaProducts(market: AdvertorialMarket) {
  const buudy = localizeBaseProduct(baseProducts[0], market);
  const currentBody = {
    ...localizeBaseProduct(baseProducts[1], market),
    link: "https://amzn.to/4fL0JCN"
  };

  return [buudy, currentBody, ...canadaCompetitorProducts];
}

function getProductsForMarket(market: AdvertorialMarket) {
  if (market.key === "uk") return baseProducts;
  if (market.key === "ca") return getCanadaProducts(market);

  return baseProducts.map((product) => localizeBaseProduct(product, market));
}

function preventPlaceholderNavigation(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "#") {
    event.preventDefault();
  }
}

const outboundLoaderDots = [0, 1, 2, 3, 4];

function OutboundLoader() {
  return (
    <span className="flex h-6 items-center justify-center gap-1.5" aria-hidden="true">
      {outboundLoaderDots.map((dot) => (
        <span
          key={dot}
          className="outbound-loader-dot h-2.5 w-2.5 rounded-full bg-white"
          style={{ animationDelay: `${dot * 0.167}s` }}
        />
      ))}
    </span>
  );
}

type OutboundButtonProps = {
  href: string;
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
};

function OutboundButton({ href, className, ariaLabel, children }: OutboundButtonProps) {
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
      <span data-outbound-content="true">
        {children}
      </span>
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

export const CTAButton = ({ href, text, className = "" }: { href: string, text: string, className?: string }) => (
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

export const MetricBar: React.FC<{ label: string, value: number }> = ({ label, value }) => (
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

export default function Home({
  market: marketKey = "uk",
  context
}: { market?: AdvertorialMarketKey } & MarketContextProps) {
  const market = getAdvertorialMarket(marketKey);
  const products = getProductsForMarket(market);
  const heroImage = market.key === "ca"
    ? "/img/TOP 5 LED Mask.png"
    : "https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png";
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
      <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.12rem,5.6vw,1.58rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-7 md:mb-8 font-serif text-center">
            <span className="block whitespace-nowrap md:inline">Best LED Face Masks of 2026 in </span>
            <span className="block md:inline md:ml-2">{market.titleCountry}</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <img 
                src="/img/dr-megan-vincze.png" 
                alt="Dr. Megan Vincze" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left">
                <p className="font-bold text-slate-900 leading-tight">Dr. Megan Vincze</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Certified Dermatologist</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar size={16} className="text-emerald-500" />
              Last updated – {context.updatedDate}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl text-left text-sm md:text-base text-slate-600 leading-relaxed border border-slate-100 shadow-sm mb-12 max-w-4xl mx-auto">
            <p>
              <strong className="text-slate-900">Dr. Megan Vincze</strong>, a certified dermatologist and beauty technology expert, reviewed 18 popular {market.titleCountry} LED Face Mask options over 200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and guarantees. Her biggest finding was simple: the most expensive mask was not always the best choice. The strongest options used the right wavelengths, gave even face-and-neck coverage, and were easy enough to use consistently at home.
            </p>
          </div>

          <img 
            src={heroImage}
            alt={`Top LED masks comparison for ${market.titleCountry}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>LED face masks have exploded in {market.titleCountry}, but the market is confusing. Prices range from <strong>{market.priceRange}</strong>, and many brands make almost identical claims about collagen, acne, redness, and anti-ageing results.</p>
          <p>So we tested <strong>18 of the most popular LED masks</strong> over <strong>200+ hours</strong>, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, ease of use, reviews, price, and guarantees.</p>
          <p>The biggest finding was simple: a higher price did not always mean better results. The best masks used the right wavelengths, gave even face and neck coverage, and were easy enough to use consistently at home.</p>
          <p>Below, we rank the LED masks that actually stood out, including the one we believe offers the strongest balance of results, safety, comfort, and value for {market.buyerLabel}.</p>
        </div>

        {/* Criteria */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">We evaluated LED face masks based on 10 criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 md:gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
                <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
            Over the past three months, we have thoroughly tested <strong>18 different LED face masks</strong>. Based on <strong>hands-on evaluations</strong>, insights from <strong>board-certified dermatologists</strong>, and <strong>thousands of consumer reviews</strong>, the following five models stood out as the best in terms of <strong>performance, comfort, safety, and affordability</strong>.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative bg-white rounded-3xl shadow-sm border ${product.isWinner ? 'border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10' : 'border-slate-200'} p-6 md:p-10`}
            >
              {product.isWinner && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
                  <Award size={16} className="md:w-[18px] md:h-[18px]" />
                  #1 Editor's Choice
                </div>
              )}



              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                {/* Left Column: Image & Quick Stats */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2 className={`text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden ${product.isWinner ? 'mt-3' : ''}`}>
                      {product.rank} {product.name}
                    </h2>
                    
                    <a
                      href={product.link}
                      onClick={(event) => preventPlaceholderNavigation(event, product.link)}
                      className="block w-full mb-6 group"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </a>

                    <div className="text-center mb-2 lg:mb-6 w-full">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-extrabold text-slate-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-slate-400 line-through font-medium">{product.originalPrice}</span>
                        )}
                      </div>
                      <TrustpilotStars className="mb-2" tileClassName="h-6 w-6" iconSize={16} />
                      <p className="text-sm font-medium text-slate-500">Overall rating {product.rating}</p>
                    </div>

                    {shouldShowProductCta(product) && (
                      <div className="w-full hidden lg:block">
                        <CTAButton href={product.link} text={product.isWinner ? "Official Website" : "Shop Now"} className="w-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                    <a
                      href={product.link}
                      onClick={(event) => preventPlaceholderNavigation(event, product.link)}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {product.rank} {product.name}
                    </a>
                  </h2>

                  <div className="prose prose-slate prose-lg max-w-none mb-8">
                    {product.description.map((p, idx) => (
                      <p key={idx} className="text-slate-600 leading-relaxed">{p}</p>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar key={idx} label={metric.label} value={metric.value} />
                      ))}
                    </div>
                  </div>

                  {/* Mobile Pros & Cons */}
                  <MobileProsCons productId={product.id} marketKey={market.key} fallbackPros={product.pros} fallbackCons={product.cons} />

                  <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Pros */}
                    <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                      <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                        <CheckCircle2 className="text-emerald-500" /> Pros
                      </h4>
                      <ul className="space-y-4">
                        {product.pros.map((pro, idx) => {
                          const [bold, ...rest] = pro.split(':');
                          return (
                            <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                              <Check size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span><strong className="text-slate-900">{bold}:</strong>{rest.join(':')}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                      <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                        <XCircle className="text-red-500" /> Cons
                      </h4>
                      <ul className="space-y-4">
                        {product.cons.map((con, idx) => {
                          const [bold, ...rest] = con.split(':');
                          return (
                            <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                              <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                              <span><strong className="text-slate-900">{bold}:</strong><span dangerouslySetInnerHTML={{ __html: rest.join(':') }} /></span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  

                  {/* Editor's Tip - Free Gifts Discovery (Buudy only) */}
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
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                      
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
                          <span className="text-lg">💡</span> Editor's Tip
                        </div>
                        
                        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                          We found an active sale for <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">FREE GIFTS</span> worth {market.giftValues.total}!
                        </h4>
                        
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                          While doing our research, we found that Buudy is currently running a limited-time sale where you can get these premium accessories bundled for free with every mask purchase.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                          {/* Travel Box */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">Normally {market.giftValues.travelBox}</span>
                              <img 
                                src="/img/93-w.webp" 
                                alt="Premium Travel Box" 
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">Premium Travel Box</p>
                          </div>

                          {/* LED Torch */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce" style={{ animationDelay: '0.2s' }}>
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">Normally {market.giftValues.ledTorch}</span>
                              <img 
                                src="/img/35-w.webp" 
                                alt="Buudy LED Torch" 
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">Buudy LED Torch</p>
                          </div>

                          {/* E-Book */}
                          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce" style={{ animationDelay: '0.4s' }}>
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">Normally {market.giftValues.skincareGuide}</span>
                              <img 
                                src="/img/94-w.webp" 
                                alt="Skincare E-Book" 
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">Expert Skincare Guide</p>
                          </div>
                        </div>

                        <OutboundButton
                          href={market.buudyUrl}
                          ariaLabel="Check Availability"
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                            Check Availability <ChevronRight size={20} className="sm:hidden" /><ChevronRight size={24} className="hidden sm:block" />
                          </span>
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                        </OutboundButton>
                      </div>
                    </motion.div>
                  )}

                  {shouldShowProductCta(product) && (
                    <div className="w-full mt-8 lg:hidden">
                      <CTAButton href={product.link} text={product.isWinner ? "Official Website" : "Shop Now"} className="w-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verdict Section - Elegant Design */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Dermatologist's Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              
              {/* Left Video Area */}
              <div className="relative">
                <div className="relative mx-auto max-w-[190px] min-[380px]:max-w-[210px] sm:max-w-[240px] md:max-w-[300px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
                  <video
                    ref={verdictVideoRef}
                    className="block w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/assets/buudy-dermatologist-verdict-poster.jpg"
                    aria-label="Dermatologist walkthrough of the Buudy 7 Colour LED Mask"
                    onPlay={() => setIsVerdictVideoPlaying(true)}
                    onPause={() => setIsVerdictVideoPlaying(false)}
                    onEnded={() => setIsVerdictVideoPlaying(false)}
                  >
                    <source src="/assets/buudy-dermatologist-verdict.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    aria-label="Play dermatologist walkthrough video"
                    onClick={playVerdictVideo}
                    className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                      isVerdictVideoPlaying ? 'pointer-events-none opacity-0 scale-90' : 'opacity-100 scale-100'
                    }`}
                  >
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </button>
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8b1528] shadow-sm">
                    2 min demo
                  </div>
                </div>
                <p className="mt-4 text-center text-xs md:text-sm font-medium text-gray-600 leading-snug max-w-[240px] md:max-w-none mx-auto">
                  See the light modes, fit, eye area, and full-face coverage in a real product walkthrough.
                </p>
              </div>
              
              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  Buudy 7 Colour LED Mask
                </h3>
                
                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>
                
                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  Now at 60% off
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-gray-200 bg-white/70 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="font-bold text-base md:text-lg text-black font-sans">Excellent</span>
                    <TrustpilotStars tileClassName="h-5 w-5 md:h-6 md:w-6" iconSize={18} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 on <TrustpilotSingleStar className="h-4 w-4 md:h-5 md:w-5" iconSize={15} /> <span className="font-bold text-black">Trustpilot</span>
                  </div>
                </div>

                <OutboundButton
                  href={market.buudyUrl}
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <OutboundButton
          href={market.buudyUrl}
          ariaLabel="Take me to the winning LED Mask"
          className="w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">Take me to the winning LED Mask</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </OutboundButton>
      </div>
    </div>
  );
}
