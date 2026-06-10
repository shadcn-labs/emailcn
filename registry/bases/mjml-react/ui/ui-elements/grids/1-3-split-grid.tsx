/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface OneThreeSplitGridProps {
  theme?: EmailThemeTokens;
  leftContent?: string;
  rightContent?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const OneThreeSplitGridSection = ({
  leftContent,
  rightContent,
  theme,
  variant,
}: {
  leftContent: string;
  rightContent: string;
  theme: EmailThemeTokens;
  variant: NonNullable<OneThreeSplitGridProps["variant"]>;
}) => {
  const alignL = variant === "slanted-left" ? "left" : "center";
  const alignR = variant === "slanted-right" ? "right" : "center";
  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn width="25%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignL}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {leftContent}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="75%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignR}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {rightContent}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const OneThreeSplitGrid = ({
  theme = defaultTheme,
  leftContent = "Sidebar",
  rightContent = "Main",
  variant = "default",
}: OneThreeSplitGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>1-3-split</MjmlPreview>
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
        <OneThreeSplitGridSection
          leftContent={leftContent}
          rightContent={rightContent}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OneThreeSplitGrid.PreviewProps = {
  leftContent: "Sidebar",
  rightContent: "Main content area",
  theme: defaultTheme,
  variant: "default",
} satisfies OneThreeSplitGridProps;
