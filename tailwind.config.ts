import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "var(--black)",
        "black-2": "var(--black-2)",
        "gray": "var(--gray)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "font-primary": "var(--text-primary)",
        "font-secondary": "var(--text-secondary)",
        "yellow": "var(--yellow)",
        "yellow-2": "var(--yellow-opacity)",
        "red": "var(--red)",
        "green": "var(--green)",
        "bg-gradient": "var(--bg-gradient)"
      },
    },
  },
  plugins: [],
};
export default config;
