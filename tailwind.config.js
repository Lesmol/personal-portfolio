/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a0a0a0",
        "darker-primary": "#616161",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundColor: {
        primary: "#292929",
        secondary: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
