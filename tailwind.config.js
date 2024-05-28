/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.iranda.ca/wp-content/uploads/2020/12/taking-inventory-in-flower-shop-FGD7YZU.jpg')",
      },
      fontFamily: {
        "header" : ["inter", "sans-serif"],
        "textFont" : ["poppins", "sans-serif"],
        "normalText" : ["Heebo", "sans-serif"],
        "funky" : ["Cormorant Garamond", "sans-serif"]
      }
    },
  },
  plugins: [],
}

