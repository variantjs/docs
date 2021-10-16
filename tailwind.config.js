module.exports = {
  // mode: "jit",
  purge: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        test: ['Montserrat', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
