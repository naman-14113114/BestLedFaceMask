/**
 * Mobile-only Pros & Cons data.
 *
 * Edit this file to change what shows on PHONE ONLY.
 * Desktop pros/cons are defined in each advertorial file and are NOT affected by changes here.
 *
 * Structure: mobileProsCons[market][productId] = { pros: [...], cons: [...] }
 *
 * Markets: "uk" (also used for "au"), "ca"
 * Product IDs:
 *   UK/AU: 1 = Buudy, 2 = CurrentBody, 3 = Omnilux, 4 = Shark, 5 = Dr. Dennis Gross
 *   CA:    1 = Buudy, 2 = CurrentBody, 3 = Kala, 4 = TheraFace, 5 = Equinox
 */

export type MobileProsCons = {
  pros: string[];
  cons: string[];
};

type MobileProsConsMap = Record<string, Record<number, MobileProsCons>>;

export const mobileProsCons: MobileProsConsMap = {
  // ─────────────────────────────────────────────
  // UK & AU  (AU falls back to UK data)
  // ─────────────────────────────────────────────
  uk: {
    // #1 Buudy 7 Colour LED Mask
    1: {
      pros: [
        "<b>7 colour routine</b> (Red, Blue, Green, Yellow, Purple, Cyan & White) plus <b>830nm Near-Infrared</b> light",
        "<b>Covers both the face and neck area</b>, including the neck and jawline in the same session",
        "Built with <b>flexible, skin-friendly materials</b> and even light placement",
        "Built-in <b>eye protection</b> with a gentle, <b>pain-free</b> experience suitable for all skin types",
        "<b>Strong customer feedback</b> on comfort and ease of use",
        "<b>Cordless and rechargeable</b> with Tap Technology and <b>Buudy AI</b> guided sessions",
        "Designed for short, regular sessions you can keep up with at home",
        "Currently <b>£179</b> (60% off the regular £449 price)",
        "<b>90-day money-back policy</b> for added peace of mind",
      ],
      cons: [
        "Available online only in the <b>United Kingdom</b>",
        "Sold through the official Buudy website rather than retail stores",
        "Tap controls can take a session or two to learn, though most users <b>adapt quickly</b>",
      ],
    },

    // #2 CurrentBody LED Mask
    2: {
      pros: [
        "<b>Widely featured in the media</b> alongside celebrity and beauty-editor coverage",
        "<b>High average rating</b> across a large number of customer reviews",
        "Brand markets the device around the <b>appearance of fine lines and skin texture</b>",
        "Flexible <b>silicone design</b> with portable controller and optional eye inserts",
      ],
      cons: [
        "<b>Face-only coverage</b> at £399.99; neck kit costs an <b>additional £679.99</b>",
        "Premium-priced device — significantly more expensive than Buudy (£179)",
        "<b>Limited to anti-ageing</b> with 3 Red/NIR wavelengths only",
        "<b>No Blue, Green or Yellow</b> light modes for broader skin concerns",
        "60-day return policy includes a <b>10% restocking fee</b> on returns (~£40)",
        "Some users <b>report minimal feedback</b> after extended use",
        "Some reviewers mention <b>fit and slipping issues</b>",
        "Flexible silicone design may <b>require extra care</b> for hygiene and maintenance",
      ],
    },

    // #3 Omnilux LED Mask
    3: {
      pros: [
        "<b>Long-established LED skincare brand</b> with a strong reputation",
        "<b>30-day no-hassle money-back policy</b> for peace of mind",
        "<b>Trusted brand</b> from the professional skin care market",
        "Flexible and portable with <b>rechargeable controller</b> and carry bag",
      ],
      cons: [
        "<b>Face-only coverage</b> at £348; separate neck piece costs another <b>£348</b>",
        "Premium-priced — significantly more expensive than Buudy (<b>£179</b>)",
        "<b>Only 2 wavelengths</b> (Red and NIR) — missing 5 other light modes",
        "<b>Single-concern focus</b> — a separate model is sold for blemish-prone skin",
        "<b>Fewer LEDs</b>: only 132 vs. Buudy's 192 high-density LEDs",
        "Some reviewers <b>report no noticeable difference</b> after months of use",
        "Flexible silicone may <b>require extra care</b> for hygiene and maintenance",
      ],
    },

    // #4 Shark CryoGlow LED Mask
    4: {
      pros: [
        "Unique <b>\"Insta-Chill\" cooling feature</b> for under-eyes — not found in standard LED masks",
        "<b>Developed with skin-care professionals</b> for added credibility",
        "<b>High average rating</b> from a large number of reviews on the trusted Shark brand",
        "<b>Fast pre-programmed sessions</b> as short as 6–8 minutes",
      ],
      cons: [
        "At <b>£269.99</b>, more than double the price of Buudy (£179)",
        "<b>Face-only coverage</b> — no neck coverage included",
        "<b>Missing 5 of 7 wavelengths</b> (Green, Yellow, Cyan, Purple, White)",
        "<b>LED count undisclosed</b> — likely lower than Buudy's 192 high-density LEDs",
        "At 675g, <b>very heavy and rigid</b> — may not suit all face shapes",
        "<b>Fewer colour options</b> than a multi-colour mask for broader skin goals",
      ],
    },

    // #5 Dr. Dennis Gross DRx SpectraLite
    5: {
      pros: [
        "<b>Full session in just 3 minutes</b> — fastest session time in this ranking",
        "<b>Created by Dr. Dennis Gross</b> — strong expert-led positioning",
        "<b>415nm Blue light</b> mode, a wavelength associated with blemish-prone skin",
        "<b>Cordless</b> with internal battery for wire-free sessions",
      ],
      cons: [
        "At <b>£455</b>, a massive premium largely for the brand name",
        "<b>No neck or chest coverage</b> — face only at nearly £500",
        "<b>Only 162 LEDs</b> — lower density than modern high-output models",
        "<b>Rigid plastic shell</b> doesn't flex — discomfort reported on the nose bridge",
        "<b>Only Red, Blue and Combo</b> modes — missing 5 other light modes",
        "<b>Short battery life</b> — small internal battery needs frequent charging",
        "<b>Fragile build</b> — rigid plastic prone to cracking if dropped",
        "<b>No eye protection</b> — open-eye design allows light to reach vision",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CANADA
  // ─────────────────────────────────────────────
  ca: {
    // #1 Buudy 7 Colour LED Mask (CA)
    1: {
      pros: [
        "<b>7 colour treatment</b> (Red, Blue, Green, Yellow, Purple, Cyan & White) plus <b>830nm Near-Infrared</b> light",
        "<b>Covers both the face and neck area</b>, helping target sagging skin and \"turkey neck\"",
        "Certified to <b>CE, FCC & RoHS standards</b>",
        "Built-in <b>eye protection</b> with safe, <b>pain-free</b> treatment suitable for all skin types",
        "<b>4.9★ rating</b> from over 4,000 customers",
        "<b>Cordless and rechargeable</b> with Tap Technology and <b>Buudy AI</b> guided sessions",
        "Built for easy daily routines with <b>automatic session timing</b>",
        "Currently <b>$299</b>",
        "<b>90-day money-back guarantee</b> for added peace of mind",
      ],
      cons: [
        "Available online only in <b>Canada</b>",
        "Tap controls can take a session or two to learn, though most users <b>adapt quickly</b>",
      ],
    },

    // #2 CurrentBody LED Mask (CA)
    2: {
      pros: [
        "<b>Endorsed by celebrities and dermatologists</b>, with multiple beauty awards",
        "<b>4.7★ rating</b> from 2,860 customer reviews",
        "Reported to help support anti-aging routines",
        "Flexible <b>silicone design</b> with portable controller and optional eye inserts",
      ],
      cons: [
        "<b>Face-only coverage</b>; neck coverage requires an <b>additional purchase</b>",
        "Premium-priced device compared with many alternatives",
        "<b>Limited to anti-ageing</b> with 3 Red/NIR wavelengths only",
        "<b>No Blue, Green or Yellow</b> light modes for broader skin concerns",
        "60-day guarantee includes a <b>10% restocking fee</b> on returns",
        "Some users <b>report mixed feedback</b> after extended use",
        "Some reviewers mention <b>fit and slipping issues</b>",
        "Flexible silicone design may <b>require extra care</b> for hygiene and maintenance",
      ],
    },

    // #3 Kala Red Light Face Mask (CA only)
    3: {
      pros: [
        "Red, Near-Infrared and Blue LED light treatment",
        "Dermatologist-recommended",
        "Lightweight <b>348g</b> silicone design for comfortable wear",
        "<b>2-year warranty</b> provides added peace of mind",
      ],
      cons: [
        "Face-only coverage with <b>no neck or jawline coverage</b>",
        "Missing Green, Cyan, Yellow, Purple and White light modes",
        "Optical power density is lower than some leading competitors",
        "<b>4-hour charge time</b> can be inconvenient",
        "At $382.49, costs more than Buudy while covering less area",
      ],
    },

    // #4 TheraFace Mask (CA only)
    4: {
      pros: [
        "Uses <b>648 LEDs</b>, making it one of the highest LED-count masks in the category",
        "<b>VibraWave vibration feature</b> provides added facial tension and relaxation benefits",
        "Short <b>9-minute routines</b> with no cord",
        "Backed by Therabody, a <b>major wellness tech name</b>.",
      ],
      cons: [
        "At <b>$799.99</b>, it is a premium-priced product",
        "<b>Face only</b>; ignores neck and chest area",
        "Hard-shell construction may not sit evenly on all face shapes",
        "<b>Missing Green, Cyan, Purple, and White</b> light modes",
        "<b>Battery runtime is shorter</b> than some masks that use external controller systems",
        "Higher price does not include built-in neck coverage despite the premium cost",
      ],
    },

    // #5 Equinox LED Mask (CA only)
    5: {
      pros: [
        "<b>336 LEDs</b> provide dense and even facial light coverage",
        "<b>Six treatment modes</b> including Red + NIR, Red + Blue, and Yellow + NIR combinations",
        "Certified with <b>CE, FCC and RoHS certifications</b>",
        "Backed by a <b>2-year warranty</b> for added assurance",
      ],
      cons: [
        "The <b>$385</b> model covers only the face, with <b>no neck or chest coverage</b> included",
        "<b>Missing Green, Cyan, Purple and White</b> LED skincare modes",
        "<b>Wired remote controller</b> feels less convenient than cordless or tap-controlled designs",
        "<b>Higher price than Buudy</b> while covering less area",
        "<b>No neck coverage</b> leaves jawline and neck behind",
      ],
    },
  },
};

/**
 * Get mobile pros/cons for a product by market and product ID.
 * AU falls back to UK data. If no mobile-specific data exists, returns undefined.
 */
export function getMobileProsCons(
  marketKey: string,
  productId: number
): MobileProsCons | undefined {
  const effectiveMarket = marketKey === "au" ? "uk" : marketKey;
  return mobileProsCons[effectiveMarket]?.[productId];
}
