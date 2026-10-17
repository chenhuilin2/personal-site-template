/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 想部署到 GitHub Pages / Cloudflare Pages 这类纯静态托管时，
  // 把下面两行注释打开，`npm run build` 就会产出 out/ 目录（纯 HTML，不需要 Node 运行时）。
  // output: "export",
  // images: { unoptimized: true },
};

export default nextConfig;
