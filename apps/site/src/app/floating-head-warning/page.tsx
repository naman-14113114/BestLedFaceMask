import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import FloatingHeadWarning from "@/legacy-pages/FloatingHeadWarning";

export const metadata: Metadata = advertorialMetadata("/floating-head-warning");

export default function Page() {
  return (
    <>
      <AdvertorialSeo />
      <FloatingHeadWarning />
    </>
  );
}
