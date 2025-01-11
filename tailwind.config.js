/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-pattern": "url('/p2.jpg')",
                "Portfolio" : "url('/Portfolio-bcg-2.png')"
            },

            backdropBlur: {
                md: "4px",
            },
        },
    },

    plugins: [],
};
