"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(53,26,8,0.96)] text-white backdrop-blur">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/" aria-label="善导精舍首页">
          <span className="relative flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-gold/[0.22] bg-brand-brown/75">
            <Image src="/images/shandao logo.png" alt="" fill sizes="56px" className="object-contain p-1.5" priority />
          </span>
          <span className="serif-title text-[1.55rem] font-bold leading-none md:text-[1.85rem]">善导精舍</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要导航">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[15px] font-semibold text-white/82 transition hover:bg-white/[0.08] hover:text-brand-gold-light",
                  active && "bg-white/[0.08] text-brand-gold-light",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          className="hidden min-h-11 items-center gap-2 rounded-full border border-brand-gold/30 bg-[#d7ac64] px-5 py-2.5 font-semibold text-brand-brown-dark transition hover:bg-brand-gold-light lg:inline-flex"
          href="/support"
        >
          <HeartHandshake className="h-5 w-5" aria-hidden />
          护持善导
        </Link>

        <button
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/18 bg-white/5 lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <div id="mobile-menu" className={cn("border-t border-white/10 bg-[rgba(53,26,8,0.98)] lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page grid gap-2 py-4" aria-label="移动导航">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-[17px] font-semibold text-white/88",
                  active && "bg-white/[0.08] text-brand-gold-light",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-gold/25 bg-[#d7ac64] px-5 font-semibold text-brand-brown-dark" href="/support">
            <HeartHandshake className="h-5 w-5" aria-hidden />
            护持善导
          </Link>
        </nav>
      </div>
    </header>
  );
}
