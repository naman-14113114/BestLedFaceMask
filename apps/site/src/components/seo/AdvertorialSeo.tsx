import { AdvertorialNoscriptContent } from "@/components/seo/NoscriptContent";
import { AdvertorialStructuredData } from "@/components/seo/StructuredData";

export function AdvertorialSeo() {
  return (
    <>
      <AdvertorialStructuredData />
      <AdvertorialNoscriptContent />
    </>
  );
}
