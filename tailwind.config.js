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
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#F1F5F9",
        },
      },
      {
        dark: {
          "base-100": "#000000",
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
