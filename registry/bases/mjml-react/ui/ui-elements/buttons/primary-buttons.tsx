/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface PrimaryButtonsProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const PrimaryButtonsSection = ({
  label,
  href,
  theme,
  variant,
}: {
  label: string;
  href: string;
  theme: EmailThemeTokens;
  variant: NonNullable<PrimaryButtonsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
      <MjmlColumn>
        <MjmlButton
          align={alignText}
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground ?? "#ffffff"}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          href={href}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {label}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const PrimaryButtons = ({
  theme = defaultTheme,
  label = "Click Here",
  href = "#",
  variant = "default",
}: PrimaryButtonsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>primary-btn</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <PrimaryButtonsSection
          label={label}
          href={href}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

PrimaryButtons.PreviewProps = {
  href: "https://example.com",
  label: "Get Started",
  theme: defaultTheme,
  variant: "default",
} satisfies PrimaryButtonsProps;
