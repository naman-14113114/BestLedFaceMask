import type { Metadata } from "next";
import { HairDryerStructuredData } from "@/components/seo/StructuredData";
import { advertorialMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-hair-dryer-uk-2026", "uk");

export default async function Page() {
  const context = await getRequestPageContext("uk");

  return (
    <>
      <HairDryerStructuredData />
      <HairDryerAdvertorial context={context} />
    </>
  );
}
