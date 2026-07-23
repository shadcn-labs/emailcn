import { Body, Container, Head, Html, Preview } from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .overlay-stat-stack { display: block !important; width: 100% !important; }
    .overlay-stat-gap { line-height: 24px !important; }
  }
`;

const common = {
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#e5e7eb",
};

interface OverlayVariantDefaults {
  backgroundImageSrc: string;
  featuredLabel: string;
  featuredStat: string;
  overlayColor: string;
  stats: { label: ReactNode; value: string }[];
}

const variants: Record<OverlayStatsVariant, OverlayVariantDefaults> = {
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

type SectionProps = Omit<OverlayStatsProps, "theme">;
type ResolvedProps = typeof common & SectionProps & OverlayVariantDefaults;

const OverlayStatCopy = ({
  featured,
  label,
  props,
  value,
}: {
  featured: boolean;
  label: ReactNode;
  props: ResolvedProps;
  value: string;
}) => (
  <>
    <p
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: featured ? "72px" : "36px",
        fontWeight: featured ? 500 : 300,
        lineHeight: featured ? 1 : "40px",
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
        margin: featured ? 0 : "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </p>
  </>
);

const OverlayThreeColumnLayout = ({ props }: { props: ResolvedProps }) => (
  <>
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
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{
                backgroundColor: props.overlayColor,
                borderRadius: "8px",
                height: "144px",
              }}
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "24px" }}>
                    <p
                      style={{
                        color: props.headingColor,
                        fontFamily,
                        fontSize: "72px",
                        fontWeight: 500,
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {props.featuredStat}
                    </p>
                    <p
                      style={{
                        color: props.textColor,
                        fontFamily,
                        fontSize: "18px",
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {props.featuredLabel}
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
                  {props.stats.slice(0, 3).map((stat, index) => (
                    <Fragment key={index}>
                      {index > 0 ? (
                        <td
                          className="overlay-stat-stack overlay-stat-gap"
                          style={{ width: "24px" }}
                        >
                          &zwj;
                        </td>
                      ) : null}
                      <td
                        className="overlay-stat-stack"
                        style={{ verticalAlign: "top", width: "168px" }}
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          role="presentation"
                          style={{
                            backgroundColor: props.overlayColor,
                            borderRadius: "8px",
                            height: "144px",
                          }}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: "24px 16px" }}>
                                <OverlayStatCopy
                                  featured={false}
                                  label={stat.label}
                                  props={props}
                                  value={stat.value}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </Fragment>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{ lineHeight: "44px" }}>&zwj;</div>
  </>
);

interface OverlayBentoItem {
  featured: boolean;
  label: ReactNode;
  value: string;
  width: string;
}

const OverlayBentoCard = ({
  item,
  props,
}: {
  item: OverlayBentoItem;
  props: ResolvedProps;
}) => (
  <td className="overlay-stat-stack" style={{ width: item.width }}>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        backgroundColor: props.overlayColor,
        borderRadius: "8px",
        height: "180px",
      }}
      width="100%"
    >
      <tbody>
        <tr>
          <td style={{ padding: "0 16px" }}>
            <OverlayStatCopy
              featured={item.featured}
              label={item.label}
              props={props}
              value={item.value}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </td>
);

const OverlayBentoLayout = ({
  props,
  reversed,
}: {
  props: ResolvedProps;
  reversed: boolean;
}) => {
  const feature: OverlayBentoItem = {
    featured: true,
    label: props.featuredLabel,
    value: props.featuredStat,
    width: "320px",
  };
  const first: OverlayBentoItem = {
    featured: false,
    label: props.stats[0]?.label ?? "",
    value: props.stats[0]?.value ?? "",
    width: "208px",
  };
  const second: OverlayBentoItem = {
    featured: true,
    label: props.stats[1]?.label ?? "",
    value: props.stats[1]?.value ?? "",
    width: "320px",
  };
  const third: OverlayBentoItem = {
    featured: false,
    label: props.stats[2]?.label ?? "",
    value: props.stats[2]?.value ?? "",
    width: "208px",
  };
  const rows: [OverlayBentoItem, OverlayBentoItem][] = reversed
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
            <td style={{ width: "24px" }}>&zwj;</td>
            <td>
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
                        <OverlayBentoCard item={items[0]} props={props} />
                        <td
                          className="overlay-stat-stack overlay-stat-gap"
                          style={{ width: "24px" }}
                        >
                          &zwj;
                        </td>
                        <OverlayBentoCard item={items[1]} props={props} />
                      </tr>
                    </tbody>
                  </table>
                  {rowIndex === 0 ? (
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  ) : null}
                </Fragment>
              ))}
            </td>
            <td style={{ width: "24px" }}>&zwj;</td>
          </tr>
        </tbody>
      </table>
      <div style={{ lineHeight: "44px" }}>&zwj;</div>
    </>
  );
};

const getOverlayContent = (
  variant: OverlayStatsVariant,
  props: ResolvedProps,
  defaultContent: ReactNode
) => {
  if (variant === "default") {
    return defaultContent;
  }
  if (variant === "three-columns") {
    return <OverlayThreeColumnLayout props={props} />;
  }
  return (
    <OverlayBentoLayout props={props} reversed={variant === "bento-reversed"} />
  );
};

export const OverlayStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = {
    ...common,
    ...variants[variant],
    ...props,
  } as ResolvedProps;
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
              backgroundImage: `url('${resolved.backgroundImageSrc}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              textAlign: "left",
              width: "600px",
            }}
          >
            {getOverlayContent(
              variant,
              resolved,
              <div style={{ backgroundColor: resolved.overlayColor }}>
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
                        <p
                          style={{
                            color: resolved.headingColor,
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
                            color: resolved.textColor,
                            fontFamily,
                            fontSize: "18px",
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {resolved.featuredLabel}
                        </p>
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
                                <Fragment key={index}>
                                  {index > 0 ? (
                                    <td
                                      className="overlay-stat-stack overlay-stat-gap"
                                      style={{ width: "24px" }}
                                    >
                                      &zwj;
                                    </td>
                                  ) : null}
                                  <td
                                    className="overlay-stat-stack"
                                    style={{
                                      verticalAlign: "top",
                                      width: "168px",
                                    }}
                                  >
                                    <p
                                      style={{
                                        color: resolved.headingColor,
                                        fontFamily,
                                        fontSize: "36px",
                                        fontWeight: 300,
                                        lineHeight: "40px",
                                        margin: 0,
                                        textAlign: "center",
                                      }}
                                    >
                                      {stat.value}
                                    </p>
                                    <p
                                      style={{
                                        color: resolved.textColor,
                                        fontFamily,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        margin: "8px 0 0",
                                        textAlign: "center",
                                      }}
                                    >
                                      {stat.label}
                                    </p>
                                  </td>
                                </Fragment>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ lineHeight: "44px" }}>&zwj;</div>
              </div>
            )}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const OverlayStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "default",
  ...props
}: OverlayStatsProps) => (
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
        <OverlayStatsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

OverlayStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies OverlayStatsProps;
