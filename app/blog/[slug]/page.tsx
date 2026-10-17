import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Page from "@/components/Page";
import { posts } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

/** 静态导出：构建时把每篇文章都预渲染成独立 HTML */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Page title={post.title} meta={post.date} subtitle={post.excerpt}>
      <article className="flex max-w-reading flex-col gap-5 text-sm leading-[1.85] text-fg-sec">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>

      <Link href="/blog" className="meta link w-fit">
        ← Back to all posts
      </Link>
    </Page>
  );
}
