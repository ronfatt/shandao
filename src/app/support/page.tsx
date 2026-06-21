import { HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { DemoForm } from "@/components/ui/DemoForm";
import { createMetadata } from "@/lib/utils";

export const metadata = createMetadata("护持善导", "护持理念、护持用途、护持项目与义工参与。", "/support");

const uses = ["道场维护", "弘法教育", "僧团生活", "社区关怀"];

export default function SupportPage() {
  return (
    <main>
      <PageHero title="护持善导" description="共同护持正法久住。正式捐款方式、银行资料与收据流程待善导精舍提供。" />
      <section className="py-16">
        <div className="container-page grid gap-4 md:grid-cols-4">
          {uses.map((item) => (
            <article className="rounded-2xl border border-border-warm bg-background-cream p-6 text-center shadow-soft" key={item}>
              <HeartHandshake className="mx-auto h-10 w-10 text-brand-gold" />
              <h2 className="serif-title mt-4 text-2xl font-bold text-brand-brown-dark">{item}</h2>
              <p className="mt-2 text-text-secondary">正式用途说明待确认。</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-background-cream py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-border-warm bg-white p-6 shadow-soft">
            <h2 className="serif-title text-3xl font-bold text-brand-brown-dark">正式捐款资料待确认</h2>
            <p className="mt-4 text-text-secondary">第一阶段不显示银行账号或支付入口，避免访客误用未确认资讯。</p>
          </article>
          <DemoForm title="义工参与" fields="volunteer" />
        </div>
      </section>
    </main>
  );
}
