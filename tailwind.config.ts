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
        primary: "#feb600",
        dark: "#1a1a1d",
        "dark-footer": "#111114",
        grey: "#f5f5f5",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
