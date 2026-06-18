import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-ca-2026", "ca");

export default async function Page() {
  const context = await getRequestPageContext("ca");

  return (
    <>
      <AdvertorialSeo market="ca" />
      <NewAdvertorial market="ca" context={context} />
    </>
  );
}
