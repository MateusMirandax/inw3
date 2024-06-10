/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgHeader': `#000000`,
        'colorTxt': `#ffffff`,
        'colorTitle': `#ffffff` 
      }
    },
  },
  plugins: [],
}