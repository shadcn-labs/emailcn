import type { EmailTheme } from "./default";

export type { EmailTheme } from "./default";

export const theme: EmailTheme = {
  borderRadius: "6px",
  borderRadiusLg: "12px",
  button: {
    primary: {
      backgroundColor: "#ff6363",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #3a3a3c",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
  },
  colorBackground: "#1c1c1e",
  colorBackgroundMuted: "#2c2c2e",
  colorBackgroundSubtle: "#3a3a3c",
  colorBorder: "#3a3a3c",
  colorBorderSubtle: "#2c2c2e",
  colorDanger: "#ff453a",
  colorPrimary: "#ff6363",
  colorPrimaryForeground: "#ffffff",

  colorPrimaryHover: "#ff8181",
  colorSuccess: "#30d158",
  colorText: "#ffffff",

  colorTextMuted: "#98989d",
  colorTextSubtle: "#6b6b6b",
  colorWarning: "#ffd60a",

  containerWidth: "600px",
  fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMono: '"SF Mono", Menlo, Monaco, monospace',

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
