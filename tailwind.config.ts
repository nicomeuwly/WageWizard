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
        "bg-black": "var(--bg-black)",
        "bg-gray": "var(--bg-gray)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "yellow": "var(--yellow)",
        "red": "var(--red)",
        "green": "var(--green)",
        "purple": "var(--purple)",
        "bg-gradient": "var(--bg-gradient)",
        "yellow-gradient": "var(--yellow-gradient)",
        "red-gradient": "var(--red-gradient)",
        "green-gradient": "var(--green-gradient)",
        "purple-gradient": "var(--purple-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
