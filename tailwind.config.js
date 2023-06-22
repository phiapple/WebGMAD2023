/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      belleza: ['Belleza'],
      montserrat: ['Montserrat'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },

    extend: {
      colors: {
        'c-green': '#58B662',
        'c-blue': '#041938',
        'c-orange': '#f97701',
        'c-white': '#fafafa',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
      fontSize: {
        h1: ['72px', '83px'],
        h2: ['64px', '73.73px'],
        h3: ['32px', '36.86px'],
        // h4: ["31.25px", "35px"],
        p1: ['40px', '48.76px'],
        'mobile-h1': ['32px', '35px'],
        'mobile-h2': ['28px', '31px'],
        'mobile-h3': ['24px', '26px'],
        // "mobile-h4": ["20px", "22px"],
        // "mobile-p1": ["16px", "24px"],
      },
      spacing: {
        30: '120px',
      },
      boxShadow: {
        basic: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        hero: `url('/images/Hero_Background.png')`,
        'hero-ornament': `url('/images/Hero_Ornament.svg')`,
        'socmed-ornament': `url('/images/Socmed_Ornament.svg')`,
        'ilust-grand-theme': `url('/images/grandtheme.png')`,
        'event-card-comvis': `url('/images/card/comvis.png')`,
        'event-card-atalk': `url('/images/card/atalk.png')`,
        'event-card-grand': `url('/images/card/grand.png')`,
      },
    },
  },
  plugins: [],
};
