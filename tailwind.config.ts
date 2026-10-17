import type { Config } from "tailwindcss";

/**
 * 颜色全部走 CSS 变量（见 app/globals.css），
 * 所以亮色 / 暗色主题切换不需要写任何 dark: 前缀。
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-sec": "var(--color-bg-sec)",
        fg: "var(--color-fg)",
        "fg-sec": "var(--color-fg-sec)",
        "fg-trd": "var(--color-fg-trd)",
        "fg-text": "var(--color-fg-text)",
        special: "var(--color-special)",
        "special-sec": "var(--color-special-sec)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        kai: ["var(--font-kai)"],
      },
      spacing: {
        nav: "4rem",
        "col-left": "240px",
      },
      maxWidth: {
        content: "1080px",
        reading: "54rem",
      },
    },
  },
  plugins: [],
};

export default config;
