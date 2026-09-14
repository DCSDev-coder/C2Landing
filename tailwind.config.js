/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#faf6f0',
          medium: '#f5ebd9',
          dark: '#23150c',
          accent: '#e1b35b',
          brown: '#3b2314',
        }
      },
      fontFamily: {
        sans: ['Recoleta', 'serif'],
        serif: ['Recoleta', 'serif'],
      }
    },
  },
  plugins: [],
}
