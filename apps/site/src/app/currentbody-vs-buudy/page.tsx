import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import CurrentbodyComparison from "@/legacy-pages/CurrentbodyComparison";

export const metadata: Metadata = advertorialMetadata("/currentbody-vs-buudy");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <CurrentbodyComparison context={context} />
    </>
  );
}
