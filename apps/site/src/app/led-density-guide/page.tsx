import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import LedDensityGuide from "@/legacy-pages/LedDensityGuide";

export const metadata: Metadata = advertorialMetadata("/led-density-guide");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <LedDensityGuide context={context} />
    </>
  );
}
