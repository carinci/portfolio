/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
    screens: {
      sm: '640px',
    },
  },
  plugins: [],
}
