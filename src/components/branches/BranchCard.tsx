import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Branch } from "@/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="group min-w-0 rounded-2xl border border-border-warm bg-background-cream p-3 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-warm">
      <ImagePlaceholder className="aspect-[4/2.35] min-h-0 rounded-xl" />
      <div className="p-3">
        <p className="text-sm font-semibold text-brand-gold">{branch.englishName}</p>
        <h3 className="serif-title mt-1 text-xl font-bold text-brand-brown-dark">{branch.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{branch.region}</p>
        <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-text-secondary">{branch.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ButtonLink className="px-4 text-sm" href={`/branches/${branch.slug}`} variant="brown">查看分院</ButtonLink>
          <Link
            className="inline-flex min-h-10 items-center gap-1 rounded-full border border-border-warm bg-white px-3 text-sm font-semibold text-brand-brown hover:border-brand-gold"
            href={branch.mapUrl}
          >
            <MapPin className="h-4 w-4" aria-hidden />
            路线导航
          </Link>
        </div>
      </div>
    </article>
  );
}
