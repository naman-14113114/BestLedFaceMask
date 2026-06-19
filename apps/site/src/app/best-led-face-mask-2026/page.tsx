import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-2026", "global");

export default async function Page() {
  const context = await getRequestPageContext("global");

  return (
    <>
      <AdvertorialSeo market="global" />
      <NewAdvertorial market="global" context={context} />
    </>
  );
}
