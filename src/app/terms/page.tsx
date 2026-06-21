import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("使用条款", "善导精舍网站使用条款占位。", "/terms");

export default function TermsPage() {
  return <main><PageHero title="使用条款" description="正式使用条款待善导精舍确认。" /></main>;
}
