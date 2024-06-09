/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "icons-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: ".07",
          },
        },
        "icons-out": {
          "0%": {
            opacity: ".07",
          },
          "100%": {
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "from-left": {
          "0%": {
            transform: "translateX(-20%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "from-top": {
          "0%": {
            transform: "translateY(-20%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "from-right": {
          "0%": {
            transform: "translateX(20%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "from-bottom": {
          "0%": {
            transform: "translateY(20%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        heartbeat: {
          "10%": {
            transform: "scale(1)",
          },
          "30%": {
            transform: "scale(1.15)",
          },
          "40%": {
            transform: "scale(1.1)",
          },
          "60%": {
            transform: "scale(1.30)",
          },
          "90%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        t: `from-top 1.2s,
        fade-in 1.7s ease-in-out`,
        r: `from-right 1.2s,
        fade-in 1.7s ease-in-out`,
        b: `from-bottom 1.2s,
        fade-in 1.7s ease-in-out`,
        l: `from-left 1.2s,
        fade-in 1.7s ease-in-out`,
        appear: `fade-in 1.7s`,
        disappear: `fade-out 1.7s`,
        "icons-appear": `icons-in 1.7s`,
        "icons-disappear": `icons-out 1.7s`,
        heartbeat: `heartbeat 1s 0.1s infinite ease-in-out`,
      },
    },
  },
  plugins: [],
};
