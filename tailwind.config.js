/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heartBeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
        },
      },
      animation: { heartBeat: "heartBeat 0.5s ease-in-out" },
      blur: {
        8: "8px",
      },
    },
  },
  plugins: [],
};
