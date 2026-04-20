import { defineEmailTheme } from "./define";
import type { EmailThemeTokens } from "./define";

const tokens = {
  borderRadius: "3px",
  borderRadiusLg: "6px",
  button: {
    primary: {
      backgroundColor: "#2eaadc",
      borderRadius: "3px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "20px",
      paddingY: "10px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #e9e9e7",
      borderRadius: "3px",
      color: "#37352f",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "20px",
      paddingY: "10px",
    },
  },
  colorBackground: "#ffffff",
  colorBackgroundMuted: "#f7f6f3",
  colorBackgroundSubtle: "#f3f4f6",
  colorBorder: "#e9e9e7",
  colorBorderSubtle: "#f3f4f6",
  colorDanger: "#ef4444",
  colorPrimary: "#2eaadc",
  colorPrimaryForeground: "#ffffff",
  colorPrimaryHover: "#2b9ac4",
  colorSuccess: "#10b981",
  colorText: "#37352f",
  colorTextMuted: "#6b6b6b",
  colorTextSubtle: "#9ca3af",
  colorWarning: "#f59e0b",
  containerWidth: "600px",
  fontFamily:
    'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontFamilyMono: '"Menlo", "Monaco", "Courier New", monospace',
  fontSizeBase: "16px",
  fontSizeHeading: "28px",
  fontSizeLg: "18px",
  fontSizeSm: "14px",
  fontSizeXl: "22px",
  fontWeightBold: "600",
  fontWeightMedium: "500",
  fontWeightNormal: "400",
  lineHeightBase: "1.7",
  spacingBase: "24px",
  spacingLg: "32px",
  spacingXl: "48px",
} satisfies EmailThemeTokens;

export const theme = defineEmailTheme(tokens);
export type EmailTheme = typeof theme;
export default theme;
