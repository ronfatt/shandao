import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { branches } from "@/data/branches";
import { DemoForm } from "@/components/ui/DemoForm";

export function Footer() {
  const socialItems: Array<{ href: string; label: string; icon: LucideIcon }> = [
    { href: siteConfig.socialLinks.facebook, label: "Facebook", icon: Facebook },
    { href: siteConfig.socialLinks.youtube, label: "YouTube", icon: Youtube },
    { href: siteConfig.socialLinks.instagram, label: "Instagram", icon: Instagram },
  ];

  return (
    <footer className="bg-brand-brown-dark text-white">
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1.25fr_1fr_1fr_1.25fr]">
        <div>
          <h2 className="serif-title text-3xl font-bold">善导精舍</h2>
          <p className="mt-4 text-white/72">
            以正信佛法为根本，致力于修学弘法、社区慈善与心灵关怀。正式简介待善导精舍确认。
          </p>
          <p className="mt-6 text-sm text-white/55">{siteConfig.copyright}</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-gold-light">联系方式</h3>
          <ul className="space-y-2 text-white/72">
            <li className="flex gap-2"><Phone className="mt-1 h-4 w-4" aria-hidden />{siteConfig.contact.phone}</li>
            <li className="flex gap-2"><Mail className="mt-1 h-4 w-4" aria-hidden />{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
          <div className="mt-5 flex gap-3" aria-label="社交媒体链接">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return item.href ? (
                <Link className="rounded-full border border-white/20 p-2 hover:bg-white/10" href={item.href} aria-label={item.label} key={item.label}>
                  <Icon className="h-5 w-5" />
                </Link>
              ) : (
                <span className="rounded-full border border-white/10 p-2 text-white/35" aria-label={`${item.label} 待确认`} aria-disabled="true" key={item.label}>
                  <Icon className="h-5 w-5" />
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-gold-light">快速链接</h3>
          <ul className="grid gap-2 text-white/72">
            {siteConfig.navigation.slice(1).map((item) => (
              <li key={item.href}><Link className="hover:text-brand-gold-light" href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link className="hover:text-brand-gold-light" href="/privacy">隐私政策</Link></li>
            <li><Link className="hover:text-brand-gold-light" href="/terms">使用条款</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-gold-light">五家分院</h3>
          <ul className="mb-6 grid gap-2 text-white/72">
            {branches.map((branch) => (
              <li key={branch.id}><Link className="hover:text-brand-gold-light" href={`/branches/${branch.slug}`}>{branch.name}</Link></li>
            ))}
          </ul>
          <DemoForm title="订阅善导资讯" fields="subscribe" />
        </div>
      </div>
    </footer>
  );
}
