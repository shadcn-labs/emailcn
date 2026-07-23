import { Body, Container, Head, Html, Preview } from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .grid-stat-stack { display: block !important; width: 100% !important; }
    .grid-stat-gap { line-height: 24px !important; }
  }
`;

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

const defaults = {
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

type SectionProps = Omit<GridStatsProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & { stats: { label: string; value: string }[] };

const StatText = ({
  label,
  props,
  value,
}: {
  label: string;
  props: ResolvedProps;
  value: string;
}) => (
  <>
    <p
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: "40px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {value}
    </p>
    <p
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </p>
  </>
);

interface BentoItem {
  featured: boolean;
  label: string;
  value: string;
  width: string;
}

type BentoRow = [BentoItem, BentoItem];
type BentoRows = [BentoRow, BentoRow];

const getBentoCardBackground = (
  dark: boolean,
  boxed: boolean,
  props: ResolvedProps
) => {
  if (dark) {
    return props.accentBackgroundColor;
  }
  if (boxed) {
    return props.cardBackgroundColor;
  }
};

const getBentoAccentColor = (variant: GridStatsVariant, reversed: boolean) => {
  if (variant === "boxed") {
    return;
  }
  return reversed ? "#34d399" : "#fbbf24";
};

const getStats = (variant: GridStatsVariant, useThreeColumns: boolean) => {
  if (variant === "simple") {
    return simpleStats;
  }
  if (useThreeColumns) {
    return detailedStats;
  }
  return bentoStats;
};

const getBentoRows = (props: ResolvedProps, reversed: boolean): BentoRows => {
  const feature: BentoItem = {
    featured: true,
    label: `${props.featuredLabel} since 2018`,
    value: props.featuredStat,
    width: "320px",
  };
  const uptime: BentoItem = {
    featured: false,
    label: props.stats[0]?.label ?? "",
    value: props.stats[0]?.value ?? "",
    width: "208px",
  };
  const growth: BentoItem = {
    featured: true,
    label: props.stats[1]?.label ?? "",
    value: props.stats[1]?.value ?? "",
    width: "320px",
  };
  const support: BentoItem = {
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

const BentoCard = ({
  accentColor,
  bordered,
  item,
  props,
  variant,
}: {
  accentColor?: string;
  bordered: boolean;
  item: BentoItem;
  props: ResolvedProps;
  variant: GridStatsVariant;
}) => {
  const dark =
    variant === "accent-column" &&
    item.featured &&
    item.value === props.featuredStat;
  const boxed = variant === "boxed" || variant === "accent-column";
  return (
    <td className="grid-stat-stack" style={{ width: item.width }}>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{
          backgroundColor: getBentoCardBackground(dark, boxed, props),
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
        <tbody>
          <tr>
            <td
              style={{
                padding:
                  variant === "bordered" && bordered ? "24px 16px" : "0 16px",
              }}
            >
              <p
                style={{
                  color: dark
                    ? (accentColor ?? "#c7d2fe")
                    : (accentColor ?? props.headingColor),
                  fontFamily,
                  fontSize: item.featured ? "72px" : "36px",
                  fontWeight: item.featured ? 500 : 300,
                  lineHeight: item.featured ? 1 : "40px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  color: dark ? "#d1d5db" : props.textColor,
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: item.featured ? 0 : "8px 0 0",
                  textAlign: "center",
                }}
              >
                {item.label}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

const BentoLayout = ({
  props,
  reversed,
  variant,
}: {
  props: ResolvedProps;
  reversed: boolean;
  variant: GridStatsVariant;
}) => {
  const accentColor = getBentoAccentColor(variant, reversed);
  const rows = getBentoRows(props, reversed);
  return (
    <>
      {rows.map((items, rowIndex) => (
        <Fragment key={String(rowIndex)}>
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            width="100%"
          >
            <tbody>
              <tr>
                <BentoCard
                  accentColor={items[0].featured ? accentColor : undefined}
                  bordered={rowIndex === 1}
                  item={items[0]}
                  props={props}
                  variant={variant}
                />
                <td
                  className="grid-stat-stack grid-stat-gap"
                  style={{ width: "24px" }}
                >
                  &zwj;
                </td>
                <BentoCard
                  accentColor={items[1].featured ? accentColor : undefined}
                  bordered={rowIndex === 1}
                  item={items[1]}
                  props={props}
                  variant={variant}
                />
              </tr>
            </tbody>
          </table>
          {rowIndex === 0 ? (
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
          ) : null}
        </Fragment>
      ))}
    </>
  );
};

export const GridStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "boxed";
  const layout = props.layout ?? "three-columns";
  const useThreeColumns = variant === "simple" || layout === "three-columns";
  const resolved = {
    ...defaults,
    stats: getStats(variant, useThreeColumns),
    ...props,
  } as ResolvedProps;
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0 24px" }}>
                    {useThreeColumns ? (
                      <>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  backgroundColor: featuredBackgroundColor,
                                  border: isOutlined
                                    ? `1px solid ${resolved.borderColor}`
                                    : undefined,
                                  borderRadius:
                                    isOutlined || isBoxed ? "8px" : undefined,
                                  padding:
                                    isOutlined || isBoxed ? "24px" : undefined,
                                }}
                              >
                                <p
                                  style={{
                                    color: featuredColor,
                                    fontFamily,
                                    fontSize: "72px",
                                    fontWeight: 500,
                                    margin: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  {resolved.featuredStat}
                                </p>
                                <p
                                  style={{
                                    color: isAccent
                                      ? "#d1d5db"
                                      : resolved.textColor,
                                    fontFamily,
                                    fontSize: "18px",
                                    lineHeight: "28px",
                                    margin: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  {resolved.featuredLabel}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          role="presentation"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              {resolved.stats.slice(0, 3).map((stat, index) => (
                                <Fragment key={stat.label + stat.value}>
                                  {index > 0 ? (
                                    <td
                                      className="grid-stat-stack grid-stat-gap"
                                      style={{ width: "24px" }}
                                    >
                                      &zwj;
                                    </td>
                                  ) : null}
                                  <td
                                    className="grid-stat-stack"
                                    style={{
                                      verticalAlign: "top",
                                      width: "168px",
                                    }}
                                  >
                                    {variant === "simple" ? (
                                      <StatText
                                        label={stat.label}
                                        props={resolved}
                                        value={stat.value}
                                      />
                                    ) : (
                                      <table
                                        border={0}
                                        cellPadding={0}
                                        cellSpacing={0}
                                        role="presentation"
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
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                padding: isBordered
                                                  ? "20px 16px"
                                                  : "24px 16px",
                                              }}
                                            >
                                              <StatText
                                                label={stat.label}
                                                props={resolved}
                                                value={stat.value}
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    )}
                                  </td>
                                </Fragment>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </>
                    ) : (
                      <BentoLayout
                        props={resolved}
                        reversed={layout === "bento-reversed"}
                        variant={variant}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const GridStats = ({
  pageBackgroundColor = "#f1f5f9",
  layout = "three-columns",
  theme: _theme = defaultTheme,
  variant = "boxed",
  ...props
}: GridStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>120k+ Active users globally</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <GridStatsSection
          {...props}
          layout={layout}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

GridStats.PreviewProps = {
  layout: "three-columns",
  theme: defaultTheme,
  variant: "boxed",
} satisfies GridStatsProps;
