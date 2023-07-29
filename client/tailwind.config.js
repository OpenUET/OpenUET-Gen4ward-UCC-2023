/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          black: {
          100 : "#1f1f1f",
          50: "#2a2a2a"
        }
      }
    },
  },
  plugins: [],
}

