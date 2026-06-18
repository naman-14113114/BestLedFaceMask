'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Home() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="w-full">
      <Helmet>
        <title>Trustpilot Review Shop | LED Face Mask Reviews & Buyer Guides</title>
        <meta name="description" content="Honest product reviews and buyer guides for LED face masks and light therapy devices available in the UK. Compare features, prices, and real user experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png')] bg-cover bg-center" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-6">Featured Article</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-serif">
              {featured.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {featured.excerpt}
            </p>
            <Link 
              to={`/blog/${featured.slug}`}
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:scale-105 transition-transform duration-300"
            >
              Read Full Article <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="flex-1 hidden md:block">
             <img src={featured.image} alt={featured.title} className="rounded-2xl shadow-2xl border border-slate-700/50" />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-3xl font-bold text-slate-900 font-serif">Latest Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link key={article.id} to={`/blog/${article.slug}`} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative border-b border-slate-100">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                  <Calendar size={14} /> {article.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                  Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparisons & Guides Section */}
      <section className="bg-slate-100 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wide uppercase mb-4">Expert Reviews</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Comparisons & Guides</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">In-depth head-to-head comparisons and expert guides to help you choose the right LED face mask for your skin.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Best LED Face Masks 2026",
                description: "Our comprehensive ranking of the top 5 LED face masks available in the UK, tested over 200+ hours.",
                image: "https://img.thesitebase.net/10677/10677322/themes/177107744580dd01d13d.png",
                link: "/new-advertorial",
                badge: "Top Pick"
              },
              {
                title: "CurrentBody vs Buudy",
                description: "Is the £400 CurrentBody mask worth it? We compare it head-to-head against the Buudy 7-Color LED Mask.",
                image: "https://img.thesitebase.net/10677/10677322/themes/176872504642f0322d65.jpeg",
                link: "/currentbody-vs-buudy",
                badge: "Comparison"
              },
              {
                title: "TheraFace vs Other Masks",
                description: "Therabody's £579 LED mask promises vibration therapy — but does it outperform the competition?",
                image: "https://img.thesitebase.net/10677/10677322/themes/177107817340059938e3.jpeg",
                link: "/theraface-vs-other-masks",
                badge: "Comparison"
              },
              {
                title: "Deluxeskin vs Buudy",
                description: "A detailed breakdown of how the Deluxeskin LED mask compares to the Buudy 7-Color in every category.",
                image: "/img/57-w.webp",
                link: "/deluxeskin-vs-buudy",
                badge: "Comparison"
              },
              {
                title: "Qureskincare vs Buudy",
                description: "Can Qureskincare's LED mask compete with Buudy's 7 wavelengths and built-in neck coverage?",
                image: "/img/57-w.webp",
                link: "/qureskincare-vs-buudy",
                badge: "Comparison"
              },
              {
                title: "Silicone LED Mask Dangers",
                description: "Why silicone-based LED masks may be damaging your skin — the hidden dangers most brands won't tell you.",
                image: "https://img.thesitebase.net/10677/10677322/themes/1768726434a7e6301df7.png",
                link: "/silicone-led-mask-dangers",
                badge: "Health Alert"
              },
              {
                title: "The £300 Neck Tax",
                description: "Why buying a face-only LED mask might be a huge mistake, and how premium brands overcharge for neck coverage.",
                image: "/img/neck_led_mask_1774237229811.png",
                link: "/floating-head-warning",
                badge: "Industry Exposé"
              },
              {
                title: "The 2-Color Trap",
                description: "Why expensive masks that only offer Red and Near-Infrared light are leaving 70% of your skin concerns untreated.",
                image: "/img/seven_colors_mask_1774237479088.png",
                link: "/missing-colors-expose",
                badge: "Industry Exposé"
              },
              {
                title: "The LED Density Scam",
                description: "Is your £400 mask filled with 'dead zones'? Why hidden bulb counts could mean you're paying for a placebo.",
                image: "/img/dense_led_macro_1774237501628.png",
                link: "/led-density-scam",
                badge: "Industry Exposé"
              },
              {
                title: "The Celebrity Markup",
                description: "Are you paying for real clinical technology or just funding a celebrity's Instagram post? The truth behind £500 masks.",
                image: "/img/luxury_mask_markup_1774237538064.png",
                link: "/brand-name-premium",
                badge: "Industry Exposé"
              },
            ].map((card, idx) => (
              <Link 
                key={idx} 
                to={card.link} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative border-b border-slate-100">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    card.badge === 'Health Alert' ? 'bg-red-500 text-white' : 
                    card.badge === 'Top Pick' ? 'bg-emerald-500 text-white' : 
                    'bg-slate-800 text-white'
                  }`}>
                    {card.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {card.description}
                  </p>
                  <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                    Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
