import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("隐私政策", "善导精舍网站隐私政策占位。", "/privacy");

export default function PrivacyPage() {
  return <main><PageHero title="隐私政策" description="正式隐私政策待善导精舍确认。目前表单为演示模式，不保存资料。" /></main>;
}
