/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'linkedin': {
          DEFAULT: '#0077B5',
          light: '#0091CA',
          dark: '#005E93',
        },
      },
    },
  },
  plugins: [],
};