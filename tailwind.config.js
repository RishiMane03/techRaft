/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'clip-from-top-animation': 'clip 1s ease-in-out 5.5s forwards',
      },
      keyframes:{
        clip:{
          '0%': { 'clip-path': 'ellipse(100% 100% at 50% 50%)' },
          '100%': { 'clip-path': 'ellipse(160% 150% at 50% 160%)' },
        }
      }
    },
  },
  plugins: [],
}

