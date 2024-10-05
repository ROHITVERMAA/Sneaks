/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightYellow: "#FFF9EB",
                darkYellow: "#FFAE5A",
                lightGray: "#F6F0E2",
            },
            borderRadius: {
                radius: "10px",
            },
        },
    },
    plugins: [],
};
