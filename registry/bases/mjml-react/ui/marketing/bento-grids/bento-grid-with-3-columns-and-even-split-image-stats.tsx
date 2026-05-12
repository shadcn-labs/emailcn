/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BentoGridStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridStatsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  stats?: { value: string; label: string; imageUrl?: string }[];
  variant?: BentoGridStatsVariant;
}
const BentoGridStatsSection = ({
  heading,
  stats,
  theme,
  variant,
}: {
  heading: string;
  stats: BentoGridStatsProps["stats"];
  theme: EmailThemeTokens;
  variant: BentoGridStatsVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
    {(stats ?? []).slice(0, 4).map((s, i) => (
      <MjmlColumn
        key={s.label + i}
        width="25%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {s.imageUrl ? (
          <MjmlImage
            align="center"
            alt={s.label}
            borderRadius={theme.borderRadius}
            src={s.imageUrl}
            width={200}
            paddingBottom={theme.spacingBase ?? "12px"}
          />
        ) : null}
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize="2Fourpx"
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingBase ?? "Fourpx"}
        >
          {s.value}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
        >
          {s.label}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  theme = defaultTheme,
  heading = "By the Numbers",
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "5K+" },
  ],
  variant = "default",
}: BentoGridStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento stats</MjmlPreview>
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
        <BentoGridStatsSection
          heading={heading}
          stats={stats}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  heading: "By the Numbers",
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
    { label: "Years in Business", value: "5+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridStatsProps;
