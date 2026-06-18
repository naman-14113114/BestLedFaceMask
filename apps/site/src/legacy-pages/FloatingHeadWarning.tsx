'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Calendar, Check, CheckCircle2, Eye, ShieldCheck, Star, XCircle, Award, Droplets, ArrowDown, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { CTAButton, MetricBar } from './NewAdvertorial';

const dangerPoints = [
  {
    icon: Eye,
    title: "The 'Floating Head' Syndrome",
    description: "Aging doesn't stop at your jawline. When you treat your face meticulously but ignore your neck, you create a stark, unnatural contrast within months. Your face may look 10 years younger, while your neck betrays your true age—a cosmetic disaster known in dermatology as the 'floating head' aesthetic.",
    severity: "High Risk"
  },
  {
    icon: Scissors,
    title: "The £300 'Neck Tax' Rip-Off",
    description: "Premium brands like Omnilux and CurrentBody intentionally sell their standard £350-£400 LED masks as 'face-only'. If you want to treat your neck, they force you to purchase a completely separate 'Neck & Décolletage' piece for an additional £300+. You are effectively being taxed twice for what should be a single, comprehensive treatment.",
    severity: "Financial Risk"
  },
  {
    icon: Droplets,
    title: "Ignoring The Body's Thinnest Skin",
    description: "The skin on your neck and chest is significantly thinner than the skin on your face, has fewer sebaceous glands, and is constantly subjected to sun exposure. Because it's so fragile, it is often the very first place to show signs of aggressive aging, creping, and hyperpigmentation. Ignoring it in your LED routine guarantees premature aging.",
    severity: "High Risk"
  },
  {
    icon: ArrowDown,
    title: "Accelerated 'Tech Neck' Aging",
    description: "We are currently living through an epidemic of 'Tech Neck'—deep horizontal wrinkles and sagging caused by constantly looking down at our phones and laptops. A face-only mask does absolutely nothing to combat the structural collagen breakdown happening right below your chin.",
    severity: "Medium Risk"
  }
];

const comparisonPoints = [
  { feature: "Treatment Area", silicone: "Face Only (Stops at jawline)", buudy: "Full Face + Integrated Neck Therapy" },
  { feature: "Total Cost for Full Coverage", silicone: "£650 - £700+ (Requires 2 devices)", buudy: "£179 (Everything included)" },
  { feature: "Tech-Neck Wrinkle Defense", silicone: "Zero coverage, accelerates contrast", buudy: "Direct targeting of horizontal neck lines" },
  { feature: "Daily Routine Time", silicone: "20-30 mins (Face first, then neck)", buudy: "15 mins (Simultaneous treatment)" },
  { feature: "Light Spectrum", silicone: "Typically 2-3 wavelengths", buudy: "7 distinct therapeutic wavelengths" },
];

const expertQuotes = [
  {
    name: "Dr. Elena Rostova",
    title: "Aesthetic Dermatologist",
    quote: "The biggest mistake my patients make investing in home LED tech is buying face-only devices. The skin on the neck is incredibly delicate and notoriously difficult to treat later in life. Preventing 'turkey neck' simultaneously with your facial routine isn't a luxury; it's a dermatological necessity."
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher",
    quote: "Splitting facial and neck treatments into two separate £350 devices is purely a revenue-generation strategy by major brands. There is no structural or scientific reason a home LED mask cannot cover both zones effectively for half the cost."
  }
];

export default function FloatingHeadWarning() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const d = new Date();
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('en-GB', { month: 'long' });
    const year = d.getFullYear();
    setDate(`${day} ${month} ${year}`);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-red-200">
            <AlertTriangle size={16} />
            INDUSTRY EXPOSÉ
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            The £300 "Neck Tax": Why Buying A Face-Only LED Mask Is A Huge Mistake
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Dr. Elizabeth Vance" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
              />
              <div className="text-left">
                <p className="font-bold text-slate-900 leading-tight">Dr. Elizabeth Vance</p>
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
              <strong className="text-slate-900">Dr. Elizabeth Vance</strong> exposes the beauty industry's most profitable secret: intentionally designing £400 LED masks to ignore the neck area, forcing customers to spend hundreds more to prevent the dreaded "floating head" syndrome.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>You've decided to invest in an LED face mask to fight wrinkles and boost collagen. You look at premium brands like CurrentBody or Omnilux, ready to spend nearly £400 on your skin health. But there's a vital piece of information hidden in the fine print.</p>
          <p><strong>Those £400 masks stop completely at your jawline.</strong></p>
          <p>By treating only your face, you are inadvertently accelerating the visual aging contrast between your face and your neck. Within months, your facial skin will appear tight and glowing, while your neck continues to show "tech neck" lines, creping, and sun damage—a stark contrast that dermatologists refer to as <em>"Floating Head Syndrome."</em></p>
          <p>So, how do premium brands solve this? By requiring you to purchase a completely separate "Neck & Décolletage" attachment for <strong>another £300 to £350.</strong> They are effectively holding your total skin health hostage behind a massive paywall.</p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            Why Face-Only Masks Are Sabotaging Your Routine
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
            Expert Warnings
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
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
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
            The £300 Neck Tax Extortion
          </h2>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto mt-10">
            <div className="grid grid-cols-3 bg-slate-800 text-white">
              <div className="p-4 md:p-6 font-bold text-sm md:text-base">Feature</div>
              <div className="p-4 md:p-6 font-bold text-sm md:text-base text-center bg-red-900/30 border-l border-slate-700">
                <span className="flex items-center justify-center gap-2">
                  <XCircle size={16} className="text-red-400" />
                  Premium Face-Only Brands
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
            The Solution: Full Coverage, Fair Price
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              Dermatologist Recommended
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
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-sm font-medium text-slate-500">Overall rating 4.9 / 5</p>
                </div>
                <div className="hidden lg:block w-full">
                  <CTAButton href="https://buudy.com/pages/buudy-led-mask" text="Shop Now — 60% Off" className="w-full" />
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 font-serif">Buudy 7 Color LED Therapy Mask</h3>
                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p>The Buudy LED Mask fundamentally destroys the pricing model of premium brands by offering <strong>built-in, integrated neck coverage</strong> at no additional cost. For a flat £179, you receive simultaneous treatment for your face, jawline, and delicate neck skin—ensuring perfectly uniform rejuvenation without the "floating head" effect.</p>
                  <p>Instead of requiring 30 minutes to do your face and neck separately with two different devices, Buudy gets it all done in a single 15-minute, hands-free session. You save 50% of your time and nearly £500 of your money, while benefiting from an incredible 7 distinct medical-grade wavelengths.</p>
                </div>

                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 mb-8">
                  <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
                    <CheckCircle2 className="text-emerald-500" /> True Full-Coverage Value
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Zero 'Neck Tax': Built-in neck extension included automatically.",
                      "Simultaneous Treatment: Treat tech-neck and facial wrinkles at the exact same time.",
                      "7-Color Spectrum: From Red for lines, to Blue for acne, to Green for spots.",
                      " FDA-Cleared: Confirmed safe and effective for sensitive skin."
                    ].map((pro, idx) => {
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

                <div className="lg:hidden w-full">
                  <CTAButton href="https://buudy.com/pages/buudy-led-mask" text="Shop Now — 60% Off" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Top Pick Section */}
        <div className="mt-24 mb-12 relative max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8b1528] mb-4 font-serif tracking-wide">
              Stop Ignoring Your Neck
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Get the full-coverage Buudy mask today and prevent disjointed aging. Over 16,000 UK customers have already made the switch.
            </p>
            <div className="flex justify-center">
                <a 
                  href="https://buudy.com/pages/buudy-led-mask" 
                  className="bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-lg md:text-xl font-bold font-sans tracking-wide py-4 px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  SHOP NOW
                </a>
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
          href="https://buudy.com/pages/buudy-led-mask" 
          className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </a>
      </div>
    </div>
  );
}
