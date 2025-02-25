/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      bg:"#5E94D433",
      
    },
    backgroundImage: {
      gradient: 'linear-gradient(to right, #0D1C9B, #5E94D4, #553190)',
      'gradient-border': 'conic-gradient(from 90deg, #0D1C9B, #5E94D4, #553190)', 
     
    },},
  },
  plugins: [],
}