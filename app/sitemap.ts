import type { MetadataRoute } from "next";

import { navItems, posts, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = navItems.map((item) => ({
    url: `${site.domain}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const blog: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...blog];
}
