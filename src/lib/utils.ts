import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatChineseDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(`${date}T00:00:00+08:00`));
}

export function createMetadata(title: string, description?: string, path = ""): Metadata {
  const fullTitle = title === siteConfig.siteTitle ? title : `${title} | ${siteConfig.organizationName}`;
  const pageDescription = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: pageDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.siteTitle,
      locale: "zh_CN",
      type: "website",
      images: [{ url: siteConfig.defaultSeoImage, alt: siteConfig.organizationName }],
    },
  };
}
