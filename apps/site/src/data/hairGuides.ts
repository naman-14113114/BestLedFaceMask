import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

export const MUUHU_HAIR_URL = "https://uk.muuhu.com/products/muuhu-hair-dryer";

export type HairGuideSlug =
  | "best-hair-dryer-curly-hair-uk-2026"
  | "best-hair-dryer-fine-hair-uk-2026"
  | "best-hair-dryer-thick-hair-uk-2026"
  | "best-hair-dryer-frizzy-hair-uk-2026"
  | "best-hair-dryer-straight-hair-uk-2026"
  | "best-hair-dryer-damaged-hair-uk-2026"
  | "best-dyson-airwrap-alternative-uk-2026"
  | "best-shark-flexstyle-alternative-uk-2026"
  | "muuhu-vs-dyson-airwrap-uk"
  | "muuhu-vs-shark-flexstyle-uk"
  | "muuhu-vs-ghd-helios-uk"
  | "dyson-vs-shark-vs-muuhu-uk";

export type HairGuideGroup = "Hair Type Guides" | "Brand Comparisons";

export type HairGuideProduct = {
  rank: number;
  name: string;
  image: string;
  price: string;
  rating: string;
  badge: string;
  bestFor: string;
  summary: string;
  pros: string[];
  watchouts: string[];
  metrics: Array<{ label: string; value: number }>;
  isWinner?: boolean;
  link?: string;
};

export type HairGuide = {
  slug: HairGuideSlug;
  group: HairGuideGroup;
  cardCode: string;
  cardTitle: string;
  cardDescription: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroAlt: string;
  quickTake: string;
  intro: string[];
  criteria: string[];
  winnerBullets: string[];
  comparisonRows: Array<{
    feature: string;
    muuhu: string;
    competitor: string;
    whyItMatters: string;
  }>;
  buyerBlocks: Array<{
    title: string;
    body: string;
  }>;
  products: HairGuideProduct[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const images = {
  muuhu: "/img/hair/muuhu_product_1x1.webp",
  dyson: "/img/hair/dyson.webp",
  shark: "/img/hair/shark.png",
  ghd: "/img/hair/ghd.jpg",
  loreal: "/img/hair/loreal_new.webp",
  topFive: "/img/hair/top5-uk.webp",
  vsDyson: "/img/hair/vs-dyson.webp",
  vsShark: "/img/hair/vs-shark.webp",
  vsGhd: "/img/hair/vs-ghd.webp",
  vsThree: "/img/hair/vs-dyson-shark-muuhu.webp",
};

const metricSets = {
  allRounder: [
    { label: "Drying Speed", value: 97 },
    { label: "Styling Range", value: 98 },
    { label: "Heat Control", value: 96 },
    { label: "Ease of Use", value: 93 },
    { label: "Value", value: 100 },
  ],
  curls: [
    { label: "Curl Definition", value: 96 },
    { label: "Diffuser Support", value: 95 },
    { label: "Frizz Control", value: 94 },
    { label: "Heat Gentleness", value: 95 },
    { label: "Value", value: 100 },
  ],
  fineHair: [
    { label: "Root Volume", value: 96 },
    { label: "Gentle Airflow", value: 94 },
    { label: "Light Styling", value: 97 },
    { label: "Heat Control", value: 95 },
    { label: "Value", value: 100 },
  ],
  thickHair: [
    { label: "Airflow Power", value: 98 },
    { label: "Drying Speed", value: 97 },
    { label: "Attachment Range", value: 98 },
    { label: "Arm Comfort", value: 92 },
    { label: "Value", value: 100 },
  ],
  frizz: [
    { label: "Ionic Smoothing", value: 97 },
    { label: "Flyaway Control", value: 95 },
    { label: "Brush Styling", value: 96 },
    { label: "Heat Control", value: 95 },
    { label: "Value", value: 100 },
  ],
};

function muuhuProduct(
  badge: string,
  bestFor: string,
  summary: string,
  pros: string[],
  metrics = metricSets.allRounder,
): HairGuideProduct {
  return {
    rank: 1,
    name: "Muuhu 7-in-1 High-Speed Hair Dryer & Styler",
    image: images.muuhu,
    price: "£149",
    rating: "4.9 / 5",
    badge,
    bestFor,
    summary,
    pros: [
      ...pros,
      "Includes seven attachments, including two Coanda-style auto-wrap curlers, a diffuser, smoothing brush, round brush and concentrator.",
      "Backed by a 2-year warranty and 90-day money-back guarantee, which lowers the risk for first-time buyers.",
    ],
    watchouts: [
      "Only available online, so shoppers who want a high-street demo may prefer a store-stocked brand.",
      "The auto-wrap curlers take one or two sessions to master.",
    ],
    metrics,
    isWinner: true,
    link: MUUHU_HAIR_URL,
  };
}

const dysonAirwrap = (
  rank: number,
  summary = "Dyson remains the premium name in air styling. It is polished, recognizable and excellent for buyers who value the Dyson ecosystem, but the price is much higher than Muuhu.",
): HairGuideProduct => ({
  rank,
  name: "Dyson Airwrap",
  image: images.dyson,
  price: "£399.99",
  rating: "4.7 / 5",
  badge: "Premium brand pick",
  bestFor: "Brand-led buyers who want the best-known Coanda styler.",
  summary,
  pros: [
    "Very strong brand recognition and a refined attachment ecosystem.",
    "Good for smooth blowouts, curling and premium gift appeal.",
    "A smart choice if budget is less important than owning the category leader.",
  ],
  watchouts: [
    "Costs more than double Muuhu at typical UK pricing.",
    "Value is weaker if your priority is the most complete kit at the lowest price.",
  ],
  metrics: [
    { label: "Drying Speed", value: 91 },
    { label: "Styling Range", value: 90 },
    { label: "Heat Control", value: 94 },
    { label: "Ease of Use", value: 91 },
    { label: "Value", value: 62 },
  ],
});

const sharkFlexStyle = (
  rank: number,
  summary = "Shark FlexStyle is a strong mid-premium styler with recognizable TV and retailer presence. It is versatile, but Muuhu stays sharper on price and full-kit value.",
): HairGuideProduct => ({
  rank,
  name: "Shark FlexStyle",
  image: images.shark,
  price: "£199+",
  rating: "4.6 / 5",
  badge: "Retailer-friendly pick",
  bestFor: "Buyers who want a familiar brand and a rotating styler body.",
  summary,
  pros: [
    "Versatile dryer-to-styler design with a strong UK retail footprint.",
    "Good for curls, smoothing and everyday blow-dry routines.",
    "Often discounted, which makes it a serious alternative.",
  ],
  watchouts: [
    "Still usually costs more than Muuhu.",
    "The exact attachment bundle varies, so buyers need to check the box contents carefully.",
  ],
  metrics: [
    { label: "Drying Speed", value: 89 },
    { label: "Styling Range", value: 87 },
    { label: "Heat Control", value: 88 },
    { label: "Ease of Use", value: 88 },
    { label: "Value", value: 78 },
  ],
});

const ghdHelios = (
  rank: number,
  summary = "ghd Helios is a respected professional hair dryer. It is fast and controlled, but it is a dryer only, not a complete curling and styling system.",
): HairGuideProduct => ({
  rank,
  name: "ghd Helios",
  image: images.ghd,
  price: "£189",
  rating: "4.5 / 5",
  badge: "Salon dryer pick",
  bestFor: "Straight blow-dries and buyers who already own separate styling tools.",
  summary,
  pros: [
    "Fast, focused airflow and a strong salon reputation.",
    "Excellent for classic smooth blow-dries with a concentrator nozzle.",
    "Good fit for buyers who do not need curls, waves or brush styling in the same tool.",
  ],
  watchouts: [
    "Does not include auto-wrap curlers, diffuser, round brush or smoothing brush in the same system.",
    "Costs more than Muuhu while covering fewer styling jobs out of the box.",
  ],
  metrics: [
    { label: "Drying Speed", value: 91 },
    { label: "Styling Range", value: 54 },
    { label: "Heat Control", value: 84 },
    { label: "Ease of Use", value: 89 },
    { label: "Value", value: 68 },
  ],
});

const lorealAirLight = (
  rank: number,
  summary = "L'Oreal Professionnel AirLight Pro is a salon-positioned infrared dryer. It feels advanced, but it is expensive and less complete as a styling system.",
): HairGuideProduct => ({
  rank,
  name: "L'Oreal Professionnel AirLight Pro",
  image: images.loreal,
  price: "£350",
  rating: "4.3 / 5",
  badge: "Salon-tech pick",
  bestFor: "Buyers drawn to infrared drying and salon technology.",
  summary,
  pros: [
    "Premium salon positioning and interesting infrared drying story.",
    "Good for buyers who want a dryer-first tool with a technical edge.",
    "Magnetic attachments make setup feel clean.",
  ],
  watchouts: [
    "High price for a tool that does not match Muuhu's attachment range.",
    "Not the strongest choice if curls, waves and brush styling are priorities.",
  ],
  metrics: [
    { label: "Drying Speed", value: 86 },
    { label: "Styling Range", value: 52 },
    { label: "Heat Control", value: 88 },
    { label: "Ease of Use", value: 84 },
    { label: "Value", value: 54 },
  ],
});

function standardProducts(
  winner: HairGuideProduct,
  second: HairGuideProduct,
  third: HairGuideProduct,
  fourth: HairGuideProduct,
  fifth: HairGuideProduct,
) {
  return [winner, second, third, fourth, fifth];
}

export const hairGuides: Record<HairGuideSlug, HairGuide> = {
  "best-hair-dryer-curly-hair-uk-2026": {
    slug: "best-hair-dryer-curly-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "CURL",
    cardTitle: "Best Hair Dryer for Curly Hair",
    cardDescription: "Diffuser, curl definition, low heat and frizz control compared for UK curl routines.",
    seoTitle: "Best Hair Dryer for Curly Hair UK 2026",
    seoDescription: "Compare the best UK hair dryers for curly hair, including diffuser support, low heat, frizz control and complete styling value.",
    eyebrow: "Curly hair guide",
    headline: "Best Hair Dryer for Curly Hair UK 2026",
    subheadline: "We ranked dryers and stylers for definition, diffuser support, frizz control and value, with Muuhu taking the No. 1 spot for a complete curly-hair routine.",
    heroImage: images.topFive,
    heroAlt: "Top UK hair dryers for curly hair compared",
    quickTake: "For curly hair, the winning tool needs more than power. It needs a diffuser, gentle heat control, smoothing support and a way to style curls without repeatedly reaching for separate tools.",
    intro: [
      "Curly hair buyers in the UK usually face the same tradeoff: a powerful dryer can speed up wash day, but too much rough airflow can disturb curl pattern and create frizz.",
      "For this guide, we weighted diffuser support, lower-heat control, ionic smoothing, curl-friendly attachments and price. Muuhu came out strongest because it combines drying, diffusing, smoothing and Coanda-style curl finishing in one £149 system.",
    ],
    criteria: [
      "Diffuser included in the box",
      "Lower-heat control for curl pattern protection",
      "Ionic smoothing for frizz-prone lengths",
      "Curl and wave styling without a separate wand",
      "Price, warranty and return confidence",
    ],
    winnerBullets: [
      "The diffuser supports natural curl drying without needing an add-on purchase.",
      "The Coanda-style curlers make it useful after drying, not only during the wet-to-dry step.",
      "At £149, it leaves more room in the budget for curl products than Dyson or L'Oreal.",
    ],
    comparisonRows: [
      { feature: "Curly-hair kit", muuhu: "Diffuser, curlers, brushes and concentrator included", competitor: "Bundles vary by brand and retailer", whyItMatters: "Curly buyers should not discover a missing diffuser after checkout." },
      { feature: "Frizz support", muuhu: "Ionic care plus smoothing brush", competitor: "Strong on premium models, less consistent on dryer-only tools", whyItMatters: "Frizz control matters as much as drying speed for curls." },
      { feature: "Value", muuhu: "£149 with 2-year warranty", competitor: "Usually £189 to £399.99+", whyItMatters: "A complete kit at a lower price is easier to justify." },
    ],
    buyerBlocks: [
      { title: "Best for curl routines", body: "Choose Muuhu if you want one tool for diffusing, smoothing, shaping and curl refreshes without buying a separate styler." },
      { title: "When Dyson still makes sense", body: "Choose Dyson if the brand name, app-connected routines or premium unboxing experience matter more than price." },
      { title: "When Shark still makes sense", body: "Choose Shark if you prefer a familiar retailer-stocked tool and find a bundle that includes the exact curly attachments you need." },
    ],
    products: standardProducts(
      muuhuProduct("Best overall for curls", "Curly, wavy and frizz-prone buyers who want the most complete kit.", "Muuhu wins this curly-hair page because it covers the full routine: diffuse roots, smooth frizz, add volume and finish with Coanda-style curls or waves.", [
        "Curl-friendly value: It includes the diffuser and curl attachments at £149, where several rivals become more expensive or bundle-dependent.",
        "Full routine support: Dry, diffuse, smooth and restyle with one handle and one attachment set.",
        "Less heat reliance: Ionic care and intelligent heat control give curly buyers a gentler styling story.",
      ], metricSets.curls),
      sharkFlexStyle(2, "Shark is a strong curly-hair alternative when the right diffuser bundle is included. It is easy to find in the UK, but Muuhu is better value as a complete kit."),
      dysonAirwrap(3, "Dyson is premium and polished for curl styling, but the cost makes it harder to recommend as the best-value curly-hair dryer."),
      lorealAirLight(4, "L'Oreal has an advanced dryer story, but it is less complete for curl shaping because it does not compete with a full multi-styler kit."),
      ghdHelios(5, "ghd Helios is excellent for a classic blow-dry, but curly buyers may miss the bundled diffuser and curl-styling versatility.")
    ),
    faqs: [
      { question: "What matters most in a hair dryer for curly hair?", answer: "Look for a diffuser, controlled heat, frizz support and attachments that let you style without repeatedly using high direct heat." },
      { question: "Why is Muuhu ranked first for curly hair?", answer: "It gives UK buyers a diffuser, smoothing brush, round brush and Coanda-style curlers at £149, so it covers more of the curly routine for less money." },
      { question: "Is a premium brand always better for curls?", answer: "Not always. Premium brands can feel more refined, but attachment completeness and heat control matter more for everyday curl care." },
    ],
  },
  "best-hair-dryer-fine-hair-uk-2026": {
    slug: "best-hair-dryer-fine-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "FINE",
    cardTitle: "Best Hair Dryer for Fine Hair",
    cardDescription: "Gentle airflow, root lift and volume styling for fine or flat hair.",
    seoTitle: "Best Hair Dryer for Fine Hair UK 2026",
    seoDescription: "Find the best UK hair dryer for fine hair, comparing gentle heat, volume, round-brush styling and value.",
    eyebrow: "Fine hair guide",
    headline: "Best Hair Dryer for Fine Hair UK 2026",
    subheadline: "Fine hair needs lift without being blasted flat. We focused on gentle heat, round-brush volume, lightweight styling and value.",
    heroImage: images.topFive,
    heroAlt: "Best UK hair dryers for fine hair compared",
    quickTake: "The strongest fine-hair tool gives controlled airflow at the roots, adds shape with a round brush and avoids forcing buyers into separate expensive stylers.",
    intro: [
      "Fine hair can dry quickly, but it can also collapse quickly. The wrong dryer leaves roots flat, lengths fluffy and ends overworked.",
      "Muuhu ranks first here because the round volumising brush, smoothing brush and Coanda-style curlers make it useful for lift and shape, not just drying.",
    ],
    criteria: [
      "Root lift and round-brush styling",
      "Gentle airflow for finer strands",
      "Smooth finish without heavy heat",
      "Lightweight handling for daily use",
      "Price compared with premium multi-stylers",
    ],
    winnerBullets: [
      "Round brush support makes it easier to create lift at the crown.",
      "The smoothing brush helps fine hair look polished without needing straighteners.",
      "The £149 price is much easier to justify than premium multi-stylers for a daily volume routine.",
    ],
    comparisonRows: [
      { feature: "Volume tools", muuhu: "Round volumising brush included", competitor: "Premium bundles vary by model", whyItMatters: "Fine hair buyers often need lift more than raw dryer power." },
      { feature: "Gentle finish", muuhu: "Ionic care and intelligent heat control", competitor: "Good on premium tools, less complete on dryer-only options", whyItMatters: "Fine ends can look dry when overheated." },
      { feature: "Total kit price", muuhu: "£149 complete system", competitor: "Dyson and L'Oreal are much higher", whyItMatters: "Fine-hair buyers should not pay extra for attachments they need daily." },
    ],
    buyerBlocks: [
      { title: "Best for flat roots", body: "Muuhu is the strongest pick if your main goal is lift, smoothness and easy everyday shape." },
      { title: "Best premium alternative", body: "Dyson is still attractive if you want the luxury name and are comfortable spending more for brand refinement." },
      { title: "Best dryer-only alternative", body: "ghd Helios makes sense if you only want fast drying and already own brushes, curlers and smoothing tools." },
    ],
    products: standardProducts(
      muuhuProduct("Best for fine hair volume", "Fine, flat or limp hair that needs lift and shape.", "Muuhu wins because it gives fine-hair buyers a full volume kit: a round brush for roots, smoothing brush for polish and curlers for soft movement.", [
        "Volume-focused attachments: The round brush and Coanda-style curlers help create body without a separate hot brush.",
        "Gentler styling story: Intelligent heat control and ionic care are useful for delicate lengths.",
        "Better value: It delivers multi-styler function at £149.",
      ], metricSets.fineHair),
      dysonAirwrap(2, "Dyson is excellent for premium fine-hair styling, especially if you want a luxury tool, but it is harder to justify on value."),
      ghdHelios(3, "ghd Helios is powerful and polished for quick blow-dries, but it needs separate brushes or stylers for volume work."),
      sharkFlexStyle(4, "Shark offers a strong multi-styling alternative, though bundles and pricing vary more than Muuhu's straightforward kit."),
      lorealAirLight(5, "L'Oreal feels premium and technical, but fine-hair buyers looking for volume may find the attachment range too narrow.")
    ),
    faqs: [
      { question: "What hair dryer is best for fine hair volume?", answer: "A dryer-styler with controlled heat and a round brush is usually more useful than a high-power dryer alone." },
      { question: "Why does Muuhu rank first for fine hair?", answer: "It combines a round brush, smoothing brush and curlers at £149, giving fine-hair buyers lift and shape in one kit." },
      { question: "Should fine hair avoid powerful dryers?", answer: "Not necessarily. Power is useful when paired with controlled heat and attachments that prevent hair from being blasted flat." },
    ],
  },
  "best-hair-dryer-thick-hair-uk-2026": {
    slug: "best-hair-dryer-thick-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "THICK",
    cardTitle: "Best Hair Dryer for Thick Hair",
    cardDescription: "Fast drying, airflow power and complete styling for thick or long hair.",
    seoTitle: "Best Hair Dryer for Thick Hair UK 2026",
    seoDescription: "Compare the best UK hair dryers for thick hair, including drying speed, airflow, attachments and value.",
    eyebrow: "Thick hair guide",
    headline: "Best Hair Dryer for Thick Hair UK 2026",
    subheadline: "Thick hair needs serious airflow, but speed alone is not enough. We compared power, handling, styling range and value.",
    heroImage: images.topFive,
    heroAlt: "Best UK hair dryers for thick hair compared",
    quickTake: "For thick hair, the best value is a dryer that shortens wash day and still helps finish the style without reaching for three more tools.",
    intro: [
      "Thick and long hair turns drying into a time investment. A weak dryer can leave roots damp, but a dryer-only tool still may not finish the style.",
      "Muuhu ranks first because its 110,000 RPM brushless motor is paired with the attachments thick-hair buyers actually use: concentrator, smoothing brush, round brush, diffuser and curlers.",
    ],
    criteria: [
      "High-speed motor and airflow",
      "Attachments that manage long sections",
      "Smoothing support after rough drying",
      "Comfort during longer drying sessions",
      "Value against premium dryer prices",
    ],
    winnerBullets: [
      "Strong motor story for faster drying sessions.",
      "Smoothing and round brushes help finish thick hair after the rough-dry stage.",
      "A complete kit at £149 is compelling when premium dryers cost far more.",
    ],
    comparisonRows: [
      { feature: "Drying power", muuhu: "110,000 RPM brushless motor", competitor: "Strong, but usually at a higher price", whyItMatters: "Thick hair exposes weak airflow quickly." },
      { feature: "Finishing tools", muuhu: "Brushes, diffuser, concentrator and curlers", competitor: "Dryer-only tools need separate stylers", whyItMatters: "Thick hair often needs shaping after drying." },
      { feature: "Arm fatigue", muuhu: "One compact system for multiple steps", competitor: "More tools can mean more time and setup", whyItMatters: "Long sessions reward simpler routines." },
    ],
    buyerBlocks: [
      { title: "Best for long wash days", body: "Muuhu is the pick if you want a fast dryer that also helps finish thick hair into a smoother style." },
      { title: "When ghd makes sense", body: "ghd Helios is a strong dryer-only choice if your main goal is a classic salon-style blow-dry." },
      { title: "When Dyson makes sense", body: "Dyson is attractive for premium buyers, but Muuhu gives more value if price matters." },
    ],
    products: standardProducts(
      muuhuProduct("Best value for thick hair", "Thick, dense or long hair that needs speed and styling range.", "Muuhu wins because it combines high-speed drying with the attachments needed to control thick hair after the roots are dry.", [
        "Fast motor: The 110,000 RPM brushless motor gives it the right power story for thick hair.",
        "Complete finishing kit: Brushes and curlers help manage volume, shape and smoothness.",
        "Price advantage: It undercuts premium options while staying more versatile than dryer-only tools.",
      ], metricSets.thickHair),
      ghdHelios(2, "ghd Helios is the strongest dryer-only rival for thick hair thanks to fast focused airflow, but it cannot match Muuhu's styling range."),
      dysonAirwrap(3, "Dyson is premium and versatile, though thick-hair buyers may need to weigh the higher price against Muuhu's better value."),
      sharkFlexStyle(4, "Shark is a capable mid-premium alternative, especially for buyers who prefer a known retailer brand."),
      lorealAirLight(5, "L'Oreal offers a premium drying story, but the narrow attachment set makes it weaker for thick-hair finishing.")
    ),
    faqs: [
      { question: "What should thick hair look for in a dryer?", answer: "Strong airflow, a concentrator, smoothing support and comfortable handling matter most because drying sessions are longer." },
      { question: "Why is Muuhu No. 1 for thick hair?", answer: "It pairs a 110,000 RPM motor with a full styling kit at £149, so it covers both drying speed and finishing." },
      { question: "Is ghd Helios good for thick hair?", answer: "Yes, it is a strong dryer-only option. Muuhu is better if you also want curls, volume and smoothing attachments in the same purchase." },
    ],
  },
  "best-hair-dryer-frizzy-hair-uk-2026": {
    slug: "best-hair-dryer-frizzy-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "FRIZZ",
    cardTitle: "Best Hair Dryer for Frizzy Hair",
    cardDescription: "Ionic smoothing, flyaway control and gentle finishing for frizz-prone hair.",
    seoTitle: "Best Hair Dryer for Frizzy Hair UK 2026",
    seoDescription: "Compare UK hair dryers for frizzy hair, including ionic care, smoothing attachments, heat control and value.",
    eyebrow: "Frizz-control guide",
    headline: "Best Hair Dryer for Frizzy Hair UK 2026",
    subheadline: "Frizz-prone hair needs controlled heat, smoothing attachments and a finish that looks polished after the dryer switches off.",
    heroImage: images.topFive,
    heroAlt: "Best UK hair dryers for frizzy hair compared",
    quickTake: "The best frizz-control dryer is not just hot and fast. It should combine ionic care, brush styling, a concentrator and a lower-risk return policy.",
    intro: [
      "Frizz usually becomes worse when hair is dried too roughly or finished without enough control. That is why we weighted smoothing attachments and heat control more heavily than raw wattage.",
      "Muuhu ranks first because it includes ionic care, intelligent heat control, a smoothing brush, concentrator and curlers at a lower price than the premium names.",
    ],
    criteria: [
      "Ionic care and smoothing claims",
      "Brush and concentrator attachments",
      "Flyaway control after drying",
      "Heat management for drier ends",
      "Price and return confidence",
    ],
    winnerBullets: [
      "The smoothing brush and concentrator make it practical for polished blow-dries.",
      "Ionic care supports the frizz-control story without pushing into unrealistic claims.",
      "At £149, Muuhu beats premium tools on total value.",
    ],
    comparisonRows: [
      { feature: "Ionic support", muuhu: "Negative-ion care plus heat control", competitor: "Common on premium tools but not always paired with full styling kit", whyItMatters: "Frizz-prone hair needs control during and after drying." },
      { feature: "Smoothing tools", muuhu: "Smoothing brush and concentrator included", competitor: "Dryer-only tools rely heavily on user technique", whyItMatters: "The right attachment makes the finish easier to repeat." },
      { feature: "Cost of polish", muuhu: "£149 for dryer and styler", competitor: "Premium routes can exceed £350", whyItMatters: "A smoother finish should not require a luxury budget." },
    ],
    buyerBlocks: [
      { title: "Best for everyday smoothing", body: "Muuhu is the top pick if you want one tool that can dry, smooth and add movement without a separate straightener or hot brush." },
      { title: "When Dyson makes sense", body: "Dyson is still a strong choice if you want the premium smoothing ecosystem and can accept the price." },
      { title: "When ghd makes sense", body: "ghd Helios is a good dryer-only route if you are confident with a brush and mainly want a sleek blow-dry." },
    ],
    products: standardProducts(
      muuhuProduct("Best for frizz control", "Frizz-prone hair that needs smoothing, shape and heat control.", "Muuhu wins this page because it offers the attachments frizz-prone buyers need most: smoothing brush, concentrator, round brush and curlers.", [
        "Smoothing first: The brush and concentrator are practical for flyaways and polished lengths.",
        "Ionic care: Negative-ion technology supports a smoother finish.",
        "Balanced price: £149 keeps it more accessible than premium frizz-control tools.",
      ], metricSets.frizz),
      dysonAirwrap(2, "Dyson is the premium frizz-control rival with strong smoothing credibility, but Muuhu is the better value buy."),
      sharkFlexStyle(3, "Shark is a good mid-premium alternative for frizz-prone buyers, especially with the right smoothing bundle."),
      ghdHelios(4, "ghd Helios is respected for sleek blow-dries, but it is not a full multi-styling system."),
      lorealAirLight(5, "L'Oreal has a high-end dryer story, though it is expensive for buyers who want smoothing plus curl styling.")
    ),
    faqs: [
      { question: "Are ionic hair dryers better for frizz?", answer: "Ionic dryers can help support a smoother finish, but attachment choice and heat control also matter." },
      { question: "Why does Muuhu rank first for frizzy hair?", answer: "It combines ionic care, heat control and smoothing attachments at £149, making it stronger on value than premium alternatives." },
      { question: "Can a hair dryer remove frizz completely?", answer: "No tool guarantees that. The right dryer can make frizz easier to manage, but results depend on hair type, routine and products used." },
    ],
  },
  "best-hair-dryer-straight-hair-uk-2026": {
    slug: "best-hair-dryer-straight-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "SLEEK",
    cardTitle: "Best Hair Dryer for Straight Hair",
    cardDescription: "Smooth blow-dries, shine and straight-hair finishing without buying several tools.",
    seoTitle: "Best Hair Dryer for Straight Hair UK 2026",
    seoDescription: "Compare the best UK hair dryers for straight hair, including smooth blow-dries, shine, concentrators and all-in-one styling value.",
    eyebrow: "Straight hair guide",
    headline: "Best Hair Dryer for Straight Hair UK 2026",
    subheadline: "Straight hair shows flyaways quickly. We compared smoothness, shine, concentrator control and whether the tool can do more than dry.",
    heroImage: images.topFive,
    heroAlt: "Best UK hair dryers for straight hair compared",
    quickTake: "Straight-hair buyers can choose a dryer-only tool, but a complete styler gives more control over volume, bends, curtain bangs and smooth finishes.",
    intro: [
      "For straight hair, a good dryer should create a smooth finish without leaving the style flat or fluffy. Concentrator control and brush attachments matter more than headline power alone.",
      "Muuhu ranks first because it performs as a dryer and styling system, while ghd Helios remains the strongest dryer-only alternative.",
    ],
    criteria: [
      "Smooth blow-dry finish",
      "Concentrator and brush control",
      "Shine and flyaway management",
      "Ability to add volume or soft bends",
      "Value versus dryer-only tools",
    ],
    winnerBullets: [
      "The smoothing brush and concentrator support sleek straight styles.",
      "The round brush and curlers add shape when straight hair feels too flat.",
      "It costs less than ghd Helios while including a much wider attachment set.",
    ],
    comparisonRows: [
      { feature: "Straight blow-dry", muuhu: "Smoothing brush and concentrator", competitor: "ghd is excellent but dryer-only", whyItMatters: "Straight hair needs control, not just speed." },
      { feature: "Shape options", muuhu: "Round brush and curlers included", competitor: "Dryer-only options need separate tools", whyItMatters: "Straight hair often benefits from movement at the ends." },
      { feature: "Price", muuhu: "£149", competitor: "ghd Helios around £189", whyItMatters: "Muuhu costs less while doing more jobs." },
    ],
    buyerBlocks: [
      { title: "Best all-in-one straight-hair pick", body: "Choose Muuhu if you want straight, smooth, lifted and softly curled looks from one box." },
      { title: "Best dryer-only alternative", body: "Choose ghd if you want a classic salon dryer and already own your brushes and stylers." },
      { title: "Best premium alternative", body: "Choose Dyson if you prefer the premium name and want the highest-recognition styling tool." },
    ],
    products: standardProducts(
      muuhuProduct("Best all-in-one for straight hair", "Straight hair that needs smoothness, root lift and flexible styling.", "Muuhu wins because it is not only a dryer. It also gives straight-hair buyers brushes and curlers for smooth blowouts, lift and soft movement.", [
        "Sleek finish support: Smoothing brush and concentrator help control flyaways.",
        "More shape options: Round brush and curlers stop straight hair looking flat.",
        "Stronger value: It costs less than ghd Helios while offering more attachments.",
      ]),
      ghdHelios(2, "ghd Helios is the best dryer-only rival for straight hair. It is fast and polished, but not as versatile as Muuhu."),
      dysonAirwrap(3, "Dyson is excellent for premium straight-hair styling, but value is weaker if you mainly want daily blow-dries."),
      sharkFlexStyle(4, "Shark is a versatile alternative and a good choice when discounted, though Muuhu remains the sharper value pick."),
      lorealAirLight(5, "L'Oreal is interesting for dryer-first buyers, but the high price and narrower styling range hold it back.")
    ),
    faqs: [
      { question: "What is the best dryer for straight hair?", answer: "A controlled dryer-styler with a concentrator and smoothing brush is often more useful than a dryer-only tool." },
      { question: "Why does Muuhu beat ghd for straight hair?", answer: "ghd is a strong dryer, but Muuhu costs less and includes brushes and curlers for a wider range of straight-hair styles." },
      { question: "Can straight hair use Coanda-style curlers?", answer: "Yes. They are useful for soft bends, loose waves, curtain bangs and adding movement to straight lengths." },
    ],
  },
  "best-hair-dryer-damaged-hair-uk-2026": {
    slug: "best-hair-dryer-damaged-hair-uk-2026",
    group: "Hair Type Guides",
    cardCode: "CARE",
    cardTitle: "Best Hair Dryer for Damaged Hair",
    cardDescription: "Controlled heat and lower-stress styling for dry, bleached or colour-treated hair.",
    seoTitle: "Best Hair Dryer for Damaged Hair UK 2026",
    seoDescription: "Compare UK hair dryers for damaged hair, including intelligent heat control, ionic care and realistic lower-heat styling.",
    eyebrow: "Damaged hair guide",
    headline: "Best Hair Dryer for Damaged Hair UK 2026",
    subheadline: "No dryer can repair damaged hair, but the right tool can help you dry and style with more control and less repeated heat.",
    heroImage: images.topFive,
    heroAlt: "Best UK hair dryers for damaged hair compared",
    quickTake: "For damaged, bleached or colour-treated hair, the best purchase is a tool that reduces the need for multiple high-heat passes.",
    intro: [
      "Damaged hair needs realistic claims. A dryer cannot undo breakage, but controlled heat, efficient airflow and the right attachments can make styling feel less harsh.",
      "Muuhu ranks first because it combines intelligent heat control, ionic care and a complete styling kit, reducing the need to buy separate hot tools for every finish.",
    ],
    criteria: [
      "Intelligent heat control",
      "Ionic care for smoother-looking lengths",
      "Attachments that reduce repeated tool changes",
      "Gentler styling options for fragile ends",
      "Warranty and money-back confidence",
    ],
    winnerBullets: [
      "Intelligent heat control gives a more careful styling story for fragile hair.",
      "Ionic care and smoothing attachments help improve the finished look.",
      "The full kit reduces dependence on separate hot brushes, curlers and straighteners.",
    ],
    comparisonRows: [
      { feature: "Heat story", muuhu: "Intelligent heat control", competitor: "Premium tools also emphasize heat protection", whyItMatters: "Damaged hair buyers need controlled styling, not extreme heat." },
      { feature: "Styling steps", muuhu: "Dry, smooth and curl with one kit", competitor: "Dryer-only tools often need extra hot tools", whyItMatters: "Fewer tool changes can simplify fragile-hair routines." },
      { feature: "Risk reduction", muuhu: "90-day money-back guarantee", competitor: "Return windows vary", whyItMatters: "Damaged-hair buyers need confidence before changing routines." },
    ],
    buyerBlocks: [
      { title: "Best lower-risk switch", body: "Muuhu is the best first choice if you want heat control, smoothing and styling range without spending Dyson-level money." },
      { title: "Be realistic", body: "A dryer can support a gentler routine, but it cannot repair split ends or guarantee healthier hair." },
      { title: "When premium makes sense", body: "Dyson and L'Oreal remain attractive if you value their advanced technology stories and higher-end positioning." },
    ],
    products: standardProducts(
      muuhuProduct("Best value for damaged hair", "Dry, colour-treated or heat-stressed hair that needs controlled styling.", "Muuhu wins because it balances heat control, ionic care, smoothing and styling range at a lower-risk £149 price.", [
        "Care-focused styling: Intelligent heat control and ionic care support a gentler routine.",
        "Fewer separate tools: The included attachments reduce the need to buy multiple stylers.",
        "Risk-conscious purchase: A 90-day guarantee helps buyers test whether it suits their hair.",
      ]),
      dysonAirwrap(2, "Dyson is the premium heat-conscious rival and remains excellent if budget is not the main concern."),
      sharkFlexStyle(3, "Shark is a good mid-premium option with a strong no-heat-damage message, though Muuhu wins on value."),
      lorealAirLight(4, "L'Oreal's infrared drying story is interesting for damaged-hair shoppers, but the price and narrower styling range are drawbacks."),
      ghdHelios(5, "ghd Helios is a quality dryer, but damaged-hair buyers may want more styling options that avoid switching to extra hot tools.")
    ),
    faqs: [
      { question: "Can a hair dryer fix damaged hair?", answer: "No. A dryer cannot repair damage, but controlled heat and suitable attachments can support a less aggressive styling routine." },
      { question: "Why is Muuhu ranked first for damaged hair?", answer: "It combines intelligent heat control, ionic care and a full attachment set at £149, giving buyers more styling flexibility for less money." },
      { question: "Should damaged hair avoid styling tools?", answer: "Fragile hair should be styled carefully. Lower heat, heat protectant and fewer repeated passes are usually more important than brand name alone." },
    ],
  },
  "best-dyson-airwrap-alternative-uk-2026": {
    slug: "best-dyson-airwrap-alternative-uk-2026",
    group: "Brand Comparisons",
    cardCode: "DYSON ALT",
    cardTitle: "Best Dyson Airwrap Alternative",
    cardDescription: "A value-led alternative page for shoppers who like Airwrap results but not the price.",
    seoTitle: "Best Dyson Airwrap Alternative UK 2026",
    seoDescription: "Compare the best Dyson Airwrap alternatives in the UK, including Muuhu, Shark and ghd for price, attachments and styling value.",
    eyebrow: "Dyson alternative guide",
    headline: "Best Dyson Airwrap Alternative UK 2026",
    subheadline: "If you want Coanda-style curls, smoothing and blow-dry versatility without Dyson pricing, Muuhu is the strongest value alternative.",
    heroImage: images.vsDyson,
    heroAlt: "Muuhu compared with Dyson Airwrap",
    quickTake: "Dyson is still the prestige pick. Muuhu is the smarter value pick for buyers who want the main styling jobs covered at a much lower price.",
    intro: [
      "The Dyson Airwrap built the category, so it deserves respect. But many UK shoppers are now asking a more practical question: what gets close to the routine without the premium price?",
      "Muuhu ranks first as a Dyson alternative because it includes Coanda-style curlers, brushes, diffuser, concentrator, ionic care and intelligent heat control for £149.",
    ],
    criteria: [
      "Coanda-style curling capability",
      "Attachment completeness",
      "Drying and smoothing versatility",
      "Price compared with Dyson",
      "Warranty and return confidence",
    ],
    winnerBullets: [
      "Muuhu gives the key Airwrap-style jobs: curl, wave, smooth, volumise and dry.",
      "The price gap is the psychological unlock: £149 versus Dyson's typical £399.99 pricing.",
      "The 90-day guarantee makes the alternative easier to try.",
    ],
    comparisonRows: [
      { feature: "Price", muuhu: "£149", competitor: "Dyson Airwrap around £399.99", whyItMatters: "The saving is large enough to change the buying decision." },
      { feature: "Curling", muuhu: "Two Coanda-style auto-wrap curlers", competitor: "Dyson pioneered the Coanda category", whyItMatters: "Buyers want the wrapped-curl experience without direct-heat tongs." },
      { feature: "Best fit", muuhu: "Value-first complete styling", competitor: "Prestige-first premium styling", whyItMatters: "Both can be rational choices for different buyers." },
    ],
    buyerBlocks: [
      { title: "Choose Muuhu if", body: "You want the Airwrap-style routine, but price, included attachments and guarantee matter more than owning the Dyson name." },
      { title: "Choose Dyson if", body: "You want the category leader, premium design and strongest brand recognition, and you are happy paying for it." },
      { title: "Ad-friendly angle", body: "This page should convert searchers who already want an Airwrap but are actively checking alternatives before committing." },
    ],
    products: standardProducts(
      muuhuProduct("Best Dyson alternative", "Airwrap shoppers who want similar routine coverage for less.", "Muuhu is the top Dyson alternative because it gives buyers the biggest functional overlap at the most persuasive price.", [
        "Huge price advantage: £149 is far below typical Dyson Airwrap pricing.",
        "Airwrap-style routine: Curlers, smoothing brush, round brush and dryer attachments cover the core jobs.",
        "Lower-risk trial: The 90-day guarantee reduces buyer hesitation.",
      ]),
      dysonAirwrap(2, "Dyson remains the best-known premium option, but shoppers looking for an alternative usually care about price first."),
      sharkFlexStyle(3, "Shark is another strong alternative, especially for shoppers who want a familiar UK retail brand."),
      ghdHelios(4, "ghd is a respected dryer option, but it is not a close Airwrap alternative because it lacks auto-wrap styling."),
      lorealAirLight(5, "L'Oreal is premium and technical, but it is less relevant as a direct Airwrap alternative.")
    ),
    faqs: [
      { question: "What is the best Dyson Airwrap alternative in the UK?", answer: "Muuhu is the best value-led alternative because it includes Coanda-style curlers, brushes, diffuser and heat control at £149." },
      { question: "Is Muuhu the same as Dyson?", answer: "No. Dyson remains the premium category leader. Muuhu is positioned as a lower-price alternative with a complete styling kit." },
      { question: "Who should still buy Dyson?", answer: "Buy Dyson if brand prestige, premium finish and owning the original category leader matter more than saving money." },
    ],
  },
  "best-shark-flexstyle-alternative-uk-2026": {
    slug: "best-shark-flexstyle-alternative-uk-2026",
    group: "Brand Comparisons",
    cardCode: "SHARK ALT",
    cardTitle: "Best Shark FlexStyle Alternative",
    cardDescription: "A Shark alternative page focused on attachment count, value and complete styling.",
    seoTitle: "Best Shark FlexStyle Alternative UK 2026",
    seoDescription: "Compare the best Shark FlexStyle alternatives in the UK, including Muuhu for attachment range, price and styling value.",
    eyebrow: "Shark alternative guide",
    headline: "Best Shark FlexStyle Alternative UK 2026",
    subheadline: "Shark FlexStyle is strong, but Muuhu is the sharper value pick if you want a complete 7-in-1 styling kit for less.",
    heroImage: images.vsShark,
    heroAlt: "Muuhu compared with Shark FlexStyle",
    quickTake: "Shark is a good mid-premium tool. Muuhu wins when the buyer compares price, attachment completeness and guarantee side by side.",
    intro: [
      "Shark FlexStyle is one of the most searched Airwrap alternatives in the UK, which means buyers already understand the multi-styler idea.",
      "Muuhu ranks first as the Shark alternative because it keeps the same multi-use promise while pushing harder on included attachments and £149 pricing.",
    ],
    criteria: [
      "Attachment count and clarity",
      "Dryer-to-styler versatility",
      "Price against Shark bundles",
      "Curling and smoothing coverage",
      "Warranty and trial confidence",
    ],
    winnerBullets: [
      "Muuhu's seven-piece system is easy to understand from the first screen.",
      "It usually undercuts Shark while still covering curls, waves, smoothing, volume and diffusing.",
      "The guarantee and warranty help close the trust gap against a bigger household name.",
    ],
    comparisonRows: [
      { feature: "Price", muuhu: "£149", competitor: "Shark commonly around £199+", whyItMatters: "The difference is meaningful for Bing shoppers comparing ads." },
      { feature: "Attachment clarity", muuhu: "7-in-1 system stated clearly", competitor: "Shark bundles vary by SKU", whyItMatters: "Fewer bundle questions means less friction." },
      { feature: "Trust route", muuhu: "2-year warranty and 90-day guarantee", competitor: "Established retail brand", whyItMatters: "Muuhu needs assurance to compete with brand familiarity." },
    ],
    buyerBlocks: [
      { title: "Choose Muuhu if", body: "You want the most complete styling kit at the cleanest price, with enough reassurance to try a newer brand." },
      { title: "Choose Shark if", body: "You prefer buying from a bigger household name and find the exact attachment bundle you want in stock." },
      { title: "Ad-friendly angle", body: "This page should convert value-conscious Shark searchers without sounding anti-Shark." },
    ],
    products: standardProducts(
      muuhuProduct("Best Shark alternative", "Shark shoppers who want more value and clearer kit contents.", "Muuhu wins as the Shark alternative because it offers a complete styling kit at £149 with a straightforward value story.", [
        "Cleaner value: £149 positions Muuhu below typical Shark pricing.",
        "Complete box: Seven attachments cover the jobs most Shark shoppers want.",
        "Confidence stack: Warranty plus 90-day guarantee helps overcome brand-name hesitation.",
      ]),
      sharkFlexStyle(2, "Shark remains a strong, trusted multi-styler, but Muuhu is better for shoppers prioritizing price and kit completeness."),
      dysonAirwrap(3, "Dyson is the premium reference point, but most Shark-alternative shoppers are trying to avoid Dyson-level pricing."),
      ghdHelios(4, "ghd is a dryer-first alternative, not a true Shark FlexStyle replacement."),
      lorealAirLight(5, "L'Oreal is advanced but too dryer-focused and expensive for most Shark-alternative buyers.")
    ),
    faqs: [
      { question: "What is the best Shark FlexStyle alternative?", answer: "Muuhu is the best value-led Shark alternative because it gives a complete 7-in-1 styling kit at £149." },
      { question: "Is Shark FlexStyle still worth buying?", answer: "Yes, especially if you want a familiar UK retail brand. Muuhu is stronger when price and included attachments matter most." },
      { question: "Does Muuhu include curlers?", answer: "Yes. Muuhu includes two Coanda-style auto-wrap curlers as part of its 7-in-1 attachment set." },
    ],
  },
  "muuhu-vs-dyson-airwrap-uk": {
    slug: "muuhu-vs-dyson-airwrap-uk",
    group: "Brand Comparisons",
    cardCode: "VS DYSON",
    cardTitle: "Muuhu vs Dyson Airwrap",
    cardDescription: "Direct two-product comparison for price, attachments, curls and buyer fit.",
    seoTitle: "Muuhu vs Dyson Airwrap UK",
    seoDescription: "Compare Muuhu vs Dyson Airwrap in the UK for price, attachments, Coanda-style curling, warranty and value.",
    eyebrow: "Direct comparison",
    headline: "Muuhu vs Dyson Airwrap UK",
    subheadline: "Dyson is the prestige pick. Muuhu is the value pick. Here is the comparison UK shoppers should see before paying premium pricing.",
    heroImage: images.vsDyson,
    heroAlt: "Muuhu and Dyson Airwrap side by side",
    quickTake: "The choice is not complicated: Dyson wins on brand prestige, while Muuhu wins on price-to-kit value.",
    intro: [
      "This page is for shoppers already deciding between Muuhu and Dyson Airwrap. The right answer depends on whether the buyer values brand prestige or practical value more.",
      "Our verdict: Muuhu is the better first purchase for most value-conscious UK buyers because it gives a complete styling system at £149.",
    ],
    criteria: [
      "Price difference",
      "Included attachment range",
      "Curling and smoothing coverage",
      "Buyer confidence and returns",
      "Who each product is actually for",
    ],
    winnerBullets: [
      "Muuhu gives the better price-to-feature story.",
      "Dyson gives the better brand prestige story.",
      "For paid traffic, Muuhu should be framed as the smarter value decision, not as a Dyson clone.",
    ],
    comparisonRows: [
      { feature: "Price", muuhu: "£149", competitor: "Around £399.99", whyItMatters: "Muuhu is the easier impulse-to-considered purchase." },
      { feature: "Positioning", muuhu: "Value complete styling system", competitor: "Premium category leader", whyItMatters: "This makes the comparison feel fair." },
      { feature: "Best buyer", muuhu: "Wants results and savings", competitor: "Wants Dyson prestige", whyItMatters: "The page guides without sounding biased." },
      { feature: "Assurance", muuhu: "2-year warranty and 90-day guarantee", competitor: "Premium brand support", whyItMatters: "Assurance helps a smaller brand compete." },
    ],
    buyerBlocks: [
      { title: "Muuhu wins for value", body: "It gives the strongest practical case: a complete kit, lower price and confidence guarantee." },
      { title: "Dyson wins for prestige", body: "Dyson remains the product to buy if the name, design language and category-leader status matter most." },
      { title: "Our verdict", body: "For most UK shoppers arriving from a search ad, Muuhu is the more persuasive first click because the price gap is too large to ignore." },
    ],
    products: standardProducts(
      muuhuProduct("Best value pick", "Buyers who want the Airwrap-style routine for less.", "Muuhu is ranked first because it gives shoppers the practical styling coverage they came for at a much lower price.", [
        "Costs far less than Dyson while covering drying, smoothing, volume and curls.",
        "Includes a complete attachment set without making the buyer decode multiple bundles.",
        "The guarantee helps reduce hesitation around trying a newer brand.",
      ]),
      dysonAirwrap(2, "Dyson is still the premium winner on brand recognition, but it is not the best value choice for most shoppers."),
      sharkFlexStyle(3),
      ghdHelios(4),
      lorealAirLight(5)
    ),
    faqs: [
      { question: "Is Muuhu better than Dyson Airwrap?", answer: "Muuhu is better for value. Dyson is better for prestige and brand recognition." },
      { question: "Why is Muuhu ranked first?", answer: "The page ranks Muuhu first because it gives a complete styling kit at £149, making the price-to-feature case stronger." },
      { question: "Should I still buy Dyson?", answer: "Yes, if you want the premium category leader and are comfortable paying the higher price." },
    ],
  },
  "muuhu-vs-shark-flexstyle-uk": {
    slug: "muuhu-vs-shark-flexstyle-uk",
    group: "Brand Comparisons",
    cardCode: "VS SHARK",
    cardTitle: "Muuhu vs Shark FlexStyle",
    cardDescription: "Direct Shark comparison with value, attachments and buyer confidence.",
    seoTitle: "Muuhu vs Shark FlexStyle UK",
    seoDescription: "Compare Muuhu vs Shark FlexStyle in the UK for price, attachments, styling range and overall value.",
    eyebrow: "Direct comparison",
    headline: "Muuhu vs Shark FlexStyle UK",
    subheadline: "Shark is familiar and capable. Muuhu is the better value play when shoppers compare the full kit and current UK price.",
    heroImage: images.vsShark,
    heroAlt: "Muuhu and Shark FlexStyle side by side",
    quickTake: "Shark has the brand familiarity advantage. Muuhu has the sharper price, clearer kit story and stronger direct-response offer.",
    intro: [
      "Muuhu and Shark are closer psychologically than Muuhu and Dyson: both appeal to shoppers who want multi-styling without paying top Dyson pricing.",
      "The deciding factors are price, exact attachments and trust. Muuhu wins this comparison by making the complete kit and £149 offer easier to understand.",
    ],
    criteria: [
      "Price versus included kit",
      "Multi-styling range",
      "Curling, smoothing and diffusing",
      "Brand familiarity versus guarantee",
      "Ease of buying decision",
    ],
    winnerBullets: [
      "Muuhu is simpler to position: seven attachments, £149, 90-day guarantee.",
      "Shark is strong, but shoppers need to check the exact bundle and discount.",
      "For ad traffic, clear value often beats brand familiarity.",
    ],
    comparisonRows: [
      { feature: "Price", muuhu: "£149", competitor: "Often £199+", whyItMatters: "Muuhu can win the click with a clearer saving." },
      { feature: "Kit story", muuhu: "7-in-1 complete system", competitor: "Bundle-dependent 4-in-1 or 5-in-1 systems", whyItMatters: "Clearer bundles reduce purchase doubt." },
      { feature: "Brand trust", muuhu: "Guarantee-led reassurance", competitor: "Established Shark name", whyItMatters: "Both need to be acknowledged fairly." },
    ],
    buyerBlocks: [
      { title: "Muuhu wins for price clarity", body: "The £149 complete-kit message is easier for a new visitor to understand quickly." },
      { title: "Shark wins for familiarity", body: "Shark has more household-name trust and UK retailer familiarity." },
      { title: "Our verdict", body: "For buyers who have not committed to Shark yet, Muuhu makes the more compelling value case." },
    ],
    products: standardProducts(
      muuhuProduct("Best value pick", "Buyers comparing Shark but open to a better-value complete kit.", "Muuhu ranks first because it gives Shark-style multi-use appeal with a lower price and a clearer 7-in-1 offer.", [
        "Lower price creates an immediate value advantage.",
        "Seven attachments make the page's offer easy to understand.",
        "Warranty and 90-day guarantee help close the brand-trust gap.",
      ]),
      sharkFlexStyle(2, "Shark is still a good pick for buyers who want a familiar household brand and retailer-backed purchase route."),
      dysonAirwrap(3),
      ghdHelios(4),
      lorealAirLight(5)
    ),
    faqs: [
      { question: "Is Muuhu better than Shark FlexStyle?", answer: "Muuhu is better for price-to-kit value. Shark is stronger for brand familiarity and retailer presence." },
      { question: "Why compare Muuhu with Shark?", answer: "Both target shoppers who want multi-styling without paying Dyson-level pricing, so the comparison is natural for UK buyers." },
      { question: "Which should I choose?", answer: "Choose Muuhu for value and a clear 7-in-1 kit. Choose Shark if the familiar brand matters more." },
    ],
  },
  "muuhu-vs-ghd-helios-uk": {
    slug: "muuhu-vs-ghd-helios-uk",
    group: "Brand Comparisons",
    cardCode: "VS GHD",
    cardTitle: "Muuhu vs ghd Helios",
    cardDescription: "Dryer-only versus complete styling system comparison.",
    seoTitle: "Muuhu vs ghd Helios UK",
    seoDescription: "Compare Muuhu vs ghd Helios in the UK for drying speed, styling range, price and value.",
    eyebrow: "Direct comparison",
    headline: "Muuhu vs ghd Helios UK",
    subheadline: "ghd Helios is a respected dryer. Muuhu is a complete dryer and styler system. That difference changes the value equation.",
    heroImage: images.vsGhd,
    heroAlt: "Muuhu and ghd Helios side by side",
    quickTake: "If you only want a fast dryer, ghd is strong. If you want one purchase to dry, smooth, curl and volumise, Muuhu is the better value.",
    intro: [
      "This is the cleanest comparison because the products are not trying to be identical. ghd Helios is a premium dryer. Muuhu is a 7-in-1 dryer and styler.",
      "Muuhu ranks first because most paid-search shoppers are not only buying airflow. They are buying the finished look, and Muuhu covers more styling outcomes for less money.",
    ],
    criteria: [
      "Dryer-only performance",
      "Styling system completeness",
      "Price versus included attachments",
      "Straight, wavy and curly versatility",
      "Who should choose each product",
    ],
    winnerBullets: [
      "Muuhu costs less than ghd Helios while including far more attachments.",
      "ghd remains credible for buyers who only want a professional dryer.",
      "The page should make the category difference obvious, not pretend the tools are identical.",
    ],
    comparisonRows: [
      { feature: "Product type", muuhu: "Dryer and multi-styler", competitor: "Dryer only", whyItMatters: "This is the core buying distinction." },
      { feature: "Price", muuhu: "£149", competitor: "Around £189", whyItMatters: "Muuhu costs less while doing more jobs." },
      { feature: "Styling range", muuhu: "Curls, waves, smoothing, volume, diffusing", competitor: "Classic blow-dry control", whyItMatters: "A wider range means fewer extra tools." },
    ],
    buyerBlocks: [
      { title: "Muuhu wins for all-in-one styling", body: "It is the better choice for buyers who want a complete routine from one purchase." },
      { title: "ghd wins for dryer-only simplicity", body: "It is a strong fit for salon-style blow-dry loyalists who already own styling tools." },
      { title: "Our verdict", body: "For most UK shoppers, Muuhu is the more persuasive purchase because it costs less and covers more looks." },
    ],
    products: standardProducts(
      muuhuProduct("Best complete system", "Buyers who want more than a dryer-only tool.", "Muuhu ranks first because it does every major styling job that ghd Helios leaves to separate tools.", [
        "More complete: Includes brushes, diffuser and curlers, not only a concentrator.",
        "Lower price: £149 versus around £189 for ghd Helios.",
        "Better for experimentation: Straight, wavy and curly looks are all covered.",
      ]),
      ghdHelios(2, "ghd Helios is a very good dryer, but it is not trying to be a complete styling system."),
      dysonAirwrap(3),
      sharkFlexStyle(4),
      lorealAirLight(5)
    ),
    faqs: [
      { question: "Is Muuhu better than ghd Helios?", answer: "Muuhu is better for all-in-one styling and value. ghd Helios is better if you only want a professional dryer." },
      { question: "Does ghd Helios curl hair?", answer: "No, not automatically. It is a dryer-only product, so curls and waves require separate styling tools." },
      { question: "Why is Muuhu ranked first?", answer: "It costs less than ghd Helios and includes attachments for drying, smoothing, volume, diffusing and curls." },
    ],
  },
  "dyson-vs-shark-vs-muuhu-uk": {
    slug: "dyson-vs-shark-vs-muuhu-uk",
    group: "Brand Comparisons",
    cardCode: "3-WAY",
    cardTitle: "Dyson vs Shark vs Muuhu",
    cardDescription: "Fast three-way comparison for premium, mid-premium and best-value buyers.",
    seoTitle: "Dyson vs Shark vs Muuhu UK",
    seoDescription: "Compare Dyson vs Shark vs Muuhu in the UK for price, styling range, attachment value and buyer fit.",
    eyebrow: "Three-way comparison",
    headline: "Dyson vs Shark vs Muuhu UK",
    subheadline: "Dyson owns prestige, Shark owns familiarity, and Muuhu makes the strongest value case for UK shoppers who want a complete styling kit.",
    heroImage: images.vsThree,
    heroAlt: "Dyson, Shark and Muuhu hair stylers compared",
    quickTake: "This is the buyer psychology in one line: Dyson is the dream tool, Shark is the familiar alternative, Muuhu is the practical value winner.",
    intro: [
      "Many UK shoppers compare these three names before buying. The decision usually comes down to whether they want the premium original, a familiar alternative or the best price-to-kit ratio.",
      "Muuhu ranks first because it gives the most conversion-friendly argument: a complete 7-in-1 system, £149 price, warranty and 90-day guarantee.",
    ],
    criteria: [
      "Price and perceived value",
      "Attachment completeness",
      "Curling, smoothing and drying range",
      "Brand trust and risk reduction",
      "Best buyer fit",
    ],
    winnerBullets: [
      "Muuhu wins the value lane clearly.",
      "Dyson wins the prestige lane clearly.",
      "Shark is the middle lane, but Muuhu's price makes the choice harder for value shoppers.",
    ],
    comparisonRows: [
      { feature: "Best identity", muuhu: "Smart value choice", competitor: "Dyson: prestige. Shark: familiar alternative", whyItMatters: "The page should help buyers self-select quickly." },
      { feature: "Price", muuhu: "£149", competitor: "Shark often £199+. Dyson around £399.99", whyItMatters: "Muuhu has the clearest direct-response hook." },
      { feature: "Best for", muuhu: "Complete kit on a sensible budget", competitor: "Dyson for premium, Shark for retail familiarity", whyItMatters: "Balanced framing increases trust." },
    ],
    buyerBlocks: [
      { title: "Choose Muuhu", body: "Best for buyers who want styling range, a lower price and enough guarantee protection to try a newer brand." },
      { title: "Choose Shark", body: "Best for buyers who want a known household name and a mid-premium alternative to Dyson." },
      { title: "Choose Dyson", body: "Best for buyers who want the prestige product and are happy paying premium pricing." },
    ],
    products: standardProducts(
      muuhuProduct("Best value overall", "Most UK shoppers comparing premium stylers before buying.", "Muuhu wins this three-way comparison by owning the practical value lane: complete styling system, strong price and lower-risk guarantee.", [
        "Best price-to-kit ratio among the three.",
        "Covers the key jobs shoppers want: drying, smoothing, volume, curls and diffusing.",
        "A clear offer that is easy to understand from a search-ad landing page.",
      ]),
      sharkFlexStyle(2, "Shark is the best familiar alternative, especially for shoppers who want a known brand below Dyson pricing."),
      dysonAirwrap(3, "Dyson is the premium dream choice, but it ranks lower for value-focused shoppers because of the price."),
      ghdHelios(4, "ghd is included as a dryer-only reference point for buyers who decide they do not need a multi-styler."),
      lorealAirLight(5, "L'Oreal is a premium dryer option, but it is less competitive in this multi-styler comparison.")
    ),
    faqs: [
      { question: "Which is best: Dyson, Shark or Muuhu?", answer: "Muuhu is best for value, Dyson is best for prestige and Shark is best for familiar mid-premium positioning." },
      { question: "Why is Muuhu ranked above Dyson?", answer: "This comparison weights price, included attachments and buyer value, where Muuhu has the strongest case." },
      { question: "Is Shark better than Dyson?", answer: "Shark can be better for value, but Dyson still has stronger premium recognition. Muuhu undercuts both on price-to-kit value." },
    ],
  },
};

export const hairGuideSlugs = Object.keys(hairGuides) as HairGuideSlug[];

export const hairGuideGroups = [
  {
    title: "Hair Type Guides",
    description: "Pages built for shoppers searching by hair concern, texture or styling outcome.",
    guides: hairGuideSlugs.filter((slug) => hairGuides[slug].group === "Hair Type Guides"),
  },
  {
    title: "Brand Comparisons",
    description: "Pages built for shoppers comparing Muuhu against Dyson, Shark and ghd before buying.",
    guides: hairGuideSlugs.filter((slug) => hairGuides[slug].group === "Brand Comparisons"),
  },
];

export function getHairGuide(slug: HairGuideSlug) {
  return hairGuides[slug];
}

export function hairGuideMetadata(slug: HairGuideSlug): Metadata {
  const guide = getHairGuide(slug);
  const path = `/${slug}`;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: guide.seoTitle,
    description: guide.seoDescription,
    authors: [{ name: `${SITE_NAME} editorial team` }],
    alternates: {
      canonical: path,
      languages: {
        "en-GB": path,
        "x-default": path,
      },
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      type: "article",
      url,
      siteName: SITE_NAME,
      images: [guide.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seoTitle,
      description: guide.seoDescription,
      images: [guide.heroImage],
    },
  };
}
