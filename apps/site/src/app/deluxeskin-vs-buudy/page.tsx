import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import DeluxeskinComparison from "@/legacy-pages/DeluxeskinComparison";

export const metadata: Metadata = advertorialMetadata("/deluxeskin-vs-buudy");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <DeluxeskinComparison />
    </>
  );
}
