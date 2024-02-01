/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a0a0a0",
        "darker-primary": "#616161",
        background: "#292929",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundColor: {
        primary: "#292929",
        "text-darker-primary": "#616161",
        secondary: "#1e1e1e",
        light: "#E9E9E9",
      },
    },
  },
  plugins: [],
};
