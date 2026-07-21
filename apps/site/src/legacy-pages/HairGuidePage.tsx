"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Scale,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { OutboundLoader } from "@/components/OutboundLoader";
import type { HairGuide, HairGuideProduct } from "@/data/hairGuides";
import { MUUHU_HAIR_URL } from "@/data/hairGuides";

const editorImage = "/img/hair/expert.webp";

function OutboundButton({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      aria-busy="false"
      data-outbound-button="true"
      data-loading="false"
      className={`relative ${className}`}
    >
      <span data-outbound-content="true">{children}</span>
      <span
        data-outbound-loader="true"
        className="absolute inset-0 z-20 hidden items-center justify-center"
        role="status"
      >
        <OutboundLoader />
        <span className="sr-only">Opening website</span>
      </span>
    </a>
  );
}

function CTAButton({
  href = MUUHU_HAIR_URL,
  children = "Check Availability",
  className = "",
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <OutboundButton
      href={href}
      ariaLabel="Check Muuhu hair dryer availability"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-emerald-500/25 transition-transform duration-300 hover:scale-[1.02] md:text-lg ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <ChevronRight size={22} aria-hidden="true" />
      </span>
    </OutboundButton>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3 text-sm font-bold text-slate-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-emerald-500"
        />
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: HairGuideProduct }) {
  return (
    <article
      className={`relative rounded-3xl border bg-white p-5 shadow-sm md:p-8 ${
        product.isWinner
          ? "border-emerald-500 ring-4 ring-emerald-50"
          : "border-slate-200"
      }`}
    >
      {product.isWinner && (
        <div className="absolute -top-4 left-5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-500/30">
          No. 1 Pick
        </div>
      )}

      <div className="grid gap-7 lg:grid-cols-[280px_1fr] lg:gap-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full max-w-[260px] rounded-2xl border border-slate-100 object-cover shadow-md"
          />
          <div className="mt-5">
            <p className="text-sm font-extrabold uppercase tracking-wide text-emerald-700">
              {product.badge}
            </p>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-slate-950">
                {product.price}
              </span>
              {product.isWinner && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-500 line-through">
                  £299
                </span>
              )}
            </div>
            <GreenStarRating
              rating={product.rating}
              forceFull={product.isWinner}
              size={22}
              className="mt-2 justify-center"
            />
            <p className="mt-1 text-sm font-semibold text-slate-500">
              Editorial score {product.rating}
            </p>
          </div>
          {product.isWinner && (
            <CTAButton className="mt-5 w-full max-w-[260px]">
              Official Website
            </CTAButton>
          )}
        </div>

        <div>
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-slate-400">
                #{product.rank}
              </p>
              <h2 className="font-serif text-2xl font-extrabold leading-tight text-slate-950 md:text-4xl">
                {product.name}
              </h2>
            </div>
            <div className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600">
              {product.bestFor}
            </div>
          </div>

          <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
            {product.summary}
          </p>

          <div className="mt-7 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="mb-4 text-lg font-black text-slate-950">
                Performance snapshot
              </h3>
              <div className="space-y-3">
                {product.metrics.map((metric) => (
                  <MetricBar
                    key={`${product.name}-${metric.label}`}
                    label={metric.label}
                    value={metric.value}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-emerald-800">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  What works
                </h3>
                <ul className="space-y-3">
                  {product.pros.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-slate-700"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-black text-red-700">
                  <XCircle size={20} aria-hidden="true" />
                  Watchouts
                </h3>
                <ul className="space-y-3">
                  {product.watchouts.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-slate-700"
                    >
                      <XCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HairGuidePage({ guide }: { guide: HairGuide }) {
  const heroImageClass = guide.heroImage.includes("top5-uk")
    ? "aspect-[1536/461] w-full bg-[#f8f4e6] object-cover"
    : "aspect-[35/24] w-full bg-[#f8f4e6] object-contain";

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <div className="border-b border-emerald-600 bg-emerald-500 px-4 py-5 md:py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center text-white">
          <p className="text-sm font-black uppercase tracking-wide text-emerald-950/70">
            Independent UK hair dryer comparison
          </p>
          <h1 className="font-serif text-[clamp(2rem,7vw,4.6rem)] font-black leading-[1.05] tracking-tight">
            {guide.headline}
          </h1>
          <p className="max-w-3xl text-base font-semibold leading-relaxed text-emerald-950/75 md:text-lg">
            {guide.subheadline}
          </p>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white px-4 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black uppercase tracking-wide text-emerald-700">
              <ShieldCheck size={17} aria-hidden="true" />
              {guide.eyebrow}
            </div>
            <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-950 md:text-2xl">
              {guide.quickTake}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-black text-slate-950">£149</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Muuhu current price
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-black text-slate-950">7-in-1</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Complete styling kit
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-black text-slate-950">90 days</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  Money-back guarantee
                </p>
              </div>
            </div>
            <CTAButton className="mt-7">Take Me To The Winning Dryer</CTAButton>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/60">
            <img
              src={guide.heroImage}
              alt={guide.heroAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={heroImageClass}
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-600">
              <span>UK comparison page</span>
              <span className="text-emerald-700">Muuhu ranked No. 1</span>
            </figcaption>
          </figure>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-center gap-4">
              <img
                src={editorImage}
                alt="Beauty technology editor portrait"
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-full border-4 border-emerald-100 object-cover"
              />
              <div>
                <h2 className="text-xl font-black text-slate-950">
                  Amara Wright
                </h2>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Beauty Technology Editor
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Our editorial team reviewed current UK pricing, product pages,
              attachment sets, buyer objections and guarantees. For this page,
              Muuhu is ranked first because it gives the strongest balance of
              useful features, value and purchase confidence.
            </p>
          </div>

          <div className="prose prose-lg max-w-none prose-slate">
            {guide.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:mt-16 md:p-10">
          <h2 className="text-center font-serif text-3xl font-black text-slate-950 md:text-4xl">
            What we compared
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {guide.criteria.map((criterion) => (
              <div
                key={criterion}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
              >
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <span className="font-bold leading-snug text-slate-700">
                  {criterion}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-3xl border-2 border-emerald-500 bg-white p-6 shadow-xl shadow-emerald-100 md:p-9">
            <p className="mb-3 text-sm font-black uppercase tracking-wide text-emerald-700">
              Why Muuhu ranks No. 1
            </p>
            <h2 className="font-serif text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              The best value is the tool that covers the whole routine.
            </h2>
            <ul className="mt-7 space-y-4">
              {guide.winnerBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-slate-700">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <CTAButton className="mt-8 w-full sm:w-auto">
              Check Muuhu Availability
            </CTAButton>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#f8f4e6] p-6 text-center shadow-sm md:p-8">
            <img
              src="/img/hair/about-trust-hair-dryer.webp"
              alt="Muuhu hair dryer and styling attachments"
              loading="lazy"
              decoding="async"
              className="mx-auto max-h-[320px] w-full object-contain"
            />
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
              <span>Excellent</span>
              <GreenStarRating rating={5} size={18} />
              <span className="inline-flex items-center gap-1">
                on <GreenStarIcon size={16} /> Trustpilot
              </span>
            </div>
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:mt-16">
          <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white md:px-8">
            <h2 className="flex items-center gap-3 font-serif text-2xl font-black md:text-3xl">
              <Scale className="text-emerald-300" aria-hidden="true" />
              Fast comparison
            </h2>
          </div>
          <div className="divide-y divide-slate-200">
            {guide.comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid gap-4 px-5 py-5 md:grid-cols-[0.8fr_1fr_1fr_1.15fr] md:px-8"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-slate-400">
                    Feature
                  </p>
                  <p className="mt-1 font-black text-slate-950">{row.feature}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-emerald-700">
                    Muuhu
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-700">
                    {row.muuhu}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Comparison
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-700">
                    {row.competitor}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Why it matters
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {row.whyItMatters}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-wide text-emerald-700">
              Product rankings
            </p>
            <h2 className="font-serif text-3xl font-black text-slate-950 md:text-4xl">
              The UK picks we would compare first
            </h2>
          </div>
          <div className="space-y-10">
            {guide.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {guide.buyerBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-black text-slate-950">
                {block.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {block.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:mt-16 md:p-9">
          <h2 className="font-serif text-3xl font-black text-slate-950 md:text-4xl">
            Questions UK buyers ask
          </h2>
          <div className="mt-7 divide-y divide-slate-200">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="text-lg font-black text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[1.75rem] border border-[#e8dccb] bg-[#f8f4e6] p-6 text-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] md:mt-16 md:p-10">
          <h2 className="font-serif text-3xl font-black text-[#8b1528] md:text-4xl">
            Editor's Verdict
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <img
              src="/img/hair/muuhu_product_1x1.webp"
              alt="Muuhu 7-in-1 hair dryer"
              loading="lazy"
              decoding="async"
              className="mx-auto aspect-square w-full max-w-[300px] rounded-3xl object-cover shadow-xl"
            />
            <div>
              <h3 className="font-serif text-3xl font-black text-slate-950">
                Muuhu 7-in-1 Hair Dryer
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-relaxed text-slate-700">
                For this search intent, Muuhu gives the most persuasive buying
                argument: complete styling range, strong heat-control story,
                £149 price, 2-year warranty and a 90-day guarantee.
              </p>
              <div className="mx-auto mt-6 inline-block rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-black text-slate-950">Excellent</span>
                  <GreenStarRating rating={5} size={22} />
                </div>
                <p className="mt-2 flex items-center justify-center gap-1 text-sm font-semibold text-slate-600">
                  Rated 4.9 / 5 on <GreenStarIcon size={17} />
                  <span className="font-black text-slate-950">Trustpilot</span>
                </p>
              </div>
              <CTAButton className="mt-7 w-full max-w-[320px]">
                Check Availability
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white px-4 py-12 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p className="mb-2 text-lg font-black text-slate-800">
            Best Hair Dryer
          </p>
          <p className="mb-6">© 2026 Best Hair Dryer. All rights reserved.</p>
          <div className="mx-auto max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-6 text-left text-sm leading-relaxed text-slate-700">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-amber-700">
              Important disclosure
            </p>
            <p className="mb-4">
              <strong>Affiliate disclosure:</strong> We may receive compensation
              for clicks on or purchases of products featured on this site. This
              comes at no additional cost to you.
            </p>
            <p>
              <strong>Individual results:</strong> Experiences with hair
              styling devices vary. Product information and examples do not
              guarantee a particular result.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <CTAButton className="w-full px-3 py-3.5 text-sm">
          Take Me To The Winning Dryer
        </CTAButton>
      </div>
    </div>
  );
}
