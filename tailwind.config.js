/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AE0F0B",
        secondary: "#F39100",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        siliguri: ["Hind-Siliguri", "sans"],
      },
    },
  },
  plugins: [],
};
