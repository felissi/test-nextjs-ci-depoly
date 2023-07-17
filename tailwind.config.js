/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // data: {
      //   light: 'theme="light"',
      //   dark: 'theme="dark"',
      // },
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
    require("daisyui"),
    function ({ addVariant }) {
      addVariant("theme-light", [
        '[data-theme="light"] &',
        '[data-theme="light"]&',
        "@media (prefers-color-scheme: light)",
      ]);
      addVariant("theme-dark", [
        '[data-theme="dark"] &',
        '[data-theme="dark"]&',
        "@media (prefers-color-scheme: dark)",
      ]);
      // addVariant("child-hover", "& > *:hover");
    },
  ],
};
