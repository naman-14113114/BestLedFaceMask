import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import MissingColorsExpose from "@/legacy-pages/MissingColorsExpose";

export const metadata: Metadata = advertorialMetadata("/missing-colors-expose");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <MissingColorsExpose />
    </>
  );
}
