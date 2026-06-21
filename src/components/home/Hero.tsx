import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-temple-lines text-white">
      <div className="absolute inset-0 opacity-50 [background:linear-gradient(180deg,rgba(53,26,8,.05),rgba(53,26,8,.44)),radial-gradient(circle_at_12%_78%,rgba(231,201,138,.16),transparent_18rem),radial-gradient(circle_at_88%_72%,rgba(0,0,0,.24),transparent_22rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-ivory to-transparent" />
      <div className="container-page relative grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="max-w-2xl animate-[fadeIn_.6s_ease-out]">
          <p className="mb-5 inline-flex rounded-full border border-brand-gold-light/20 bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-brand-gold-light/90">
            正信佛法 · 共修弘法 · 慈悲济世
          </p>
          <h1 className="serif-title text-[2.34rem] font-bold leading-[1.16] sm:text-[2.8rem] md:text-[4.1rem]">
            让佛法走进生活，
            <span className="block text-[#ead4a3]">让慈悲成为日常</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-9 text-white/78">
            以正信佛法为根本，在修学、弘法与慈善中，共同走向安定、智慧与慈悲的人生。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about">认识善导精舍 <ArrowRight className="ml-2 h-5 w-5" aria-hidden /></ButtonLink>
            <ButtonLink href="/events" variant="red">查看近期法会 <CalendarDays className="ml-2 h-5 w-5" aria-hidden /></ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute inset-x-10 bottom-7 h-24 rounded-full bg-black/28 blur-2xl" />
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_18%,rgba(231,201,138,.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,.09),rgba(0,0,0,.16))]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-brown-dark/18 shadow-[0_30px_70px_rgba(0,0,0,.28)]">
            <Image src="/images/abbot2.png" alt="善导精舍法师照片" width={540} height={809} className="mx-auto h-auto w-full max-w-[440px] object-contain object-bottom" priority />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-brown-dark/36 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
