/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        shine: ["0px 0px 10px #ffffff7a", "0px 0px 5px #ffffffac"],
        shiner: ["0px 0px 10px #ffffff", "0px 0px 5px #ffffff"],
      },
      // 'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
