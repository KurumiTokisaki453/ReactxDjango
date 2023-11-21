/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{html,js}',
    // './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    // ...
  },
}

