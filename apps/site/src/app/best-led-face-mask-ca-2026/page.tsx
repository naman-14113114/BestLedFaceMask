import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-ca-2026", "ca");

export default function Page() {
  return (
    <>
      <AdvertorialSeo market="ca" />
      <NewAdvertorial market="ca" />
    </>
  );
}
