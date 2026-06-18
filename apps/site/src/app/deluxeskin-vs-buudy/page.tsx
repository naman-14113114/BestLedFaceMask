import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import DeluxeskinComparison from "@/legacy-pages/DeluxeskinComparison";

export const metadata: Metadata = advertorialMetadata("/deluxeskin-vs-buudy");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <DeluxeskinComparison context={context} />
    </>
  );
}
