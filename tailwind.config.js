/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        myself: "url(./assets/img/download.jpg)",
      },
      backgroundColor: {
        title: "#212b37",
      },
      textColor: {
        text: "#262626",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
