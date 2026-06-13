import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import TherafaceComparison from "@/legacy-pages/TherafaceComparison";

export const metadata: Metadata = advertorialMetadata("/theraface-vs-other-masks");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <TherafaceComparison />
    </>
  );
}
