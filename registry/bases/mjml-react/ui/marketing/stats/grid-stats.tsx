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

export type GridStatsVariant = "default" | "slanted-left" | "slanted-right";

export type GridStatsTone = "boxed" | "outlined" | "accent" | "border";

export interface GridStatsProps {
  theme?: EmailThemeTokens;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  variant?: GridStatsVariant;
  tone?: GridStatsTone;
}

const accented = (tone: GridStatsTone, i: number) =>
  tone === "accent" && i === 0;

const columnAttrs = (
  theme: EmailThemeTokens,
  tone: GridStatsTone,
  i: number
) => {
  switch (tone) {
    case "outlined": {
      return {
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        padding: "24px",
      };
    }
    case "accent": {
      return i === 0
        ? {
            backgroundColor: theme.colorPrimary,
            borderRadius: "8px",
            padding: "24px",
          }
        : { padding: i === 1 ? "24px 16px" : "24px 0" };
    }
    case "border": {
      return {
        border: i === 2 ? undefined : `0 1px 0 0 solid ${theme.colorBorder}`,
        padding: "24px",
      };
    }
    default: {
      return {
        backgroundColor: theme.colorBackgroundMuted,
        borderRadius: "8px",
        padding: "24px",
      };
    }
  }
};

export const GridStats = ({
  theme = defaultTheme,
  stat1 = "99.9%",
  stat1Label = "Uptime",
  stat2 = "10M+",
  stat2Label = "Users",
  stat3 = "150+",
  stat3Label = "Countries",
  variant = "default",
  tone = "boxed",
}: GridStatsProps) => {
  const stats = [
    { label: stat1Label, value: stat1 },
    { label: stat2Label, value: stat2 },
    { label: stat3Label, value: stat3 },
  ];
  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Stats</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
        <MjmlWrapper padding="64px 24px">
          <MjmlSection padding="0">
            {stats.map((stat, i) => (
              <MjmlColumn
                key={stat.label}
                verticalAlign="top"
                width="33.33%"
                {...columnAttrs(theme, tone, i)}
              >
                <MjmlText
                  align="center"
                  color={
                    accented(tone, i)
                      ? theme.colorPrimaryForeground
                      : theme.colorText
                  }
                  fontSize={theme.fontSizeHeading}
                  fontWeight={theme.fontWeightBold}
                  padding="0"
                >
                  {stat.value}
                </MjmlText>
                <MjmlText
                  align="center"
                  color={
                    accented(tone, i)
                      ? theme.colorPrimaryForeground
                      : theme.colorTextMuted
                  }
                  fontSize={theme.fontSizeSm}
                  padding="8px 0 0"
                  textTransform="uppercase"
                >
                  {stat.label}
                </MjmlText>
              </MjmlColumn>
            ))}
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

GridStats.PreviewProps = {
  stat1: "99.9%",
  stat1Label: "Uptime",
  stat2: "10M+",
  stat2Label: "Users",
  stat3: "150+",
  stat3Label: "Countries",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies GridStatsProps;
