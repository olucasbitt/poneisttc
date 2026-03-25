import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Cinzel", "serif"],
		display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(42, 30, 21, 0.08)",
        premium: "0 18px 60px rgba(42, 30, 21, 0.12)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(95deg, rgba(32,22,15,0.92) 0%, rgba(32,22,15,0.74) 45%, rgba(32,22,15,0.28) 100%)",
        "gold-line":
          "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.88) 50%, rgba(212,175,55,0) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;