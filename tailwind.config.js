/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc", // Ajoutez votre couleur beige ici
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f5f5dc",
          secondary: "#f5deb3",
          accent: "#d2b48c",
          neutral: "#f5f5dc",
          "base-100": "#f5f5dc",
        },
      },
      "light",
    ],
  },
};
