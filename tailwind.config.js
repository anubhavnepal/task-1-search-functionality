/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whisper': '#EEEEEE',
        'violet-1000': '#1E1248',
      }
    },
  },
  plugins: [],
}

