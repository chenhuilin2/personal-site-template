import type { Metadata } from "next";
import Link from "next/link";

import Page, { Section } from "@/components/Page";
import { posts, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes, reading logs and things I figured out the hard way.",
};

export default function BlogPage() {
  const groups = Array.from(
    new Set(posts.map((p) => p.date.slice(0, 4))),
  ).sort((a, b) => b.localeCompare(a));

  return (
    <Page
      title="Blog"
      meta={
        <>
          {posts.length} posts ·{" "}
          <a href="/rss.xml" className="link">
            RSS
          </a>
        </>
      }
      subtitle="论文笔记、工具折腾记录，以及踩过的坑。"
    >
      {groups.map((year) => (
        <Section key={year} title={year}>
          <div className="flex flex-col gap-6">
            {posts
              .filter((p) => p.date.startsWith(year))
              .map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-row gap-6 max-sm:flex-col max-sm:gap-1"
                >
                  <div className="meta w-[6rem] shrink-0 pt-[3px]">
                    {post.date}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="link-plain text-[0.95rem] font-medium leading-snug text-fg"
                    >
                      {post.title}
                    </Link>
                    <p className="max-w-reading text-sm leading-relaxed text-fg-sec">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
          </div>
        </Section>
      ))}

      <p className="meta text-fg-trd">
        订阅地址 <span className="link">{site.domain}/rss.xml</span>
      </p>
    </Page>
  );
}
