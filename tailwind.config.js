/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Mono'],
      },
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
