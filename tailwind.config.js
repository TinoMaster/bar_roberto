/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D6B57D",
        secondary: "#F39100",
        darkMode: "#171717",
        lightMode: "#F1F5F9",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        siliguri: ["Hind-Siliguri", "sans"],
      },
      maxHeight: {
        "1080p": "1080px",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1400px",
        "Web-view": "1800px",
      },
      fontSize: {
        s: "9px",
      },
    },
  },
  plugins: [],
};
