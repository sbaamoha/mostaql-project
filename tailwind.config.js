/** @type {import('tailwindcss').Config} */
// import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0249AC",
        gray: "#718096",
        lightGray: "#FAFAFA",
        teal: "#4BB6AE",
        success: "#22C55E",
        orange: "#FF784B",
        lightOrange: "#FFF7F5",
        // skyBlue: "#12BDB2",
        // pending: "#FFF7D0",
        // borderColor: "#c5d0e6",
      },
    },
  },
  plugins: [],
};
