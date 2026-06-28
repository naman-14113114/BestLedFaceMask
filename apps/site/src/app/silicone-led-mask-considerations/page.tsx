import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import SiliconeLedMaskConsiderations from "@/legacy-pages/SiliconeLedMaskConsiderations";

export const metadata: Metadata = advertorialMetadata("/silicone-led-mask-considerations");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <SiliconeLedMaskConsiderations context={context} />
    </>
  );
}
