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

export interface ProgressBarColumnsProps {
  theme?: EmailThemeTokens;
  values?: number[];
  labels?: string[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ProgressBarColumnsSection = ({
  values,
  labels,
  theme,
}: {
  values: number[];
  labels?: string[];
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingLg ?? "32px"} 0`}>
    {values.slice(0, 4).map((val, i) => {
      const clamped = Math.max(0, Math.min(100, val));
      return (
        <MjmlColumn
          key={i}
          width={`${100 / Math.min(values.length, 4)}%`}
          padding={theme.spacingBase ?? "16px"}
        >
          {labels?.[i] ? (
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {labels[i]}
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
                width={`${clamped}%`}
                padding="6px 0"
              >
                <MjmlText
                  align="center"
                  color={theme.colorPrimaryForeground}
                  fontFamily={theme.fontFamily}
                  fontSize="10px"
                  fontWeight={theme.fontWeightBold ?? "600"}
                  padding="0"
                >
                  {clamped}%
                </MjmlText>
              </MjmlColumn>
            ) : null}
            {clamped < 100 ? (
              <MjmlColumn width={`${100 - clamped}%`} padding="0" />
            ) : null}
          </MjmlSection>
        </MjmlColumn>
      );
    })}
  </MjmlSection>
);

export const ProgressBarColumns = ({
  theme = defaultTheme,
  values = [80, 60, 40],
  labels = ["Design", "Dev", "QA"],
  variant = "default",
}: ProgressBarColumnsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>progress-cols</MjmlPreview>
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
        <ProgressBarColumnsSection
          values={values}
          labels={labels}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ProgressBarColumns.PreviewProps = {
  labels: ["Design", "Dev", "Testing"],
  theme: defaultTheme,
  values: [90, 65, 40],
  variant: "default",
} satisfies ProgressBarColumnsProps;
