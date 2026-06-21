import { BranchCard } from "@/components/branches/BranchCard";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { PageHero } from "@/components/shared/PageHero";
import { DemoForm } from "@/components/ui/DemoForm";
import { branches } from "@/data/branches";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("联系我们", "五家分院联系方式、联系表单与地图占位。", "/contact");

export default function ContactPage() {
  return (
    <main>
      <PageHero title="联系我们" description="欢迎联系善导精舍。正式电话、WhatsApp、Email 与地址资料待确认。" />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <ImagePlaceholder className="mb-8 min-h-[300px]" label="地图占位" />
            <div className="grid gap-4 md:grid-cols-2">{branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)}</div>
          </div>
          <DemoForm title="联系表单" />
        </div>
      </section>
    </main>
  );
}
