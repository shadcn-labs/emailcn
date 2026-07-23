import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "jsx-email";
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
    <Text
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
    </Text>
    <Text
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
    </Text>
  </>
);

const OverlayThreeColumnLayout = ({ props }: { props: ResolvedProps }) => (
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
                        fontFamily,
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
                        fontFamily,
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
                                <OverlayStatCopy
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
            <OverlayStatCopy
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
                        <OverlayBentoCard item={items[0]} props={props} />
                        <Column
                          className="overlay-stat-stack overlay-stat-gap"
                          style={{ width: "24px" }}
                        >
                          &zwj;
                        </Column>
                        <OverlayBentoCard item={items[1]} props={props} />
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
            {getOverlayContent(
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
                            fontFamily,
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
                            fontFamily,
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
                                        fontFamily,
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
                                        fontFamily,
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
