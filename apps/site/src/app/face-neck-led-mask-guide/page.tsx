import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import FaceNeckLedMaskGuide from "@/legacy-pages/FaceNeckLedMaskGuide";

export const metadata: Metadata = advertorialMetadata("/face-neck-led-mask-guide");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <FaceNeckLedMaskGuide context={context} />
    </>
  );
}
