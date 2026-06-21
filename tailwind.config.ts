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
        soft: "0 14px 36px rgba(53, 26, 8, 0.07)",
        warm: "0 18px 42px rgba(98, 55, 15, 0.12)",
        card: "0 10px 28px rgba(53, 26, 8, 0.055)",
      },
      backgroundImage: {
        "temple-lines":
          "radial-gradient(circle at 16% 18%, rgba(231,201,138,.13), transparent 24rem), radial-gradient(circle at 86% 20%, rgba(200,148,62,.12), transparent 28rem), linear-gradient(135deg, rgba(53,26,8,.99), rgba(98,55,15,.9) 58%, rgba(64,31,10,.98))",
      },
    },
  },
  plugins: [],
};

export default config;
