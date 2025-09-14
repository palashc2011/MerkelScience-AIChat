import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Palettes (from your notes)
        blue: {
          50:  "#EFF6FF", // chat prompt bg, left menu bg
          400: "#60A5FA", // primary button
          600: "#2563EB", // primary button
          700: "#1D4ED8", // selected sidebar text
          800: "#1E40AF", // user chat text
        },
        gray: {
          200: "#E5E7EB", // icon border
          800: "#1F2937", // edit button text, typing text, unselected menu item
        },
        purple: {
          600: "#7C3AED", // gradient end
        },

        // Helpful semantic aliases
        "chat-bg": "#EFF6FF",
        "btn-primary": "#2563EB",
        "menu-text": "#1F2937",
        "menu-text-selected": "#1D4ED8",
        "icon-border": "#E5E7EB",
        "user-text": "#1E40AF",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
      } 
    },
  },
  plugins: [],
} satisfies Config;
