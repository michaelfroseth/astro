/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-top": "url('/assets/dark-bg-clouds-lg.webp')",
        "shield-intro": "url('/assets/intro-smoke.webp')",
      },
      colors: {
        "amb-blue": "#030F1D",
        "amb-light": "#051222",
        "amb-gold": "#FEBE44",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
const { url } = require("inspector");
