import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#62370F",
          "brown-dark": "#351A08",
          gold: "#C8943E",
          "gold-light": "#E7C98A",
          red: "#962F27",
        },
        background: {
          ivory: "#F7F2E9",
          cream: "#FFFDF8",
        },
        border: {
          warm: "#E6D7C1",
        },
        text: {
          primary: "#2D2119",
          secondary: "#746457",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif-sc)", "Noto Serif SC", "Songti SC", "serif"],
        sans: ["var(--font-sans-sc)", "Noto Sans SC", "Microsoft YaHei", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(53, 26, 8, 0.09)",
        warm: "0 10px 30px rgba(98, 55, 15, 0.13)",
      },
      backgroundImage: {
        "temple-lines":
          "radial-gradient(circle at 15% 20%, rgba(231,201,138,.16), transparent 26%), radial-gradient(circle at 86% 18%, rgba(200,148,62,.18), transparent 28%), linear-gradient(135deg, rgba(53,26,8,.98), rgba(98,55,15,.9))",
      },
    },
  },
  plugins: [],
};

export default config;
