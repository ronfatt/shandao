import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-temple-lines text-white">
      <div className="absolute inset-0 opacity-25 [background:linear-gradient(180deg,transparent,rgba(0,0,0,.28)),radial-gradient(circle_at_18%_82%,rgba(231,201,138,.22),transparent_18rem)]" />
      <div className="container-page relative grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="animate-[fadeIn_.6s_ease-out]">
          <p className="mb-5 text-sm font-semibold tracking-[0.24em] text-brand-gold-light">正信佛法 · 共修弘法 · 慈悲济世</p>
          <h1 className="serif-title max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
            让佛法走进生活，
            <span className="block text-brand-gold-light">让慈悲成为日常</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-9 text-white/82">
            以正信佛法为根本，在修学、弘法与慈善中，共同走向安定、智慧与慈悲的人生。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about">认识善导精舍 <ArrowRight className="ml-2 h-5 w-5" aria-hidden /></ButtonLink>
            <ButtonLink href="/events" variant="red">查看近期法会 <CalendarDays className="ml-2 h-5 w-5" aria-hidden /></ButtonLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute inset-x-8 bottom-4 h-28 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-gold/25 bg-gradient-to-b from-white/10 to-black/20 shadow-2xl">
            <Image src="/images/abbot2.png" alt="善导精舍法师照片" width={540} height={809} className="h-auto w-full object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
