import type { ReactNode } from "react";

import { Section } from "./Section";

/**
 * 内页统一骨架：1080px 栅格 + 标题区 + 若干 Section。
 * 所有子页面都用它，保证留白节奏一致。
 */
export default function Page({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="container-content mt-8 flex flex-col gap-12 pb-20">
        <header className="flex flex-col gap-3">
          <div className="flex flex-row flex-wrap items-baseline gap-x-4 gap-y-1">
            <h1 className="text-3xl font-bold">{title}</h1>
            {meta && <span className="meta">{meta}</span>}
          </div>
          {subtitle && (
            <p className="max-w-reading text-sm leading-relaxed text-fg-sec">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}

export { Section };
