import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import QureskincareComparison from "@/legacy-pages/QureskincareComparison";

export const metadata: Metadata = advertorialMetadata("/qureskincare-vs-buudy");

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <AdvertorialSeo />
      <QureskincareComparison context={context} />
    </>
  );
}
