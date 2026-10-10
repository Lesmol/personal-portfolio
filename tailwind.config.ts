import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F1115",
        card: "#171A20",
        figure: "#14171C",
        line: "#262A33",
        "line-strong": "#3A3F4B",
        text: "#ECEDEE",
        body: "#C9CDD3",
        soft: "#B4BAC3",
        muted: "#9BA1AB",
        accent: "#F2A93B",
        "on-accent": "#15120B",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
        article: "760px",
      },
    },
  },
  plugins: [],
} satisfies Config;
