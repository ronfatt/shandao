import { PageHero } from "@/components/shared/PageHero";
import { dharmaResources, resourceIcons } from "@/data/content";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("资源下载", "经文、PDF资料、音频、视频与下载入口。", "/resources");

export default function ResourcesPage() {
  return (
    <main>
      <PageHero title="资源下载" description="经文、PDF、音频与视频资料下载区。正式文件待善导精舍提供。" />
      <section className="py-16">
        <div className="container-page">
          <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2">
            {["全部", "经文", "PDF资料", "音频", "视频"].map((item) => <button className="min-h-11 shrink-0 rounded-full border border-border-warm bg-white px-4 font-semibold text-brand-brown" key={item}>{item}</button>)}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {dharmaResources.map((resource) => {
              const Icon = resourceIcons[resource.type];
              return (
                <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft" key={resource.id}>
                  <Icon className="h-9 w-9 text-brand-gold" />
                  <h2 className="serif-title mt-4 text-2xl font-bold text-brand-brown-dark">{resource.title}</h2>
                  <p className="mt-2 text-text-secondary">{resource.description}</p>
                  <button className="mt-5 min-h-11 rounded-full bg-brand-brown px-5 font-semibold text-white">下载按钮</button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
