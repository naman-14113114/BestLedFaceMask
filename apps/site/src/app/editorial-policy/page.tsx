import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { trustPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = trustPageMetadata(
  "Editorial Policy",
  "Read the comparison criteria, sourcing standards, update process and corrections policy used by Best LED Face Mask.",
  "/editorial-policy"
);

const criteria = [
  "Published wavelengths and treatment modes",
  "Face, jaw and neck coverage",
  "Fit, comfort and eye protection",
  "Treatment length and ease of consistent use",
  "Warranty, returns and money-back terms",
  "Price, included accessories and local availability"
];

export default function Page() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-4 py-16 text-slate-700">
        <p className="text-sm font-bold uppercase text-emerald-700">Our standards</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-slate-950">Editorial and comparison policy</h1>
        <p className="mt-7 text-lg leading-relaxed">Our rankings combine verifiable product information with editorial judgement. We clearly separate manufacturer claims, published specifications and our own comparison conclusions.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">Core comparison criteria</h2>
        <ul className="mt-4 space-y-3">
          {criteria.map((criterion) => <li key={criterion} className="border-l-2 border-emerald-500 pl-4">{criterion}</li>)}
        </ul>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">Sources and updates</h2>
        <p className="mt-4 leading-relaxed">We use product manuals, official specification pages, retailer policies and publicly available supporting material. Prices and offers can change, so readers should confirm final terms on the retailer website. Rankings are reviewed when material specifications, prices or availability change.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">Corrections</h2>
        <p className="mt-4 leading-relaxed">If a factual statement is incomplete or outdated, contact support@bestledfacemask.org with the page URL and supporting source. We review correction requests and update substantiated errors.</p>
        <h2 className="mt-10 text-2xl font-bold text-slate-950">Affiliate relationships</h2>
        <p className="mt-4 leading-relaxed">The site may earn compensation from outbound links. Affiliate status does not guarantee inclusion or remove the need for transparent comparison criteria.</p>
      </article>
    </Layout>
  );
}
