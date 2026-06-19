'use client';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../data/articles';
import { Calendar, User } from 'lucide-react';
import { MarketLocalizedContent } from '@/components/MarketLocalizedContent';
import type { MarketContextProps } from '@/lib/marketContext';

export default function Article({ context }: MarketContextProps) {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/" replace />;

  return (
    <MarketLocalizedContent context={context}>
    <div className="w-full bg-slate-50 relative pb-16">
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <meta name="keywords" content={article.seoKeywords} />
        {/* Open Graph */}
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
      </Helmet>

      {/* Article Header */}
      <div className="bg-white border-b border-slate-200 pt-16 pb-12 px-4 shadow-sm relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8 font-serif">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <User size={16} className="text-emerald-500" />
              <span className="font-bold text-slate-800">{article.author}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
               <Calendar size={16} className="text-slate-400" />
               {article.date}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 border-4 border-white">
           <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl font-serif text-slate-600 italic mb-12 text-center">
            {article.excerpt}
          </p>

          {article.content.map((paragraph, index) => (
            <div key={index}>
              <p className="text-slate-700 leading-relaxed mb-8">{paragraph}</p>
              
              {/* Inject 'Our Top Pick' Buudy Ad after paragraph 2 */}
              {index === 1 && (
                <div className="my-16 bg-[#f8f4e6] rounded-3xl p-8 md:p-10 shadow-lg border border-[#e8dccb] relative transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase shadow-md border border-emerald-400">
                    Featured Product
                  </div>
                  <h3 className="text-2xl font-bold text-center text-[#8b1528] mb-6 font-serif mt-2">
                    Buudy 7-Colour LED Mask
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                     <div className="flex-1 w-full max-w-xs mx-auto">
                        <img src="/img/39-w.webp" alt="Buudy Mask" className="w-full h-auto rounded-xl shadow-md border border-white" />
                     </div>
                     <div className="flex-1 text-center md:text-left">
                       <p className="text-slate-700 font-medium mb-4 leading-relaxed">
                         The Buudy mask offers 7 LED colour options and includes integrated neck coverage — features that many competitors charge significantly more for or sell separately.
                       </p>
                       <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                         <span className="text-3xl font-extrabold text-slate-900">£179</span>
                       </div>
                       
                       <a 
                          href="https://buudy.co.uk/products/buudy-led-mask" 
                          className="inline-block w-full text-center bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-lg font-bold font-sans tracking-wide py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.3)] transition-all"
                        >
                          View Product Details
                        </a>
                     </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </MarketLocalizedContent>
  );
}
