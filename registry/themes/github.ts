import type { EmailTheme } from "./default";

export type { EmailTheme } from "./default";

export const theme: EmailTheme = {
  borderRadius: "6px",
  borderRadiusLg: "12px",
  button: {
    primary: {
      backgroundColor: "#2ea44f",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #444d56",
      borderRadius: "6px",
      color: "#e1e4e8",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
  },
  colorBackground: "#24292e",
  colorBackgroundMuted: "#1f2428",
  colorBackgroundSubtle: "#2b3038",
  colorBorder: "#444d56",
  colorBorderSubtle: "#2b3038",
  colorDanger: "#f85149",
  colorPrimary: "#2ea44f",
  colorPrimaryForeground: "#ffffff",

  colorPrimaryHover: "#2c974b",
  colorSuccess: "#2ea44f",
  colorText: "#e1e4e8",

  colorTextMuted: "#959da5",
  colorTextSubtle: "#6b7280",
  colorWarning: "#d29922",

  containerWidth: "600px",
  fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
  fontFamilyMono:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',

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
