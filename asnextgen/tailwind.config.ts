import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0C14",
        ink: "#111420",
        "ink-2": "#181D2E",
        "ink-3": "#1E2332",
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        "gold-dark": "#A8742A",
        foam: "#F0EDE6",
        slate: "#9A9080",
        "slate-dim": "#635C50",
        emerald: "#22C55E",
        amber: "#F5A623",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #A8742A, #E8C97A)",
        "gold-gradient-r": "linear-gradient(225deg, #A8742A, #E8C97A)",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(201,168,76,0.3)",
        "gold-sm": "0 0 20px -8px rgba(201,168,76,0.2)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201,168,76,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "grid-scroll": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "grid-scroll": "grid-scroll 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
