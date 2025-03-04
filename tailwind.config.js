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
        primary: "#2D3436",
        secondary: "#0984E3",
        accent: "#00B894",
        background: "#F5F6FA",
      },
      animation: {
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
      },
      keyframes: {
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(1.1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
