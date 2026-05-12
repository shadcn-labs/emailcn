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

export interface DividerWithIconProps {
  theme?: EmailThemeTokens;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithIconSection = ({
  icon,
  theme,
  variant,
}: {
  icon: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithIconProps["variant"]>;
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
        >
          {icon}
        </MjmlText>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingTop={theme.spacingBase ?? "16px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const DividerWithIcon = ({
  theme = defaultTheme,
  icon = "\u2728",
  variant = "default",
}: DividerWithIconProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-icon</MjmlPreview>
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
        <DividerWithIconSection icon={icon} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithIcon.PreviewProps = {
  icon: "\u2728",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconProps;
