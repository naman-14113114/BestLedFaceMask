import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { legalMetadata } from "@/lib/metadata";
import Legal from "@/legacy-pages/Legal";

export const metadata: Metadata = legalMetadata("Privacy Policy");

export default function Page() {
  return (
    <Layout>
      <Legal />
    </Layout>
  );
}
