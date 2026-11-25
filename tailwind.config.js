/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "custom-pattern": "url('/p2.jpg')",
        Portfolio: "url('/Portfolio-bcg-2.png')",
      },
      backdropBlur: {
        md: "12px",
      },
    },
  },
  plugins: [],
};
