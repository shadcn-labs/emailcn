import type { TailwindConfig } from "react-email";
import plugin from "tailwindcss/plugin";

const colors = {
  bg: "#1c1c1e",
  "bg-2": "#2c2c2e",
  brand: "#ff6363",
  fg: "#ffffff",
  "fg-2": "#98989d",
  "fg-3": "#6b6b6b",
  stroke: "#3a3a3c",
  "stroke-strong": "#2c2c2e",
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

export const RaycastTailwindConfig: TailwindConfig = {
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
        mono: ['"SF Mono", Menlo, Monaco, monospace'],
        sans: [
          '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        ],
      },
    },
  },
};

export const raycastTheme = RaycastTailwindConfig;
