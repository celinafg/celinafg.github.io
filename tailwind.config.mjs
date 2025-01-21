const theme = require("./src/config/theme.json"); // Import theme.json

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: theme.colors.text,
        background: theme.colors.background,
        heading: theme.colors.heading,
        underline: "#A7FF83",
      },
      fontSize: {
        base: theme.font_size.base,
        h1: theme.font_size.h1,
        h2: theme.font_size.h2,
        h3: theme.font_size.h3,
        h4: theme.font_size.h4,
        h5: theme.font_size.h5,
        h6: theme.font_size.h6,
      },
      fontFamily: {
        secondary: ["Space Mono", "monospace"],
        primary: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
