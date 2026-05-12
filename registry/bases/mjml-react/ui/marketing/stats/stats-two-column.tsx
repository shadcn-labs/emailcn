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

export type StatsTwoColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsTwoColumnProps {
  theme?: EmailThemeTokens;
  leftValue?: string;
  leftLabel?: string;
  rightValue?: string;
  rightLabel?: string;
  variant?: StatsTwoColumnVariant;
}

const StatsTwoColumnSection = ({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  theme,
  variant,
}: {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
  theme: EmailThemeTokens;
  variant: StatsTwoColumnVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn
      width="50%"
      padding={theme.spacingBase ?? "24px"}
      verticalAlign="top"
    >
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize="28px"
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "4px"}
      >
        {leftValue}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        {leftLabel}
      </MjmlText>
    </MjmlColumn>
    <MjmlColumn
      width="50%"
      padding={theme.spacingBase ?? "24px"}
      verticalAlign="top"
    >
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize="28px"
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "4px"}
      >
        {rightValue}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        {rightLabel}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const StatsTwoColumn = ({
  theme = defaultTheme,
  leftValue = "10K+",
  leftLabel = "Users",
  rightValue = "50K+",
  rightLabel = "Downloads",
  variant = "default",
}: StatsTwoColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>stats 2-col</MjmlPreview>
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
        <StatsTwoColumnSection
          leftLabel={leftLabel}
          leftValue={leftValue}
          rightLabel={rightLabel}
          rightValue={rightValue}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StatsTwoColumn.PreviewProps = {
  leftLabel: "Active Users",
  leftValue: "50K+",
  rightLabel: "Countries",
  rightValue: "120+",
  theme: defaultTheme,
  variant: "default",
} satisfies StatsTwoColumnProps;
