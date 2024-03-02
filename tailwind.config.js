/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#2C5282",
        skillgreen: "#357960",
        redtext: "#ca0404",
        fg: "#007bff",
      },
    },
  },
  plugins: [],
};
