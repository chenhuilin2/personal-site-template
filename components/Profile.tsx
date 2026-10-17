import { site } from "@/data/site";

/**
 * 左栏：头像 + 联系方式。
 * 桌面端竖排（头像在上、联系方式在下），移动端横排（头像在左）。
 * 联系方式每行用 flex-1 的空 div 撑开，实现「标签靠左、值靠右」的两端对齐，
 * 视觉上像一条虚线导航，比冒号堆叠干净得多。
 */
export default function Profile() {
  return (
    <div className="flex w-full shrink-0 flex-row items-start gap-4 md:w-col-left md:flex-col md:gap-0 max-md:mb-6">
      {/* 用原生 img，避免 next/image 默认拒绝优化 SVG 的问题；
          换成 .jpg 头像后可以替换成 next/image 获得自动优化 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.avatar}
        alt={`Portrait of ${site.name}`}
        width={240}
        height={240}
        className="h-28 w-28 shrink-0 rounded md:mb-4 md:h-auto md:w-col-left"
      />

      <div className="flex flex-1 flex-col gap-1 md:flex-none">
        {site.contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex flex-row text-[0.8rem] leading-6"
          >
            <span className="whitespace-nowrap">{contact.label} :</span>
            <span className="min-w-[8px] flex-1" />
            {contact.href ? (
              <a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="link-plain break-all text-right"
              >
                {contact.value}
              </a>
            ) : (
              <span className="break-all text-right">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
