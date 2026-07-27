import { Fragment } from "react";
import type { ReactNode } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Text,
  Section,
  Row,
  Column,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

type SimpleStats_SimpleStatsVariant =
  | "default"
  | "outlined"
  | "boxed"
  | "bordered";

interface SimpleStats_SimpleStatsProps {
  theme?: TailwindConfig;
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

const SimpleStats_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .simple-stat-stack { display: block !important; width: 100% !important; }
      .simple-stat-gap { line-height: 24px !important; }
    }
  `;

const SimpleStats_defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  cardBackgroundColor: "#f9fafb",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  stats: [
    { label: "Increase in conversion rate", value: "45%" },
    { label: "Average page load time", value: "2.1s" },
    { label: "Monthly churn reduction", value: "18%" },
  ],
  textColor: "#4b5563",
};

type SimpleStats_SectionProps = Omit<SimpleStats_SimpleStatsProps, "theme">;

const SimpleStats_StatCopy = ({
  headingColor,
  label,
  textColor,
  value,
}: {
  headingColor: string;
  label: string;
  textColor: string;
  value: string;
}) => (
  <>
    <Text
      style={{
        color: headingColor,
        fontFamily: SimpleStats_fontFamily,
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: "40px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {value}
    </Text>
    <Text
      style={{
        color: textColor,
        fontFamily: SimpleStats_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </Text>
  </>
);

const SimpleStats_SimpleStatsSection = (props: SimpleStats_SectionProps) => {
  const resolved = { ...SimpleStats_defaults, ...props };
  const variant = props.variant ?? "default";
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px" }}>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {resolved.stats.slice(0, 3).map((stat, index) => (
                            <Fragment key={stat.label + stat.value}>
                              {index > 0 ? (
                                <Column
                                  className="simple-stat-stack simple-stat-gap"
                                  style={{ width: "24px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              <Column
                                className="simple-stat-stack"
                                style={{
                                  verticalAlign: "top",
                                  width: "168px",
                                }}
                              >
                                {(() => {
                                  if (variant === "default") {
                                    return (
                                      <SimpleStats_StatCopy
                                        headingColor={resolved.headingColor}
                                        label={stat.label}
                                        textColor={resolved.textColor}
                                        value={stat.value}
                                      />
                                    );
                                  }
                                  return (
                                    <Section
                                      style={{
                                        backgroundColor:
                                          variant === "boxed"
                                            ? resolved.cardBackgroundColor
                                            : undefined,
                                        border:
                                          variant === "outlined"
                                            ? `1px solid ${resolved.borderColor}`
                                            : undefined,
                                        borderRadius:
                                          variant === "outlined" ||
                                          variant === "boxed"
                                            ? "8px"
                                            : undefined,
                                        borderTop:
                                          variant === "bordered"
                                            ? `4px solid ${resolved.headingColor}`
                                            : undefined,
                                      }}
                                      width="100%"
                                    >
                                      <Fragment>
                                        <Row>
                                          <Column
                                            style={{
                                              padding:
                                                variant === "bordered"
                                                  ? "20px 16px"
                                                  : "24px 16px",
                                            }}
                                          >
                                            <SimpleStats_StatCopy
                                              headingColor={
                                                resolved.headingColor
                                              }
                                              label={stat.label}
                                              textColor={resolved.textColor}
                                              value={stat.value}
                                            />
                                          </Column>
                                        </Row>
                                      </Fragment>
                                    </Section>
                                  );
                                })()}
                              </Column>
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const SimpleStats_SimpleStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: SimpleStats_SimpleStatsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SimpleStats_responsiveStyles }}
      />
    </EmailHead>
    <Preview>45% increase in conversion rate</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SimpleStats_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <SimpleStats_SimpleStatsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
  theme?: TailwindConfig;
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

const GridStats_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .grid-stat-stack { display: block !important; width: 100% !important; }
      .grid-stat-gap { line-height: 24px !important; }
    }
  `;

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

const GridStats_defaults = {
  accentBackgroundColor: "#030712",
  accentColor: "#818cf8",
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  cardBackgroundColor: "#f9fafb",
  featuredLabel: "Active users globally",
  featuredStat: "120k+",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type GridStats_SectionProps = Omit<GridStats_GridStatsProps, "theme">;

type GridStats_ResolvedProps = typeof GridStats_defaults &
  GridStats_SectionProps & {
    stats: {
      label: string;
      value: string;
    }[];
  };

const GridStats_StatText = ({
  label,
  props,
  value,
}: {
  label: string;
  props: GridStats_ResolvedProps;
  value: string;
}) => (
  <>
    <Text
      style={{
        color: props.headingColor,
        fontFamily: GridStats_fontFamily,
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: "40px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {value}
    </Text>
    <Text
      style={{
        color: props.textColor,
        fontFamily: GridStats_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </Text>
  </>
);

interface GridStats_BentoItem {
  featured: boolean;
  label: string;
  value: string;
  width: string;
}

type GridStats_BentoRow = [GridStats_BentoItem, GridStats_BentoItem];

type GridStats_BentoRows = [GridStats_BentoRow, GridStats_BentoRow];

const GridStats_getBentoCardBackground = (
  dark: boolean,
  boxed: boolean,
  props: GridStats_ResolvedProps
) => {
  if (dark) {
    return props.accentBackgroundColor;
  }
  if (boxed) {
    return props.cardBackgroundColor;
  }
};

const GridStats_getBentoAccentColor = (
  variant: GridStats_GridStatsVariant,
  reversed: boolean
) => {
  if (variant === "boxed") {
    return;
  }
  return reversed ? "#34d399" : "#fbbf24";
};

const GridStats_getStats = (
  variant: GridStats_GridStatsVariant,
  useThreeColumns: boolean
) => {
  if (variant === "simple") {
    return GridStats_simpleStats;
  }
  if (useThreeColumns) {
    return GridStats_detailedStats;
  }
  return GridStats_bentoStats;
};

const GridStats_getBentoRows = (
  props: GridStats_ResolvedProps,
  reversed: boolean
): GridStats_BentoRows => {
  const feature: GridStats_BentoItem = {
    featured: true,
    label: `${props.featuredLabel} since 2018`,
    value: props.featuredStat,
    width: "320px",
  };
  const uptime: GridStats_BentoItem = {
    featured: false,
    label: props.stats[0]?.label ?? "",
    value: props.stats[0]?.value ?? "",
    width: "208px",
  };
  const growth: GridStats_BentoItem = {
    featured: true,
    label: props.stats[1]?.label ?? "",
    value: props.stats[1]?.value ?? "",
    width: "320px",
  };
  const support: GridStats_BentoItem = {
    featured: false,
    label: props.stats[2]?.label ?? "",
    value: props.stats[2]?.value ?? "",
    width: "208px",
  };
  if (reversed) {
    return [
      [uptime, feature],
      [support, growth],
    ];
  }
  return [
    [feature, uptime],
    [growth, support],
  ];
};

const GridStats_BentoCard = ({
  accentColor,
  bordered,
  item,
  props,
  variant,
}: {
  accentColor?: string;
  bordered: boolean;
  item: GridStats_BentoItem;
  props: GridStats_ResolvedProps;
  variant: GridStats_GridStatsVariant;
}) => {
  const dark =
    variant === "accent-column" &&
    item.featured &&
    item.value === props.featuredStat;
  const boxed = variant === "boxed" || variant === "accent-column";
  return (
    <Column className="grid-stat-stack" style={{ width: item.width }}>
      <Section
        style={{
          backgroundColor: GridStats_getBentoCardBackground(dark, boxed, props),
          border:
            variant === "outlined"
              ? `1px solid ${props.borderColor}`
              : undefined,
          borderRadius: variant === "bordered" ? undefined : "8px",
          borderTop:
            variant === "bordered" && bordered
              ? `4px solid ${props.headingColor}`
              : undefined,
          height: variant === "bordered" ? undefined : "180px",
        }}
        width="100%"
      >
        <Fragment>
          <Row>
            <Column
              style={{
                padding:
                  variant === "bordered" && bordered ? "24px 16px" : "0 16px",
              }}
            >
              <Text
                style={{
                  color: dark
                    ? (accentColor ?? "#c7d2fe")
                    : (accentColor ?? props.headingColor),
                  fontFamily: GridStats_fontFamily,
                  fontSize: item.featured ? "72px" : "36px",
                  fontWeight: item.featured ? 500 : 300,
                  lineHeight: item.featured ? 1 : "40px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {item.value}
              </Text>
              <Text
                style={{
                  color: dark ? "#d1d5db" : props.textColor,
                  fontFamily: GridStats_fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: item.featured ? 0 : "8px 0 0",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Text>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
};

const GridStats_BentoLayout = ({
  props,
  reversed,
  variant,
}: {
  props: GridStats_ResolvedProps;
  reversed: boolean;
  variant: GridStats_GridStatsVariant;
}) => {
  const accentColor = GridStats_getBentoAccentColor(variant, reversed);
  const rows = GridStats_getBentoRows(props, reversed);
  return (
    <>
      {rows.map((items, rowIndex) => (
        <Fragment key={String(rowIndex)}>
          <Section width="100%">
            <Fragment>
              <Row>
                <GridStats_BentoCard
                  accentColor={items[0].featured ? accentColor : undefined}
                  bordered={rowIndex === 1}
                  item={items[0]}
                  props={props}
                  variant={variant}
                />
                <Column
                  className="grid-stat-stack grid-stat-gap"
                  style={{ width: "24px" }}
                >
                  &zwj;
                </Column>
                <GridStats_BentoCard
                  accentColor={items[1].featured ? accentColor : undefined}
                  bordered={rowIndex === 1}
                  item={items[1]}
                  props={props}
                  variant={variant}
                />
              </Row>
            </Fragment>
          </Section>
          {rowIndex === 0 ? (
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          ) : null}
        </Fragment>
      ))}
    </>
  );
};

const GridStats_GridStatsSection = (props: GridStats_SectionProps) => {
  const variant = props.variant ?? "boxed";
  const layout = props.layout ?? "three-columns";
  const useThreeColumns = variant === "simple" || layout === "three-columns";
  const resolved = {
    ...GridStats_defaults,
    stats: GridStats_getStats(variant, useThreeColumns),
    ...props,
  } as GridStats_ResolvedProps;
  const isOutlined = variant === "outlined";
  const isBordered = variant === "bordered";
  const isBoxed = variant === "boxed" || variant === "accent-column";
  const isAccent = variant === "accent-column";
  let featuredBackgroundColor: string | undefined;
  if (isAccent) {
    featuredBackgroundColor = resolved.accentBackgroundColor;
  } else if (isBoxed) {
    featuredBackgroundColor = resolved.cardBackgroundColor;
  }
  let featuredColor = resolved.accentColor;
  if (variant === "simple") {
    featuredColor = resolved.headingColor;
  } else if (isAccent) {
    featuredColor = "#c7d2fe";
  }
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px" }}>
                    {(() => {
                      if (useThreeColumns) {
                        return (
                          <>
                            <Section width="100%">
                              <Fragment>
                                <Row>
                                  <Column
                                    style={{
                                      backgroundColor: featuredBackgroundColor,
                                      border: isOutlined
                                        ? `1px solid ${resolved.borderColor}`
                                        : undefined,
                                      borderRadius:
                                        isOutlined || isBoxed
                                          ? "8px"
                                          : undefined,
                                      padding:
                                        isOutlined || isBoxed
                                          ? "24px"
                                          : undefined,
                                    }}
                                  >
                                    <Text
                                      style={{
                                        color: featuredColor,
                                        fontFamily: GridStats_fontFamily,
                                        fontSize: "72px",
                                        fontWeight: 500,
                                        margin: 0,
                                        textAlign: "center",
                                      }}
                                    >
                                      {resolved.featuredStat}
                                    </Text>
                                    <Text
                                      style={{
                                        color: isAccent
                                          ? "#d1d5db"
                                          : resolved.textColor,
                                        fontFamily: GridStats_fontFamily,
                                        fontSize: "18px",
                                        lineHeight: "28px",
                                        margin: 0,
                                        textAlign: "center",
                                      }}
                                    >
                                      {resolved.featuredLabel}
                                    </Text>
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                            <Section style={{ lineHeight: "24px" }}>
                              &zwj;
                            </Section>
                            <Section width="100%">
                              <Fragment>
                                <Row>
                                  {resolved.stats
                                    .slice(0, 3)
                                    .map((stat, index) => (
                                      <Fragment key={stat.label + stat.value}>
                                        {index > 0 ? (
                                          <Column
                                            className="grid-stat-stack grid-stat-gap"
                                            style={{ width: "24px" }}
                                          >
                                            &zwj;
                                          </Column>
                                        ) : null}
                                        <Column
                                          className="grid-stat-stack"
                                          style={{
                                            verticalAlign: "top",
                                            width: "168px",
                                          }}
                                        >
                                          {(() => {
                                            if (variant === "simple") {
                                              return (
                                                <GridStats_StatText
                                                  label={stat.label}
                                                  props={resolved}
                                                  value={stat.value}
                                                />
                                              );
                                            }
                                            return (
                                              <Section
                                                style={{
                                                  backgroundColor: isBoxed
                                                    ? resolved.cardBackgroundColor
                                                    : undefined,
                                                  border: isOutlined
                                                    ? `1px solid ${resolved.borderColor}`
                                                    : undefined,
                                                  borderRadius:
                                                    isOutlined || isBoxed
                                                      ? "8px"
                                                      : undefined,
                                                  borderTop: isBordered
                                                    ? `4px solid ${resolved.headingColor}`
                                                    : undefined,
                                                }}
                                                width="100%"
                                              >
                                                <Fragment>
                                                  <Row>
                                                    <Column
                                                      style={{
                                                        padding: isBordered
                                                          ? "20px 16px"
                                                          : "24px 16px",
                                                      }}
                                                    >
                                                      <GridStats_StatText
                                                        label={stat.label}
                                                        props={resolved}
                                                        value={stat.value}
                                                      />
                                                    </Column>
                                                  </Row>
                                                </Fragment>
                                              </Section>
                                            );
                                          })()}
                                        </Column>
                                      </Fragment>
                                    ))}
                                </Row>
                              </Fragment>
                            </Section>
                          </>
                        );
                      }
                      return (
                        <GridStats_BentoLayout
                          props={resolved}
                          reversed={layout === "bento-reversed"}
                          variant={variant}
                        />
                      );
                    })()}
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const GridStats_GridStats = ({
  pageBackgroundColor = "#f1f5f9",
  layout = "three-columns",
  theme = defaultTheme,
  variant = "boxed",
  ...props
}: GridStats_GridStatsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: GridStats_responsiveStyles }} />
    </EmailHead>
    <Preview>120k+ Active users globally</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: GridStats_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <GridStats_GridStatsSection
            {...props}
            layout={layout}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
  theme?: TailwindConfig;
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

const OverlayStats_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .overlay-stat-stack { display: block !important; width: 100% !important; }
      .overlay-stat-gap { line-height: 24px !important; }
    }
  `;

const OverlayStats_common = {
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#e5e7eb",
};

interface OverlayStats_OverlayVariantDefaults {
  backgroundImageSrc: string;
  featuredLabel: string;
  featuredStat: string;
  overlayColor: string;
  stats: {
    label: ReactNode;
    value: string;
  }[];
}

const OverlayStats_variants: Record<
  OverlayStats_OverlayStatsVariant,
  OverlayStats_OverlayVariantDefaults
> = {
  bento: {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-3.jpg",
    featuredLabel: "Active explorers worldwide",
    featuredStat: "98k+",
    overlayColor: "rgba(0,0,1,0.4)",
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
    overlayColor: "rgba(0,0,1,0.4)",
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
    overlayColor: "rgba(0,0,1,0.25)",
    stats: [
      {
        label: (
          <>
            Season <br /> performance rating
          </>
        ),
        value: "4s",
      },
      { label: "Water and wind resistance", value: "10k" },
      {
        label: (
          <>
            Cold-tested <br /> durability
          </>
        ),
        value: "72hr",
      },
    ],
  },
  "three-columns": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/stats/overlay-2.jpg",
    featuredLabel: "Monthly builds",
    featuredStat: "1m+",
    overlayColor: "rgba(0,0,1,0.4)",
    stats: [
      { label: "Average failure rate", value: "0.1%" },
      { label: "Faster CI pipelines", value: "3x" },
      { label: "Monitoring all services", value: "24/7" },
    ],
  },
};

type OverlayStats_SectionProps = Omit<OverlayStats_OverlayStatsProps, "theme">;

type OverlayStats_ResolvedProps = typeof OverlayStats_common &
  OverlayStats_SectionProps &
  OverlayStats_OverlayVariantDefaults;

const OverlayStats_OverlayStatCopy = ({
  featured,
  label,
  props,
  value,
}: {
  featured: boolean;
  label: ReactNode;
  props: OverlayStats_ResolvedProps;
  value: string;
}) => (
  <>
    <Text
      style={{
        color: props.headingColor,
        fontFamily: OverlayStats_fontFamily,
        fontSize: featured ? "72px" : "36px",
        fontWeight: featured ? 500 : 300,
        lineHeight: featured ? 1 : "40px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {value}
    </Text>
    <Text
      style={{
        color: props.textColor,
        fontFamily: OverlayStats_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: featured ? 0 : "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </Text>
  </>
);

const OverlayStats_OverlayThreeColumnLayout = ({
  props,
}: {
  props: OverlayStats_ResolvedProps;
}) => (
  <>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "0 24px" }}>
            <Section
              style={{
                backgroundColor: props.overlayColor,
                borderRadius: "8px",
                height: "144px",
              }}
              width="100%"
            >
              <Fragment>
                <Row>
                  <Column style={{ padding: "24px" }}>
                    <Text
                      style={{
                        color: props.headingColor,
                        fontFamily: OverlayStats_fontFamily,
                        fontSize: "72px",
                        fontWeight: 500,
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {props.featuredStat}
                    </Text>
                    <Text
                      style={{
                        color: props.textColor,
                        fontFamily: OverlayStats_fontFamily,
                        fontSize: "18px",
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {props.featuredLabel}
                    </Text>
                  </Column>
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  {props.stats.slice(0, 3).map((stat, index) => (
                    <Fragment key={index}>
                      {index > 0 ? (
                        <Column
                          className="overlay-stat-stack overlay-stat-gap"
                          style={{ width: "24px" }}
                        >
                          &zwj;
                        </Column>
                      ) : null}
                      <Column
                        className="overlay-stat-stack"
                        style={{ verticalAlign: "top", width: "168px" }}
                      >
                        <Section
                          style={{
                            backgroundColor: props.overlayColor,
                            borderRadius: "8px",
                            height: "144px",
                          }}
                          width="100%"
                        >
                          <Fragment>
                            <Row>
                              <Column style={{ padding: "24px 16px" }}>
                                <OverlayStats_OverlayStatCopy
                                  featured={false}
                                  label={stat.label}
                                  props={props}
                                  value={stat.value}
                                />
                              </Column>
                            </Row>
                          </Fragment>
                        </Section>
                      </Column>
                    </Fragment>
                  ))}
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
  </>
);

interface OverlayStats_OverlayBentoItem {
  featured: boolean;
  label: ReactNode;
  value: string;
  width: string;
}

const OverlayStats_OverlayBentoCard = ({
  item,
  props,
}: {
  item: OverlayStats_OverlayBentoItem;
  props: OverlayStats_ResolvedProps;
}) => (
  <Column className="overlay-stat-stack" style={{ width: item.width }}>
    <Section
      style={{
        backgroundColor: props.overlayColor,
        borderRadius: "8px",
        height: "180px",
      }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "0 16px" }}>
            <OverlayStats_OverlayStatCopy
              featured={item.featured}
              label={item.label}
              props={props}
              value={item.value}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const OverlayStats_OverlayBentoLayout = ({
  props,
  reversed,
}: {
  props: OverlayStats_ResolvedProps;
  reversed: boolean;
}) => {
  const feature: OverlayStats_OverlayBentoItem = {
    featured: true,
    label: props.featuredLabel,
    value: props.featuredStat,
    width: "320px",
  };
  const first: OverlayStats_OverlayBentoItem = {
    featured: false,
    label: props.stats[0]?.label ?? "",
    value: props.stats[0]?.value ?? "",
    width: "208px",
  };
  const second: OverlayStats_OverlayBentoItem = {
    featured: true,
    label: props.stats[1]?.label ?? "",
    value: props.stats[1]?.value ?? "",
    width: "320px",
  };
  const third: OverlayStats_OverlayBentoItem = {
    featured: false,
    label: props.stats[2]?.label ?? "",
    value: props.stats[2]?.value ?? "",
    width: "208px",
  };
  const rows: [OverlayStats_OverlayBentoItem, OverlayStats_OverlayBentoItem][] =
    reversed
      ? [
          [first, feature],
          [second, third],
        ]
      : [
          [feature, first],
          [third, second],
        ];
  return (
    <>
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <Section width="100%">
        <Fragment>
          <Row>
            <Column style={{ width: "24px" }}>&zwj;</Column>
            <Column>
              {rows.map((items, rowIndex) => (
                <Fragment key={String(rowIndex)}>
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        <OverlayStats_OverlayBentoCard
                          item={items[0]}
                          props={props}
                        />
                        <Column
                          className="overlay-stat-stack overlay-stat-gap"
                          style={{ width: "24px" }}
                        >
                          &zwj;
                        </Column>
                        <OverlayStats_OverlayBentoCard
                          item={items[1]}
                          props={props}
                        />
                      </Row>
                    </Fragment>
                  </Section>
                  {rowIndex === 0 ? (
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  ) : null}
                </Fragment>
              ))}
            </Column>
            <Column style={{ width: "24px" }}>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    </>
  );
};

const OverlayStats_getOverlayContent = (
  variant: OverlayStats_OverlayStatsVariant,
  props: OverlayStats_ResolvedProps,
  defaultContent: ReactNode
) => {
  if (variant === "default") {
    return defaultContent;
  }
  if (variant === "three-columns") {
    return <OverlayStats_OverlayThreeColumnLayout props={props} />;
  }
  return (
    <OverlayStats_OverlayBentoLayout
      props={props}
      reversed={variant === "bento-reversed"}
    />
  );
};

const OverlayStats_OverlayStatsSection = (props: OverlayStats_SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = {
    ...OverlayStats_common,
    ...OverlayStats_variants[variant],
    ...props,
  } as OverlayStats_ResolvedProps;
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundImage: `url('${resolved.backgroundImageSrc}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              textAlign: "left",
              width: "600px",
            }}
          >
            {OverlayStats_getOverlayContent(
              variant,
              resolved,
              <Section style={{ backgroundColor: resolved.overlayColor }}>
                <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                <Section width="100%">
                  <Fragment>
                    <Row>
                      <Column style={{ padding: "0 24px" }}>
                        <Text
                          style={{
                            color: resolved.headingColor,
                            fontFamily: OverlayStats_fontFamily,
                            fontSize: "72px",
                            fontWeight: 500,
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {resolved.featuredStat}
                        </Text>
                        <Text
                          style={{
                            color: resolved.textColor,
                            fontFamily: OverlayStats_fontFamily,
                            fontSize: "18px",
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {resolved.featuredLabel}
                        </Text>
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <Section width="100%">
                          <Fragment>
                            <Row>
                              {resolved.stats.slice(0, 3).map((stat, index) => (
                                <Fragment key={index}>
                                  {index > 0 ? (
                                    <Column
                                      className="overlay-stat-stack overlay-stat-gap"
                                      style={{ width: "24px" }}
                                    >
                                      &zwj;
                                    </Column>
                                  ) : null}
                                  <Column
                                    className="overlay-stat-stack"
                                    style={{
                                      verticalAlign: "top",
                                      width: "168px",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        color: resolved.headingColor,
                                        fontFamily: OverlayStats_fontFamily,
                                        fontSize: "36px",
                                        fontWeight: 300,
                                        lineHeight: "40px",
                                        margin: 0,
                                        textAlign: "center",
                                      }}
                                    >
                                      {stat.value}
                                    </Text>
                                    <Text
                                      style={{
                                        color: resolved.textColor,
                                        fontFamily: OverlayStats_fontFamily,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        margin: "8px 0 0",
                                        textAlign: "center",
                                      }}
                                    >
                                      {stat.label}
                                    </Text>
                                  </Column>
                                </Fragment>
                              ))}
                            </Row>
                          </Fragment>
                        </Section>
                      </Column>
                    </Row>
                  </Fragment>
                </Section>
                <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
              </Section>
            )}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const OverlayStats_OverlayStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: OverlayStats_OverlayStatsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: OverlayStats_responsiveStyles }}
      />
    </EmailHead>
    <Preview>120k+ Active users globally</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: OverlayStats_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <OverlayStats_OverlayStatsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
        featuredLabel={featured?.label}
        featuredStat={featured?.value}
        stats={items}
        theme={theme}
        variant={variant}
      />
    );
  }
  if (layout === "row") {
    return (
      <__SimpleStats
        stats={items}
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
      />
    );
  }
  return (
    <__GridStats
      featuredLabel={featured?.label}
      featuredStat={featured?.value}
      layout={layout === "bento" && reverse ? "bento-reversed" : layout}
      stats={items}
      theme={theme}
      variant={appearance === "accent" ? "accent-column" : appearance}
    />
  );
};

CollectionStats.PreviewProps = {
  appearance: "simple",
  layout: "row",
  reverse: false,
} satisfies CollectionStatsProps;
