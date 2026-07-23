import {
  Body,
  Head,
  Html,
  Preview,
  Column,
  Section,
  Row,
  Heading,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FeaturedBrandsLogoGridTone = "outlined" | "boxed";
export type FeaturedBrandsLogoGridAlignment = "left" | "center" | "right";

export interface FeaturedBrandsLogoGridProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  featuredLogo?: { alt: string; src: string; width: number };
  supportingLogos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: FeaturedBrandsLogoGridTone;
  alignment?: FeaturedBrandsLogoGridAlignment;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .featured-logo-stack { display: block !important; width: 100% !important; }
    .featured-logo-small-column { display: flex !important; width: 100% !important; }
    .featured-logo-small-card { width: 50% !important; }
    .featured-logo-small-gap { width: 16px !important; }
    .featured-logo-large { line-height: 128px !important; }
    .featured-logo-description-gap { line-height: 20px !important; }
  }
`;

const defaults = {
  alignment: "left" as FeaturedBrandsLogoGridAlignment,
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  featuredLogo: {
    alt: "Monarch",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-1.png",
    width: 167,
  },
  pageBackgroundColor: "#f1f5f9",
  supportingLogos: [
    {
      alt: "Accentic",
      src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-2.png",
      width: 71,
    },
    {
      alt: "Amada",
      src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-3.png",
      width: 78,
    },
  ],
  textColor: "#4b5563",
  title: "Brands we support",
  titleColor: "#030712",
  tone: "outlined" as FeaturedBrandsLogoGridTone,
};

type SectionProps = Omit<FeaturedBrandsLogoGridProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;
type ColumnKind = "large" | "first" | "second";

const getCardStyle = (
  props: ResolvedProps,
  tone: FeaturedBrandsLogoGridTone
) => ({
  backgroundColor: tone === "boxed" ? props.boxBackgroundColor : undefined,
  border: tone === "outlined" ? `1px solid ${props.borderColor}` : undefined,
  borderRadius: "4px",
  textAlign: "center" as const,
});

const LargeCard = ({
  props,
  tone,
}: {
  props: ResolvedProps;
  tone: FeaturedBrandsLogoGridTone;
}) => (
  <Column
    className="featured-logo-stack featured-logo-large"
    style={{
      ...getCardStyle(props, tone),
      lineHeight: "64px",
      verticalAlign: "middle",
      width: "240px",
    }}
  >
    <Img
      alt={props.featuredLogo.alt}
      src={props.featuredLogo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={props.featuredLogo.width}
    />
  </Column>
);

const SmallCard = ({
  logo,
  props,
  tone,
}: {
  logo: (typeof defaults.supportingLogos)[number];
  props: ResolvedProps;
  tone: FeaturedBrandsLogoGridTone;
}) => (
  <Section
    className="featured-logo-small-card"
    style={{
      ...getCardStyle(props, tone),
      lineHeight: "64px",
    }}
  >
    <Img
      alt={logo.alt}
      src={logo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={logo.width}
    />
  </Section>
);

const SmallColumn = ({
  reversed,
  props,
  tone,
}: {
  reversed: boolean;
  props: ResolvedProps;
  tone: FeaturedBrandsLogoGridTone;
}) => {
  const first = reversed ? props.supportingLogos[1] : props.supportingLogos[0];
  const second = reversed ? props.supportingLogos[0] : props.supportingLogos[1];
  return (
    <Column className="featured-logo-small-column" style={{ width: "112px" }}>
      <SmallCard logo={first} props={props} tone={tone} />
      <Section
        className="featured-logo-small-gap"
        style={{ lineHeight: "16px" }}
      >
        &zwj;
      </Section>
      <SmallCard logo={second} props={props} tone={tone} />
    </Column>
  );
};

const columnOrders: Record<FeaturedBrandsLogoGridAlignment, ColumnKind[]> = {
  center: ["first", "large", "second"],
  left: ["large", "first", "second"],
  right: ["first", "second", "large"],
};

export const FeaturedBrandsLogoGridSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const { tone } = resolved;
  const order = columnOrders[resolved.alignment];

  const renderColumn = (kind: ColumnKind) => {
    if (kind === "large") {
      return <LargeCard props={resolved} tone={tone} />;
    }
    return (
      <SmallColumn props={resolved} reversed={kind === "second"} tone={tone} />
    );
  };

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
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Heading
                      style={{
                        color: resolved.titleColor,
                        fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                      as="h3"
                    >
                      {resolved.title}
                    </Heading>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {order.map((kind, index) => (
                            <Fragment key={kind}>
                              {index > 0 ? (
                                <Column
                                  className="featured-logo-stack"
                                  style={{ width: "16px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              {renderColumn(kind)}
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section
                      className="featured-logo-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </Section>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.description}
                    </Text>
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

export const FeaturedBrandsLogoGrid = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  tone = "outlined",
  ...props
}: FeaturedBrandsLogoGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Brands we support</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FeaturedBrandsLogoGridSection
        {...props}
        alignment={alignment}
        pageBackgroundColor={pageBackgroundColor}
        tone={tone}
      />
    </Body>
  </Html>
);

FeaturedBrandsLogoGrid.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
  tone: "outlined",
} satisfies FeaturedBrandsLogoGridProps;
