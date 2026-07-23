import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type SimpleStatsVariant = "default" | "outlined" | "boxed" | "bordered";

export interface SimpleStatsProps {
  theme?: EmailThemeTokens;
  variant?: SimpleStatsVariant;
  stats?: { label: string; value: string }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  borderColor?: string;
  headingColor?: string;
  textColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultStats = [
  { label: "Increase in conversion rate", value: "45%" },
  { label: "Average page load time", value: "2.1s" },
  { label: "Monthly churn reduction", value: "18%" },
];

export const SimpleStatsSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  cardBackgroundColor = "#f9fafb",
  headingColor = "#030712",
  stats = defaultStats,
  textColor = "#4b5563",
  variant = "default",
}: Omit<SimpleStatsProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {stats.slice(0, 3).map((stat, index) => (
      <MjmlColumn
        backgroundColor={variant === "boxed" ? cardBackgroundColor : undefined}
        border={
          variant === "outlined" || variant === "bordered"
            ? `1px solid ${borderColor}`
            : undefined
        }
        borderRadius={
          variant === "boxed" || variant === "outlined" ? "8px" : "0"
        }
        key={`${stat.value}-${index}`}
        padding={variant === "default" ? "12px" : "24px 12px"}
        verticalAlign="top"
        width="33.333%"
      >
        <MjmlText
          align="center"
          color={headingColor}
          fontFamily={fontFamily}
          fontSize="36px"
          fontWeight="300"
          lineHeight="40px"
          padding="0"
        >
          {stat.value}
        </MjmlText>
        <MjmlText
          align="center"
          color={textColor}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="8px 0 0"
        >
          {stat.label}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);

export const SimpleStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Performance statistics</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SimpleStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SimpleStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleStatsProps;
