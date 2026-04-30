import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "accent-strong": "var(--accent-strong)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      boxShadow: {
        glow: "0 0 40px var(--glow)",
        card: "var(--shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
