/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scaleup: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        }
      },
      animation: {
        move: "move 10s linear infinite",
        scaleup: "scaleup 1s ease-in-out",
      },
      colors: {
        main: "#5438f3",
        hover: "#0b48ea",
      },
      dropShadow: {
        shadow: ["0 0 5px #fff", "0 0 10px #5438f3", "0 0 15px #5438f3"],
        "shadow-lg": ["0 0 2px #9da6ff", "0 0 4px #7877ff"],
      },
    },
  },
  plugins: [],
};
