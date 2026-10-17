import type { Metadata } from "next";

import Page, { Section } from "@/components/Page";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Project",
  description: "Selected research prototypes, tools and side projects.",
};

export default function ProjectPage() {
  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) =>
    b.localeCompare(a),
  );

  return (
    <Page
      title="Project"
      meta={`${projects.length} projects`}
      subtitle="研究原型、开源工具和一些自己做着玩的东西。每一条都写清楚「解决了什么问题」和「你做了什么」。"
    >
      {years.map((year) => (
        <Section key={year} title={year}>
          <div className="flex flex-col gap-8">
            {projects
              .filter((p) => p.year === year)
              .map((project) => (
                <article key={project.name} className="flex flex-col gap-2">
                  <h3 className="text-[0.95rem] font-medium leading-snug">
                    {project.name}
                  </h3>

                  <p className="max-w-reading text-sm leading-relaxed text-fg-sec">
                    {project.summary}
                  </p>

                  <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="meta">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className="meta link"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </Section>
      ))}
    </Page>
  );
}
