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
        myself:
          "url(https://www.cnet.com/a/img/resize/61c44c6765cb6b8529df884935ad7aefc622aeec/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=675&width=1200)",
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
