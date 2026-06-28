import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import LedColourRangeGuide from "@/legacy-pages/LedColourRangeGuide";

export const metadata: Metadata = advertorialMetadata("/led-colour-range-guide");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <LedColourRangeGuide context={context} />
    </>
  );
}
