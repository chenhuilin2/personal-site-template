import type { ReactNode } from "react";

import { site, type Publication } from "@/data/site";

/**
 * 论文条目：venue（等宽小字）→ 标题 → 作者（自己加粗）→ 摘要 → 链接组。
 * 从上到下字号递减、颜色递减，靠排版建立层级，不用任何卡片或边框。
 */
export default function PublicationList({ items }: { items: Publication[] }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((pub) => {
        const authors: ReactNode[] = [];

        (pub.authorsBefore ?? []).forEach((name) => authors.push(name));
        authors.push(
          <span key="self" className="font-medium text-fg underline decoration-fg decoration-1 underline-offset-2">
            {site.name}
          </span>,
        );
        (pub.authorsAfter ?? []).forEach((name) => authors.push(name));

        return (
          <article key={pub.title} className="flex flex-col gap-1">
            <p className="meta">{pub.venue}</p>

            <h3 className="text-[0.95rem] font-medium leading-snug text-fg">
              {pub.title}
            </h3>

            <p className="text-sm leading-relaxed text-fg-sec">
              {authors.map((node, i) => (
                <span key={i}>
                  {i > 0 ? ", " : ""}
                  {node}
                </span>
              ))}
            </p>

            <p className="text-sm leading-relaxed text-fg-sec">{pub.summary}</p>

            {pub.links.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="meta link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
