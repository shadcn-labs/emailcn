import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  buttonsResponsiveStyles,
  ButtonsSection,
} from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons-shared";
import type {
  ButtonsVariant,
  ButtonSize,
} from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons-shared";

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

export const Buttons = ({ theme = defaultTheme, ...props }: ButtonsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Buttons</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{buttonsResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ButtonsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Buttons.PreviewProps = {
  align: "center",
  href: "https://example.com",
  size: "all",
  theme: defaultTheme,
  variant: "primary",
} satisfies ButtonsProps;
