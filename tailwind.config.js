/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "heading": "'Victor Mono', monospace",
        "body": "'Gantari', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

