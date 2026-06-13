import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import QureskincareComparison from "@/legacy-pages/QureskincareComparison";

export const metadata: Metadata = advertorialMetadata("/qureskincare-vs-buudy");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <QureskincareComparison />
    </>
  );
}
