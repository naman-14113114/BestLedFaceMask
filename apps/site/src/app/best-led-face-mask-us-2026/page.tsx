import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-us-2026", "us");

export default async function Page() {
  const context = await getRequestPageContext("us");

  return (
    <>
      <AdvertorialSeo market="us" />
      <NewAdvertorial market="us" context={context} />
    </>
  );
}
