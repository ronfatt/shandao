import { EventFilterGrid } from "@/components/events/EventFilterGrid";
import { PageHero } from "@/components/shared/PageHero";
import { events } from "@/data/events";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("法会活动", "即将举行、定期共修、年度法会与活动回顾。", "/events");

export default function EventsPage() {
  return (
    <main>
      <PageHero title="法会活动" description="浏览近期法会、定期共修、年度法会与活动回顾。当前活动均为演示资料。" />
      <section className="py-16"><div className="container-page"><EventFilterGrid events={events} /></div></section>
    </main>
  );
}
