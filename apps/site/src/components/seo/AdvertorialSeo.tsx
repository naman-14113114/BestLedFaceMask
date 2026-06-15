import { AdvertorialNoscriptContent } from "@/components/seo/NoscriptContent";
import { AdvertorialStructuredData } from "@/components/seo/StructuredData";
import type { AdvertorialMarketKey } from "@/lib/advertorialMarkets";

export function AdvertorialSeo({ market = "uk" }: { market?: AdvertorialMarketKey }) {
  return (
    <>
      <AdvertorialStructuredData market={market} />
      <AdvertorialNoscriptContent market={market} />
    </>
  );
}
