import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { newsItems } from "@/data/content";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("最新资讯", "公告、活动报道、法会回顾与媒体资讯。", "/news");

export default function NewsPage() {
  return (
    <main>
      <PageHero title="最新资讯" description="公告、活动报道、法会回顾与媒体资讯。当前为演示公告。" />
      <section className="py-16">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft" key={item.id}>
              <p className="text-sm font-semibold text-brand-gold">{item.category} · {item.date}</p>
              <h2 className="serif-title mt-2 text-2xl font-bold text-brand-brown-dark"><Link href={`/news/${item.slug}`}>{item.title}</Link></h2>
              <p className="mt-3 text-text-secondary">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
