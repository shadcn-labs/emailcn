import type { TailwindConfig } from "react-email";
import plugin from "tailwindcss/plugin";

const colors = {
  bg: "#24292e",
  "bg-2": "#1f2428",
  brand: "#2ea44f",
  fg: "#e1e4e8",
  "fg-2": "#959da5",
  "fg-3": "#6b7280",
  stroke: "#444d56",
  "stroke-strong": "#2b3038",
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

export const GithubTailwindConfig: TailwindConfig = {
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
        mono: [
          '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
        ],
        sans: [
          '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
        ],
      },
    },
  },
};

export const githubTheme = GithubTailwindConfig;
