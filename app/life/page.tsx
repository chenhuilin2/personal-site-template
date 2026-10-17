import type { Metadata } from "next";

import Page, { Section } from "@/components/Page";
import { lifeIntro, lifePhotos } from "@/data/site";

export const metadata: Metadata = {
  title: "Life",
  description: "Things outside of work.",
};

export default function LifePage() {
  return (
    <Page
      title="Life"
      subtitle={lifeIntro}
      meta={`${lifePhotos.length} photos`}
    >
      <Section title="Photos">
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {lifePhotos.map((photo, i) => (
            <figure key={i} className="flex flex-col gap-2">
              {photo.src ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="aspect-square w-full rounded object-cover"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded bg-bg-sec">
                  <span className="meta">photo {i + 1}</span>
                </div>
              )}
              <figcaption className="meta">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <p className="meta text-fg-trd">
        把照片放进 public/life/ 目录，然后在 data/site.ts 的 lifePhotos 里填上
        src 路径即可。
      </p>
    </Page>
  );
}
