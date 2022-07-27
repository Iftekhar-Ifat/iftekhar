/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        colors: {
            white: "#ffffff",
            black: "#111111",
            gray: "#959595",
            backgroundGray: "#2E2E2E",
            teal: "#249AA1",
            blue: "#2B66BE",
            linearGradient:
                "linear-gradient(90deg, #249AA1 0%, #2B66BE 98.92%)",
        },
        extend: {
            scale: {
                175: "1.75",
            },
        },
    },
};
