/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        primary: "#e7e7e7e0",
      },
      colors: {
        secondary: "#003566",
      },
    },
  },
  plugins: [],
};
