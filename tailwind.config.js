/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./reactbits/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        neon: '#818cf8', // Indigo 400
        brand: '#c084fc', // Purple 400
        dark: '#0f0f0f',
      },
    },
  },
  plugins: [],
}
