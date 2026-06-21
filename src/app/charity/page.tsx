import { PageHero } from "@/components/shared/PageHero";
import { DemoForm } from "@/components/ui/DemoForm";
import { charityIcons, charityProjects } from "@/data/content";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("慈善关怀", "慈善项目、社区服务、项目成果与义工参与。", "/charity");

export default function CharityPage() {
  return (
    <main>
      <PageHero title="慈善关怀" description="慈善济贫、助学育才、义诊关怀、赈灾救助与环保行动。" />
      <section className="py-16">
        <div className="container-page grid gap-4 md:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-5">
          {charityProjects.map((project) => {
            const Icon = charityIcons[project.id as keyof typeof charityIcons];
            return (
              <article className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft" key={project.id}>
                <Icon className="h-9 w-9 text-brand-gold" />
                <h2 className="serif-title mt-4 text-2xl font-bold text-brand-brown-dark">{project.title}</h2>
                <p className="mt-2 text-text-secondary">{project.description}</p>
                <p className="mt-4 text-sm text-text-secondary">项目成果资料待确认。</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-background-cream py-16"><div className="container-page max-w-3xl"><DemoForm title="义工报名" fields="volunteer" /></div></section>
    </main>
  );
}
