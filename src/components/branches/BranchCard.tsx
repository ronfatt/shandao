import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Branch } from "@/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-[1.25rem] border border-border-warm/90 bg-background-cream p-3 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-warm">
      <ImagePlaceholder className="aspect-[4/2.35] min-h-0 rounded-2xl" />
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[13px] font-semibold tracking-[0.08em] text-brand-gold">{branch.englishName}</p>
        <h3 className="serif-title mt-1 text-[1.3rem] font-bold leading-tight text-brand-brown-dark">{branch.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{branch.region}</p>
        <p className="mt-3 line-clamp-3 min-h-[5.25rem] text-[15px] leading-7 text-text-secondary">{branch.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          <ButtonLink className="min-h-10 px-4 text-sm" href={`/branches/${branch.slug}`} variant="brown">查看分院</ButtonLink>
          {branch.mapUrl ? (
            <Link
              className="inline-flex min-h-10 items-center gap-1 rounded-full border border-border-warm bg-white px-3 text-sm font-semibold text-brand-brown hover:border-brand-gold"
              href={branch.mapUrl}
            >
              <MapPin className="h-4 w-4" aria-hidden />
              路线导航
            </Link>
          ) : (
            <span className="inline-flex min-h-10 items-center gap-1 rounded-full border border-border-warm/80 bg-white/70 px-3 text-sm font-semibold text-text-secondary" aria-disabled="true">
              <MapPin className="h-4 w-4" aria-hidden />
              路线待确认
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
