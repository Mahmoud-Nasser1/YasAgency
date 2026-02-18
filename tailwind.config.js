/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      colors: {
        /* Base */
        background: "#000000",
        foreground: "#ffffff",

        /* Cards & surfaces */
        card: "#121212",
        cardForeground: "#ffffff",

        popover: "#121212",
        popoverForeground: "#ffffff",

        /* Primary */
        primary: "#ffffff",
        primaryForeground: "#000000",

        /* Secondary */
        secondary: "#1a1a1a",
        secondaryForeground: "#f5f5f5",

        /* Muted */
        muted: "#262626",
        mutedForeground: "#a3a3a3",

        /* Accent */
        accent: "#262626",
        accentForeground: "#f5f5f5",

        /* Destructive */
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",

        /* Borders & inputs */
        border: "#2e2e2e",
        input: "#2e2e2e",
        ring: "#ffffff",

        /* Sidebar */
        sidebar: "#0d0d0d",
        sidebarForeground: "#f5f5f5",
        sidebarPrimary: "#ffffff",
        sidebarPrimaryForeground: "#000000",
        sidebarAccent: "#262626",
        sidebarAccentForeground: "#f5f5f5",
        sidebarBorder: "#2e2e2e",
        sidebarRing: "#ffffff",

        /* Custom tokens */
        surfaceElevated: "#1a1a1a",
        textSubtle: "#808080",
        divider: "#333333",
      },

      borderRadius: {
        lg: "4px",
        md: "2px",
        sm: "1px",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
