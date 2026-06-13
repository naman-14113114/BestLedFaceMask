import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import BrandNamePremium from "@/legacy-pages/BrandNamePremium";

export const metadata: Metadata = advertorialMetadata("/brand-name-premium");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <BrandNamePremium />
    </>
  );
}
