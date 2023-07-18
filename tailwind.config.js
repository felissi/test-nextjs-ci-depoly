/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      zIndex: {
        60: "60",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#334155",
          secondary: "#64748b",
          accent: "#877CC6",
          neutral: "#3d4451",
          "base-100": "#F1F5F9",
          "base-content": "#334155",
        },
      },
      {
        dark: {
          primary: "#E2E8F0",
          secondary: "#CBD5E1",
          accent: "#877CC6",
          // neutral: "#3d4451",
          "base-100": "#0E0E10",
          "base-content": "#E2E8F0",
        },
      },
    ],
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    function ({ addVariant }) {
      addVariant("theme-light", [
        '[data-theme="light"] &',
        '[data-theme="light"]&',
      ]);
      addVariant("theme-dark", [
        '[data-theme="dark"] &',
        '[data-theme="dark"]&',
      ]);
      // addVariant("child-hover", "& > *:hover");
    },
  ],
};
