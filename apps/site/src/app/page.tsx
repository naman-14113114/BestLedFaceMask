import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { HomeNoscriptContent } from "@/components/seo/NoscriptContent";
import { HomeStructuredData } from "@/components/seo/StructuredData";
import { homeMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import Home from "@/legacy-pages/Home";

export const metadata: Metadata = homeMetadata;

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <>
      <HomeStructuredData />
      <HomeNoscriptContent />
      <Layout>
        <Home context={context} />
      </Layout>
    </>
  );
}
