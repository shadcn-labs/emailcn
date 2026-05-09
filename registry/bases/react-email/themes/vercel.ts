import type { TailwindConfig } from "react-email";
import plugin from "tailwindcss/plugin";

const colors = {
  bg: "#000000",
  "bg-2": "#111111",
  brand: "#ffffff",
  fg: "#ffffff",
  "fg-2": "#a1a1a1",
  "fg-3": "#6b6b6b",
  stroke: "#333333",
  "stroke-strong": "#1a1a1a",
} as const;

const fontScale = {
  "11": {
    fontSize: "11px",
    fontWeight: "400",
    letterSpacing: "-0.033px",
    lineHeight: "1.5",
  },
  "13": {
    fontSize: "13px",
    fontWeight: "400",
    letterSpacing: "-0.039px",
    lineHeight: "1.5",
  },
  "14": { fontSize: "14px", lineHeight: "1.5" },
  "16": {
    fontSize: "16px",
    fontWeight: "400",
    letterSpacing: "-0.048px",
    lineHeight: "1.5",
  },
  "20": {
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "-0.1px",
    lineHeight: "1.2",
  },
  "24": {
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "-0.084px",
    lineHeight: "1",
  },
  "28": {
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "-0.084px",
    lineHeight: "1.3",
  },
} as const;

export const VercelTailwindConfig: TailwindConfig = {
  plugins: [
    plugin(({ addUtilities, addVariant }) => {
      addVariant("mobile", "@media (max-width: 600px)");
      const utilities: Record<string, Record<string, string>> = {};
      for (const [step, token] of Object.entries(fontScale)) {
        utilities[`.font-${step}`] = token;
      }
      addUtilities(utilities);
    }),
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        mono: ['"Menlo", "Monaco", "Courier New", monospace'],
        sans: ['"Geist", "Inter", -apple-system, sans-serif'],
      },
    },
  },
};

export const vercelTheme = VercelTailwindConfig;
