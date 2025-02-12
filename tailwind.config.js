/** @type {import('tailwindcss').Config} */
export default {
    future: {
        hoverOnlyWhenSupported: true
    },
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "rgba(var(--secondary))",
                header: "rgba(var(--header))",
                body: "rgba(var(--body))"
            },
            fontFamily: {
                poppins: ["Poppins", "Helvetica", "sans-serif"]
            }
        }
    },
    plugins: []
};
