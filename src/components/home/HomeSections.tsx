import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Landmark, UsersRound } from "lucide-react";
import { branches } from "@/data/branches";
import { events } from "@/data/events";
import { abbotProfile, charityIcons, charityProjects, dharmaEntrances, newsItems } from "@/data/content";
import { BranchCard } from "@/components/branches/BranchCard";
import { EventFilterGrid } from "@/components/events/EventFilterGrid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { SectionHeading } from "@/components/shared/SectionHeading";

const stats = [
  { title: "5家分院", text: "覆盖多地，弘法利生", icon: Landmark },
  { title: "法会共修", text: "定期法会，共修精进", icon: UsersRound },
  { title: "社区关怀", text: "慈心济世，温暖社会", icon: HeartHandshake },
];

export function CoreStats() {
  return (
    <section className="relative z-10 -mt-11">
      <div className="container-page rounded-[1.4rem] border border-border-warm/90 bg-background-cream/95 p-3 shadow-card backdrop-blur">
        <div className="grid divide-y divide-border-warm/70 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div className="flex items-center gap-4 px-5 py-5" key={item.title}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand-gold/18 bg-[#f4ead7] text-brand-brown">
                <item.icon className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <h2 className="serif-title text-[1.45rem] font-bold leading-tight text-brand-brown-dark">{item.title}</h2>
                <p className="mt-1 text-[15px] text-text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutIntro() {
  return (
    <section className="lotus-pattern py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[.86fr_1.14fr]">
        <ImagePlaceholder className="min-h-[320px] rounded-[1.35rem]" label="寺院环境图片待提供" />
        <div>
          <p className="font-semibold tracking-[0.12em] text-brand-gold">认识善导精舍</p>
          <h2 className="serif-title mt-3 text-[2.35rem] font-bold leading-tight text-brand-brown-dark md:text-[2.85rem]">正信修学，慈悲入世</h2>
          <p className="mt-5 text-[18px] leading-9 text-text-secondary">
            善导精舍以正信佛法为根本，致力于佛法教育、共修弘法、社区慈善与心灵关怀，让佛法真正走进大众生活。
          </p>
          <ButtonLink className="mt-7" href="/about" variant="brown">了解更多</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function AbbotMessage() {
  return (
    <section className="bg-background-cream py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[.82fr_1fr]">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-border-warm bg-[#ead8bd] shadow-card">
          <Image src="/images/abbot.jpeg" alt="善导精舍法师照片" width={719} height={1080} className="h-[360px] w-full object-cover object-top md:h-[430px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-brown-dark/20 to-transparent" />
        </div>
        <div>
          <p className="font-semibold tracking-[0.12em] text-brand-gold">{abbotProfile.role}</p>
          <h2 className="serif-title mt-3 text-[2.35rem] font-bold leading-tight text-brand-brown-dark md:text-[2.85rem]">法师寄语</h2>
          <blockquote className="mt-6 border-l-2 border-brand-gold/70 pl-6 text-[1.45rem] leading-10 text-brand-brown md:text-[1.65rem]">
            “{abbotProfile.message}”
          </blockquote>
          {abbotProfile.isDraftMessage ? <p className="mt-4 text-sm text-text-secondary">此寄语为示意内容，正式上线前需要法师确认。</p> : null}
        </div>
      </div>
    </section>
  );
}

export function BranchesPreview() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeading title="五家分院" description="分院资料第一阶段以待确认内容展示，未来可接入后台管理各分院资讯。" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-5">
          {branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)}
        </div>
      </div>
    </section>
  );
}

export function EventsPreview() {
  return (
    <section className="bg-background-cream py-20">
      <div className="container-page">
        <SectionHeading title="近期法会与活动" description="以下为演示内容，正式活动需由善导精舍确认后发布。" />
        <div className="mt-10">
          <EventFilterGrid events={events} />
        </div>
        <div className="mt-8 text-center"><ButtonLink href="/events" variant="outline">查看所有法会与活动</ButtonLink></div>
      </div>
    </section>
  );
}

export function DharmaPreview() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeading title="佛法学习" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dharmaEntrances.map((item) => (
            <article key={item.title} className="quiet-card rounded-[1.35rem] bg-background-cream p-6 transition duration-200 hover:-translate-y-0.5">
              <span className="grid h-[52px] w-[52px] place-items-center rounded-full border border-brand-gold/[0.16] bg-[#f2e5cf] text-brand-brown"><item.icon className="h-6 w-6" /></span>
              <h3 className="serif-title mt-5 text-[1.45rem] font-bold text-brand-brown-dark">{item.title}</h3>
              <p className="mt-2 min-h-[3.5rem] text-[15px] leading-7 text-text-secondary">{item.description}</p>
              <ButtonLink className="mt-5 px-4 text-sm" href={item.href} variant="outline">进入学习</ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CharityPreview() {
  return (
    <section className="bg-background-cream py-20">
      <div className="container-page">
        <SectionHeading title="慈善与社区服务" description="以慈心服务社会，以行动温暖需要的人。" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-5">
          {charityProjects.map((project) => {
            const Icon = charityIcons[project.id as keyof typeof charityIcons];
            return (
              <article className="quiet-card rounded-[1.25rem] bg-white/82 p-5" key={project.id}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-brown/[0.08] text-brand-brown"><Icon className="h-6 w-6" /></span>
                <h3 className="serif-title mt-4 text-[1.22rem] font-bold text-brand-brown-dark">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-text-secondary">{project.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function NewsPreview() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionHeading title="最新公告" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article className="quiet-card rounded-[1.35rem] bg-background-cream p-6" key={item.id}>
              <p className="text-sm font-semibold text-brand-gold">{item.category} · {item.date}</p>
              <h3 className="serif-title mt-2 text-[1.45rem] font-bold text-brand-brown-dark"><Link href={`/news/${item.slug}`}>{item.title}</Link></h3>
              <p className="mt-3 text-text-secondary">{item.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center"><ButtonLink href="/news" variant="outline">查看全部公告</ButtonLink></div>
      </div>
    </section>
  );
}

export function SupportCta() {
  return (
    <section className="bg-brand-brown px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl rounded-[1.6rem] border border-white/10 bg-brand-brown-dark/38 p-8 text-center shadow-warm md:p-12">
        <h2 className="serif-title text-[2.1rem] font-bold leading-tight md:text-[2.65rem]">共同护持正法久住</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-8 text-white/78">
          每一份护持，都将用于道场维护、弘法教育、僧团生活与社区关怀。正式护持资料待提供。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/support">了解护持项目</ButtonLink>
          <ButtonLink href="/charity" variant="outline">成为义工</ButtonLink>
        </div>
      </div>
    </section>
  );
}
