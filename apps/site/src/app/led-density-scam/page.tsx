import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import LedDensityScam from "@/legacy-pages/LedDensityScam";

export const metadata: Metadata = advertorialMetadata("/led-density-scam");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <LedDensityScam />
    </>
  );
}
