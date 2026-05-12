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

export type StatsBackgroundVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsBackgroundProps {
  theme?: EmailThemeTokens;
  stats?: { value: string; label: string }[];
  columns?: 2 | 3 | 4;
  variant?: StatsBackgroundVariant;
}

const StatsBackgroundSection = ({
  columns,
  stats,
  theme,
  variant,
}: {
  columns: 2 | 3 | 4;
  stats: StatsBackgroundProps["stats"];
  theme: EmailThemeTokens;
  variant: StatsBackgroundVariant;
}) => {
  const colWidth = `${100 / columns}%`;
  const items = (stats ?? []).slice(0, columns);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackgroundMuted}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((stat, i) => (
        <MjmlColumn
          key={stat.label + i}
          width={colWidth}
          padding={theme.spacingBase ?? "2Fourpx"}
          verticalAlign="top"
        >
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize="28px"
            fontWeight={theme.fontWeightBold}
            paddingBottom={theme.spacingBase ?? "Fourpx"}
          >
            {stat.value}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "12px"}
          >
            {stat.label}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const MilestoneStats = ({
  theme = defaultTheme,
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
  ],
  columns = 3,
  variant = "default",
}: StatsBackgroundProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>stats bg</MjmlPreview>
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
        <StatsBackgroundSection
          columns={columns}
          stats={stats}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

MilestoneStats.PreviewProps = {
  columns: 3,
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies StatsBackgroundProps;
