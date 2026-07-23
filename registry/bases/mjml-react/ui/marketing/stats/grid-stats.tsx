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

export type GridStatsVariant =
  | "simple"
  | "outlined"
  | "bordered"
  | "boxed"
  | "accent-column";
export type GridStatsLayout = "three-columns" | "bento" | "bento-reversed";

export interface GridStatsProps {
  theme?: EmailThemeTokens;
  variant?: GridStatsVariant;
  layout?: GridStatsLayout;
  featuredStat?: string;
  featuredLabel?: string;
  stats?: { label: string; value: string }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  accentBackgroundColor?: string;
  borderColor?: string;
  headingColor?: string;
  textColor?: string;
  accentColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const detailedStats = [
  { label: "Increase in conversion rate", value: "45%" },
  { label: "Average page load time", value: "2.1s" },
  { label: "Monthly churn reduction", value: "18%" },
];
const simpleStats = [
  { label: "Uptime across all core services", value: "99.9%" },
  { label: "Uptime across all core services", value: "3x" },
  { label: "Average support response", value: "24hr" },
];
const bentoStats = [
  { label: "Uptime across all core services", value: "99.9%" },
  { label: "Growth in user engagement", value: "3x" },
  { label: "Maximum support response time", value: "24hr" },
];

interface StatCardProps {
  accent: boolean;
  accentBackgroundColor: string;
  accentColor: string;
  borderColor: string;
  cardBackgroundColor: string;
  featured?: boolean;
  headingColor: string;
  label: string;
  textColor: string;
  value: string;
  variant: GridStatsVariant;
  width: string;
}

const StatCard = ({
  accent,
  accentBackgroundColor,
  accentColor,
  borderColor,
  cardBackgroundColor,
  featured = false,
  headingColor,
  label,
  textColor,
  value,
  variant,
  width,
}: StatCardProps) => {
  const boxed = variant === "boxed" || variant === "accent-column";
  const outlined = variant === "outlined";
  const dark = accent && variant === "accent-column";
  let backgroundColor: string | undefined;
  if (dark) {
    backgroundColor = accentBackgroundColor;
  } else if (boxed) {
    backgroundColor = cardBackgroundColor;
  }
  let valueColor = headingColor;
  if (dark) {
    valueColor = "#c7d2fe";
  } else if (featured) {
    valueColor = accentColor;
  }

  return (
    <MjmlColumn
      backgroundColor={backgroundColor}
      border={outlined ? `1px solid ${borderColor}` : undefined}
      borderRadius={outlined || boxed ? "8px" : "0"}
      borderTop={
        variant === "bordered" ? `4px solid ${headingColor}` : undefined
      }
      padding={variant === "simple" ? "12px" : "24px 16px"}
      verticalAlign="top"
      width={width}
    >
      <MjmlText
        align="center"
        color={valueColor}
        fontFamily={fontFamily}
        fontSize={featured ? "72px" : "36px"}
        fontWeight={featured ? "500" : "300"}
        lineHeight={featured ? "80px" : "40px"}
        padding="0"
      >
        {value}
      </MjmlText>
      <MjmlText
        align="center"
        color={dark ? "#d1d5db" : textColor}
        fontFamily={fontFamily}
        fontSize={featured ? "18px" : "16px"}
        lineHeight={featured ? "28px" : "24px"}
        padding="8px 0 0"
      >
        {label}
      </MjmlText>
    </MjmlColumn>
  );
};

export const GridStatsSection = ({
  accentBackgroundColor = "#030712",
  accentColor = "#818cf8",
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  cardBackgroundColor = "#f9fafb",
  featuredLabel = "Active users globally",
  featuredStat = "120k+",
  headingColor = "#030712",
  layout = "three-columns",
  stats,
  textColor = "#4b5563",
  variant = "boxed",
}: Omit<GridStatsProps, "theme">) => {
  const useThreeColumns = variant === "simple" || layout === "three-columns";
  let fallbackStats = bentoStats;
  if (variant === "simple") {
    fallbackStats = simpleStats;
  } else if (useThreeColumns) {
    fallbackStats = detailedStats;
  }
  const resolvedStats = stats ?? fallbackStats;
  const common = {
    accentBackgroundColor,
    accentColor,
    borderColor,
    cardBackgroundColor,
    headingColor,
    textColor,
    variant,
  };

  if (useThreeColumns) {
    return (
      <>
        <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
          <StatCard
            {...common}
            accent
            featured
            label={featuredLabel}
            value={featuredStat}
            width="100%"
          />
        </MjmlSection>
        <MjmlSection backgroundColor={backgroundColor} padding="12px 24px 44px">
          {resolvedStats.slice(0, 3).map((stat, index) => (
            <StatCard
              {...common}
              accent={false}
              key={`${stat.label}-${index}`}
              label={stat.label}
              value={stat.value}
              width="33.333%"
            />
          ))}
        </MjmlSection>
      </>
    );
  }

  const featured = {
    label: `${featuredLabel} since 2018`,
    value: featuredStat,
  };
  const firstRow =
    layout === "bento-reversed"
      ? [resolvedStats[0], featured]
      : [featured, resolvedStats[0]];
  const secondRow =
    layout === "bento-reversed"
      ? [resolvedStats[2], resolvedStats[1]]
      : [resolvedStats[1], resolvedStats[2]];

  return (
    <>
      {[firstRow, secondRow].map((row, rowIndex) => (
        <MjmlSection
          backgroundColor={backgroundColor}
          key={`row-${rowIndex}`}
          padding={rowIndex === 0 ? "44px 24px 12px" : "12px 24px 44px"}
        >
          {row.map((stat, index) => {
            const isFeatured =
              stat?.value === featuredStat || stat === resolvedStats[1];
            return (
              <StatCard
                {...common}
                accent={isFeatured}
                featured={isFeatured}
                key={`${stat?.label}-${index}`}
                label={stat?.label ?? ""}
                value={stat?.value ?? ""}
                width={isFeatured ? "60%" : "40%"}
              />
            );
          })}
        </MjmlSection>
      ))}
    </>
  );
};

export const GridStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: GridStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>120k+ Active users globally</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <GridStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

GridStats.PreviewProps = {
  layout: "three-columns",
  theme: defaultTheme,
  variant: "boxed",
} satisfies GridStatsProps;
