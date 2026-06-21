import { notFound } from "next/navigation";
import { DemoForm } from "@/components/ui/DemoForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { events, getEventBySlug } from "@/data/events";
import { createMetadata, formatChineseDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  return createMetadata(event?.title ?? "活动详情", event?.description, `/events/${slug}`);
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  const eventJsonLd = { "@context": "https://schema.org", "@type": "Event", name: event.title, startDate: event.date, eventStatus: "https://schema.org/EventScheduled", description: event.description };

  return (
    <main>
      <PageHero title={event.title} description={event.description} eyebrow={event.isDemo ? "示意活动" : event.category} />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_380px]">
          <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft">
            <h2 className="serif-title text-3xl font-bold text-brand-brown-dark">活动详情</h2>
            <dl className="mt-6 grid gap-4 text-text-secondary md:grid-cols-2">
              <div><dt className="font-bold text-text-primary">日期时间</dt><dd>{formatChineseDate(event.date)} · {event.time}</dd></div>
              <div><dt className="font-bold text-text-primary">地点</dt><dd>{event.branchName}</dd></div>
              <div><dt className="font-bold text-text-primary">分院</dt><dd>{event.branchName}</dd></div>
              <div><dt className="font-bold text-text-primary">报名</dt><dd>{event.requiresRegistration ? "需要报名" : "无需报名"}</dd></div>
            </dl>
            <h3 className="serif-title mt-8 text-2xl font-bold text-brand-brown-dark">注意事项</h3>
            <ul className="mt-4 list-inside list-disc text-text-secondary">{event.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/events" variant="outline">返回活动列表</ButtonLink>
              <button className="min-h-11 rounded-full border border-border-warm bg-white px-5 py-2.5 text-[17px] font-semibold text-text-secondary" type="button" disabled>
                分享功能待上线
              </button>
            </div>
          </article>
          <div id="register"><DemoForm title="活动报名" fields="registration" /></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
    </main>
  );
}
