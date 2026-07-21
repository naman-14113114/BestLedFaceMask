import { getHairGuide, hairGuideMetadata } from "@/data/hairGuides";
import HairGuidePage from "@/legacy-pages/HairGuidePage";

const slug = "best-shark-flexstyle-alternative-uk-2026";
const guide = getHairGuide(slug);

export const metadata = hairGuideMetadata(slug);

export default function Page() {
  return <HairGuidePage guide={guide} />;
}
