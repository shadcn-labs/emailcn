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

export type StatsFourColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsFourColumnProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  variant?: StatsFourColumnVariant;
}

const StatsFourColumnSection = ({
  stats,
  theme,
  variant,
}: {
  stats: StatsFourColumnProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsFourColumnVariant;
}) => {
  const items = (stats ?? []).slice(0, 4);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((stat, i) => (
        <MjmlColumn
          key={stat.label + i}
          width="25%"
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize="24px"
            fontWeight={theme.fontWeightBold}
            paddingBottom={theme.spacingBase ?? "4px"}
          >
            {stat.value}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "11px"}
          >
            {stat.label}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const RollingStats = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "5K+" },
  ],
  variant = "default",
}: StatsFourColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>stats 4-col</MjmlPreview>
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
        <StatsFourColumnSection stats={stats} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

RollingStats.PreviewProps = {
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "10K+" },
    { label: "Years", value: "5+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsFourColumnProps;
