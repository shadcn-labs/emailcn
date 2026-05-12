/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
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

export interface DividerWithSocialIconsProps {
  theme?: EmailThemeTokens;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithSocialIconsSection = ({
  theme,
  variant,
}: {
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithSocialIconsProps["variant"]>;
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
          fontSize={theme.fontSizeBase ?? "14px"}
        >{`\u24D0 \u24B6 \u24C8 \u24CE`}</MjmlText>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingTop={theme.spacingBase ?? "16px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const DividerWithSocialIcons = ({
  theme = defaultTheme,
  variant = "default",
}: DividerWithSocialIconsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-social</MjmlPreview>
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
        <DividerWithSocialIconsSection theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithSocialIconsProps;
