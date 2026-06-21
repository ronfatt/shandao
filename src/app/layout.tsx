import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.organizationName}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    siteName: siteConfig.siteTitle,
    locale: "zh_CN",
    type: "website",
    images: [siteConfig.defaultSeoImage],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.organizationName,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
