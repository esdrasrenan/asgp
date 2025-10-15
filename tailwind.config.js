/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-bounce": "marquee-bounce var(--duration, 30s) ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-bounce": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(var(--half-offset, 0px))" },
          "75%": { transform: "translateX(calc(-1 * var(--half-offset, 0px)))" },
        },
      },
    },
  },
}
