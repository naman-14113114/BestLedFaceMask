import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import SiliconMaskWarning from "@/legacy-pages/SiliconMaskWarning";

export const metadata: Metadata = advertorialMetadata("/silicone-led-mask-dangers");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <SiliconMaskWarning context={context} />
    </>
  );
}
