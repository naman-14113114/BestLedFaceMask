import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-au-2026", "au");

export default async function Page() {
  const context = await getRequestPageContext("au");

  return (
    <>
      <AdvertorialSeo market="au" />
      <NewAdvertorial market="au" context={context} />
    </>
  );
}
