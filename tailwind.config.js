/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        default: "6px",
      },
      backdropBlur: {
        xs: '1px',
      },
      fontFamily: {
        'comforta': ['Comfortaa']
      }
    },
  },
  plugins: [],
}
