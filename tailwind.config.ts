import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // flowbite
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-2": "auto 1fr",
        "custom-1": "1.5fr 1fr",
      },
      screens: {
        xxxs: "380px",
        xxs: "480px",
        xs: "576px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
