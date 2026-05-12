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

export interface FullWidthProgressBarProps {
  theme?: EmailThemeTokens;
  value?: number;
  label?: string;
  showLabel?: boolean;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const FullWidthProgressBarSection = ({
  value,
  label,
  showLabel,
  theme,
}: {
  value: number;
  label?: string;
  showLabel: boolean;
  theme: EmailThemeTokens;
}) => {
  const clamped = Math.max(0, Math.min(100, value));
  const fillWidth = `${clamped}%`;
  const emptyWidth = `${100 - clamped}%`;

  return (
    <MjmlSection padding={`${theme.spacingLg ?? "32px"} 0`}>
      <MjmlColumn>
        {label || showLabel ? (
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            fontWeight={theme.fontWeightMedium ?? "500"}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {label ?? `${clamped}%`}
            {showLabel && label ? ` — ${clamped}%` : null}
          </MjmlText>
        ) : null}
        <MjmlSection
          backgroundColor={theme.colorBackgroundSubtle ?? "#f3f4f6"}
          borderRadius={theme.borderRadius}
          padding="0"
        >
          {clamped > 0 ? (
            <MjmlColumn
              backgroundColor={theme.colorPrimary}
              borderRadius={theme.borderRadius}
              width={fillWidth}
              padding="8px 0"
            >
              <MjmlText
                align="center"
                color={theme.colorPrimaryForeground}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                fontWeight={theme.fontWeightBold ?? "600"}
                padding="0"
              >
                {clamped}%
              </MjmlText>
            </MjmlColumn>
          ) : null}
          {clamped < 100 ? <MjmlColumn width={emptyWidth} padding="0" /> : null}
        </MjmlSection>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FullWidthProgressBar = ({
  theme = defaultTheme,
  value = 65,
  label,
  showLabel = true,
  variant = "default",
}: FullWidthProgressBarProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>progress-bar</MjmlPreview>
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
        <FullWidthProgressBarSection
          value={value}
          label={label}
          showLabel={showLabel}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthProgressBar.PreviewProps = {
  label: "Progress",
  showLabel: true,
  theme: defaultTheme,
  value: 65,
  variant: "default",
} satisfies FullWidthProgressBarProps;
