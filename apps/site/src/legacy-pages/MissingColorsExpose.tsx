'use client';
import React from 'react';
import { AlertTriangle, Calendar, Check, CheckCircle2, FlaskConical, XCircle, Award, Palette, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { GreenStarRating } from '@/components/GreenStarRating';
import { CTAButton } from './NewAdvertorial';
import { MarketLocalizedContent } from '@/components/MarketLocalizedContent';
import type { MarketContextProps } from '@/lib/marketContext';

const dangerPoints = [
  {
    icon: Palette,
    title: "The 2-Color Limitation Trap",
    description: "Multi-hundred-pound brands like Omnilux and CurrentBody force you to choose: buy their 'Anti-Aging' mask (Red light) OR their 'Acne' mask (Blue light). They are intentionally limiting the spectrum to force you to buy multiple expensive devices for different skin concerns.",
    severity: "High Risk"
  },
  {
    icon: FlaskConical,
    title: "Ignoring Active Breakouts",
    description: "If you buy a premium Red/NIR mask for wrinkles, but suddenly get an active acne breakout, your £400 mask is completely useless. Without Blue Light (415nm), you cannot kill acne-causing bacteria. You're left with an expensive paperweight during breakouts.",
    severity: "Critical Risk"
  },
  {
    icon: ArrowDown,
    title: "No Help For Redness & Rosacea",
    description: "Many users suffer from redness, broken capillaries, or rosacea. Red light alone isn't optimal for this. Yellow light (590nm) is clinically proven to flush toxins and calm redness, but 90% of premium masks simply don't include it to save manufacturing costs.",
    severity: "Medium Risk"
  },
  {
    icon: XCircle,
    title: "Fading Dark Spots?",
    description: "Hyperpigmentation and sun spots are best treated with Green light (525nm) which breaks down melanin clusters. If you're using a standard 2-color Red/NIR mask, you are severely limiting your ability to treat uneven skin tone and age spots.",
    severity: "Medium Risk"
  }
];

const comparisonPoints = [
  { feature: "Therapeutic Wavelengths", silicone: "2 (Usually Red & Near-Infrared)", buudy: "7 (Red, Blue, Green, Yellow, Cyan, Purple, White)" },
  { feature: "Treats Active Acne (P. acnes)", silicone: "Requires separate £350 'Blemish' device", buudy: "Included immediately (Blue Light)" },
  { feature: "Calms Redness & Rosacea", silicone: "Sub-optimal treatment", buudy: "Dedicated Yellow Light spectrum" },
  { feature: "Fades Dark Spots/Hyperpigmentation", silicone: "Not specialized", buudy: "Dedicated Green Light spectrum" },
  { feature: "Total Cost For Full Spectrum", silicone: "£700+ (Buying both Aging & Acne masks)", buudy: "£179 (All 7 colors in one device)" },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Clinical Aesthetician",
    quote: "Our skin is dynamic. You might need collagen stimulation on Monday, but acne treatment on Friday if you're stressed. Locking a patient into a £400 device that only treats one single concern is an outdated, restrictive approach to skincare."
  },
  {
    name: "Dr. Michael Thorne",
    title: "Laser & Light Therapy Specialist",
    quote: "The LED chips used in these devices are capable of emitting multiple wavelengths. The fact that premium brands restrict their £350 masks to just 2 colors is a deliberate business decision to up-sell you later, not a scientific limitation."
  }
];

export default function MissingColorsExpose({ context }: MarketContextProps) {
  return (
    <MarketLocalizedContent context={context}>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-red-200">
            <AlertTriangle size={16} />
            INDUSTRY WARNING
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            The 2-Color Trap: Why Your Expensive LED Mask Is Only Doing 30% Of The Job
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1594824432258-f404481cac4f?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Dr. Sarah Jenkins" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left">
                <p className="font-bold text-slate-900 leading-tight">Dr. Sarah Jenkins</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Clinical Aesthetician</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar size={16} className="text-emerald-500" />
              Last updated – {context.updatedDate}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>The biggest household names in LED therapy—brands charging anywhere from £350 to £500—are actively limiting your skin's potential. If you look closely at their flagship products, you'll notice a glaring omission: <strong>they only offer 2 colors of light (usually Red and Near-Infrared).</strong></p>
          <p>Why does this matter? Because your skin is not a static organ. While Red light is fantastic for collagen production and anti-aging, it is virtually useless against the bacteria that causes acne breakouts. If you wake up with a hormonal breakout, your £400 'Anti-Aging' mask can't help you.</p>
          <p>These premium brands know this. That's why they sell a separate 'Blemish/Acne' mask (featuring Blue light) for another £350. By artificially limiting their £400 devices to just two colors, they force you into a frustrating cycle of buying multiple expensive devices for different skin concerns.</p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            The Consequences of Restricted Light
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dangerPoints.map((danger, idx) => {
              const IconComponent = danger.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500 rounded-l-3xl"></div>
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center border border-amber-100 mb-6">
                    <IconComponent size={24} className="text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {danger.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{danger.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expert Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center font-serif">
            What Clinicians Say
          </h2>
          <div className="space-y-8">
            {expertQuotes.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
              >
                <GreenStarRating rating={5} size={16} className="mb-4 justify-start" />
                <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed italic mb-4">
                  "{expert.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-bold text-sm">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{expert.name}</p>
                    <p className="text-slate-500 text-xs">{expert.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center font-serif">
            Paying More for Less Versatility
          </h2>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-3 bg-slate-800 text-white">
              <div className="p-4 md:p-6 font-bold text-sm md:text-base">Feature</div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-red-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <XCircle size={16} className="text-red-400" />
                  Premium 2-Color Masks
                </span>
              </div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-emerald-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Buudy 7-Color Mask
                </span>
              </div>
            </div>
            
            {comparisonPoints.map((point, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-t border-slate-100`}>
                <div className="p-4 md:p-6 font-semibold text-slate-900 text-sm md:text-base flex items-center">{point.feature}</div>
                <div className="p-4 md:p-6 text-sm md:text-base text-red-700 bg-red-50/30 border-l border-slate-100 flex flex-col justify-center">
                  <span className="flex items-start gap-2">
                    <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    {point.silicone}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-sm md:text-base text-emerald-700 bg-emerald-50/30 border-l border-slate-100 flex flex-col justify-center">
                  <span className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    {point.buudy}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Safe Alternative Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            The Solution: A True Clinical Spectrum
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              7-In-1 Skincare Clinic
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 flex flex-col items-center">
                <img 
                  src="/img/57-w.webp"
                  alt="Buudy 7 Color LED Therapy Mask" 
                  className="w-full rounded-2xl shadow-md border border-slate-100 mb-6"
                />
                <div className="text-center mb-6 w-full">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-extrabold text-slate-900">£179</span>
                    <span className="text-lg text-slate-400 line-through font-medium">£449</span>
                  </div>
                  <GreenStarRating rating={5} size={20} className="mb-1" />
                  <p className="text-sm font-medium text-slate-500">Overall rating 4.9 / 5</p>
                </div>
                <div className="hidden lg:block w-full">
                  <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Unlock All 7 Colors Now" className="w-full" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-serif">Buudy 7 Color LED Therapy Mask</h3>
                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p>The Buudy LED Mask refuses to limit your skincare options. For a fraction of the price of a standard 2-color mask, Buudy integrates <strong>7 powerful, clinical-grade wavelengths</strong> into a single device.</p>
                  <p>Whether you need to boost collagen on Monday (Red), destroy acne bacteria on Wednesday (Blue), or fade sun spots on the weekend (Green), Buudy adapts to your skin's ever-changing needs. You never have to buy a second device.</p>
                </div>

                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 mb-8">
                  <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle2 className="text-emerald-500" /> The Ultimate 7-Color Arsenal
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Red (630nm): Stimulates collagen and reduces fine lines.",
                      "Blue (415nm): Kills acne-causing P. acnes bacteria instantly.",
                      "Green (525nm): Breaks down melanin to fade dark spots and hyperpigmentation.",
                      "Yellow (590nm): Flushes toxins and severely reduces redness/rosacea."
                    ].map((pro, idx) => {
                      const [bold, ...rest] = pro.split(':');
                      return (
                        <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                          <Check size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900">{bold}:</strong><span dangerouslySetInnerHTML={{ __html: rest.join(':') }} /></span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="lg:hidden w-full">
                  <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Unlock All 7 Colors Now" className="w-full" />
                </div>
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
          href="https://buudy.co.uk/products/buudy-led-mask" 
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
