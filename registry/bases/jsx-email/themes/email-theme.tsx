import { Tailwind } from "jsx-email";
import type { TailwindProps } from "jsx-email";
import type { ReactNode } from "react";

export interface EmailTheme {
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
  colorBorder: string;
  colorBorderSubtle: string;
  colorDanger: string;
  colorPrimary: string;
  colorPrimaryForeground: string;
  colorPrimaryHover: string;
  colorSuccess: string;
  colorText: string;
  colorTextMuted: string;
  colorTextSubtle: string;
  colorWarning: string;
  containerWidth: string;
  fontFamily: string;
  fontFamilyMono: string;
  fontSizeBase: string;
  fontSizeHeading: string;
  fontSizeLg: string;
  fontSizeSm: string;
  fontSizeXl: string;
  fontWeightBold: string;
  fontWeightMedium: string;
  fontWeightNormal: string;
  lineHeightBase: string;
  spacingBase: string;
  spacingLg: string;
  spacingXl: string;
}

type JsxEmailTailwindConfig = NonNullable<TailwindProps["config"]>;

const createEmailTailwindConfig = (
  theme: EmailTheme
): JsxEmailTailwindConfig => ({
  theme: {
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
      mono: theme.fontFamilyMono,
      sans: theme.fontFamily,
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
});

interface EmailTailwindProps {
  children: ReactNode;
  theme: EmailTheme;
}

export const EmailTailwind = ({ children, theme }: EmailTailwindProps) => (
  <Tailwind config={createEmailTailwindConfig(theme)}>{children}</Tailwind>
);
