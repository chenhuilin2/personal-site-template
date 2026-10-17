import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-content mt-8 flex max-w-reading flex-col gap-4 pb-20">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-sm leading-relaxed text-fg-sec">
          这个页面不存在。可能是链接过期了，也可能是我还没写好。
        </p>
        <Link href="/" className="meta link w-fit">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
