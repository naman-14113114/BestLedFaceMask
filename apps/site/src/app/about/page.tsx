import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { trustPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = trustPageMetadata(
  "About Us",
  "Learn how Best LED Face Mask researches at-home LED masks and publishes country-specific comparisons.",
  "/about"
);

export default function Page() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-4 py-16 text-slate-700">
        <p className="text-sm font-bold uppercase text-emerald-700">About the publisher</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-slate-950">Independent LED face mask research for international buyers</h1>
        <p className="mt-7 text-lg leading-relaxed">Best LED Face Mask is an independent editorial website focused on at-home LED light therapy devices. We organise product specifications, published safety information, pricing, guarantees and market availability so readers can compare devices without switching between dozens of retailer pages.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">What we cover</h2>
        <p className="mt-4 leading-relaxed">Our guides focus on stated wavelengths, face and neck coverage, fit, treatment time, eye protection, warranty or money-back terms, current price and local availability. Country pages use market-specific currencies and retailer destinations.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">How the site is funded</h2>
        <p className="mt-4 leading-relaxed">Some links are affiliate links. We may receive compensation when a reader visits a retailer or makes a purchase, at no additional cost to the reader. Commercial relationships do not change our obligation to distinguish product specifications from editorial opinion.</p>
      </article>
    </Layout>
  );
}
