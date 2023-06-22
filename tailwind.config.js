/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      belleza: ["Belleza"],
      montserrat: ["Montserrat"],
    },

    extend: {
      colors: {
        "c-green": "#58B662",
        "c-blue": "#041938",
        "c-orange": "#f97701",
        "c-white": "#F0F0F0",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "7.5rem",
        },
      },
      fontSize: {
        h1: ["72px", "83px"],
        h2: ["64px", "73.73px"],
        h3: ["32px", "36.86px"],
        // h4: ["31.25px", "35px"],
        p1: ["40px", "48.76px"],
        "mobile-h1": ["32px", "35px"],
        "mobile-h2": ["28px", "31px"],
        "mobile-h3": ["24px", "26px"],
        // "mobile-h4": ["20px", "22px"],
        // "mobile-p1": ["16px", "24px"],
      },
      spacing: {
        30: "120px",
      },
      boxShadow: {
        basic: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        hero: `url('/images/Hero_Background.png')`,
        "hero-ornament": `url('/images/Hero_Ornament.svg')`,
        "socmed-ornament": `url('/images/Socmed_Ornament.svg')`,
        "ilust-grand-theme": `url('/images/grandtheme.png')`,
      },
    },
  },
  plugins: [],
};
