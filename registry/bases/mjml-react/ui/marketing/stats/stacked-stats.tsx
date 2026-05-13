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

export type StatsMinimalVariant = "default" | "slanted-left" | "slanted-right";

export interface StatsMinimalProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  variant?: StatsMinimalVariant;
}

const StatsMinimalSection = ({
  stats,
  theme,
  variant,
}: {
  stats: StatsMinimalProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsMinimalVariant;
}) => {
  const items = (stats ?? []).slice(0, 3);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((stat, i) => (
        <MjmlColumn
          key={stat.label + i}
          width={`${100 / items.length}%`}
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "4px"}
          >
            {stat.value}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextSubtle}
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

export const StackedStats = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
  ],
  variant = "default",
}: StatsMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>stats minimal</MjmlPreview>
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
        <StatsMinimalSection stats={stats} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedStats.PreviewProps = {
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsMinimalProps;
