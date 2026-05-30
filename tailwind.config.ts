import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          brand: "#FF8100",
          light: "#FFA040",
          glow: "rgba(255,129,0,0.2)",
        },
        dark: {
          bg: "#121212",
          card: "#1E1E1E",
          border: "#2A2A2A",
          surface: "#242424",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,129,0,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255,129,0,0.6)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "orange-glow": "radial-gradient(ellipse at center, rgba(255,129,0,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
