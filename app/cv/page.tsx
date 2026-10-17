import type { Metadata } from "next";

import EntryList from "@/components/EntryList";
import Page, { Section } from "@/components/Page";
import PublicationList from "@/components/PublicationList";
import {
  awards,
  education,
  experience,
  publications,
  services,
  site,
} from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${site.name}.`,
};

export default function CvPage() {
  return (
    <Page
      title="Curriculum Vitae"
      meta={site.name}
      subtitle="下面是从简版；如需 PDF 版本，把文件放进 public/ 后把 href 换成实际路径即可。"
    >
      <Section
        title="Education"
        aside={
          <a href="/cv.pdf" className="meta link">
            Download PDF
          </a>
        }
      >
        <EntryList items={education} />
      </Section>

      <Section title="Experience">
        <EntryList items={experience} />
      </Section>

      <Section title="Publications">
        <PublicationList items={publications} />
      </Section>

      <Section title={"Awards & Honors"}>
        <EntryList items={awards} />
      </Section>

      <Section title="Academic Service">
        <EntryList items={services} />
      </Section>
    </Page>
  );
}
