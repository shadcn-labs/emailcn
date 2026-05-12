/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DividerWithIconButtonProps {
  theme?: EmailThemeTokens;
  icon?: string;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithIconButtonSection = ({
  icon,
  label,
  href,
  theme,
  variant,
}: {
  icon: string;
  label: string;
  href: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithIconButtonProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
      <MjmlColumn>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingBottom={theme.spacingBase ?? "16px"}
        />
        <MjmlText
          align={alignText}
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {icon}
        </MjmlText>
        <MjmlButton
          align={alignText}
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground ?? "#ffffff"}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          href={href}
          innerPadding={`${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`}
        >
          {label}
        </MjmlButton>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingTop={theme.spacingBase ?? "16px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const DividerWithIconButton = ({
  theme = defaultTheme,
  icon = "\u279C",
  label = "Discover",
  href = "#",
  variant = "default",
}: DividerWithIconButtonProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-icon-btn</MjmlPreview>
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
        <DividerWithIconButtonSection
          icon={icon}
          label={label}
          href={href}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithIconButton.PreviewProps = {
  href: "https://example.com",
  icon: "\u279C",
  label: "Learn More",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconButtonProps;
