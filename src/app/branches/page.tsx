import { BranchCard } from "@/components/branches/BranchCard";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { PageHero } from "@/components/shared/PageHero";
import { DemoForm } from "@/components/ui/DemoForm";
import { branches } from "@/data/branches";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("五院道场", "善导精舍五家分院总览、地图占位与联系入口。", "/branches");

export default function BranchesPage() {
  return (
    <main>
      <PageHero title="五院道场" description="总院与四家分院资料待确认。此页预留分院总览、地图位置与联系入口。" />
      <section className="py-16">
        <div className="container-page">
          <ImagePlaceholder className="mb-10 min-h-[320px]" label="五家分院地图位置待提供" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-5">
            {branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)}
          </div>
        </div>
      </section>
      <section className="bg-background-cream py-16"><div className="container-page max-w-3xl"><DemoForm title="联系分院" /></div></section>
    </main>
  );
}
