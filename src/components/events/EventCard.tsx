import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import type { Event } from "@/types";
import { formatChineseDate } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function EventCard({ event }: { event: Event }) {
  const [month, day] = event.date.slice(5).split("-");
  return (
    <article className="rounded-[1.25rem] border border-border-warm/90 bg-background-cream p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-warm">
      <div className="flex gap-4">
        <div className="flex h-[84px] w-[68px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border-warm bg-white text-center text-brand-brown shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
          <span className="bg-brand-brown px-2 py-1 text-xs font-semibold text-brand-gold-light">{month}月</span>
          <span className="grid flex-1 place-items-center text-[1.7rem] font-bold leading-none">{day}</span>
        </div>
        <div>
          <p className="text-[13px] font-semibold tracking-[0.08em] text-brand-gold">{event.category}{event.isDemo ? " · 示意" : ""}</p>
          <h3 className="serif-title mt-1 text-[1.28rem] font-bold leading-snug text-brand-brown-dark">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-text-secondary"><CalendarDays className="h-4 w-4" />{formatChineseDate(event.date)} · {event.time}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-text-secondary"><MapPin className="h-4 w-4" />{event.branchName}</p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-text-secondary">{event.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <ButtonLink href={`/events/${event.slug}`} variant="outline" className="px-4 text-sm">查看详情</ButtonLink>
        {event.requiresRegistration ? <ButtonLink href={`/events/${event.slug}#register`} variant="red" className="px-4 text-sm">我要报名</ButtonLink> : null}
      </div>
    </article>
  );
}
