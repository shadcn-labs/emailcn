export interface EmailTheme {
  fontFamily: string;
  fontFamilyMono: string;
  fontSizeBase: string;
  fontSizeSm: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSizeHeading: string;
  lineHeightBase: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightBold: string;

  colorBackground: string;
  colorBackgroundMuted: string;
  colorBackgroundSubtle: string;

  colorText: string;
  colorTextMuted: string;
  colorTextSubtle: string;

  colorPrimary: string;
  colorPrimaryForeground: string;
  colorPrimaryHover: string;

  colorBorder: string;
  colorBorderSubtle: string;

  colorDanger: string;
  colorWarning: string;
  colorSuccess: string;

  spacingBase: string;
  spacingLg: string;
  spacingXl: string;

  borderRadius: string;
  borderRadiusLg: string;

  containerWidth: string;

  button: {
    primary: {
      backgroundColor: string;
      color: string;
      borderRadius: string;
      paddingY: string;
      paddingX: string;
      fontWeight: string;
      fontSize: string;
    };
    secondary: {
      backgroundColor: string;
      color: string;
      border: string;
      borderRadius: string;
      paddingY: string;
      paddingX: string;
      fontWeight: string;
      fontSize: string;
    };
  };
}

export const theme: EmailTheme = {
  borderRadius: "6px",
  borderRadiusLg: "12px",
  button: {
    primary: {
      backgroundColor: "#111827",
      borderRadius: "6px",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      color: "#111827",
      fontSize: "14px",
      fontWeight: "500",
      paddingX: "24px",
      paddingY: "12px",
    },
  },
  colorBackground: "#ffffff",
  colorBackgroundMuted: "#f9fafb",
  colorBackgroundSubtle: "#f3f4f6",
  colorBorder: "#e5e7eb",
  colorBorderSubtle: "#f3f4f6",
  colorDanger: "#ef4444",
  colorPrimary: "#111827",
  colorPrimaryForeground: "#ffffff",

  colorPrimaryHover: "#374151",
  colorSuccess: "#10b981",
  colorText: "#111827",

  colorTextMuted: "#6b7280",
  colorTextSubtle: "#9ca3af",
  colorWarning: "#f59e0b",

  containerWidth: "600px",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
