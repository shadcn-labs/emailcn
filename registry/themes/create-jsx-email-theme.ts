import type { TailwindProps } from "jsx-email";

import type { EmailThemeTokens } from "@/components/email/email-theme-types";

type JsxEmailTailwindConfig = NonNullable<TailwindProps["config"]>;

export const createJsxEmailTheme = (
  theme: EmailThemeTokens
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
