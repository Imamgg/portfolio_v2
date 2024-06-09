/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": {
          50: "#edefff",
          100: "#dde3ff",
          200: "#c2c9ff",
          300: "#9da6ff",
          400: "#7877ff",
          500: "#6256fe",
          600: "#5438f3",
          700: "#482bd7",
          800: "#3b26ad",
          900: "#332788",
          950: "#1f174f",
        },
      },
      dropShadow: {
        shadow: ["0 0 5px #fff", "0 0 10px #5438f3", "0 0 15px #5438f3"]
      },
    },
  },
  plugins: [],
};
