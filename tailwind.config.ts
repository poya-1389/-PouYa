import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#08090B",
        graphite: "#121317",
        steel: "#1C1E23",
        ash: "#9CA0A6",
        silver: "#D9DBDF",
        gold: {
          DEFAULT: "#C9A15A",
          soft: "#E4C888",
          dim: "#8A7140"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-fa)", "serif"],
        body: ["var(--font-body)", "var(--font-fa)", "sans-serif"],
        mono: ["var(--font-mono)", "var(--font-fa)", "monospace"]
      },
      backgroundImage: {
        "aurora-gold":
          "radial-gradient(60% 60% at 20% 20%, rgba(201,161,90,0.16) 0%, rgba(201,161,90,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(120,120,140,0.14) 0%, rgba(120,120,140,0) 60%), radial-gradient(60% 60% at 50% 90%, rgba(201,161,90,0.10) 0%, rgba(201,161,90,0) 60%)"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
        "glow-gold": "0 0 40px rgba(201,161,90,0.25)"
      },
      borderRadius: {
        glass: "1.5rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
