import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "demo-amitabha",
    slug: "demo-amitabha",
    title: "念佛共修示例活动",
    branchSlug: "main",
    branchName: "总院",
    date: "2026-07-05",
    time: "10:00 AM",
    category: "法会共修",
    description: "示例活动内容，用于展示活动卡片与报名流程。正式日期与细节待确认。",
    requiresRegistration: true,
    isDemo: true,
    notes: ["此为演示资料", "正式活动需由善导精舍确认后发布"],
  },
  {
    id: "demo-meditation",
    slug: "demo-meditation",
    title: "禅修入门示例课程",
    branchSlug: "branch-one",
    branchName: "第一分院",
    date: "2026-07-12",
    time: "7:30 PM",
    category: "佛学课程",
    description: "为初学者预留的课程展示内容，正式课程名称、导师与时间待确认。",
    requiresRegistration: true,
    isDemo: true,
    notes: ["请勿作为正式课程资讯转发", "报名表单目前为演示模式"],
  },
  {
    id: "demo-charity",
    slug: "demo-charity",
    title: "社区关怀示例活动",
    branchSlug: "branch-two",
    branchName: "第二分院",
    date: "2026-07-19",
    time: "9:00 AM",
    category: "慈善服务",
    description: "示例义工服务活动，用于展示慈善与社区活动版面。",
    requiresRegistration: true,
    isDemo: true,
    notes: ["服务对象、地点与流程待确认"],
  },
  {
    id: "demo-dharma",
    slug: "demo-dharma",
    title: "佛学讲座示例",
    branchSlug: "branch-three",
    branchName: "第三分院",
    date: "2026-07-26",
    time: "8:00 PM",
    category: "法师开示",
    description: "讲座示例资料。正式主题、讲师与报名方式待确认。",
    requiresRegistration: false,
    isDemo: true,
    notes: ["此为示意活动"],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
