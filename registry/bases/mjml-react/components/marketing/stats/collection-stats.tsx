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
import { Fragment } from "react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type SimpleStats_SimpleStatsVariant =
  | "default"
  | "outlined"
  | "boxed"
  | "bordered";

interface SimpleStats_SimpleStatsProps {
  theme?: EmailTheme;
  variant?: SimpleStats_SimpleStatsVariant;
  stats?: {
    label: string;
    value: string;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  borderColor?: string;
  headingColor?: string;
  textColor?: string;
}

const SimpleStats_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SimpleStats_defaultStats = [
  { label: "Increase in conversion rate", value: "45%" },
  { label: "Average page load time", value: "2.1s" },
  { label: "Monthly churn reduction", value: "18%" },
];

const SimpleStats_getCardPadding = (
  variant: SimpleStats_SimpleStatsVariant
) => {
  if (variant === "default") {
    return "0";
  }
  if (variant === "bordered") {
    return "20px 16px";
  }
  return "24px 16px";
};

const SimpleStats_SimpleStatsSection = ({
  backgroundColor = "#fffffe",
  borderColor = "#d1d5db",
  cardBackgroundColor = "#f9fafb",
  headingColor = "#030712",
  stats = SimpleStats_defaultStats,
  textColor = "#4b5563",
  variant = "default",
}: Omit<SimpleStats_SimpleStatsProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
    {stats.slice(0, 3).map((stat, index) => (
      <Fragment key={`${stat.value}-${index}`}>
        {index > 0 ? (
          <MjmlColumn padding="0" width="24px">
            <MjmlText fontSize="1px" lineHeight="1px" padding="0">
              &zwj;
            </MjmlText>
          </MjmlColumn>
        ) : null}
        <MjmlColumn
          backgroundColor={
            variant === "boxed" ? cardBackgroundColor : undefined
          }
          border={
            variant === "outlined" ? `1px solid ${borderColor}` : undefined
          }
          borderRadius={
            variant === "boxed" || variant === "outlined" ? "8px" : "0"
          }
          borderTop={
            variant === "bordered" ? `4px solid ${headingColor}` : undefined
          }
          padding={SimpleStats_getCardPadding(variant)}
          verticalAlign="top"
          width="168px"
        >
          <MjmlText
            align="center"
            color={headingColor}
            fontFamily={SimpleStats_fontFamily}
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
            fontFamily={SimpleStats_fontFamily}
            fontSize="16px"
            lineHeight="24px"
            padding="8px 0 0"
          >
            {stat.label}
          </MjmlText>
        </MjmlColumn>
      </Fragment>
    ))}
  </MjmlSection>
);

const SimpleStats_SimpleStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleStats_SimpleStatsProps) => (
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
        <SimpleStats_SimpleStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SimpleStats_SimpleStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleStats_SimpleStatsProps;

const __SimpleStats = SimpleStats_SimpleStats;

type GridStats_GridStatsVariant =
  | "simple"
  | "outlined"
  | "bordered"
  | "boxed"
  | "accent-column";

type GridStats_GridStatsLayout = "three-columns" | "bento" | "bento-reversed";

interface GridStats_GridStatsProps {
  theme?: EmailTheme;
  variant?: GridStats_GridStatsVariant;
  layout?: GridStats_GridStatsLayout;
  featuredStat?: string;
  featuredLabel?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  accentBackgroundColor?: string;
  borderColor?: string;
  headingColor?: string;
  textColor?: string;
  accentColor?: string;
}

const GridStats_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const GridStats_detailedStats = [
  { label: "Increase in conversion rate", value: "45%" },
  { label: "Average page load time", value: "2.1s" },
  { label: "Monthly churn reduction", value: "18%" },
];

const GridStats_simpleStats = [
  { label: "Uptime across all core services", value: "99.9%" },
  { label: "Uptime across all core services", value: "3x" },
  { label: "Average support response", value: "24hr" },
];

const GridStats_bentoStats = [
  { label: "Uptime across all core services", value: "99.9%" },
  { label: "Growth in user engagement", value: "3x" },
  { label: "Maximum support response time", value: "24hr" },
];

interface GridStats_StatCardProps {
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
  variant: GridStats_GridStatsVariant;
  width: string;
  bento?: boolean;
  bordered?: boolean;
}

const GridStats_getCardBackgroundColor = ({
  accentBackgroundColor,
  cardBackgroundColor,
  dark,
  boxed,
}: {
  accentBackgroundColor: string;
  cardBackgroundColor: string;
  dark: boolean;
  boxed: boolean;
}) => {
  let backgroundColor: string | undefined;

  if (dark) {
    backgroundColor = accentBackgroundColor;
  } else if (boxed) {
    backgroundColor = cardBackgroundColor;
  }

  return backgroundColor;
};

const GridStats_getValueColor = ({
  accentColor,
  bento,
  dark,
  featured,
  headingColor,
}: {
  accentColor: string;
  bento: boolean;
  dark: boolean;
  featured: boolean;
  headingColor: string;
}) => {
  if (dark) {
    return bento ? accentColor : "#c7d2fe";
  }

  if (featured) {
    return accentColor;
  }

  return headingColor;
};

const GridStats_getCardPadding = ({
  bento,
  bordered,
  featured,
  variant,
}: {
  bento: boolean;
  bordered: boolean;
  featured: boolean;
  variant: GridStats_GridStatsVariant;
}) => {
  if (variant === "simple") {
    return "0";
  }

  if (variant === "bordered") {
    return bordered ? "20px 16px" : "0 16px";
  }

  if (bento) {
    return featured ? "42px 16px" : "54px 16px";
  }

  return "24px 16px";
};

const GridStats_getValueTypography = (featured: boolean) => {
  if (featured) {
    return {
      fontSize: "72px",
      fontWeight: "500",
      lineHeight: "72px",
    };
  }

  return {
    fontSize: "36px",
    fontWeight: "300",
    lineHeight: "40px",
  };
};

const GridStats_getLabelTypography = ({
  bento,
  featured,
}: {
  bento: boolean;
  featured: boolean;
}) => {
  if (featured && !bento) {
    return {
      fontSize: "18px",
      lineHeight: "28px",
      padding: "8px 0 0",
    };
  }

  return {
    fontSize: "16px",
    lineHeight: "24px",
    padding: featured && bento ? "0" : "8px 0 0",
  };
};

const GridStats_StatCard = ({
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
  bento = false,
  bordered = false,
}: GridStats_StatCardProps) => {
  const boxed = variant === "boxed" || variant === "accent-column";
  const outlined = variant === "outlined";
  const dark = accent && variant === "accent-column";
  const backgroundColor = GridStats_getCardBackgroundColor({
    accentBackgroundColor,
    boxed,
    cardBackgroundColor,
    dark,
  });
  const valueColor = GridStats_getValueColor({
    accentColor,
    bento,
    dark,
    featured,
    headingColor,
  });
  const padding = GridStats_getCardPadding({
    bento,
    bordered,
    featured,
    variant,
  });
  const valueTypography = GridStats_getValueTypography(featured);
  const labelTypography = GridStats_getLabelTypography({ bento, featured });

  return (
    <MjmlColumn
      backgroundColor={backgroundColor}
      border={outlined ? `1px solid ${borderColor}` : undefined}
      borderRadius={outlined || boxed ? "8px" : "0"}
      borderTop={
        variant === "bordered" && bordered
          ? `4px solid ${headingColor}`
          : undefined
      }
      padding={padding}
      verticalAlign="top"
      width={width}
    >
      <MjmlText
        align="center"
        color={valueColor}
        fontFamily={GridStats_fontFamily}
        padding="0"
        {...valueTypography}
      >
        {value}
      </MjmlText>
      <MjmlText
        align="center"
        color={dark ? "#d1d5db" : textColor}
        fontFamily={GridStats_fontFamily}
        {...labelTypography}
      >
        {label}
      </MjmlText>
    </MjmlColumn>
  );
};

type GridStats_CommonCardProps = Omit<
  GridStats_StatCardProps,
  "accent" | "bento" | "bordered" | "featured" | "label" | "value" | "width"
>;

interface GridStats_ThreeColumnLayoutProps {
  backgroundColor: string;
  common: GridStats_CommonCardProps;
  featuredLabel: string;
  featuredStat: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const GridStats_GapColumn = () => (
  <MjmlColumn padding="0" width="24px">
    <MjmlText fontSize="1px" lineHeight="1px" padding="0">
      &zwj;
    </MjmlText>
  </MjmlColumn>
);

const GridStats_ThreeColumnLayout = ({
  backgroundColor,
  common,
  featuredLabel,
  featuredStat,
  stats,
}: GridStats_ThreeColumnLayoutProps) => (
  <>
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
      <GridStats_StatCard
        {...common}
        accent
        featured
        label={featuredLabel}
        value={featuredStat}
        width="100%"
      />
    </MjmlSection>
    <MjmlSection backgroundColor={backgroundColor} padding="12px 24px 44px">
      {stats.slice(0, 3).map((stat, index) => (
        <Fragment key={`${stat.label}-${index}`}>
          {index > 0 ? <GridStats_GapColumn /> : null}
          <GridStats_StatCard
            {...common}
            accent={false}
            bordered
            label={stat.label}
            value={stat.value}
            width="168px"
          />
        </Fragment>
      ))}
    </MjmlSection>
  </>
);

interface GridStats_BentoLayoutProps {
  backgroundColor: string;
  common: GridStats_CommonCardProps;
  featuredLabel: string;
  featuredStat: string;
  layout: Exclude<GridStats_GridStatsLayout, "three-columns">;
  stats: {
    label: string;
    value: string;
  }[];
}

const GridStats_BentoLayout = ({
  backgroundColor,
  common,
  featuredLabel,
  featuredStat,
  layout,
  stats,
}: GridStats_BentoLayoutProps) => {
  const featured = {
    label: `${featuredLabel} since 2018`,
    value: featuredStat,
  };
  const firstRow =
    layout === "bento-reversed" ? [stats[0], featured] : [featured, stats[0]];
  const secondRow =
    layout === "bento-reversed" ? [stats[2], stats[1]] : [stats[1], stats[2]];

  return (
    <>
      {[firstRow, secondRow].map((row, rowIndex) => (
        <MjmlSection
          backgroundColor={backgroundColor}
          key={`row-${rowIndex}`}
          padding={rowIndex === 0 ? "44px 24px 12px" : "12px 24px 44px"}
        >
          {row.map((stat, index) => {
            const isPrimary = stat?.value === featuredStat;
            const isFeatured = isPrimary || stat === stats[1];

            return (
              <Fragment key={`${stat?.label}-${index}`}>
                {index > 0 ? <GridStats_GapColumn /> : null}
                <GridStats_StatCard
                  {...common}
                  accent={isPrimary}
                  bento
                  bordered={rowIndex === 1}
                  featured={isFeatured}
                  label={stat?.label ?? ""}
                  value={stat?.value ?? ""}
                  width={isFeatured ? "320px" : "208px"}
                />
              </Fragment>
            );
          })}
        </MjmlSection>
      ))}
    </>
  );
};

const GridStats_getFallbackStats = ({
  useThreeColumns,
  variant,
}: {
  useThreeColumns: boolean;
  variant: GridStats_GridStatsVariant;
}) => {
  if (variant === "simple") {
    return GridStats_simpleStats;
  }

  if (useThreeColumns) {
    return GridStats_detailedStats;
  }

  return GridStats_bentoStats;
};

const GridStats_getAccentColor = ({
  accentColor,
  headingColor,
  layout,
  variant,
}: {
  accentColor: string;
  headingColor: string;
  layout: GridStats_GridStatsLayout;
  variant: GridStats_GridStatsVariant;
}) => {
  if (variant === "boxed") {
    return headingColor;
  }

  if (layout === "bento") {
    return "#fbbf24";
  }

  if (layout === "bento-reversed") {
    return "#34d399";
  }

  return accentColor;
};

const GridStats_GridStatsSection = ({
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
}: Omit<GridStats_GridStatsProps, "theme">) => {
  const useThreeColumns = variant === "simple" || layout === "three-columns";
  const fallbackStats = GridStats_getFallbackStats({
    useThreeColumns,
    variant,
  });
  const resolvedStats = stats ?? fallbackStats;
  const resolvedAccentColor = GridStats_getAccentColor({
    accentColor,
    headingColor,
    layout,
    variant,
  });
  const common = {
    accentBackgroundColor,
    accentColor: resolvedAccentColor,
    borderColor,
    cardBackgroundColor,
    headingColor,
    textColor,
    variant,
  };
  if (useThreeColumns) {
    return (
      <GridStats_ThreeColumnLayout
        backgroundColor={backgroundColor}
        common={common}
        featuredLabel={featuredLabel}
        featuredStat={featuredStat}
        stats={resolvedStats}
      />
    );
  }

  return (
    <GridStats_BentoLayout
      backgroundColor={backgroundColor}
      common={common}
      featuredLabel={featuredLabel}
      featuredStat={featuredStat}
      layout={layout}
      stats={resolvedStats}
    />
  );
};

const GridStats_GridStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: GridStats_GridStatsProps) => (
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
        <GridStats_GridStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

GridStats_GridStats.PreviewProps = {
  layout: "three-columns",
  theme: defaultTheme,
  variant: "boxed",
} satisfies GridStats_GridStatsProps;

const __GridStats = GridStats_GridStats;

type OverlayStats_OverlayStatsVariant =
  | "default"
  | "three-columns"
  | "bento"
  | "bento-reversed";

interface OverlayStats_OverlayStatsProps {
  theme?: EmailTheme;
  variant?: OverlayStats_OverlayStatsVariant;
  featuredStat?: string;
  featuredLabel?: string;
  stats?: {
    label: ReactNode;
    value: string;
  }[];
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  overlayColor?: string;
  headingColor?: string;
  textColor?: string;
}

const OverlayStats_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

interface OverlayStats_OverlayDefaults {
  backgroundImageSrc: string;
  featuredLabel: string;
  featuredStat: string;
  stats: {
    label: ReactNode;
    value: string;
  }[];
}

const OverlayStats_variants: Record<
  OverlayStats_OverlayStatsVariant,
  OverlayStats_OverlayDefaults
> = {
  bento: {
    backgroundImageSrc: emailAsset("stats/overlay-3.jpg"),
    featuredLabel: "Active explorers worldwide",
    featuredStat: "98k+",
    stats: [
      { label: "Countries covered", value: "72" },
      { label: "Data integrity and service uptime", value: "99%" },
      { label: "Sync user frequency", value: "24hr" },
    ],
  },
  "bento-reversed": {
    backgroundImageSrc: emailAsset("stats/overlay-4.jpg"),
    featuredLabel: "Average fulfillment time",
    featuredStat: "48hr",
    stats: [
      { label: "Customers worldwide", value: "120k+" },
      { label: "Based on 1k product reviews", value: "4.9*" },
      { label: "Collections per year", value: "6" },
    ],
  },
  default: {
    backgroundImageSrc: emailAsset("stats/overlay-1.jpg"),
    featuredLabel: "Active users globally",
    featuredStat: "120k+",
    stats: [
      { label: "Season performance rating", value: "4s" },
      { label: "Water and wind resistance", value: "10k" },
      { label: "Cold-tested durability", value: "72hr" },
    ],
  },
  "three-columns": {
    backgroundImageSrc: emailAsset("stats/overlay-2.jpg"),
    featuredLabel: "Monthly builds",
    featuredStat: "1m+",
    stats: [
      { label: "Average failure rate", value: "0.1%" },
      { label: "Faster CI pipelines", value: "3x" },
      { label: "Monitoring all services", value: "24/7" },
    ],
  },
};

const OverlayStats_OverlayStat = ({
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
      fontFamily={OverlayStats_fontFamily}
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
      fontFamily={OverlayStats_fontFamily}
      fontSize={featured ? "18px" : "16px"}
      lineHeight={featured ? "28px" : "24px"}
      padding="8px 0 0"
    >
      {label}
    </MjmlText>
  </MjmlColumn>
);

const OverlayStats_backgroundProps = (url: string) => ({
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" as const,
  backgroundSize: "cover",
  backgroundUrl: url,
});

const OverlayStats_OverlayStatsSection = ({
  backgroundImageSrc,
  featuredLabel,
  featuredStat,
  headingColor = "#fffffe",
  stats,
  textColor = "#e5e7eb",
  variant = "default",
}: Omit<OverlayStats_OverlayStatsProps, "theme">) => {
  const preset = OverlayStats_variants[variant];
  const image = backgroundImageSrc ?? preset.backgroundImageSrc;
  const resolvedFeaturedLabel = featuredLabel ?? preset.featuredLabel;
  const resolvedFeaturedStat = featuredStat ?? preset.featuredStat;
  const resolvedStats = stats ?? preset.stats;
  const background = OverlayStats_backgroundProps(image);
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
                <OverlayStats_OverlayStat
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
        <OverlayStats_OverlayStat
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
          <OverlayStats_OverlayStat
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

const OverlayStats_OverlayStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: OverlayStats_OverlayStatsProps) => (
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
        <OverlayStats_OverlayStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OverlayStats_OverlayStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies OverlayStats_OverlayStatsProps;

const __OverlayStats = OverlayStats_OverlayStats;

export interface CollectionStatItem {
  label: string;
  value: string;
  description?: string;
}

export interface CollectionStatsProps {
  theme?: Parameters<typeof __SimpleStats>[0]["theme"];
  items?: CollectionStatItem[];
  featured?: CollectionStatItem;
  layout?: "row" | "three-columns" | "bento";
  reverse?: boolean;
  appearance?: "simple" | "outlined" | "bordered" | "boxed" | "accent";
  backgroundImage?: {
    src: string;
    alt?: string;
  };
}

export const CollectionStats = ({
  theme,
  items,
  featured,
  layout = "row",
  reverse = false,
  appearance = "simple",
  backgroundImage,
}: CollectionStatsProps) => {
  if (backgroundImage) {
    const variant = (() => {
      if (layout === "row") {
        return "default";
      }
      if (layout === "three-columns") {
        return "three-columns";
      }
      if (reverse) {
        return "bento-reversed";
      }
      return "bento";
    })();
    return (
      <__OverlayStats
        backgroundImageSrc={backgroundImage.src}
        theme={theme}
        variant={variant}
        {...(featured
          ? { featuredLabel: featured.label, featuredStat: featured.value }
          : {})}
        {...(items ? { stats: items } : {})}
      />
    );
  }
  if (layout === "row") {
    return (
      <__SimpleStats
        theme={theme}
        variant={(() => {
          if (appearance === "simple") {
            return "default";
          }
          if (appearance === "accent") {
            return "boxed";
          }
          return appearance;
        })()}
        {...(items ? { stats: items } : {})}
      />
    );
  }
  return (
    <__GridStats
      layout={layout === "bento" && reverse ? "bento-reversed" : layout}
      theme={theme}
      variant={appearance === "accent" ? "accent-column" : appearance}
      {...(featured
        ? { featuredLabel: featured.label, featuredStat: featured.value }
        : {})}
      {...(items ? { stats: items } : {})}
    />
  );
};

CollectionStats.PreviewProps = {
  appearance: "simple",
  layout: "row",
  reverse: false,
} satisfies CollectionStatsProps;
