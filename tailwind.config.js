/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clashDisplay': ['Clash Display', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}