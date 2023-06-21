/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gmad: {
        biru: "#041938",
        oren: "#F97701",
        ijo: "#58B662",
        offwhite: "#F0F0F0",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
