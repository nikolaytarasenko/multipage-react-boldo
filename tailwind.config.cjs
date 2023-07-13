/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#0A2640",
        green: "#65E4A3",
        gray: "#777777",
        lightGray: "#F1F1F1",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      backgroundImage: {
        'connect-list-item': "url('/src/assets/check.svg')",
      }
    },
    screens: {
      'xs': "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

