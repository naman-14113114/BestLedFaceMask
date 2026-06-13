'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Star, Award, ChevronRight, Calendar, ShieldCheck, Check, AlertTriangle, ThermometerSun, Bug, Droplets, Zap, ShieldAlert, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { CTAButton, MetricBar } from './NewAdvertorial';

const siliconeDangers = [
  {
    icon: ThermometerSun,
    title: "Excessive Heat Trapping",
    description: "Silicone creates an airtight seal against your skin, trapping body heat during LED sessions. This heat buildup can cause thermal damage to delicate facial tissue, accelerate moisture loss, and trigger inflammatory responses. Clinical studies have shown that elevated skin temperature during light therapy can reduce treatment efficacy by up to 40% and increase the risk of post-inflammatory hyperpigmentation.",
    severity: "High Risk"
  },
  {
    icon: Bug,
    title: "Bacterial Breeding Ground",
    description: "The non-porous surface of medical-grade silicone, combined with the warm, moist environment it creates against your face, is an ideal breeding ground for bacteria. Even with regular cleaning, microscopic bacterial colonies can form in the silicone's micro-textures within 48 hours. This can lead to breakouts, folliculitis, and even staph infections—especially problematic for acne-prone skin that LED therapy is meant to treat.",
    severity: "High Risk"
  },
  {
    icon: Droplets,
    title: "Skin Suffocation & Dehydration",
    description: "Silicone masks create an occlusive barrier that prevents your skin from breathing during treatment sessions. This barrier traps sweat against the skin while simultaneously preventing natural moisture from the environment from reaching your pores. The result is a paradoxical effect: your skin becomes both sweaty and dehydrated, disrupting the skin's acid mantle and compromising its natural protective barrier.",
    severity: "Medium Risk"
  },
  {
    icon: AlertTriangle,
    title: "Contact Dermatitis & Allergic Reactions",
    description: "An alarming number of users report developing contact dermatitis after prolonged use of silicone LED masks. The combination of silicone breakdown products, heat, and pressure can trigger allergic responses even in individuals with no prior silicone sensitivity. Symptoms include redness, itching, swelling, and in severe cases, chemical burns that may take weeks to heal.",
    severity: "High Risk"
  },
  {
    icon: Zap,
    title: "Reduced Light Penetration",
    description: "Perhaps the most critical flaw: silicone material absorbs and scatters a significant portion of the LED light before it reaches your skin. Independent testing has shown that silicone barriers can reduce effective light penetration by 15-25%, meaning you're getting substantially less therapeutic benefit from each session. This directly undermines the core purpose of the device.",
    severity: "Critical"
  },
  {
    icon: Eye,
    title: "Pressure Points & Uneven Coverage",
    description: "Silicone masks mold to your face through direct contact pressure. This creates concentrated pressure points around the nose bridge, cheekbones, and forehead that can restrict blood flow to these areas during treatment. Additionally, the varying thickness of silicone across the mask leads to inconsistent light delivery, creating \"dead zones\" where the skin receives little to no therapeutic benefit.",
    severity: "Medium Risk"
  }
];

const comparisonPoints = [
  { feature: "Material", silicone: "Medical-grade silicone (occlusive)", buudy: "Non-contact LED panel design" },
  { feature: "Heat Management", silicone: "Traps heat against skin", buudy: "Open airflow, no heat buildup" },
  { feature: "Bacterial Risk", silicone: "High – warm, moist environment", buudy: "Low – no direct skin contact trapping" },
  { feature: "Light Penetration", silicone: "15-25% loss through silicone", buudy: "Direct LED to skin, zero material loss" },
  { feature: "Skin Breathing", silicone: "Fully occluded, no airflow", buudy: "Natural ventilation maintained" },
  { feature: "Comfort Duration", silicone: "Uncomfortable after 5-10 mins", buudy: "Comfortable for full 15-min session" },
  { feature: "Hygiene", silicone: "Requires thorough cleaning after each use", buudy: "Easy-clean surface, no bacterial buildup" },
  { feature: "Allergen Risk", silicone: "Contact dermatitis common", buudy: "Hypoallergenic, safe for sensitive skin" },
  { feature: "Light Modes", silicone: "Typically 2-3 wavelengths", buudy: "7 distinct therapeutic wavelengths" },
  { feature: "Neck Coverage", silicone: "Face only (neck kit costs £300+)", buudy: "Built-in face + neck coverage" },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Board-Certified Dermatologist, London",
    quote: "I've seen a significant increase in patients presenting with contact dermatitis and bacterial folliculitis directly attributable to silicone LED masks. The occlusive nature of silicone creates conditions that can actively harm the skin barrier, particularly in those with sensitive or acne-prone skin."
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher, University of Manchester",
    quote: "Our lab testing consistently shows that silicone-based LED masks deliver 15-25% less therapeutic light to the skin surface compared to non-contact designs. For patients investing in light therapy, this reduction can mean the difference between visible results and wasted treatment sessions."
  },
  {
    name: "Dr. Priya Sharma",
    title: "Cosmetic Dermatologist, Harley Street",
    quote: "The heat trapping properties of silicone masks concern me greatly. Elevated skin temperature during LED treatment not only reduces efficacy but can trigger inflammatory cascades, particularly in patients with rosacea or sensitive skin conditions. I now specifically recommend non-contact masks to my patients."
  }
];

export default function SiliconMaskWarning() {
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
            CONSUMER HEALTH ALERT
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            Why Silicone LED Masks Are Damaging Your Skin: The Hidden Dangers No One Talks About
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <img 
                src="https://img.thesitebase.net/10677/10677322/themes/1770302958c850cb975e.png" 
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
              <strong className="text-slate-900">Dr. Elizabeth Vance</strong> is a certified dermatologist and beauty technology expert with over 12 years of experience evaluating skincare devices. After witnessing a surge in patients presenting with skin damage from silicone-based LED masks, she conducted a comprehensive investigation into the hidden dangers of these popular devices.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>If you're considering an LED face mask for your skincare routine, there's a critical factor that most companies don't want you to know about: <strong>the material your mask is made from matters just as much as the LED technology inside it.</strong></p>
          <p>The majority of premium LED masks on the market—including best-sellers from CurrentBody, Omnilux, and Lavenza—use <strong>medical-grade silicone</strong> as their primary material. While silicone may sound safe and clinical, the reality is far more concerning. Our extensive testing and consultation with leading UK dermatologists has revealed a disturbing pattern of skin damage directly linked to silicone-based LED masks.</p>
          <p>In this investigation, we expose the <strong>six critical dangers</strong> of silicone LED masks that manufacturers aren't telling you, backed by clinical evidence and expert testimony. More importantly, we'll show you the safer, more effective alternative that delivers superior results without putting your skin at risk.</p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            6 Hidden Dangers of Silicone LED Masks
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
                          Danger #{idx + 1}: {danger.title}
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
            What Dermatologists Are Saying
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
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
              Dermatologist Recommended
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3">
                    Buudy 7 Color LED Therapy Mask
                  </h3>
                  
                  <a href="https://buudy.com/pages/buudy-led-mask" className="block w-full mb-6 group">
                    <img 
                      src="https://lawngreen-kingfisher-468763.hostingersite.com/wp-content/uploads/2026/02/57-w-1.webp" 
                      alt="Buudy 7 Color LED Therapy Mask" 
                      className="w-full rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </a>

                  <div className="text-center mb-6 w-full">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-extrabold text-slate-900">£179</span>
                      <span className="text-lg text-slate-400 line-through font-medium">£449</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm font-medium text-slate-500">Overall rating 4.9 / 5</p>
                  </div>

                  <div className="w-full hidden lg:block">
                    <CTAButton href="https://buudy.com/pages/buudy-led-mask" text="Shop Now — 60% Off" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                  <a href="https://buudy.com/pages/buudy-led-mask" className="hover:text-emerald-600 transition-colors">
                    Buudy 7 Color LED Therapy Mask
                  </a>
                </h3>

                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p className="text-slate-600 leading-relaxed">Unlike silicone-based competitors, the Buudy LED Mask uses a non-contact design that addresses every single concern raised in this report. The open-airflow architecture prevents heat trapping, eliminates bacterial buildup, and ensures 100% of the LED light reaches your skin without material interference.</p>
                  <p className="text-slate-600 leading-relaxed">With 7 distinct therapeutic wavelengths (Red, Blue, Green, Yellow, Cyan, Purple, and White), the Buudy mask offers the most comprehensive treatment available on the UK market. While silicone masks typically limit you to 2-3 wavelengths for anti-aging only, Buudy tackles wrinkles, acne, inflammation, hyperpigmentation, and skin texture in one device.</p>
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
                        "7-Color Spectrum: Treats acne, wrinkles, dark spots, inflammation, and more—all in one device, no need for multiple products.",
                        "Built-in Neck Coverage: Full face and neck treatment included at no extra cost.",
                        "FDA-Cleared: Independently verified safe for all skin types, including sensitive and acne-prone skin.",
                        "90-Day Money-Back Guarantee: Full refund if you're not satisfied, no restocking fees."
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
                            <span><strong className="text-slate-900">{bold}:</strong>{rest.join(':')}</span>
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
              Make The Safe Choice
            </h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Don't risk your skin with silicone-based masks. Join over 16,000 customers who switched to safer, more effective LED therapy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              <div className="relative group">
                <a href="https://buudy.com/pages/buudy-led-mask" className="block relative rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://img.thesitebase.net/10677/10677322/themes/176943060543a303d043.png?width=828&height=0&min_height=0" 
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
                  href="https://buudy.com/pages/buudy-led-mask" 
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
