export type Entry = {
  period: string;
  org: string;
  detail?: string;
};

/**
 * 左「时间段」右「内容」的双栏条目列表，CV 页的学历 / 经历 / 奖项都用它。
 * 窄屏自动折成上下两行。
 */
export default function EntryList({ items }: { items: Entry[] }) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((item, i) => (
        <div
          key={`${item.period}-${item.org}-${i}`}
          className="flex flex-row gap-5 max-sm:flex-col max-sm:gap-1"
        >
          <div className="meta w-[9rem] shrink-0 pt-[3px]">{item.period}</div>
          <div className="flex flex-col gap-0.5">
            <div className="text-[0.95rem] font-medium leading-snug">
              {item.org}
            </div>
            {item.detail && (
              <div className="text-sm leading-relaxed text-fg-sec">
                {item.detail}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
