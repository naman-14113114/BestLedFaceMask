import type { Metadata } from "next";
import Layout from "@/components/Layout";
import { articles } from "@/data/articles";
import { blogMetadata } from "@/lib/metadata";
import { getRequestPageContext } from "@/lib/marketContext";
import Article from "@/legacy-pages/Article";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return blogMetadata(slug);
}

export default async function Page() {
  const context = await getRequestPageContext();

  return (
    <Layout>
      <Article context={context} />
    </Layout>
  );
}
