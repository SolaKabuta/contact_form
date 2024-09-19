/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'Green_200' : 'hsl(148, 38%, 91%)',
        'Green_600' : 'hsl(169, 82%, 27%)',
        'Red': 'hsl(0, 66%, 54%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey_500' : 'hsl(186, 15%, 59%)',
        'Grey_900' : 'hsl(187, 24%, 22%)',
      }
    },
  },
  plugins: [],
}

