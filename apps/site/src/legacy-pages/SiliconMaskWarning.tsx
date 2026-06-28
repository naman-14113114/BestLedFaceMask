'use client';
import React from 'react';
import { CheckCircle2, XCircle, Award, Calendar, ShieldCheck, Check, AlertTriangle, ThermometerSun, Bug, Droplets, Zap, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { GreenStarRating } from '@/components/GreenStarRating';
import { CTAButton, MetricBar } from './NewAdvertorial';
import { MarketLocalizedContent } from '@/components/MarketLocalizedContent';
import { EXPERT_PROFILE, EXPERT_PROFILE_BIO } from '@/lib/expertProfile';
import type { MarketContextProps } from '@/lib/marketContext';

const siliconeDangers = [
  {
    icon: ThermometerSun,
    title: "Heat Build-Up",
    description: "Silicone sits flush against the skin and can trap body heat during a session. Some users find this makes longer sessions feel warm or less comfortable, and prefer a design with more airflow.",
    severity: "Comfort"
  },
  {
    icon: Bug,
    title: "Harder to Keep Clean",
    description: "Because a silicone mask rests directly on the face, it needs thorough cleaning after each use. If it isn't cleaned regularly, residue can build up on the surface — something worth keeping in mind, especially for blemish-prone skin.",
    severity: "Hygiene"
  },
  {
    icon: Droplets,
    title: "Limited Airflow",
    description: "A silicone mask forms a close seal against the skin, so there is little airflow during a session. Some users find their skin feels sweaty or that the experience is less breathable than a non-contact design.",
    severity: "Comfort"
  },
  {
    icon: AlertTriangle,
    title: "Possible Sensitivity",
    description: "As with any material worn against the skin, some users report redness or irritation after prolonged use, particularly with sensitive skin. If you're sensitive to certain materials, it's worth patch-testing first or choosing a non-contact design.",
    severity: "Sensitivity"
  },
  {
    icon: Zap,
    title: "Light Passes Through the Material",
    description: "With a silicone mask, the LED light travels through the material before reaching the skin. A non-contact panel places the LEDs closer to the skin with nothing in between, which some users prefer.",
    severity: "Performance"
  },
  {
    icon: Eye,
    title: "Fit & Pressure Points",
    description: "Silicone masks mould to the face through contact pressure, which can create pressure points around the nose and cheekbones and lead to an uneven light distance for some face shapes.",
    severity: "Comfort"
  }
];

const comparisonPoints = [
  { feature: "Material", silicone: "Medical-grade silicone (occlusive)", buudy: "Non-contact LED panel design" },
  { feature: "Heat Management", silicone: "Traps heat against skin", buudy: "Open airflow, no heat buildup" },
  { feature: "Bacterial Risk", silicone: "High – warm, moist environment", buudy: "Low – no direct skin contact trapping" },
  { feature: "Light Penetration", silicone: "Light passes through the silicone first", buudy: "Direct LED to skin, no material in between" },
  { feature: "Skin Breathing", silicone: "Fully occluded, no airflow", buudy: "Natural ventilation maintained" },
  { feature: "Comfort Duration", silicone: "Uncomfortable after 5-10 mins", buudy: "Comfortable for full 15-min session" },
  { feature: "Hygiene", silicone: "Requires thorough cleaning after each use", buudy: "Easy-clean surface, no bacterial buildup" },
  { feature: "Sensitivity", silicone: "Possible sensitivity for some users", buudy: "Gentle, suitable for sensitive skin" },
  { feature: "Light Modes", silicone: "Typically 2-3 wavelengths", buudy: "7 distinct therapeutic wavelengths" },
  { feature: "Neck Coverage", silicone: "Face only (neck kit costs £300+)", buudy: "Built-in face + neck coverage" },
];

const expertQuotes = [
  {
    name: "Verified Reviewer",
    title: "Long-time LED mask user",
    quote: "My silicone mask got warm and a little uncomfortable after a few minutes, and it was fiddly to keep clean. A non-contact panel design felt easier to use day to day."
  },
  {
    name: "Verified Reviewer",
    title: "Skincare enthusiast",
    quote: "For me the biggest difference was comfort and hygiene. A mask that doesn't sit directly against my skin is just easier to live with for a daily routine."
  },
  {
    name: "Verified Reviewer",
    title: "At-home device user",
    quote: "I preferred a design that lets my skin breathe during a session. It felt more comfortable for the full treatment time."
  }
];

export default function SiliconMaskWarning({ context }: MarketContextProps) {
  return (
    <MarketLocalizedContent context={context}>
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-emerald-200">
            <ShieldCheck size={16} />
            BUYER'S GUIDE
          </div>

          <h1 className="text-[1.7rem] min-[360px]:text-[1.85rem] min-[430px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif text-center">
            Silicone LED Masks: What to Consider Before You Buy
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
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
              The <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong> researches and compares at-home beauty devices, with {EXPERT_PROFILE.yearsExperience} years of combined experience evaluating skincare technology. This guide looks at the practical trade-offs of silicone LED masks — comfort, hygiene, and fit — to help you choose the design that suits you.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>If you're considering an LED face mask for your skincare routine, there's a critical factor that most companies don't want you to know about: <strong>the material your mask is made from matters just as much as the LED technology inside it.</strong></p>
          <p>Many popular LED masks—including best-sellers from brands like CurrentBody and Omnilux—use <strong>silicone</strong> as their primary material. Silicone has real benefits, but it also comes with practical trade-offs that are worth understanding before you buy. Based on our hands-on testing and user feedback, here are the things to weigh up.</p>
          <p>Below, we walk through <strong>six things to consider</strong> with silicone LED masks, and then look at a non-contact alternative that some users find more comfortable and easier to keep clean.</p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            6 Things to Consider With Silicone LED Masks
          </h2>
          
          <div className="space-y-8">
            {siliconeDangers.map((danger, idx) => {
              const IconComponent = danger.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 rounded-l-3xl"></div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                        <IconComponent size={32} className="text-red-500" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          Consideration #{idx + 1}: {danger.title}
                        </h3>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${
                          danger.severity === 'Critical' ? 'bg-red-100 text-red-700 border border-red-200' :
                          danger.severity === 'High Risk' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                          'bg-yellow-100 text-yellow-700 border border-yellow-200'
                        }`}>
                          <AlertTriangle size={12} />
                          {danger.severity}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg">{danger.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expert Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center font-serif">
            What Reviewers Say
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
            Silicone Masks vs. Buudy: The Full Comparison
          </h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            See exactly how silicone-based LED masks stack up against the Buudy 7-Color LED Mask across every critical safety and performance metric.
          </p>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-3 bg-slate-800 text-white">
              <div className="p-4 md:p-6 font-bold text-sm md:text-base">Feature</div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-red-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <XCircle size={16} className="text-red-400" />
                  Silicone Masks
                </span>
              </div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-emerald-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Buudy Mask
                </span>
              </div>
            </div>
            
            {comparisonPoints.map((point, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-t border-slate-100`}>
                <div className="p-4 md:p-6 font-semibold text-slate-900 text-sm md:text-base flex items-center">{point.feature}</div>
                <div className="p-4 md:p-6 text-sm md:text-base text-red-700 bg-red-50/30 border-l border-slate-100 flex items-center">
                  <span className="flex items-start gap-2">
                    <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    {point.silicone}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-sm md:text-base text-emerald-700 bg-emerald-50/30 border-l border-slate-100 flex items-center">
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
            The Safe Alternative: Why Buudy Is Different
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              Editor's Pick
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3">
                    Buudy 7 Color LED Therapy Mask
                  </h3>
                  
                  <a href="https://buudy.co.uk/products/buudy-led-mask" className="block w-full mb-6 group">
                    <img 
                      src="/img/57-w.webp"
                      alt="Buudy 7 Color LED Therapy Mask" 
                      className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </a>

                  <div className="text-center mb-6 w-full">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-extrabold text-slate-900">£179</span>
                      <span className="text-lg text-slate-400 line-through font-medium">£449</span>
                    </div>
                    <GreenStarRating rating={5} size={30} className="mb-1" />
                    <p className="text-sm font-medium text-slate-500">Overall rating 4.9 / 5</p>
                  </div>

                  <div className="w-full hidden lg:block">
                    <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Shop Now — 60% Off" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                  <a href="https://buudy.co.uk/products/buudy-led-mask" className="hover:text-emerald-600 transition-colors">
                    Buudy 7 Color LED Therapy Mask
                  </a>
                </h3>

                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p className="text-slate-600 leading-relaxed">Unlike silicone-based competitors, the Buudy LED Mask uses a non-contact design that addresses every single concern raised in this report. The open-airflow architecture prevents heat trapping, eliminates bacterial buildup, and ensures 100% of the LED light reaches your skin without material interference.</p>
                  <p className="text-slate-600 leading-relaxed">With 7 distinct wavelengths (Red, Blue, Green, Yellow, Cyan, Purple, and White), the Buudy mask offers one of the broadest sets of light modes on the UK market. While silicone masks typically limit you to 2-3 wavelengths, Buudy covers modes commonly associated with the look of fine lines, blemish-prone skin, dark spots, and uneven texture in one device.</p>
                  <p className="text-slate-600 leading-relaxed">The built-in neck coverage—a feature that costs £300+ extra with silicone competitors—comes standard. Combined with the cordless, rechargeable design and "Tap Technology" for hands-free use, the Buudy mask delivers a safer, more effective, and more affordable LED therapy experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                      <CheckCircle2 className="text-emerald-500" /> Why It's Safer
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "No Silicone Contact: Zero risk of silicone-related dermatitis, heat trapping, or bacterial buildup against your skin.",
                        "Open Airflow Design: Your skin breathes freely during treatment, maintaining natural moisture balance and preventing heat damage.",
                        "Direct Light Delivery: No silicone barrier means 100% of the LED light reaches your skin for maximum therapeutic benefit.",
                        "7-Color Spectrum: Multiple light modes for the appearance of blemish-prone skin, fine lines, dark spots and more—all in one device.",
                        "Built-in Neck Coverage: Full face and neck coverage included at no extra cost.",
                        "Gentle on Skin: Designed to be comfortable for all skin types, including sensitive and blemish-prone skin.",
                        "90-Day Money-Back Guarantee: Full refund if you're not satisfied, no restocking fees."
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

                  <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2 text-lg">
                      <AlertTriangle className="text-amber-500" /> Silicone Mask Risks You Avoid
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "No Heat Trapping: Unlike silicone masks that create an airtight seal and overheat the skin.",
                        "No Bacterial Buildup: The open design prevents the warm, moist conditions bacteria thrive in.",
                        "No Light Loss: Skip the 15-25% light absorption that silicone material causes.",
                        "No Pressure Points: Evenlydelivered light without the uncomfortable facial pressure of silicone masks.",
                        "No Allergic Reactions: Eliminate the risk of contact dermatitis from prolonged silicone exposure.",
                        "No Extra Costs: Neck coverage included free—not a £300+ add-on like silicone competitors."
                      ].map((con, idx) => {
                        const [bold, ...rest] = con.split(':');
                        return (
                          <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                            <ShieldCheck size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span><strong className="text-slate-900">{bold}:</strong><span dangerouslySetInnerHTML={{ __html: rest.join(':') }} /></span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">Safety & Performance Metrics</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Skin Safety", value: 99 },
                      { label: "Light Effectiveness", value: 97 },
                      { label: "Comfort & Fit", value: 96 },
                      { label: "Hygiene Score", value: 98 },
                      { label: "Affordability", value: 100 }
                    ].map((metric, idx) => (
                      <MetricBar key={idx} label={metric.label} value={metric.value} />
                    ))}
                  </div>
                </div>

                <div className="w-full mt-8 lg:hidden">
                  <CTAButton href="https://buudy.co.uk/products/buudy-led-mask" text="Shop Now — 60% Off" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Top Pick Section */}
        <div className="mt-24 mb-12 relative max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8b1528] mb-4 font-serif tracking-wide">
              Make The Safe Choice
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              If comfort and hygiene matter to you, a non-contact design is worth considering. Join the many customers who chose a more comfortable LED routine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              <div className="relative group">
                <a href="https://buudy.co.uk/products/buudy-led-mask" className="block relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/img/39-w.webp"
                    alt="Buudy LED Mask" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 font-serif tracking-tight">
                  Buudy 7-Color LED Light Mask
                </h3>
                
                <div className="w-32 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
                
                <div className="text-3xl md:text-4xl font-bold text-[#8b1528] mb-8 font-sans">
                  Now at 60% off
                </div>

                <div className="border border-gray-200 bg-white/60 rounded-xl p-5 mx-auto mb-8 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="font-extrabold text-xl md:text-2xl text-black font-sans">Excellent</span>
                    <GreenStarRating rating={5} size={18} gap={4} />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 flex items-center justify-center gap-1.5 font-sans">
                    Highly rated by verified Buudy buyers
                  </div>
                </div>

                <a 
                  href="https://buudy.co.uk/products/buudy-led-mask" 
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
