import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bone: "#FBFBF9",
        cream: "#FFFFFF",
        ink: "#12181A",
        graphite: "#3D454A",
        mist: "#98A0A2",
        sage: "#8AA290",
        blush: "#D9B6B0",
        clay: "#C9B8A2",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-strong": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      animation: {
        "drift-slow": "drift 24s ease-in-out infinite alternate",
        "drift-med": "drift 18s ease-in-out infinite alternate",
        "drift-fast": "drift 14s ease-in-out infinite alternate",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
