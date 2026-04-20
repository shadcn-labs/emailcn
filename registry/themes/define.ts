import { pixelBasedPreset } from "react-email";
import type { TailwindConfig } from "react-email";

export interface EmailThemeTokens {
  borderRadius: string;
  borderRadiusLg: string;
  button: {
    primary: {
      backgroundColor: string;
      borderRadius: string;
      color: string;
      fontSize: string;
      fontWeight: string;
      paddingX: string;
      paddingY: string;
    };
    secondary: {
      backgroundColor: string;
      border: string;
      borderRadius: string;
      color: string;
      fontSize: string;
      fontWeight: string;
      paddingX: string;
      paddingY: string;
    };
  };
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
  colorSuccess: string;
  colorWarning: string;
  containerWidth: string;
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
  spacingBase: string;
  spacingLg: string;
  spacingXl: string;
}

export const defineEmailTheme = (t: EmailThemeTokens): TailwindConfig => ({
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      borderRadius: {
        lg: t.borderRadiusLg,
        md: t.borderRadius,
      },
      colors: {
        background: {
          DEFAULT: t.colorBackground,
          muted: t.colorBackgroundMuted,
          subtle: t.colorBackgroundSubtle,
        },
        border: {
          DEFAULT: t.colorBorder,
          subtle: t.colorBorderSubtle,
        },
        danger: t.colorDanger,
        foreground: {
          DEFAULT: t.colorText,
          muted: t.colorTextMuted,
          subtle: t.colorTextSubtle,
        },
        primary: {
          DEFAULT: t.colorPrimary,
          fg: t.colorPrimaryForeground,
          hover: t.colorPrimaryHover,
        },
        success: t.colorSuccess,
        warning: t.colorWarning,
      },
      fontFamily: {
        mono: [t.fontFamilyMono],
        sans: [t.fontFamily],
      },
      fontSize: {
        base: t.fontSizeBase,
        heading: t.fontSizeHeading,
        lg: t.fontSizeLg,
        sm: t.fontSizeSm,
        xl: t.fontSizeXl,
        xs: t.fontSizeSm,
      },
      fontWeight: {
        bold: t.fontWeightBold,
        medium: t.fontWeightMedium,
        normal: t.fontWeightNormal,
      },
      lineHeight: {
        snug: t.lineHeightBase,
      },
      maxWidth: {
        container: t.containerWidth,
      },
      spacing: {
        "2xl": "48px",
        lg: t.spacingLg,
        md: t.spacingBase,
        sm: "12px",
        xl: t.spacingXl,
        xs: "8px",
      },
    },
  },
});

export type EmailTheme = ReturnType<typeof defineEmailTheme>;
