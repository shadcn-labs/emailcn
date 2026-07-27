import { pixelBasedPreset } from "react-email";
import type { TailwindConfig } from "react-email";
import plugin from "tailwindcss/plugin";

import type { EmailThemeTokens } from "@/components/email/email-theme-types";

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

const emailUtilitiesPlugin = plugin(({ addUtilities, addVariant }) => {
  addVariant("mobile", "@media (max-width: 600px)");

  const utilities: Record<string, Record<string, string>> = {};
  for (const [step, token] of Object.entries(fontScale)) {
    utilities[`.font-${step}`] = token;
  }
  addUtilities(utilities);
});

export const createReactEmailTheme = (
  theme: EmailThemeTokens
): TailwindConfig => ({
  plugins: [emailUtilitiesPlugin],
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: theme.borderRadius,
        lg: theme.borderRadiusLg,
      },
      colors: {
        bg: theme.colorBackground,
        "bg-2": theme.colorBackgroundMuted,
        "bg-3": theme.colorBackgroundSubtle,
        brand: theme.colorPrimary,
        "brand-fg": theme.colorPrimaryForeground,
        "brand-hover": theme.colorPrimaryHover,
        danger: theme.colorDanger,
        fg: theme.colorText,
        "fg-2": theme.colorTextMuted,
        "fg-3": theme.colorTextSubtle,
        stroke: theme.colorBorder,
        "stroke-strong": theme.colorBorderSubtle,
        success: theme.colorSuccess,
        warning: theme.colorWarning,
      },
      fontFamily: {
        mono: [theme.fontFamilyMono],
        sans: [theme.fontFamily],
      },
      fontSize: {
        base: theme.fontSizeBase,
        heading: theme.fontSizeHeading,
        lg: theme.fontSizeLg,
        sm: theme.fontSizeSm,
        xl: theme.fontSizeXl,
      },
      fontWeight: {
        bold: theme.fontWeightBold,
        medium: theme.fontWeightMedium,
        normal: theme.fontWeightNormal,
      },
      lineHeight: {
        base: theme.lineHeightBase,
      },
      maxWidth: {
        email: theme.containerWidth,
      },
      spacing: {
        base: theme.spacingBase,
        lg: theme.spacingLg,
        xl: theme.spacingXl,
      },
    },
  },
});
