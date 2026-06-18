import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import NewAdvertorial2 from "@/legacy-pages/NewAdvertorial2";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-uk-2026-2");

export default async function Page() {
  const context = await getRequestPageContext("uk");

  return (
    <>
      <AdvertorialSeo />
      <NewAdvertorial2 context={context} />
    </>
  );
}
