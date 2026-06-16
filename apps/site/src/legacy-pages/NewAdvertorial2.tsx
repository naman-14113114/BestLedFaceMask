'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, Star, Award, ChevronRight, Calendar, ShieldCheck, Check, Play, ChevronDown, Zap, Clock, Shield, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BUUDY_LINK = "https://uk.buudy.com/products/buudy-led-mask";

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

const products = [
  {
    id: 1,
    rank: "#1",
    name: "Buudy 7 Colour LED Mask",
    image: "https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/57-w-1.webp",
    price: "£179",
    originalPrice: "£449",
    rating: "4.9 / 5",
    link: BUUDY_LINK,
    isWinner: true,
    colors: 7,
    neckCoverage: true,
    ledCount: 192,
    guarantee: "90-day",
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
      "No Colour Customisation: Unlike some premium fashion-tech brands, the mask is only available in one standard colour — there are no optional shells or personalisation options.",
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
    image: "https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    siliconWarning: true,
    colors: 3,
    neckCoverage: false,
    ledCount: 160,
    guarantee: "60-day (10% fee)",
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
    colors: 2,
    neckCoverage: false,
    ledCount: 132,
    guarantee: "30-day",
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
    colors: 4,
    neckCoverage: false,
    ledCount: null,
    guarantee: "30-day",
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
    colors: 3,
    neckCoverage: false,
    ledCount: 162,
    guarantee: "30-day",
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

// --- Customer review data ---
const customerReviews = [
  {
    name: "Emma T.",
    location: "London",
    stars: 5,
    text: "After 2 weeks, my acne scars started fading noticeably. The 7 colour modes are a game-changer — I use blue for breakouts and red for fine lines. Worth every penny!",
    date: "3 days ago",
    verified: true,
  },
  {
    name: "Sophie M.",
    location: "Manchester",
    stars: 5,
    text: "I returned my CurrentBody mask and got this instead. Half the price, neck coverage included, and 7 modes vs 3. My skin looks brighter and firmer after just 10 sessions.",
    date: "1 week ago",
    verified: true,
  },
  {
    name: "Rachel K.",
    location: "Birmingham",
    stars: 5,
    text: "Was sceptical about another beauty gadget, but the 90-day guarantee convinced me to try. So glad I did — the yellow light has really helped with my rosacea. My dermatologist noticed the difference!",
    date: "2 weeks ago",
    verified: true,
  },
];

// --- UK city names for purchase notification ---
const ukCities = ["London", "Manchester", "Leeds", "Edinburgh", "Bristol", "Glasgow", "Liverpool", "Brighton", "Cardiff", "Oxford", "Cambridge", "Bath", "Nottingham", "Sheffield", "York"];
const ukNames = ["Sarah", "Emma", "Olivia", "Charlotte", "Amelia", "Sophia", "Chloe", "Jessica", "Isabella", "Mia", "Grace", "Lucy", "Hannah", "Ella", "Katie"];

// ========== REUSABLE COMPONENTS ==========

const CTAButton = ({ href, text, className = "", variant = "primary" }: { href: string, text: string, className?: string, variant?: "primary" | "secondary" | "competitor" }) => {
  if (variant === "competitor") {
    return (
      <a
        href={href}
        className={`relative inline-flex justify-center items-center px-8 py-4 text-lg md:text-xl font-bold text-slate-600 bg-white border-2 border-slate-300 rounded-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-sm ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text} <ChevronRight size={24} />
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`relative inline-flex justify-center items-center px-8 py-4 text-lg md:text-xl font-bold text-white bg-emerald-500 rounded-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-emerald-500/30 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text} <ChevronRight size={24} />
      </span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
    </a>
  );
};

const MetricBar: React.FC<{ label: string, value: number }> = ({ label, value }) => (
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

// --- Countdown Timer Component ---
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const TIMER_KEY = 'buudy_gifts_timer_end';
    let endTime: number;

    try {
      const stored = sessionStorage.getItem(TIMER_KEY);
      if (stored) {
        endTime = parseInt(stored, 10);
      } else {
        endTime = Date.now() + 2 * 60 * 60 * 1000 + 47 * 60 * 1000;
        sessionStorage.setItem(TIMER_KEY, endTime.toString());
      }
    } catch {
      endTime = Date.now() + 2 * 60 * 60 * 1000 + 47 * 60 * 1000;
    }

    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 text-center">
      {[
        { label: "HRS", value: pad(timeLeft.hours) },
        { label: "MIN", value: pad(timeLeft.minutes) },
        { label: "SEC", value: pad(timeLeft.seconds) },
      ].map((unit, i) => (
        <React.Fragment key={unit.label}>
          {i > 0 && <span className="text-2xl font-bold text-red-500 -mt-3">:</span>}
          <div className="bg-slate-900 text-white rounded-xl px-3 py-2 min-w-[56px]">
            <div className="text-2xl md:text-3xl font-black tabular-nums tracking-wider">{unit.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{unit.label}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

// --- Purchase Notification Toast ---
const PurchaseToast = () => {
  const [visible, setVisible] = useState(false);
  const [person, setPerson] = useState({ name: "", city: "", minutes: 0 });

  useEffect(() => {
    const showToast = () => {
      const name = ukNames[Math.floor(Math.random() * ukNames.length)];
      const city = ukCities[Math.floor(Math.random() * ukCities.length)];
      const minutes = Math.floor(Math.random() * 25) + 3;
      setPerson({ name, city, minutes });
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };

    const initialDelay = setTimeout(showToast, 18000);
    const interval = setInterval(showToast, 45000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-20 md:bottom-6 left-4 z-[60] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 max-w-[320px] flex items-start gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <Check size={22} className="text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{person.name} from {person.city}</p>
            <p className="text-xs text-slate-500">purchased a Buudy LED Mask</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">{person.minutes} minutes ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Scroll Progress Bar ---
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100]">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// --- Buudy Reminder Banner (between competitor reviews) ---
const BuudyReminderBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="my-10 bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4"
  >
    <div className="flex items-center gap-3">
      <Award className="text-emerald-600 shrink-0" size={28} />
      <div>
        <p className="font-bold text-slate-900 text-base md:text-lg">Still the #1 pick: Buudy 7 Colour LED Mask</p>
        <p className="text-sm text-slate-600">£179 with free gifts worth £128 — 90-day money-back guarantee</p>
      </div>
    </div>
    <a
      href={BUUDY_LINK}
      className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-1 whitespace-nowrap"
    >
      See Why It's #1 <ChevronRight size={18} />
    </a>
  </motion.div>
);

// ========== MAIN PAGE COMPONENT ==========

export default function Home() {
  const [date, setDate] = useState('');
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);
  const [criteriaOpen, setCriteriaOpen] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const buudySectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const d = new Date();
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('en-GB', { month: 'long' });
    const year = d.getFullYear();
    setDate(`${day} ${month} ${year}`);
  }, []);

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;
    video.play().catch(() => {
      setIsVerdictVideoPlaying(false);
    });
  };

  const scrollToBuudy = () => {
    buudySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Split products: winner first, then visible competitors
  const winnerProduct = products[0];
  const competitors = products.slice(1);
  const visibleCompetitors = showAllProducts ? competitors : competitors.slice(0, 1);
  const hiddenCompetitors = competitors.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Purchase Notification Toast */}
      <PurchaseToast />

      {/* ====== HEADER / HERO ====== */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            Best LED Face Masks of 2026 in the UK: Tested & Reviewed Comparisons
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
              Last updated – {date || 'Loading date...'}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl text-left text-sm md:text-base text-slate-600 leading-relaxed border border-slate-100 shadow-sm mb-12 max-w-4xl mx-auto">
            <p>
              <strong className="text-slate-900">Dr. Megan Vincze</strong>, a certified dermatologist and beauty technology expert, reviewed 18 popular UK LED Face Mask options over 200+ hours, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, usability, reviews, price, and guarantees. Her biggest finding was simple: the most expensive mask was not always the best choice. The strongest options used the right wavelengths, gave even face-and-neck coverage, and were easy enough to use consistently at home.
            </p>
          </div>

          <img
            src="https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png"
            alt="LED Masks Comparison"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl border border-slate-100 mb-8"
          />

          {/* ===== CRO #2: Quick Verdict Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-2 border-emerald-300 rounded-3xl p-6 md:p-8 shadow-lg"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Award className="text-emerald-600" size={24} />
              <span className="font-bold text-emerald-700 uppercase text-sm tracking-wider">Our #1 Pick After 200+ Hours of Testing</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-serif">Buudy 7 Colour LED Mask</h2>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm text-slate-600 mb-5">
              <span className="font-bold text-2xl text-slate-900">£179 <span className="text-base text-slate-400 line-through font-normal">£449</span></span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="flex items-center gap-1"><Star size={14} className="text-amber-400 fill-amber-400" /> 4.9/5 (1,000+ reviews)</span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span>7 Colours + Neck</span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span>90-Day Guarantee</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUUDY_LINK}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 flex items-center gap-2 text-base"
              >
                Check Current Price <ChevronRight size={20} />
              </a>
              <button
                onClick={scrollToBuudy}
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 transition-colors"
              >
                Read Full Review <ChevronDown size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* ===== CRO #4: Improved Intro with Curiosity Gap ===== */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>LED face masks have exploded in the UK, but the market is confusing. Prices range from <strong>£100 to £600+</strong>, and many brands make almost identical claims about collagen, acne, redness, and anti-ageing results.</p>
          <p>So we tested <strong>18 of the most popular LED masks</strong> over <strong>200+ hours</strong>, comparing wavelengths, light coverage, comfort, eye safety, neck treatment, ease of use, reviews, price, and guarantees.</p>
          <p>The biggest finding was simple: a higher price did not always mean better results. The best masks used the right wavelengths, gave even face and neck coverage, and were easy enough to use consistently at home.</p>
          <p><em className="text-emerald-700 font-semibold not-italic">One mask stood out dramatically — scoring 97% in almost every category while costing less than half the competition. Here&apos;s the full breakdown.</em></p>
        </div>

        {/* ===== CRO #3: Comparison Table ===== */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-16 max-w-5xl mx-auto overflow-x-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center font-serif">At-a-Glance Comparison</h2>
          <table className="w-full text-sm md:text-base border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Mask</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Price</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Colours</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider hidden sm:table-cell">LEDs</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Neck</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider hidden md:table-cell">Guarantee</th>
                <th className="text-center py-3 px-2 md:px-4 font-bold text-slate-500 uppercase text-xs tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className={`border-b border-slate-100 ${p.isWinner ? 'bg-emerald-50/60 font-semibold' : ''}`}>
                  <td className="py-3 px-2 md:px-4">
                    <div className="flex items-center gap-2">
                      {p.isWinner && <Award size={16} className="text-emerald-500 shrink-0" />}
                      <span className={p.isWinner ? 'text-emerald-700 font-bold' : 'text-slate-700'}>{p.rank} {p.name}</span>
                    </div>
                  </td>
                  <td className={`text-center py-3 px-2 md:px-4 ${p.isWinner ? 'text-emerald-700 font-bold' : ''}`}>{p.price}</td>
                  <td className={`text-center py-3 px-2 md:px-4 ${p.isWinner ? 'text-emerald-700 font-bold' : ''}`}>{p.colors}</td>
                  <td className={`text-center py-3 px-2 md:px-4 hidden sm:table-cell ${p.isWinner ? 'text-emerald-700 font-bold' : ''}`}>{p.ledCount ?? '—'}</td>
                  <td className="text-center py-3 px-2 md:px-4">
                    {p.neckCoverage
                      ? <Check size={18} className="text-emerald-500 mx-auto" />
                      : <XCircle size={18} className="text-red-400 mx-auto" />
                    }
                  </td>
                  <td className={`text-center py-3 px-2 md:px-4 hidden md:table-cell ${p.isWinner ? 'text-emerald-700 font-bold' : ''}`}>{p.guarantee}</td>
                  <td className={`text-center py-3 px-2 md:px-4 ${p.isWinner ? 'text-emerald-700 font-bold' : ''}`}>{p.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== CRO #5: Collapsible Criteria ===== */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-16 max-w-4xl mx-auto">
          <button
            onClick={() => setCriteriaOpen(!criteriaOpen)}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">We evaluated LED face masks based on 10 criteria</h2>
            <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${criteriaOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence initial={false}>
            {criteriaOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
                  {criteria.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  Over the past three months, we have thoroughly tested 18 different LED face masks. Based on hands-on evaluations, insights from board-certified dermatologists, and thousands of consumer reviews, the following five models stood out as the best in terms of performance, comfort, safety, and affordability.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ====== PRODUCTS LIST ====== */}
        <div className="space-y-16">
          {/* ====== #1 BUUDY (Winner) ====== */}
          <div
            ref={buudySectionRef}
            className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10 p-6 md:p-10"
          >
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor&apos;s Choice
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3">
                    <a href={BUUDY_LINK} className="hover:text-emerald-600 transition-colors">
                      {winnerProduct.rank} {winnerProduct.name}
                    </a>
                  </h2>

                  <a href={winnerProduct.link} className="block w-full mb-4 group">
                    <img
                      src={winnerProduct.image}
                      alt={winnerProduct.name}
                      className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </a>

                  {/* ===== CRO #8: Certification Badges ===== */}
                  <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                    {["CE", "FCC", "ROHS"].map((cert) => (
                      <span key={cert} className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Shield size={12} className="text-emerald-500" /> {cert}
                      </span>
                    ))}
                    <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                      <ShieldCheck size={12} /> Health Canada
                    </span>
                  </div>

                  <div className="text-center mb-4 w-full">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-3xl font-extrabold text-slate-900">{winnerProduct.price}</span>
                      <span className="text-lg text-slate-400 line-through font-medium">{winnerProduct.originalPrice}</span>
                    </div>
                    {/* ===== CRO #12: Low Stock Indicator ===== */}
                    <div className="flex items-center justify-center gap-1.5 text-red-600 text-sm font-bold mb-2 animate-pulse">
                      <Zap size={14} />
                      <span>Only 23 left at this price</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-slate-500">Overall rating {winnerProduct.rating}</p>

                    {/* ===== CRO: Trustpilot mini badge ===== */}
                    <div className="mt-3 border border-slate-200 bg-white rounded-lg p-2 inline-flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="bg-[#00b67a] p-0.5 rounded-sm">
                            <Star size={10} className="text-white fill-white" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-slate-600">on <span className="font-bold text-slate-800">Trustpilot</span></span>
                    </div>
                  </div>

                  <div className="w-full hidden lg:block">
                    <CTAButton href={winnerProduct.link} text="See Full Details on Buudy.com" className="w-full" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                  <a href={winnerProduct.link} className="hover:text-emerald-600 transition-colors">
                    {winnerProduct.rank} {winnerProduct.name}
                  </a>
                </h2>

                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  {winnerProduct.description.map((p, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* ===== CRO #7c: "Who Is This For?" ===== */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 mb-8">
                  <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                    <Users className="text-emerald-500" /> Perfect For You If:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "You want anti-aging + acne treatment in one device",
                      "You want full face AND neck coverage included",
                      "You don't want to spend £300+ on a limited mask",
                      "You want a risk-free 90-day money-back trial",
                      "You want 7 treatment modes, not just 2 or 3",
                      "You prefer cordless, guided sessions at home",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                      <CheckCircle2 className="text-emerald-500" /> Pros
                    </h4>
                    <ul className="space-y-4">
                      {winnerProduct.pros.map((pro, idx) => {
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
                  <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
                      <XCircle className="text-red-500" /> Cons
                    </h4>
                    <ul className="space-y-4">
                      {winnerProduct.cons.map((con, idx) => {
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

                {/* Metrics */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
                  <div className="space-y-3">
                    {winnerProduct.metrics.map((metric, idx) => (
                      <MetricBar key={idx} label={metric.label} value={metric.value} />
                    ))}
                  </div>
                </div>

                {/* ===== CRO #10: CTA After Metrics ===== */}
                <div className="mb-8">
                  <CTAButton href={BUUDY_LINK} text="Get 60% Off — Limited Time" className="w-full" />
                </div>

                {/* ===== CRO #7a: Customer Review Cards ===== */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
                  <h4 className="font-bold text-slate-900 mb-5 text-lg flex items-center gap-2">
                    <Star className="text-amber-400 fill-amber-400" size={20} /> What UK Customers Are Saying
                  </h4>
                  <div className="space-y-5">
                    {customerReviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                              {review.name[0]}
                            </div>
                            <div>
                              <span className="font-bold text-sm text-slate-900">{review.name}</span>
                              <span className="text-xs text-slate-500 ml-1">— {review.location}</span>
                            </div>
                          </div>
                          {review.verified && (
                            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                              <ShieldCheck size={12} /> Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 mb-2">
                          {[...Array(review.stars)].map((_, i) => (
                            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                        <p className="text-xs text-slate-400 mt-2">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ===== Free Gifts Section (with CRO #11: Countdown Timer) ===== */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
                      <span className="text-lg">💡</span> Editor&apos;s Tip
                    </div>

                    <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                      We found an active sale for <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">FREE GIFTS</span> worth £128!
                    </h4>

                    {/* ===== CRO #11: Countdown Timer ===== */}
                    <div className="bg-white/80 rounded-2xl p-4 mb-6 border border-blue-100">
                      <p className="text-center text-sm font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5">
                        <Clock size={14} /> This offer expires in:
                      </p>
                      <CountdownTimer />
                    </div>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                      While doing our research, we found that Buudy is currently running a limited-time sale where you can get these premium accessories bundled for free with every mask purchase.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      {/* Travel Box */}
                      <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
                        <div className="absolute -top-4 -right-2 bg-blue-600 text-white font-black text-sm md:text-base px-4 py-1.5 rounded-full shadow-lg z-20 animate-bounce">
                          FREE
                        </div>
                        <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 font-bold line-through z-10 bg-white/90 px-3 py-1 rounded-full text-xs shadow-sm">Normally £39</span>
                          <img
                            src="https://img.thesitebase.net/10650/10650730/themes/17682450181b5f55beb5.png?width=640&height=0&min_height=0"
                            alt="Premium Travel Box"
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                        <p className="font-extrabold text-gray-900 text-lg">Premium Travel Box</p>
                      </div>

                      {/* LED Torch */}
                      <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative mt-4 sm:mt-0">
                        <div className="absolute -top-4 -right-2 bg-blue-600 text-white font-black text-sm md:text-base px-4 py-1.5 rounded-full shadow-lg z-20 animate-bounce" style={{ animationDelay: '0.2s' }}>
                          FREE
                        </div>
                        <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 font-bold line-through z-10 bg-white/90 px-3 py-1 rounded-full text-xs shadow-sm">Normally £70</span>
                          <img
                            src="https://img.thesitebase.net/10650/10650730/products/ver_1/176738038817f3610740.png?width=640&height=0&min_height=0"
                            alt="Buudy LED Torch"
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                        <p className="font-extrabold text-gray-900 text-lg">Buudy LED Torch</p>
                      </div>

                      {/* E-Book */}
                      <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative mt-4 sm:mt-0">
                        <div className="absolute -top-4 -right-2 bg-blue-600 text-white font-black text-sm md:text-base px-4 py-1.5 rounded-full shadow-lg z-20 animate-bounce" style={{ animationDelay: '0.4s' }}>
                          FREE
                        </div>
                        <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 font-bold line-through z-10 bg-white/90 px-3 py-1 rounded-full text-xs shadow-sm">Normally £19</span>
                          <img
                            src="https://img.thesitebase.net/10650/10650730/themes/17682431737d583cc2df.png?width=640&height=0&min_height=0"
                            alt="Skincare E-Book"
                            className="w-full aspect-square object-cover"
                          />
                        </div>
                        <p className="font-extrabold text-gray-900 text-lg">Expert Skincare Guide</p>
                      </div>
                    </div>

                    <a
                      href={BUUDY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl text-center py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Claim Your Free Gifts + Mask <ChevronRight size={24} />
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </a>
                  </div>
                </motion.div>

                <div className="w-full mt-8 lg:hidden">
                  <CTAButton href={winnerProduct.link} text="Try Risk-Free for 90 Days" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* ===== CRO #1: DERMATOLOGIST VIDEO — MOVED UP after #1 review ===== */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-[#f8f4e6] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">

              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8b1528] mb-10 font-serif tracking-wide">
                Dermatologist&apos;s Verdict
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Video Area */}
                <div className="relative">
                  <div className="relative mx-auto max-w-[260px] sm:max-w-[280px] md:max-w-[300px] overflow-hidden rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
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
                      className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${isVerdictVideoPlaying ? 'pointer-events-none opacity-0 scale-90' : 'opacity-100 scale-100'
                        }`}
                    >
                      <Play size={30} fill="currentColor" className="ml-1" />
                    </button>
                    <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8b1528] shadow-sm">
                      2 min demo
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-gray-600">
                    See the light modes, fit, eye area, and full-face coverage in a real product walkthrough.
                  </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-serif tracking-tight">
                    Buudy 7 Colour LED Mask
                  </h3>

                  <div className="w-32 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>

                  <div className="text-3xl md:text-4xl font-bold text-[#8b1528] mb-8 font-sans">
                    Now at 60% off
                  </div>

                  {/* Trustpilot Badge */}
                  <div className="border border-gray-200 bg-white/60 rounded-xl p-4 mx-auto mb-8 inline-block shadow-sm">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="font-bold text-lg text-black font-sans">Excellent</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                            <Star size={16} className="text-white fill-white" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                      Rated 4.9 / 5 on <Star size={16} className="text-[#00b67a] fill-[#00b67a]" /> <span className="font-bold text-black">Trustpilot</span>
                    </div>
                  </div>

                  <a
                    href={BUUDY_LINK}
                    className="mx-auto bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-lg md:text-xl font-bold font-sans tracking-wide py-4 px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    CHECK AVAILABILITY
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CRO #14: Reminder Banner before #2 ===== */}
          <BuudyReminderBanner />

          {/* ====== COMPETITOR #2 (Always visible) ====== */}
          {visibleCompetitors.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden">
                      {product.rank} {product.name}
                    </h2>
                    <a href={product.link} className="block w-full mb-6 group">
                      <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300" />
                    </a>
                    <div className="text-center mb-6 w-full">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-extrabold text-slate-900">{product.price}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-slate-500">Overall rating {product.rating}</p>
                    </div>
                    <div className="w-full hidden lg:block">
                      <CTAButton href={product.link} text="Shop Now" className="w-full" variant="competitor" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                    <a href={product.link} className="hover:text-emerald-600 transition-colors">
                      {product.rank} {product.name}
                    </a>
                  </h2>
                  <div className="prose prose-slate prose-lg max-w-none mb-8">
                    {product.description.map((p, idx) => (
                      <p key={idx} className="text-slate-600 leading-relaxed">{p}</p>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar key={idx} label={metric.label} value={metric.value} />
                      ))}
                    </div>
                  </div>
                  <div className="w-full mt-8 lg:hidden">
                    <CTAButton href={product.link} text="Shop Now" className="w-full" variant="competitor" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ===== CRO #14: Reminder Banner after #2 ===== */}
          {!showAllProducts && <BuudyReminderBanner />}

          {/* ===== CRO #17: Collapsible products #3-#5 on mobile ===== */}
          {!showAllProducts && (
            <div className="text-center">
              <button
                onClick={() => setShowAllProducts(true)}
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-300 text-slate-700 font-bold px-8 py-4 rounded-full hover:border-slate-400 transition-colors text-base shadow-sm"
              >
                Show Remaining 3 Reviews <ChevronDown size={20} />
              </button>
            </div>
          )}

          <AnimatePresence initial={false}>
            {showAllProducts && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-16 overflow-hidden"
              >
                {hiddenCompetitors.map((product, productIndex) => (
                  <React.Fragment key={product.id}>
                    <div className="relative bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4 flex flex-col items-center">
                          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden">
                              {product.rank} {product.name}
                            </h2>
                            <a href={product.link} className="block w-full mb-6 group">
                              <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300" />
                            </a>
                            <div className="text-center mb-6 w-full">
                              <div className="flex items-center justify-center gap-3 mb-2">
                                <span className="text-3xl font-extrabold text-slate-900">{product.price}</span>
                              </div>
                              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={20} fill="currentColor" />
                                ))}
                              </div>
                              <p className="text-sm font-medium text-slate-500">Overall rating {product.rating}</p>
                            </div>
                            <div className="w-full hidden lg:block">
                              <CTAButton href={product.link} text="Shop Now" className="w-full" variant="competitor" />
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-8">
                          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                            <a href={product.link} className="hover:text-emerald-600 transition-colors">
                              {product.rank} {product.name}
                            </a>
                          </h2>
                          <div className="prose prose-slate prose-lg max-w-none mb-8">
                            {product.description.map((p, idx) => (
                              <p key={idx} className="text-slate-600 leading-relaxed">{p}</p>
                            ))}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
                            <div className="space-y-3">
                              {product.metrics.map((metric, idx) => (
                                <MetricBar key={idx} label={metric.label} value={metric.value} />
                              ))}
                            </div>
                          </div>
                          <div className="w-full mt-8 lg:hidden">
                            <CTAButton href={product.link} text="Shop Now" className="w-full" variant="competitor" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Reminder banner after #3 and #4 */}
                    {productIndex < hiddenCompetitors.length - 1 && <BuudyReminderBanner />}
                  </React.Fragment>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* ===== CRO #18: Improved Sticky Mobile CTA ===== */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-slate-900 leading-tight">🏆 #1 Pick — £179</span>
          <span className="text-xs text-emerald-600 font-bold tracking-wide">Free Gifts Included</span>
        </div>
        <a
          href={BUUDY_LINK}
          className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">Claim Offer →</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </a>
      </div>
    </div>
  );
}
