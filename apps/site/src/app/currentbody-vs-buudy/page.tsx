import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import CurrentbodyComparison from "@/legacy-pages/CurrentbodyComparison";

export const metadata: Metadata = advertorialMetadata("/currentbody-vs-buudy");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <CurrentbodyComparison />
    </>
  );
}
