import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        bedge: {
          blue: "#0076b7",
          deep: "#005f99",
          aqua: "#00b6d8",
          ink: "#18212f"
        }
      },
      boxShadow: {
        premium: "0 22px 60px rgba(0, 95, 153, 0.13)",
        "premium-lg": "0 25px 50px -12px rgba(0, 118, 183, 0.15)",
        "premium-xl": "0 35px 60px -15px rgba(0, 118, 183, 0.2)",
        glow: "0 0 40px rgba(0, 118, 183, 0.3)"
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        }
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #0076b7 0%, #00b6d8 50%, #0076b7 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(0, 118, 183, 0.1) 0%, rgba(0, 182, 216, 0.05) 50%, rgba(0, 118, 183, 0.1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
