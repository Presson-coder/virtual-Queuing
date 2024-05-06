/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      scale:{
        '200':'2',
      }
    },
  },
  plugins: [require("daisyui")],
}

