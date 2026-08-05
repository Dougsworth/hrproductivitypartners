/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#144355",
          50: "#f0f6f8",
          100: "#d6e6ea",
          600: "#144355",
          700: "#0f3543",
          800: "#0c2f3d",
          900: "#091f29",
        },
        accent: {
          DEFAULT: "#1b6b86",
          soft: "#cae0e8",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Schibsted Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-sm": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        "float-sm": "float-sm 4s ease-in-out infinite",
        // slowed from 28s so each service is readable as it passes (audit: reduce cognitive load)
        marquee: "marquee 45s linear infinite",
      },
    },
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
  },
  plugins: [],
};
