'use client';
import React from 'react';
import { Calendar, Check, CheckCircle2, TrendingUp, HandCoins, XCircle, Award, BadgePoundSterling } from 'lucide-react';
import { motion } from 'motion/react';
import { GreenStarRating } from '@/components/GreenStarRating';
import { CTAButton } from './NewAdvertorial';
import { MarketLocalizedContent } from '@/components/MarketLocalizedContent';
import { EXPERT_PROFILE, EXPERT_PROFILE_BIO } from '@/lib/expertProfile';
import type { MarketContextProps } from '@/lib/marketContext';

const dangerPoints = [
  {
    icon: HandCoins,
    title: "The Influencer Markup",
    description: "When you see a Hollywood celebrity or a massive influencer endorsing a £400 LED mask on Instagram, you are directly funding that post. Up to 60% of the cost of premium masks goes straight into influencer marketing budgets, not into the physical technology.",
    severity: "Financial Risk"
  },
  {
    icon: TrendingUp,
    title: "Commoditized Technology",
    description: "The core technology behind LED light therapy—light emitting diodes engineered to specific nanometers—is well-established science. The actual cost of producing clinical-grade LEDs has fallen significantly, yet many premium brands keep their retail prices high.",
    severity: "Consumer Awareness"
  },
  {
    icon: BadgePoundSterling,
    title: "The 'Prestige Pricing' Illusion",
    description: "In the beauty industry, there is a psychological tactic called 'prestige pricing'. Brands intentionally price a product at £400+ to trick consumers into assuming it must be 'clinical grade' or inherently better than a £179 product. It is a calculated psychological trap.",
    severity: "High Risk"
  },
  {
    icon: XCircle,
    title: "Nickled and Dimed",
    description: "Because these brands operate on massive overheads, they constantly nickel and dime you. Want neck coverge? That's £300 extra. Want a protective bag? £40. Want blue light for acne? Another £350 mask.",
    severity: "Financial Risk"
  }
];

const comparisonPoints = [
  { feature: "Business Model", silicone: "Heavy Influencer/Celebrity Marketing", buudy: "Direct-to-Consumer / Word of Mouth" },
  { feature: "Retail Price", silicone: "£350 - £579+", buudy: "£179 (Fair Pricing)" },
  { feature: "Included in Box", silicone: "Mask & Basic Cord", buudy: "Face Mask, Neck Mask, Remote, Eye Protection" },
  { feature: "Return on Investment", silicone: "Paying for brand perceived value", buudy: "Paying strictly for technology & results" },
];

const expertQuotes = [
  {
    name: EXPERT_PROFILE.name,
    title: EXPERT_PROFILE.title,
    quote: "If you strip away the designer packaging and the celebrity endorsements, a £500 mask and a £200 mask often use very similar components. With premium brands, a large part of the price reflects the logo rather than the technology."
  },
  {
    name: EXPERT_PROFILE.name,
    title: EXPERT_PROFILE.title,
    quote: "Our advice is to compare specs, not brands. Look at the nanometer wavelengths (630nm red, 415nm blue) and the accessories included. If two devices are similar on paper, paying an extra £300 for the brand name rarely makes sense."
  }
];

export default function BrandNamePremium({ context }: MarketContextProps) {
  return (
    <MarketLocalizedContent context={context}>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-200">
            <BadgePoundSterling size={16} />
            PRICE BREAKDOWN
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            Brand Name vs. Value: What You're Really Paying For in an LED Mask
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
              {EXPERT_PROFILE_BIO} For this analysis, she reviewed premium LED mask positioning, specifications, and pricing claims to separate product value from brand markup.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>It's the dirtiest secret in the luxury beauty industry: <strong>A higher price tag does not equal better technology.</strong></p>
          <p>When you see world-famous models or Hollywood actors posting selfies with a specific brand's LED mask, they didn't just stumble upon it. They are paid hundreds of thousands of pounds for that endorsement. And where does the brand get that money? By charging you £400 for a device that costs a fraction of that to produce.</p>
          <p>This "Celebrity Markup" forces consumers to absorb massive corporate marketing overheads. You are led to believe that because a mask costs £500, it must possess some magical, proprietary 'clinical' advantage. The reality is that the physics of light—specifically 630nm Red Light and 415nm Blue Light—cannot be patented or made 'more premium' by a logo. Light is just light.</p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            Where Your £400 Actually Goes
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
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 rounded-l-3xl"></div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100 mb-6">
                    <IconComponent size={24} className="text-red-500" />
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
            Industry Experts Weigh In
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
            The Math of Light Therapy
          </h2>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-3 bg-slate-800 text-white">
              <div className="p-4 md:p-6 font-bold text-sm md:text-base">Feature</div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-red-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <XCircle size={16} className="text-red-400" />
                  "A-List" Brands
                </span>
              </div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-emerald-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Buudy LED Mask
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
            The Solution: Direct-to-Consumer Integrity
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              No Celebrity Tax
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
                  <p className="text-sm font-medium text-slate-500">Highly rated by customers</p>
                </div>
                <div className="hidden lg:block w-full">
                  <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Get the Buudy Mask Direct" className="w-full" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-serif">Buudy 7 Color LED Therapy Mask</h3>
                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p>Buudy was founded on a simple principle: <strong> democratize clinical-grade skincare.</strong> By refusing to pay millions to celebrities for endorsements, Buudy is able to pour 100% of its budget directly into the hardware.</p>
                  <p>That means at £179, you are getting 7 distinct wavelengths, 192 high-density LEDs, and a built-in neck adapter. You are paying for the electronics and the design—not a celebrity marketing budget.</p>
                </div>

                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 mb-8">
                  <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle2 className="text-emerald-500" /> The Direct-to-Consumer Promise
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Zero Celebrity Markup: We don't pay influencers, we pass the savings to you.",
                      "Capable Hardware: 192 dense LEDs across 7 light modes.",
                      "Transparent Pricing: £179 includes the face mask, neck adapter, and all accessories.",
                      "Strong Customer Feedback: A large base of organic, un-paid customer reviews in the UK."
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
                  <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Get the Buudy Mask Direct" className="w-full" />
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
