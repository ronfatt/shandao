import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { PageHero } from "@/components/shared/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getNewsBySlug, newsItems } from "@/data/content";
import { createMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  return createMetadata(item?.title ?? "新闻详情", item?.excerpt, `/news/${slug}`);
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();
  return (
    <main>
      <PageHero title={item.title} description={item.excerpt} eyebrow={`${item.category} · ${item.date}`} />
      <section className="py-16">
        <article className="container-page max-w-4xl">
          <ImagePlaceholder className="mb-8 min-h-[320px]" label="新闻图片待提供" />
          <p className="text-text-secondary">此新闻为演示内容。正式公告、活动报道与媒体资讯需由善导精舍确认后发布。</p>
          <div className="mt-8"><ButtonLink href="/news" variant="outline">返回资讯列表</ButtonLink></div>
        </article>
      </section>
    </main>
  );
}
