import { Body, Head, Html, Preview } from "jsx-email";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  buttonsResponsiveStyles,
  ButtonsSection,
} from "@/registry/bases/jsx-email/ui/ui-elements/buttons/buttons-shared";
import type {
  ButtonsVariant,
  ButtonSize,
} from "@/registry/bases/jsx-email/ui/ui-elements/buttons/buttons-shared";

export interface ButtonsProps {
  align?: "center" | "left" | "right";
  href?: string;
  icon?: ReactNode;
  iconPosition?: "leading" | "trailing";
  label?: string;
  size?: ButtonSize | "all";
  theme?: EmailThemeTokens;
  variant?: ButtonsVariant;
}

export { ButtonsSection };
export type { ButtonsVariant, ButtonSize };

export const Buttons = ({
  theme: _theme = defaultTheme,
  ...props
}: ButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style>{buttonsResponsiveStyles}</style>
    </Head>
    <Preview>Buttons</Preview>
    <Body style={{ margin: 0 }}>
      <ButtonsSection {...props} />
    </Body>
  </Html>
);

Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  size: "all",
  theme: defaultTheme,
  variant: "primary",
} satisfies ButtonsProps;
