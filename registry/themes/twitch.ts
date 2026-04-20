import { defineEmailTheme } from "./define";
import type { EmailThemeTokens } from "./define";

const tokens = {
  borderRadius: "6px",
  borderRadiusLg: "12px",
  button: {
    primary: {
      backgroundColor: "#9147ff",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #9147ff",
      borderRadius: "6px",
      color: "#9147ff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
  },
  colorBackground: "#ffffff",
  colorBackgroundMuted: "#f5f0ff",
  colorBackgroundSubtle: "#f3f4f6",
  colorBorder: "#e5e7eb",
  colorBorderSubtle: "#f3f4f6",
  colorDanger: "#ef4444",
  colorPrimary: "#9147ff",
  colorPrimaryForeground: "#ffffff",
  colorPrimaryHover: "#772ce8",
  colorSuccess: "#10b981",
  colorText: "#111827",
  colorTextMuted: "#6b7280",
  colorTextSubtle: "#9ca3af",
  colorWarning: "#f59e0b",
  containerWidth: "600px",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMono: '"Menlo", "Monaco", "Courier New", monospace',
  fontSizeBase: "14px",
  fontSizeHeading: "28px",
  fontSizeLg: "16px",
  fontSizeSm: "12px",
  fontSizeXl: "20px",
  fontWeightBold: "600",
  fontWeightMedium: "500",
  fontWeightNormal: "400",
  lineHeightBase: "1.6",
  spacingBase: "24px",
  spacingLg: "32px",
  spacingXl: "48px",
} satisfies EmailThemeTokens;

export const theme = defineEmailTheme(tokens);
export type EmailTheme = typeof theme;
export default theme;
