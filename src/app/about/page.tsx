import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("认识善导", "认识善导精舍的缘起、宗旨、佛教传承、法师与僧团。", "/about");

const sections = ["精舍简介", "创立缘起", "宗旨愿景", "佛教传承", "法师与僧团", "发展历程"];

export default function AboutPage() {
  return (
    <main>
      <PageHero title="认识善导" description="以正信佛法为根本，在修学、弘法与慈善中服务大众。正式历史资料待善导精舍确认。" />
      <section className="py-16">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((title) => (
            <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft" key={title}>
              <h2 className="serif-title text-2xl font-bold text-brand-brown-dark">{title}</h2>
              <p className="mt-3 text-text-secondary">此栏目内容待提供。上线前将补入经审核的正式资料，避免误传或虚构。</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-background-cream py-16">
        <div className="container-page"><SectionHeading title="清净、庄重、入世" description="网站第一阶段先建立完整资讯架构，后续可逐步补入真实照片、法师介绍、道场历史与弘法资料。" /></div>
      </section>
    </main>
  );
}
