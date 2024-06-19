/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '100rem',
      },
      flex: {
        embla: '0 0 50%',
      },
    },
  },
  plugins: [],
};
