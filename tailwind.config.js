/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a0a0a0",
        "darker-primary": "#616161",
        background: "#1E1E1E",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundColor: {
        primary: "#1E1E1E",
        "text-darker-primary": "#616161",
        secondary: "#181818",
        light: "#E9E9E9",
      },
    },
  },
  plugins: [],
};
