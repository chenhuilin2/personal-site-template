import type { ReactNode } from "react";

export function SectionTitle({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-row items-baseline justify-between gap-4 border-b border-fg-sec pb-2">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-fg-trd">
        {children}
      </h2>
      {aside}
    </div>
  );
}

export function Section({
  title,
  aside,
  children,
  className = "",
}: {
  title?: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      {title && <SectionTitle aside={aside}>{title}</SectionTitle>}
      {children}
    </section>
  );
}
