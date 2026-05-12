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

export interface DividerWithTitleProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithTitleSection = ({
  title,
  theme,
  variant,
}: {
  title: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithTitleProps["variant"]>;
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
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
        >
          {title}
        </MjmlText>
        <MjmlDivider
          borderColor={theme.colorBorder}
          paddingTop={theme.spacingBase ?? "16px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const DividerWithTitle = ({
  theme = defaultTheme,
  title = "Section",
  variant = "default",
}: DividerWithTitleProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider-title</MjmlPreview>
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
        <DividerWithTitleSection
          title={title}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

DividerWithTitle.PreviewProps = {
  theme: defaultTheme,
  title: "Featured Products",
  variant: "default",
} satisfies DividerWithTitleProps;
