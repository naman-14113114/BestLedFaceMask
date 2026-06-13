import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { HomeNoscriptContent } from "@/components/seo/NoscriptContent";
import { HomeStructuredData } from "@/components/seo/StructuredData";
import { homeMetadata } from "@/lib/metadata";
import Home from "@/legacy-pages/Home";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return (
    <>
      <HomeStructuredData />
      <HomeNoscriptContent />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
