import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="flex h-16 items-center">
      <div className="container-content flex flex-row items-center justify-between gap-4 text-xs text-fg-trd">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="font-mono max-sm:hidden">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
