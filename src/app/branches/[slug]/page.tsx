import { notFound } from "next/navigation";
import { EventCard } from "@/components/events/EventCard";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { branches, getBranchBySlug } from "@/data/branches";
import { events } from "@/data/events";
import { createMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  return createMetadata(branch?.name ?? "分院详情", branch?.description, `/branches/${slug}`);
}

export default async function BranchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();
  const branchEvents = events.filter((event) => event.branchSlug === branch.slug);
  const placeJsonLd = { "@context": "https://schema.org", "@type": "Place", name: `善导精舍${branch.name}`, description: branch.description };

  return (
    <main>
      <PageHero title={`善导精舍 · ${branch.name}`} description={branch.description} eyebrow={branch.englishName} />
      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <ImagePlaceholder className="min-h-[340px]" label={`${branch.name}环境图片待提供`} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => <ImagePlaceholder key={item} className="min-h-36" label="环境图库待提供" />)}
            </div>
          </div>
          <aside className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft">
            <h2 className="serif-title text-3xl font-bold text-brand-brown-dark">分院资料</h2>
            <dl className="mt-5 grid gap-3 text-text-secondary">
              <div><dt className="font-bold text-text-primary">驻院法师</dt><dd>{branch.residentMonk}</dd></div>
              <div><dt className="font-bold text-text-primary">地址</dt><dd>{branch.address}</dd></div>
              <div><dt className="font-bold text-text-primary">开放时间</dt><dd>{branch.openingHours}</dd></div>
              <div><dt className="font-bold text-text-primary">电话</dt><dd>{branch.phone}</dd></div>
              <div><dt className="font-bold text-text-primary">WhatsApp</dt><dd>{branch.whatsapp}</dd></div>
              <div><dt className="font-bold text-text-primary">Email</dt><dd>{branch.email}</dd></div>
            </dl>
            <ButtonLink className="mt-6" href={branch.mapUrl} variant="brown">Google Map按钮</ButtonLink>
          </aside>
        </div>
      </section>
      <section className="bg-background-cream py-16">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border-warm bg-white p-6 shadow-soft">
            <h2 className="serif-title text-2xl font-bold text-brand-brown-dark">固定共修</h2>
            <ul className="mt-4 list-inside list-disc text-text-secondary">{branch.regularActivities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-border-warm bg-white p-6 shadow-soft">
            <h2 className="serif-title text-2xl font-bold text-brand-brown-dark">设施</h2>
            <ul className="mt-4 list-inside list-disc text-text-secondary">{branch.facilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page">
          <h2 className="serif-title mb-6 text-3xl font-bold text-brand-brown-dark">近期活动与公告</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{branchEvents.map((event) => <EventCard key={event.id} event={event} />)}</div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }} />
    </main>
  );
}
