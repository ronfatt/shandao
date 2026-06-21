"use client";

import { useMemo, useState } from "react";
import type { Event } from "@/types";
import { branches } from "@/data/branches";
import { EventCard } from "@/components/events/EventCard";
import { cn } from "@/lib/utils";

export function EventFilterGrid({ events }: { events: Event[] }) {
  const [branch, setBranch] = useState("all");
  const filtered = useMemo(() => (branch === "all" ? events : events.filter((event) => event.branchSlug === branch)), [branch, events]);

  return (
    <div>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
        {[{ slug: "all", name: "全部" }, ...branches].map((item) => (
          <button
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition",
              branch === item.slug ? "border-brand-brown bg-brand-brown text-white" : "border-border-warm bg-white text-brand-brown hover:border-brand-gold",
            )}
            key={item.slug}
            type="button"
            onClick={() => setBranch(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {filtered.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}
