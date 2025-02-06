/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#2ECC71',
        'eco-blue': '#3498DB',
      },
    },
  },
  plugins: [],
}