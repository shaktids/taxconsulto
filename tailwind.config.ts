import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e8ff",
          700: "#123a63",
          800: "#0d2d4d",
          900: "#071f36",
          950: "#041625"
        },
        gold: {
          100: "#fff3cc",
          300: "#f6d365",
          500: "#d6a21f",
          600: "#b48312"
        }
      },
      boxShadow: {
        premium: "0 18px 60px rgba(4, 22, 37, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
