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
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type OverlayStatsVariant =
  | "default"
  | "three-columns"
  | "bento"
  | "bento-reversed";

export interface OverlayStatsProps {
  theme?: EmailThemeTokens;
  variant?: OverlayStatsVariant;
  featuredStat?: string;
  featuredLabel?: string;
  stats?: { label: ReactNode; value: string }[];
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  overlayColor?: string;
  headingColor?: string;
  textColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

interface OverlayDefaults {
  backgroundImageSrc: string;
  featuredLabel: string;
  featuredStat: string;
  stats: { label: ReactNode; value: string }[];
}

const variants: Record<OverlayStatsVariant, OverlayDefaults> = {
  bento: {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-3.jpg",
    featuredLabel: "Active explorers worldwide",
    featuredStat: "98k+",
    stats: [
      { label: "Countries covered", value: "72" },
      { label: "Data integrity and service uptime", value: "99%" },
      { label: "Sync user frequency", value: "24hr" },
    ],
  },
  "bento-reversed": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-4.jpg",
    featuredLabel: "Average fulfillment time",
    featuredStat: "48hr",
    stats: [
      { label: "Customers worldwide", value: "120k+" },
      { label: "Based on 1k product reviews", value: "4.9*" },
      { label: "Collections per year", value: "6" },
    ],
  },
  default: {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-1.jpg",
    featuredLabel: "Active users globally",
    featuredStat: "120k+",
    stats: [
      { label: "Season performance rating", value: "4s" },
      { label: "Water and wind resistance", value: "10k" },
      { label: "Cold-tested durability", value: "72hr" },
    ],
  },
  "three-columns": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-2.jpg",
    featuredLabel: "Monthly builds",
    featuredStat: "1m+",
    stats: [
      { label: "Average failure rate", value: "0.1%" },
      { label: "Faster CI pipelines", value: "3x" },
      { label: "Monitoring all services", value: "24/7" },
    ],
  },
};

const OverlayStat = ({
  featured = false,
  headingColor,
  label,
  textColor,
  value,
  width,
}: {
  featured?: boolean;
  headingColor: string;
  label: ReactNode;
  textColor: string;
  value: string;
  width: string;
}) => (
  <MjmlColumn
    backgroundColor="rgba(0,0,1,0.42)"
    borderRadius="8px"
    padding="24px 16px"
    verticalAlign="middle"
    width={width}
  >
    <MjmlText
      align="center"
      color={headingColor}
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
      color={textColor}
      fontFamily={fontFamily}
      fontSize={featured ? "18px" : "16px"}
      lineHeight={featured ? "28px" : "24px"}
      padding="8px 0 0"
    >
      {label}
    </MjmlText>
  </MjmlColumn>
);

const backgroundProps = (url: string) => ({
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" as const,
  backgroundSize: "cover",
  backgroundUrl: url,
});

export const OverlayStatsSection = ({
  backgroundImageSrc,
  featuredLabel,
  featuredStat,
  headingColor = "#fffffe",
  stats,
  textColor = "#e5e7eb",
  variant = "default",
}: Omit<OverlayStatsProps, "theme">) => {
  const preset = variants[variant];
  const image = backgroundImageSrc ?? preset.backgroundImageSrc;
  const resolvedFeaturedLabel = featuredLabel ?? preset.featuredLabel;
  const resolvedFeaturedStat = featuredStat ?? preset.featuredStat;
  const resolvedStats = stats ?? preset.stats;
  const background = backgroundProps(image);

  if (variant === "bento" || variant === "bento-reversed") {
    const feature = {
      label: resolvedFeaturedLabel,
      value: resolvedFeaturedStat,
    };
    const rows =
      variant === "bento-reversed"
        ? [
            [resolvedStats[0], feature],
            [resolvedStats[2], resolvedStats[1]],
          ]
        : [
            [feature, resolvedStats[0]],
            [resolvedStats[1], resolvedStats[2]],
          ];
    return (
      <>
        {rows.map((row, rowIndex) => (
          <MjmlSection
            {...background}
            key={`overlay-row-${rowIndex}`}
            padding={rowIndex === 0 ? "44px 24px 12px" : "12px 24px 44px"}
          >
            {row.map((stat, index) => {
              const featured =
                stat?.value === resolvedFeaturedStat ||
                stat === resolvedStats[1];
              return (
                <OverlayStat
                  featured={featured}
                  headingColor={headingColor}
                  key={`${stat?.value}-${index}`}
                  label={stat?.label ?? ""}
                  textColor={textColor}
                  value={stat?.value ?? ""}
                  width={featured ? "60%" : "40%"}
                />
              );
            })}
          </MjmlSection>
        ))}
      </>
    );
  }

  return (
    <>
      <MjmlSection {...background} padding="44px 24px 12px">
        <OverlayStat
          featured
          headingColor={headingColor}
          label={resolvedFeaturedLabel}
          textColor={textColor}
          value={resolvedFeaturedStat}
          width="100%"
        />
      </MjmlSection>
      <MjmlSection {...background} padding="12px 24px 44px">
        {resolvedStats.slice(0, 3).map((stat, index) => (
          <OverlayStat
            headingColor={headingColor}
            key={`${stat.value}-${index}`}
            label={stat.label}
            textColor={textColor}
            value={stat.value}
            width="33.333%"
          />
        ))}
      </MjmlSection>
    </>
  );
};

export const OverlayStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: OverlayStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Overlay statistics</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <OverlayStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OverlayStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies OverlayStatsProps;
