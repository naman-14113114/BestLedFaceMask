'use client';
import React from 'react';
import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { GreenStarIcon, GreenStarRating } from '@/components/GreenStarRating';
import { CTAButton, MetricBar } from './NewAdvertorial';
import { ResponsiveProsCons } from './ResponsiveProsCons';
import { MarketLocalizedContent } from '@/components/MarketLocalizedContent';
import { EXPERT_PROFILE, EXPERT_PROFILE_BIO } from '@/lib/expertProfile';
import type { MarketContextProps } from '@/lib/marketContext';

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
    name: "Buudy 7 Color LED Therapy Mask",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    rating: "4.9 / 5",
    link: "https://buudy.com/products/buudy-led-mask",
    isWinner: true,
    description: [
      "Our top pick is the Buudy LED Mask, a medical-grade device that outperforms the competition with its comprehensive 7-color spectrum. While most brands offer only basic red light, Buudy includes specialized wavelengths to target everything from deep wrinkles and acne to inflammation. This FDA-cleared technology ensures professional-grade results for all skin types.",
      "A major advantage is the built-in neck coverage, a vital feature often missing from more expensive models. This allows you to treat \"turkey neck\" and sagging skin simultaneously. The cordless, rechargeable design features \"Tap Technology,\" making it completely hands-free and portable for a convenient 15-minute daily session.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179, it offers the best value on the market, combining full-face and neck rejuvenation with advanced eye protection for a safe, effective, and painless experience."
    ],
    pros: [
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 1,000 reviews and performed well in internal testing.",
      "7-Color Medical Grade Spectrum: Unlike competitors that only offer 2 or 3 colors, Buudy features 7 distinct wavelengths (Red, Blue, Green, Yellow, Cyan, Purple, and White). This allows you to treat everything from deep wrinkles and acne to hyperpigmentation and inflammation in one single device.",
      "Dermatologist Proven: FDA-cleared and expert-recommended technology ensures safe, professional-grade results from the comfort of your home.",
      "Built-in Neck Coverage: Specifically designed to target \"turkey neck\" and sagging skin—a critical feature most expensive brands miss.",
      "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
      "Cordless & Portable: A hands-free, rechargeable design with \"Tap Technology\" that lets you multitask while you rejuvenate.",
      "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
      "Cost-effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
      "90-Day Money-Back Guarantee: Offers a generous trial period to test for results, reducing the risk of purchase."
    ],
    cons: [
      "Limited Availability: Available for purchase online only and exclusively in the United Kingdom.",
      "Limited Stock: There is a risk of the product being sold out due to limited stock."
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
    name: "LED Facial Beauty Mask by Deluxeskin",
    image: "https://img.shopbase.com/10677/10677322/themes/17710782713159684b8b.jpeg",
    price: "£199",
    rating: "4.6 / 5",
    link: "#",
    isWinner: false,
    description: [
      "Taking the second spot is the DeluxeSkin Clinical Red Light Face Mask. This device positions itself as a \"med-spa\" alternative, directly challenging big brands like Omnilux and CurrentBody by offering the exact same medical-grade specifications at a lower price point.",
      "Its standout feature is value bundling. While most brands charge £250+ for just a face mask, DeluxeSkin includes a Neck & Décolletage LED System within the package. It utilizes Dual-Chip Technology, meaning every single LED bulb emits both Red (633nm) and Near-Infrared (830nm) light simultaneously, ensuring maximum coverage rather than a \"polka-dot\" effect of alternating lights.",
      "However, at £199.00, it is still significantly more expensive than our #1 pick. While the inclusion of the neck piece is a great bonus, if you are looking strictly for facial rejuvenation, you are forced to pay for the extra hardware whether you use it or not."
    ],
    pros: [
      "Neck & Chest Piece Included: Unlike almost every other competitor that charges £100+ extra for a neck attachment, DeluxeSkin includes it in the box.",
      "Medical-Grade Wavelengths: Uses the clinically validated \"Gold Standard\" combination of 633nm (Red) for collagen and 830nm (Near-Infrared) for deep tissue repair.",
      "Dual-Chip LEDs: Features 276 LEDs (combined face and neck) where every diode emits both wavelengths, ensuring equal dosing across the skin.",
      "High Power Density: Claims an irradiance of 30mW/cm², which matches professional salon equipment for effective dosing."
    ],
    cons: [
      "Higher Price, Fewer Features: At £199, it is more expensive than our top overall pick, yet it is restricted to just two wavelengths instead of a full multi-color spectrum.",
      "Geographic Limitations: A heavy infrastructure focus on the UK market can make shipping times and customer support difficult for international buyers compared to globally accessible brands.",
      "Cumbersome Setup: Utilizing two entirely separate mask pieces (face and neck) and a bulky controller means you are tethered to more wires, making it far less \"grab-and-go\" than a streamlined, all-in-one unit.",
      "Inventory Inconsistencies: The website frequently displays \"Low Stock\" and delayed shipping alerts, indicating frustrating backorders or drop-shipping wait times.",
      "Missing Blue Light: This device is strictly for anti-aging. It completely lacks the Blue light therapy found in more versatile masks, rendering it ineffective for treating active acne or surface bacteria."
    ],
    metrics: [
      { label: "Light Effectiveness", value: 95 },
      { label: "Skin Comfort and Fit", value: 90 },
      { label: "Ease of Use", value: 80 },
      { label: "Material Quality", value: 88 },
      { label: "Affordability", value: 70 }
    ]
  },
  {
    id: 3,
    rank: "#3",
    name: "CurrentBody LED Mask",
    image: "https://img.shopbase.com/10677/10677322/themes/176872504642f0322d65.jpeg",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    description: [
      "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks.",
      "Its proprietary \"Pillow Technology\" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home.",
      "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector."
    ],
    pros: [
      "Strong Social Proof: The mask is heavily endorsed by celebrities (like Kim Kardashian and Cillian Murphy) and multiple dermatologists, and has won several beauty awards.",
      "Clinically Studied: The company provides specific clinical data on its effectiveness for anti-aging (e.g., \"reducing wrinkles by 30%... in 8 weeks\").",
      "High-Quality Build: Features include flexible silicone for a good fit, a portable clip-on controller, and optional eye inserts for convenience."
    ],
    cons: [
      "Extremely High Price: At £399.99, it sits at the very top of the consumer price range.",
      "No Neck Coverage: The standard mask does not cover the neck. To achieve neck coverage, you must purchase an additional kit, raising the total cost to nearly £680.",
      "Very Limited Treatment Modes: It exclusively utilizes red and near-infrared light. It cannot be used to treat active acne breakouts (which requires blue light) or balance skin tone (which utilizes green/yellow light).",
      "Not a Complete Solution: Because it only targets one concern (aging), it is not a comprehensive solution for total skin health like a multi-color mask.",
      "Costly Money-Back Guarantee: The money-back guarantee includes a 10% restocking fee."
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
    id: 4,
    rank: "#4",
    name: "Omnilux LED Mask",
    image: "https://img.shopbase.com/10677/10677322/themes/1769107230af732ce69a.jpeg",
    price: "£348",
    rating: "4.6 / 5",
    link: "https://amzn.to/4uewbOw",
    isWinner: false,
    description: [
      "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use.",
      "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments.",
      "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation."
    ],
    pros: [
      "Good Guarantee: Offers a 30-day, no-hassle, money-back guarantee, which is more straightforward than some competitors.",
      "High-Quality Brand: Omnilux is a well-known, trusted brand that originated in the professional medical device market.",
      "Portable Design: The mask is flexible, portable, and comes with a rechargeable controller and carry bag."
    ],
    cons: [
      "Extremely High Price: A substantial upfront cost for a single-purpose device.",
      "No Neck Coverage: The £348 price is for the face mask only. A separate neck and chest piece must be purchased for an additional £348, making the total cost for full coverage nearly £696.",
      "Very Limited Treatment Modes: The mask is strictly for anti-aging. If you want to clear acne breakouts, the manufacturer requires you to purchase an entirely different device (the Omnilux Clear).",
      "Not a Complete Solution: The company explicitly states the Contour mask \"will not clear acne breakouts\" and that customers must buy a different $395 mask (\"Omnilux Clear\") for that purpose. The Buudy mask handles both concerns in one device.",
      "Fewer LEDs: Features 132 LEDs, which is slightly fewer than some competing models, potentially affecting the density of light coverage."
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
    id: 5,
    rank: "#5",
    name: "Shark CryoGlow LED Mask",
    image: "https://img.shopbase.com/10677/10677322/themes/1768726434a7e6301df7.png",
    price: "£299.99",
    rating: "4.6 / 5",
    link: "https://amzn.to/40iCfrI",
    isWinner: false,
    description: [
      "Our top pick after rigorous testing is the Shark CryoGlow LED Face Mask, which has quickly made headlines and won prestigious beauty awards. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it the ultimate 2-in-1 solution for comprehensive facial care.",
      "Trusted by leading beauty editors at Oprah Daily and Women’s Health, this mask offers three \"chill\" levels and four distinct treatment modes, including Better Ageing and Blemish Repair. These advanced settings ensure a quick and efficient therapy session in as little as 6 to 8 minutes, utilizing proven wavelengths like Red (630nm) and Blue (415nm) light.",
      "In our experience, a single daily session is all that is required to see noticeable improvements in skin clarity and tone. The independent clinical studies and dermatologist-backed technology specifically excel at brightening the under-eye area, with users reporting that the cooling pads visibly reduce puffiness and refresh the complexion after just one use."
    ],
    pros: [
      "Unique Cooling Technology: Its main selling point is the \"Insta-Chill\" cryo-therapy for the under-eyes, a feature not found in standard LED masks, which helps to soothe and depuff.",
      "Developed with Dermatologists: The product is backed by dermatologists, which adds to its credibility.",
      "Fast Treatment Times: With pre-programmed sessions as short as 6-8 minutes, it offers a very quick daily treatment."
    ],
    cons: [
      "Extremely High Price: At £299.99, it is more than double the price of the Buudy mask (£179) for what is arguably less technology.",
      "No Neck Coverage: The device is for the face only and offers no treatment for the neck, a key area of concern for aging.",
      "Fewer LEDs: Features fewer LEDs than top-tier models, resulting in less comprehensive facial coverage.",
      "Unspecified LED Count: A major red flag. The manufacturer does not heavily advertise the exact number of LED bulbs, making it difficult to gauge the true light density.",
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
  }
];

export default function DeluxeskinComparison({ context }: MarketContextProps) {
  return (
    <MarketLocalizedContent context={context}>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[1.7rem] min-[360px]:text-[1.85rem] min-[430px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif text-center">
            Best LED Face Masks of 2026 in the UK: Tested & Reviewed Comparisons
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <img 
                src={EXPERT_PROFILE.image}
                alt={EXPERT_PROFILE.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left">
                <p className="font-bold text-slate-900 leading-tight">{EXPERT_PROFILE.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{EXPERT_PROFILE.title}</p>
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
              <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong> is a certified dermatologist and beauty technology expert with over {EXPERT_PROFILE.yearsExperience} years of experience evaluating skincare devices. She has been featured in Allure, Harper's Bazaar, and Dermatology Times, where she shares her expertise on the latest beauty innovations. Having tested hundreds of beauty devices in clinical and real-world settings, she specializes in helping consumers find safe, effective at-home beauty technology that delivers genuine results and exceptional value.
            </p>
          </div>

          <img 
            src="/img/TOP 5 LED Mask-10.png"
            alt="LED Masks Comparison" 
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl border border-slate-100"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>LED face masks have undergone a massive shift in the UK, moving from exclusive Harley Street clinic treatments to essential "must-have" home skincare tech. As a beauty tech researcher, I spent four months testing the UK market’s most popular devices to separate the genuine breakthroughs from the marketing hype.</p>
          <p>These devices utilize clinically-proven light wavelengths to stimulate collagen production, tackle acne-causing bacteria, and calm inflammation. However, the UK market is currently flooded with options, with prices ranging from <strong>£100 budget finds to £600+ premium investments</strong>. Despite similar-sounding marketing claims, the results are far from equal.</p>
          <p>I personally put <strong>18 LED masks</strong> through their paces over <strong>200+ hours</strong>, consulting board-certified dermatologists to understand what makes a device truly effective for British skin concerns. My findings were definitive: while some models delivered visible improvements within just a few weeks, others were little more than expensive placebos, regardless of the price tag.</p>
          <p>The difference comes down to <strong>proper wavelengths, light intensity, and treatment protocols</strong>—the factors that separate effective devices from expensive placebos.</p>
          <p>This guide is designed to reveal which LED masks actually deliver results, helping you navigate the British high street and online retailers to find the right device for your skin and your budget.</p>
        </div>

        {/* Criteria */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-8 text-center font-serif">We evaluated LED face masks based on 10 criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 md:gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100">
            As LED technology becomes a staple in home skincare, the variety of choices in the UK market can be overwhelming. We evaluated 18 popular models based on wavelength precision, ease of use, and overall value to help you find the right fit for your skincare goals.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`relative bg-white rounded-3xl shadow-sm border ${product.isWinner ? 'border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10' : 'border-slate-200'} p-6 md:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Left Column: Image & Quick Stats */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2 className={`text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden ${product.isWinner ? 'mt-3' : ''}`}>
                      {product.rank} {product.name}
                    </h2>
                    
                    <a href={product.link} className="relative block w-full mb-6 group">
                      {product.isWinner && (
                        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-emerald-700 shadow-lg ring-1 ring-emerald-100 backdrop-blur">
                          <Award size={14} />
                          #1 Top Pick
                        </span>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </a>

                    <div className="text-center mb-6 w-full">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-3xl font-extrabold text-slate-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-slate-400 line-through font-medium">{product.originalPrice}</span>
                        )}
                      </div>
                      <GreenStarRating
                        rating={product.rating}
                        forceFull={product.isWinner}
                        size={30}
                        className="mb-1"
                      />
                      <p className="text-sm font-medium text-slate-500">Overall rating {product.rating}</p>
                    </div>

                    {product.isWinner && (
                      <div className="w-full hidden lg:block">
                        <CTAButton href={product.link} text="Official Website" className="w-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Details */}
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

                  <ResponsiveProsCons pros={product.pros} cons={product.cons} />

                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">Performance Metrics</h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar key={idx} label={metric.label} value={metric.value} />
                      ))}
                    </div>
                  </div>

                  {product.isWinner && (
                    <div className="w-full mt-8 lg:hidden">
                      <CTAButton href={product.link} text="Official Website" className="w-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Top Pick Section - Elegant Design */}
        <div className="mt-24 mb-12 relative max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8b1528] mb-10 font-serif tracking-wide">
              Our Top Pick
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Image Area */}
              <div className="relative group">
                <a href="https://buudy.com/products/buudy-led-mask" className="block relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/img/39-w.webp"
                    alt="Buudy LED Mask" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              
              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-serif tracking-tight">
                  Buudy 7-Color LED Light Mask
                </h3>
                
                <div className="w-32 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
                
                <div className="text-3xl md:text-4xl font-bold text-[#8b1528] mb-8 font-sans">
                  Now at 60% off
                </div>

                {/* Trustpilot-style Badge */}
                <div className="border border-gray-200 bg-white/60 rounded-xl p-5 mx-auto mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="font-extrabold text-xl md:text-2xl text-black font-sans">Excellent</span>
                    <GreenStarRating rating={5} size={18} gap={4} />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 flex items-center justify-center gap-1.5 font-sans">
                    Rated <span className="font-bold text-black">4.9 / 5</span> on <GreenStarIcon size={20} /> <span className="font-bold text-black">Trustpilot</span>
                  </div>
                </div>

                <a 
                  href="https://buudy.com/products/buudy-led-mask" 
                  className="mx-auto bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-lg md:text-xl font-bold font-sans tracking-wide py-4 px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-bold text-sm text-slate-900 leading-tight">Buudy LED Mask</span>
          <span className="text-xs text-red-500 font-bold uppercase tracking-wide">60% OFF Today</span>
        </div>
        <a 
          href="https://buudy.com/products/buudy-led-mask" 
          className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </a>
      </div>
    </div>
    </MarketLocalizedContent>
  );
}
