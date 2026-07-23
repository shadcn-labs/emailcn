import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type StackedStatsVariant = "left" | "center" | "right";

export interface StackedStatsProps {
  theme?: EmailThemeTokens;
  variant?: StackedStatsVariant;
  stats?: { heading: string; value: string; description: string }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  accentColor?: string;
  headingColor?: string;
  textColor?: string;
  dividerColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultStats = [
  {
    description: "For the month of January",
    heading: "Active days",
    value: "10 days",
  },
  {
    description: "Total distance recorded",
    heading: "Distance covered",
    value: "28km",
  },
  {
    description: "Time spent across all activities",
    heading: "Total time of activity",
    value: "5h 34min",
  },
];

export const StackedStatsSection = ({
  accentColor = "#f97316",
  backgroundColor = "#fffffe",
  dividerColor = "#cbd5e1",
  headingColor = "#030712",
  stats = defaultStats,
  textColor = "#4b5563",
  variant = "left",
}: Omit<StackedStatsProps, "theme">) => {
  const align = variant === "center" ? "center" : variant;

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0">
        {stats.slice(0, 3).map((stat, index) => (
          <Fragment key={`${stat.heading}-${index}`}>
            {index > 0 ? (
              <MjmlDivider
                borderColor={dividerColor}
                borderWidth="1px"
                padding="24px 0"
              />
            ) : null}
            <MjmlText
              align={align}
              color={accentColor}
              fontFamily={fontFamily}
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              padding="0"
            >
              {stat.heading}
            </MjmlText>
            <MjmlText
              align={align}
              color={headingColor}
              fontFamily={fontFamily}
              fontSize="60px"
              fontWeight="600"
              lineHeight="68px"
              padding="0"
            >
              {stat.value}
            </MjmlText>
            <MjmlText
              align={align}
              color={textColor}
              fontFamily={fontFamily}
              fontSize="14px"
              lineHeight="20px"
              padding="0"
            >
              {stat.description}
            </MjmlText>
          </Fragment>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const StackedStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: StackedStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Activity statistics</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <StackedStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedStats.PreviewProps = {
  theme: defaultTheme,
  variant: "left",
} satisfies StackedStatsProps;
