import Link from "next/link";

import Profile from "@/components/Profile";
import PublicationList from "@/components/PublicationList";
import { Section } from "@/components/Section";
import { news, posts, publications, site } from "@/data/site";

export default function Home() {
  const featured = publications.filter((p) => p.featured);
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <div className="container-content mt-8 pb-20">
        <div className="flex flex-row items-start max-md:flex-col">
          <Profile />

          {/* 右侧主内容，宽度不设限，由 container-content 兜住 */}
          <div className="flex w-full min-w-0 flex-col md:ml-12">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold leading-tight">
                {site.name}
                <span className="ml-2 font-kai text-xl font-normal text-fg-sec">
                  / {site.nameZh}
                </span>
              </h1>
              <h2 className="mt-1 text-base font-normal text-fg-sec">
                {site.role}
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-fg-sec">
              {site.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <Section
              title="News"
              className="mt-12"
            >
              <ul className="flex flex-col gap-1.5 text-sm">
                {news.map((item) => (
                  <li key={item.date} className="flex flex-row gap-4">
                    <span className="meta w-[4.5rem] shrink-0 pt-[3px]">
                      {item.date}
                    </span>
                    <span className="leading-relaxed text-fg-sec">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section
              title="Selected Publications"
              className="mt-12"
              aside={
                <Link href="/cv" className="meta link">
                  Full list
                </Link>
              }
            >
              <PublicationList items={featured} />
            </Section>

            <Section
              title="Recent Posts"
              className="mt-12"
              aside={
                <Link href="/blog" className="meta link">
                  All posts
                </Link>
              }
            >
              <ul className="flex flex-col gap-3">
                {recentPosts.map((post) => (
                  <li
                    key={post.slug}
                    className="flex flex-row items-baseline gap-4 max-sm:flex-col max-sm:gap-0.5"
                  >
                    <span className="meta w-[5.5rem] shrink-0">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="link-plain text-sm font-medium"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
