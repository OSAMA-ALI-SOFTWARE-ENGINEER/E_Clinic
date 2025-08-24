/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        articleBg: "url('/article.jpg')",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "10px 10px 15px rgba(0,0,0,0.1), -5px -5px 15px #fff",
      },
    },
  },
  plugins: [require("daisyui")],
};
