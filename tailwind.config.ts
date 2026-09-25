import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#3FDA40",
          50: "#f0fdf1",
          100: "#dcfcde",
          200: "#bbf7be",
          300: "#86ef8b",
          400: "#4ade52",
          500: "#3FDA40",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        teal: {
          DEFAULT: "#065A74",
          50: "#f0f9fb",
          100: "#d9eff5",
          200: "#b4dfec",
          300: "#7dc6db",
          400: "#3fa4c1",
          500: "#2488a8",
          600: "#1f6d8d",
          700: "#1e5872",
          800: "#065A74",
          900: "#1b3f52",
        },
        cyan: {
          DEFAULT: "#0ABCF0",
          50: "#f0fbff",
          100: "#e0f5fe",
          200: "#b9edfd",
          300: "#7be0fc",
          400: "#35d0f8",
          500: "#0ABCF0",
          600: "#0295c7",
          700: "#0477a2",
          800: "#096285",
          900: "#0d516e",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#C9A227",
          light: "#E8C84A",
        },
        // Supporting Colors
        "keren-orange": "#F97316",
        "keren-amber": "#F59E0B",
        "keren-green": "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        // Brand gradients
        "gradient-brand": "linear-gradient(135deg, #065A74 0%, #0ABCF0 50%, #3FDA40 100%)",
        "gradient-teal-cyan": "linear-gradient(135deg, #065A74, #0ABCF0)",
        "gradient-cyan-green": "linear-gradient(135deg, #0ABCF0, #3FDA40)",
        "gradient-dark": "linear-gradient(180deg, #0F172A 0%, #065A74 100%)",
        // Balinese pattern (CSS encoded SVG)
        "bali-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "brand": "0 4px 24px rgba(10, 188, 240, 0.2)",
        "brand-lg": "0 8px 40px rgba(10, 188, 240, 0.3)",
        "glow-green": "0 0 20px rgba(63, 218, 64, 0.4)",
        "glow-cyan": "0 0 20px rgba(10, 188, 240, 0.4)",
        "card": "0 2px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
