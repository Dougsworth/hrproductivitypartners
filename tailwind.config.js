/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  future: {
    // On a touch screen there is no pointer to leave, so a tapped element
    // keeps its :hover state until you tap elsewhere — every card the
    // visitor touches stays lifted and shadowed behind them. This compiles
    // every hover: utility behind @media (hover: hover) so phones get the
    // active: states below instead, and desktop is unchanged.
    hoverOnlyWhenSupported: true,
  },
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
        // --- Official HRPPI tokens (from the asset pack's tokens.css) ---
        sand: {
          DEFAULT: "#f8f5ef", // --hrppi-cream
          50: "#fdfcf9",
          100: "#f8f5ef",
          200: "#f0ebe1",
          300: "#e3dccd",
        },
        deep: {
          DEFAULT: "#063e4a", // --hrppi-deep
          700: "#063e4a",
          800: "#05323c",
          900: "#04262e",
          teal: "#075d76", // --hrppi-teal
        },
        ink: {
          DEFAULT: "#102f38", // --hrppi-ink — body copy
        },
        ember: {
          // --hrppi-orange. 2.78:1 on cream and 3.03:1 under white text, so
          // it is a FILL and RULE colour only — never a text colour, and
          // never with a white label on top.
          DEFAULT: "#f36b21",
          600: "#f36b21",
          700: "#d65a16",
          100: "#fcede5",
          // Orange TEXT on a light ground: 4.94:1 on cream. Clears AA.
          ink: "#b34a10",
        },
        tint: {
          blue: "#e7f3f8",
          peach: "#fcede5",
          mint: "#e7f3ec",
          lilac: "#eeeaf8",
          cream: "#faf4dd",
          sky: "#e7f3f8",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Schibsted Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Caveat"', '"Bradley Hand"', "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      // A 1.25 modular scale, fluid between mobile and desktop. The old jump
      // from a 67px headline straight to 18px body left nothing in between.
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.28em" }],
        "fluid-sm": ["clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)", { lineHeight: "1.6" }],
        "fluid-base": ["clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)", { lineHeight: "1.65" }],
        "fluid-lead": ["clamp(1.0625rem, 0.99rem + 0.35vw, 1.1875rem)", { lineHeight: "1.6" }],
        "fluid-card": ["clamp(1.0625rem, 1.02rem + 0.22vw, 1.125rem)", { lineHeight: "1.3" }],
        "fluid-h3": ["clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)", { lineHeight: "1.25" }],
        "fluid-h2": ["clamp(1.875rem, 1.5rem + 1.6vw, 2.75rem)", { lineHeight: "1.12" }],
        "fluid-h1": ["clamp(2.5rem, 1.75rem + 3.2vw, 4rem)", { lineHeight: "1.05" }],
      },
      maxWidth: {
        // ~65 characters at fluid-base — the readable measure.
        prose: "34rem",
        shell: "82.5rem",
      },
      spacing: {
        // Consistent vertical rhythm between full-width sections.
        section: "clamp(4rem, 2.5rem + 6vw, 7rem)",
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
