import type { EmailTheme } from "./default";

export type { EmailTheme } from "./default";

export const theme: EmailTheme = {
  borderRadius: "6px",
  borderRadiusLg: "12px",
  button: {
    primary: {
      backgroundColor: "#611f69",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #ddd",
      borderRadius: "6px",
      color: "#611f69",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
  },
  colorBackground: "#ffffff",
  colorBackgroundMuted: "#f8f0f8",
  colorBackgroundSubtle: "#f3f4f6",
  colorBorder: "#ddd",
  colorBorderSubtle: "#f3f4f6",
  colorDanger: "#ef4444",
  colorPrimary: "#611f69",
  colorPrimaryForeground: "#ffffff",

  colorPrimaryHover: "#4d154c",
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
};

export default theme;
