/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        beVietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        mainOrange: 'rgba(255, 149, 0, 1)',
        lightOrange: 'rgba(255, 244, 229, 1)',
        lightGray: 'rgba(241, 241, 243, 1)',
      }
    },
  },
  plugins: [],
}

