/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mBlue': '#007bff',
        'bodyBg': '#fafafa'
      }
    },
  },
  plugins: [],
}

