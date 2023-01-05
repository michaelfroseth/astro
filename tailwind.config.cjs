/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-top": "url('/assets/dark-bg.jpg')",
        "shield-intro": "url('/assets/intro-smoke.png')",
      },
      colors: {
        "amb-blue": "#030F1D",
      },
    },
  },
  plugins: [],
};
const { url } = require("inspector");
