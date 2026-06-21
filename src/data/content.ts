import { BookOpen, Download, HeartHandshake, Headphones, Leaf, Mic, Play, Sprout, Stethoscope, Users } from "lucide-react";
import type { CharityProject, DharmaResource, MonkProfile, NewsItem } from "@/types";

export const abbotProfile: MonkProfile = {
  name: "法师资料待确认",
  role: "住持法师资料待确认",
  image: "/images/abbot2.png",
  message: "学佛不是逃离生活，而是让心更加清明，让慈悲落实在每一个当下。",
  isDraftMessage: true,
};

export const dharmaEntrances = [
  { title: "法师开示", description: "聆听法师开示，启发智慧与慈悲。", icon: Mic, href: "/dharma" },
  { title: "禅修入门", description: "学习禅修方法，培养定力与觉知。", icon: Leaf, href: "/dharma" },
  { title: "经文下载", description: "经典经文与共修仪轨资料待整理。", icon: BookOpen, href: "/resources" },
  { title: "视频音频", description: "开示影音与共修音频资料待提供。", icon: Play, href: "/resources" },
];

export const dharmaResources: DharmaResource[] = [
  {
    id: "intro-chanting",
    title: "念佛共修入门资料",
    type: "pdf",
    description: "示例资料条目，正式 PDF 待上传。",
    href: "#",
    isDemo: true,
  },
  {
    id: "meditation-basic",
    title: "禅修基础课程",
    type: "course",
    description: "示例课程入口，课程大纲待确认。",
    href: "#",
    isDemo: true,
  },
  {
    id: "dharma-audio",
    title: "法音音频资料库",
    type: "audio",
    description: "音频资料待善导精舍提供。",
    href: "#",
    isDemo: true,
  },
];

export const charityProjects: CharityProject[] = [
  { id: "poverty", title: "慈善济贫", description: "关怀弱势家庭，传递实际支持。", isDemo: true },
  { id: "education", title: "助学育才", description: "护持教育资源，让孩子看见未来。", isDemo: true },
  { id: "clinic", title: "义诊关怀", description: "健康关怀与社区陪伴项目待确认。", isDemo: true },
  { id: "relief", title: "赈灾救助", description: "急难救助机制与案例待整理。", isDemo: true },
  { id: "eco", title: "环保行动", description: "爱护地球，从心出发。", isDemo: true },
];

export const charityIcons = {
  poverty: HeartHandshake,
  education: Users,
  clinic: Stethoscope,
  relief: Sprout,
  eco: Leaf,
};

export const resourceIcons = {
  pdf: Download,
  audio: Headphones,
  video: Play,
  article: BookOpen,
  course: BookOpen,
};

export const newsItems: NewsItem[] = [
  {
    id: "demo-notice-1",
    slug: "demo-notice-1",
    title: "官方网站资料整理中",
    category: "公告",
    date: "2026-06-21",
    branchName: "善导精舍",
    excerpt: "本站第一阶段使用示意资料，正式上线前将由善导精舍确认内容。",
    image: "",
    isDemo: true,
  },
  {
    id: "demo-notice-2",
    slug: "demo-notice-2",
    title: "五家分院资料待补充",
    category: "分院资讯",
    date: "2026-06-20",
    branchName: "五家分院",
    excerpt: "分院地址、开放时间、联系方式与固定共修资料待提供。",
    image: "",
    isDemo: true,
  },
  {
    id: "demo-notice-3",
    slug: "demo-notice-3",
    title: "法会活动将陆续更新",
    category: "法会活动",
    date: "2026-06-18",
    branchName: "善导精舍",
    excerpt: "正式活动发布前，本页仅展示演示版活动卡片。",
    image: "",
    isDemo: true,
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
