import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import MissingColorsExpose from "@/legacy-pages/MissingColorsExpose";

export const metadata: Metadata = advertorialMetadata("/missing-colors-expose");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <MissingColorsExpose context={context} />
    </>
  );
}
