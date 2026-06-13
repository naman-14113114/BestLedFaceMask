import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import SiliconMaskWarning from "@/legacy-pages/SiliconMaskWarning";

export const metadata: Metadata = advertorialMetadata("/silicone-led-mask-dangers");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <SiliconMaskWarning />
    </>
  );
}
