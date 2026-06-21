import { PageHero } from "@/components/shared/PageHero";
import { dharmaEntrances, dharmaResources } from "@/data/content";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("佛法学习", "法师开示、佛学文章、禅修入门与佛学课程。", "/dharma");

export default function DharmaPage() {
  return (
    <main>
      <PageHero title="佛法学习" description="法师开示、佛学文章、禅修入门与佛学课程资料待逐步整理。" />
      <section className="py-16">
        <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dharmaEntrances.map((item) => (
            <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft" key={item.title}>
              <item.icon className="h-9 w-9 text-brand-gold" />
              <h2 className="serif-title mt-4 text-2xl font-bold text-brand-brown-dark">{item.title}</h2>
              <p className="mt-2 text-text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 grid gap-4 md:grid-cols-3">
          {dharmaResources.map((resource) => (
            <article className="rounded-2xl border border-border-warm bg-white p-6 shadow-soft" key={resource.id}>
              <p className="text-sm font-semibold text-brand-gold">{resource.type.toUpperCase()} · 示意</p>
              <h2 className="serif-title mt-2 text-xl font-bold text-brand-brown-dark">{resource.title}</h2>
              <p className="mt-3 text-text-secondary">{resource.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
