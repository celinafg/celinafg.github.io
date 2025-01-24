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
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            lineHeight: "1.75",
            maxWidth: "80ch",
            h1: {
              color: "#065f46",
              fontWeight: "700",
              fontSize: "2.25rem",
              lineHeight: "1.25",
              marginBottom: "1rem",
            },
            h2: {
              color: "#065f46",
              fontWeight: "600",
              fontSize: "1.875rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              color: "#065f46",
              fontWeight: "500",
              fontSize: "1.5rem",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#065f46",
              textDecoration: "none",
              borderBottom: "2px solid #065f46",
              transition: "color 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                color: "#ff6b6b",
                borderColor: "#ff6b6b",
              },
            },
            blockquote: {
              fontStyle: "italic",
              borderLeftWidth: "4px",
              borderLeftColor: "#065f46",
              paddingLeft: "1rem",
              color: "#555",
            },
            code: {
              backgroundColor: "#f5f5f5",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontFamily: "Courier New, monospace",
              fontSize: "0.875rem",
              color: "#d6336c",
            },
            pre: {
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
              fontFamily: "Courier New, monospace",
              fontSize: "0.875rem",
            },
            ul: {
              marginLeft: "1.5rem",
              marginBottom: "1rem",
            },
            ol: {
              marginLeft: "1.5rem",
              marginBottom: "1rem",
            },
            li: {
              marginBottom: "0.5rem",
            },
            img: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              borderRadius: "0.5rem",
            },
            hr: {
              marginTop: "2rem",
              marginBottom: "2rem",
              borderColor: "#ddd",
              borderWidth: "1px",
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "1.5rem",
            },
            th: {
              backgroundColor: "#f5f5f5",
              fontWeight: "bold",
              textAlign: "left",
              padding: "0.75rem",
              border: "1px solid #ddd",
            },
            td: {
              padding: "0.75rem",
              border: "1px solid #ddd",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
