import type { TailwindConfig } from "react-email";
import plugin from "tailwindcss/plugin";

const colors = {
  bg: "#ffffff",
  "bg-2": "#f5f0ff",
  brand: "#9147ff",
  fg: "#111827",
  "fg-2": "#6b7280",
  "fg-3": "#9ca3af",
  stroke: "#e5e7eb",
  "stroke-strong": "#f3f4f6",
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

export const TwitchTailwindConfig: TailwindConfig = {
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
        sans: [
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ],
      },
    },
  },
};

export const twitchTheme = TwitchTailwindConfig;
