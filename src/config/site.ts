import type { ContactInfo, NavigationItem } from "@/types";

export const siteConfig = {
  organizationName: "善导精舍",
  siteTitle: "善导精舍官方网站",
  description:
    "善导精舍官方网站，介绍佛法修学、五家分院、法会活动、佛法资源、慈善关怀与护持资讯。",
  url: "https://www.shandaovihara.org",
  defaultSeoImage: "/images/shandao logo.png",
  contact: {
    address: "官方资料待确认",
    phone: "官方资料待确认",
    whatsapp: "官方资料待确认",
    email: "官方资料待确认",
  } satisfies ContactInfo,
  socialLinks: {
    facebook: "#",
    youtube: "#",
    instagram: "#",
    whatsapp: "#",
  },
  navigation: [
    { label: "首页", href: "/" },
    { label: "认识善导", href: "/about" },
    { label: "五院道场", href: "/branches" },
    { label: "法会活动", href: "/events" },
    { label: "佛法学习", href: "/dharma" },
    { label: "慈善关怀", href: "/charity" },
    { label: "最新资讯", href: "/news" },
    { label: "联系我们", href: "/contact" },
  ] satisfies NavigationItem[],
  copyright: "© 2026 善导精舍。All Rights Reserved.",
};
