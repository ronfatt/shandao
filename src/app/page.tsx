import { createMetadata } from "@/lib/utils";
import { AboutIntro, AbbotMessage, BranchesPreview, CharityPreview, CoreStats, DharmaPreview, EventsPreview, NewsPreview, SupportCta } from "@/components/home/HomeSections";
import { Hero } from "@/components/home/Hero";

export const metadata = createMetadata("善导精舍官方网站", "让佛法走进生活，让慈悲成为日常。善导精舍官方网站。", "/");

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CoreStats />
      <AboutIntro />
      <AbbotMessage />
      <BranchesPreview />
      <EventsPreview />
      <DharmaPreview />
      <CharityPreview />
      <NewsPreview />
      <SupportCta />
    </main>
  );
}
