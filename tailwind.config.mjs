const themeConfig = require("./src/config/themes.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderColor: ["active"],

      colors: {
        // Theme colors
        theme: {
          home: themeConfig.themes.home.color.hex,
          about: themeConfig.themes.about.color.hex,
          feed: themeConfig.themes.feed.color.hex,
          experiments: themeConfig.themes.experiments.color.hex,
        },

        // Base colors
        text: themeConfig.base.colors.text,
        bg: themeConfig.base.colors.background,
      },
      fontSize: {
        ...themeConfig.base.typography.sizes,
      },
      fontFamily: {
        mono: [themeConfig.base.typography.fonts.mono, "monospace"],
        sans: [themeConfig.base.typography.fonts.sans, "sans-serif"],
      },
      lineHeight: themeConfig.base.typography.lineHeight,
      spacing: {
        ...themeConfig.base.spacing.sections,
        unit: themeConfig.base.spacing.unit,
      },
      backdropBlur: {
        glass: themeConfig.base.effects.glass.blur,
      },
      transitionTimingFunction: {
        default: "ease",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        default: "300ms",
        slow: "600ms",
        fast: "150ms",
      },
      boxShadow: {
        ...themeConfig.base.effects.shadows,
      },
      typography: {
        DEFAULT: {
          css: {
            color: themeConfig.base.colors.text.secondary,
            lineHeight: themeConfig.base.typography.lineHeight.relaxed,
            maxWidth: "65ch",
            "--tw-prose-body": themeConfig.base.colors.text.secondary,
            "--tw-prose-headings": themeConfig.base.colors.text.primary,
            h1: {
              color: themeConfig.base.colors.text.primary,
              fontWeight: "700",
              fontFamily: themeConfig.base.typography.fonts.mono,
              fontSize: themeConfig.base.typography.sizes.h1,
              lineHeight: themeConfig.base.typography.lineHeight.tight,
            },
            h2: {
              color: themeConfig.base.colors.text.primary,
              fontWeight: "600",
              fontFamily: themeConfig.base.typography.fonts.mono,
              fontSize: themeConfig.base.typography.sizes.h2,
            },
            h3: {
              color: themeConfig.base.colors.text.primary,
              fontWeight: "500",
              fontFamily: themeConfig.base.typography.fonts.mono,
              fontSize: themeConfig.base.typography.sizes.h3,
            },
            a: {
              color: "var(--theme-current)",
              textDecoration: "none",
              transition: themeConfig.base.effects.transitions.default,
              "&:hover": {
                opacity: "0.8",
              },
            },
            code: {
              backgroundColor: themeConfig.base.colors.background.primary,
              fontFamily: themeConfig.base.typography.fonts.mono,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
