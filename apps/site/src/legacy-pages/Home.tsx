'use client';

import { ArrowRight, BookOpen, Globe2, ShieldCheck, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hairGuideGroups, hairGuides } from '../data/hairGuides';
import { articles } from '../data/articles';
import type { MarketContextProps } from '@/lib/marketContext';

const marketGuides = [
  {
    label: 'Global guide',
    title: 'Best LED Face Masks of 2026',
    description: 'Our worldwide comparison of wavelengths, coverage, comfort, return policys and value.',
    href: '/best-led-face-mask-2026',
    code: 'INTL'
  },
  {
    label: 'United States',
    title: 'Best LED Face Masks in the USA',
    description: 'US pricing, availability and retailer links for American buyers.',
    href: '/best-led-face-mask-us-2026',
    code: 'US'
  },
  {
    label: 'United Kingdom',
    title: 'Best LED Face Masks in the UK',
    description: 'UK pricing, return policys and buying options compared in pounds.',
    href: '/best-led-face-mask-uk-2026',
    code: 'UK'
  },
  {
    label: 'Australia',
    title: 'Best LED Face Masks in Australia',
    description: 'Australian pricing and local shopping links in one focused guide.',
    href: '/best-led-face-mask-au-2026',
    code: 'AU'
  },
  {
    label: 'Canada',
    title: 'Best LED Face Masks in Canada',
    description: 'Canada-specific products, pricing and availability for 2026.',
    href: '/best-led-face-mask-ca-2026',
    code: 'CA'
  }
];

const recommendedRoute = {
  global: '/best-led-face-mask-2026',
  us: '/best-led-face-mask-us-2026',
  uk: '/best-led-face-mask-uk-2026',
  au: '/best-led-face-mask-au-2026',
  ca: '/best-led-face-mask-ca-2026'
} as const;

export default function Home({ context }: MarketContextProps) {
  const recommendedGuide = marketGuides.find(
    (guide) => guide.href === recommendedRoute[context.marketKey]
  ) ?? marketGuides[0];

  return (
    <div className="w-full bg-white">
      <section className="border-b border-slate-200 bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <Waves size={18} aria-hidden="true" />
              Independent LED skincare research
            </div>
            <h1 className="max-w-4xl font-serif text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Find the best LED face mask for your skin, budget and country
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Compare wavelengths, face and neck coverage, routine comfort, safety features, return policys and current pricing without relying on brand hype alone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={recommendedGuide.href}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 font-bold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Read your recommended guide <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <Link
                to="/editorial-policy"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-4 font-bold text-white transition-colors hover:border-slate-400"
              >
                How we compare masks
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <img
              src="/img/57-w.webp"
              alt="LED face mask shown during an at-home LED skincare routine"
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-slate-700 px-5 py-4 text-sm text-slate-300">
              <span>2026 buyer guides</span>
              <span className="font-semibold text-emerald-300">5 markets compared</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-emerald-700">Shop in your market</p>
            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-4xl">Country-specific LED mask rankings</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Each guide uses the correct local currency, availability and retailer destination. Choose your country rather than comparing prices from the wrong market.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-5">
            {marketGuides.map((guide) => (
              <Link key={guide.href} to={guide.href} className="group flex min-h-64 flex-col bg-white p-6 transition-colors hover:bg-emerald-50">
                <span className="text-xs font-extrabold uppercase text-emerald-700">{guide.code}</span>
                <p className="mt-5 text-sm font-semibold text-slate-500">{guide.label}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight text-slate-950">{guide.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{guide.description}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-emerald-700">
                  View ranking <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-emerald-700">Hair dryer buying guides</p>
            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-4xl">UK hair dryer pages by hair type and brand comparison</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Compare Muuhu against the biggest UK styling-tool searches, including Dyson, Shark and ghd, plus focused guides for curly, fine, thick, frizzy, straight and damaged hair.</p>
          </div>
          <div className="space-y-10">
            {hairGuideGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">{group.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{group.description}</p>
                  </div>
                </div>
                <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
                  {group.guides.map((slug) => {
                    const guide = hairGuides[slug];

                    return (
                      <Link key={slug} to={`/${slug}`} className="group flex min-h-56 flex-col bg-white p-6 transition-colors hover:bg-emerald-50">
                        <span className="text-xs font-extrabold uppercase text-emerald-700">{guide.cardCode}</span>
                        <h4 className="mt-4 text-xl font-bold leading-tight text-slate-950">{guide.cardTitle}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{guide.cardDescription}</p>
                        <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-emerald-700">
                          View guide <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-emerald-700">Research library</p>
            <h2 className="font-serif text-3xl font-bold text-slate-950 md:text-4xl">Understand the technology before you buy</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Our supporting guides explain the practical differences between red, blue and near-infrared light, flexible and rigid masks, and face-only versus face-and-neck coverage.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.slice(0, 6).map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`} className="group border-t border-slate-300 pt-5">
                <div className="mb-4 overflow-hidden rounded-lg bg-slate-100">
                  <img src={article.image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-950 group-hover:text-emerald-700">{article.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-4 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="flex gap-4">
            <Globe2 className="shrink-0 text-emerald-300" aria-hidden="true" />
            <div><h2 className="font-bold">Market-aware</h2><p className="mt-2 text-sm leading-relaxed text-emerald-100">Local prices and shopping links for each country guide.</p></div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="shrink-0 text-emerald-300" aria-hidden="true" />
            <div><h2 className="font-bold">Transparent criteria</h2><p className="mt-2 text-sm leading-relaxed text-emerald-100">Published comparison factors and clear affiliate disclosure.</p></div>
          </div>
          <div className="flex gap-4">
            <BookOpen className="shrink-0 text-emerald-300" aria-hidden="true" />
            <div><h2 className="font-bold">Educational first</h2><p className="mt-2 text-sm leading-relaxed text-emerald-100">Plain-language guides to help readers verify product claims.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
