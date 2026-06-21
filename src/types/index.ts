export type ContactInfo = {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Branch = {
  id: string;
  slug: string;
  name: string;
  englishName: string;
  region: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string;
  description: string;
  image: string;
  mapUrl: string;
  residentMonk: string;
  regularActivities: string[];
  facilities: string[];
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  branchSlug: string;
  branchName: string;
  date: string;
  time: string;
  category: string;
  description: string;
  requiresRegistration: boolean;
  isDemo: boolean;
  notes: string[];
};

export type MonkProfile = {
  name: string;
  role: string;
  image: string;
  message: string;
  isDraftMessage: boolean;
};

export type DharmaResource = {
  id: string;
  title: string;
  type: "article" | "pdf" | "audio" | "video" | "course";
  description: string;
  href: string;
  isDemo: boolean;
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  branchName: string;
  excerpt: string;
  image: string;
  isDemo: boolean;
};

export type CharityProject = {
  id: string;
  title: string;
  description: string;
  image?: string;
  isDemo: boolean;
};
