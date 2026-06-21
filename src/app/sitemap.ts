import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { branches } from "@/data/branches";
import { events } from "@/data/events";
import { newsItems } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/branches", "/events", "/dharma", "/resources", "/charity", "/news", "/contact", "/support", "/privacy", "/terms"];
  return [
    ...staticPages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })),
    ...branches.map((branch) => ({ url: `${siteConfig.url}/branches/${branch.slug}`, lastModified: new Date() })),
    ...events.map((event) => ({ url: `${siteConfig.url}/events/${event.slug}`, lastModified: new Date(event.date) })),
    ...newsItems.map((item) => ({ url: `${siteConfig.url}/news/${item.slug}`, lastModified: new Date(item.date) })),
  ];
}
