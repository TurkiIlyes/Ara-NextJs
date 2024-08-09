import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "576px", // Bootstrap's small breakpoint
        md: "768px", // Bootstrap's medium breakpoint
        lg: "992px", // Bootstrap's large breakpoint
        xl: "1200px", // Bootstrap's extra-large breakpoint
        "2xl": "1400px", // Bootstrap's extra-extra-large breakpoint
      },
    },
    screens: {
      sm: "576px", // Bootstrap's small breakpoint
      md: "768px", // Bootstrap's medium breakpoint
      lg: "992px", // Bootstrap's large breakpoint
      xl: "1200px", // Bootstrap's extra-large breakpoint
      "2xl": "1400px", // Bootstrap's extra-extra-large breakpoint
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to right, purple , white , purple )",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio")
  ],
};
export default config;
