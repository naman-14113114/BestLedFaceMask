import type { Metadata } from "next";
import { AdvertorialSeo } from "@/components/seo/AdvertorialSeo";
import { advertorialMetadata } from "@/lib/metadata";
import NewAdvertorial from "@/legacy-pages/NewAdvertorial";

export const metadata: Metadata = advertorialMetadata("/best-led-face-mask-au-2026", "au");

export default function Page() {
  return (
    <>
      <AdvertorialSeo market="au" />
      <NewAdvertorial market="au" />
    </>
  );
}
