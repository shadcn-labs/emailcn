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

export type StatsHighlightVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface StatsHighlightProps {
  theme?: EmailThemeTokens;
  value?: string;
  label?: string;
  variant?: StatsHighlightVariant;
}

const StatsHighlightSection = ({
  label,
  theme,
  value,
  variant,
}: {
  label: string;
  theme: EmailThemeTokens;
  value: string;
  variant: StatsHighlightVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorPrimary}
        fontFamily={theme.fontFamily}
        fontSize="36px"
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {value}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
      >
        {label}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const StatsHighlight = ({
  theme = defaultTheme,
  value = "99.9%",
  label = "Uptime",
  variant = "default",
}: StatsHighlightProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>stats highlight</MjmlPreview>
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
        <StatsHighlightSection
          label={label}
          theme={theme}
          value={value}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StatsHighlight.PreviewProps = {
  label: "Customer Satisfaction",
  theme: defaultTheme,
  value: "99.9%",
  variant: "default",
} satisfies StatsHighlightProps;
