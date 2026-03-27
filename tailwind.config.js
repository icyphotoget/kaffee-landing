/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f3',
          100: '#f9efe4',
          200: '#f0d9c4',
          300: '#e4bc9a',
          400: '#d4956d',
          500: '#c6754a',
          600: '#b15c39',
          700: '#934832',
          800: '#783c2e',
          900: '#633429',
          950: '#3a1a13',
        },
      },
    },
  },
  plugins: [],
}
