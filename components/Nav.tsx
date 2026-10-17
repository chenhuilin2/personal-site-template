"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";

/**
 * 顶部固定导航。
 * 两个值得注意的细节（复刻自原站）：
 *  1. 左上角是「反色块」——深底浅字，高度只占导航栏的 70%，贴着导航栏顶部；
 *  2. 进入子页面时，块内会滑出一个 "/"，块右侧再淡入当前栏目名，形成 jtchen.io /blog 的视觉。
 */
export default function Nav() {
  const pathname = usePathname();

  const activeItem = navItems.find(
    (item) =>
      item.href !== "/" &&
      (pathname === item.href || pathname.startsWith(`${item.href}/`)),
  );
  const showPath = Boolean(activeItem);

  return (
    <header className="select-none fixed top-0 left-0 z-50 w-full bg-bg">
      <div className="flex w-full justify-center">
        <div className="container-content flex h-16 flex-row items-start justify-between max-sm:h-auto max-sm:flex-col max-sm:items-stretch max-sm:gap-1 max-sm:py-2">
          {/* 反色 logo 块 + 当前路径 */}
          <div className="flex h-16 flex-row items-start gap-0.5 text-2xl font-bold text-fg max-sm:h-9 max-sm:text-xl">
            <div className="flex h-11 flex-col justify-end bg-fg px-2 max-sm:h-9">
              <Link
                href="/"
                className="flex flex-row items-end whitespace-nowrap pb-[3px] leading-none text-bg"
              >
                <span className="inline-block">{site.siteName}</span>
                <span
                  className={`inline-block overflow-hidden transition-normal ${
                    showPath
                      ? "ml-1 max-w-[1.5rem] opacity-100"
                      : "ml-0 max-w-0 opacity-0"
                  }`}
                >
                  /
                </span>
              </Link>
            </div>
            <div className="flex h-11 max-w-[30rem] flex-col justify-end overflow-hidden max-sm:h-9">
              <span
                className={`inline-block whitespace-nowrap pb-[3px] leading-none transition-normal ${
                  showPath ? "max-w-full opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                {activeItem?.label ?? ""}
              </span>
            </div>
          </div>

          {/* 右侧导航 */}
          <nav className="flex h-16 items-center max-sm:h-auto max-sm:pb-1">
            <ul className="flex flex-row gap-12 text-lg max-sm:w-full max-sm:justify-between max-sm:gap-0 max-sm:text-base">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href} className={isActive ? "font-bold" : ""}>
                    <Link href={item.href} className="link-plain">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      {/* 1px 分隔线，全站唯一的“装饰” */}
      <div className="h-px w-full bg-fg-sec" />
    </header>
  );
}
