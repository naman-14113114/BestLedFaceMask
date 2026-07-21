import { getHairGuide, hairGuideMetadata } from "@/data/hairGuides";
import HairGuidePage from "@/legacy-pages/HairGuidePage";

const slug = "dyson-vs-shark-vs-muuhu-uk";
const guide = getHairGuide(slug);

export const metadata = hairGuideMetadata(slug);

export default function Page() {
  return <HairGuidePage guide={guide} />;
}
