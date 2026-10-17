import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { site } from "@/data/site";

import "./globals.css";

/**
 * 原站用的是商业字体 Neue Montreal。
 * 这里挑了气质最接近的免费替代：Inter（正文）+ IBM Plex Mono（元信息）。
 * 构建时会自托管到产物里，不依赖运行时加载 Google Fonts。
 * 如果你买了 Neue Montreal，把字体文件放进 app/fonts/ 用 next/font/local 加载，
 * 并保持 variable 名为 --font-inter / --font-plex-mono，CSS 里的回退链会自动生效。
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name}: Home`,
    template: `${site.name}: %s`,
  },
  description: `${site.role}. ${site.bio[0]}`,
  authors: [{ name: site.name, url: site.domain }],
  keywords: [
    site.name,
    "Homepage",
    "Academic",
    "Research",
    "Data Visualization",
    "Computer Science",
  ],
  openGraph: {
    type: "website",
    url: site.domain,
    title: `${site.name}: Home`,
    description: `${site.role}.`,
    siteName: site.siteName,
  },
  twitter: {
    card: "summary",
    title: `${site.name}: Home`,
    description: `${site.role}.`,
  },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/rss.xml" },
  },
};

/** 跟着系统主题走，浏览器 UI 颜色也跟着变 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans">
        <Nav />
        {/* 顶掉固定导航的高度 */}
        <div className="h-16" aria-hidden="true" />
        <main className="min-h-[calc(100vh_-_8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
