import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
};

export default config;
