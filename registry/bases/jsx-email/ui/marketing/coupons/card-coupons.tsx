import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CardCouponsVariant =
  | "with-name"
  | "with-pattern"
  | "with-overlay"
  | "with-background-image"
  | "background-image-header";

export interface CardCouponsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  recipient?: string;
  code?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  codeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CardCouponsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .coupon-card-logo { width: 88px !important; }
    .coupon-card-heading { font-size: 20px !important; line-height: 28px !important; }
    .coupon-card-description { padding-left: 24px !important; padding-right: 24px !important; }
    .coupon-card-name-pad { padding-top: 32px !important; padding-bottom: 32px !important; }
    .coupon-card-edge-spacer { line-height: 16px !important; }
  }

  @media only screen and (max-width: 430px) {
    .coupon-card-shell { padding-left: 24px !important; padding-right: 24px !important; }
  }
`;

const sharedDefaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png",
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Shop now",
  cardBackgroundColor: "#1f2937",
  code: "WINTER20OFF",
  codeBackgroundColor: "#f3f4f6",
  description:
    "Use code: WINTER20OFF at checkout, or click the link below to automatically apply the discount to your order.",
  headingColor: "#fffffe",
  logoAlt: "Maizzle",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  recipient: "Jenna Adams",
  textColor: "#4b5563",
};

const variantDefaults: Record<CardCouponsVariant, Partial<CardCouponsProps>> = {
  "background-image-header": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-3.jpg",
    code: "JFY20OFF",
    heading: "Just for you - 20% OFF",
    logoSrc:
      "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-light-lg.png",
  },
  "with-background-image": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-2.jpg",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-light-lg.png",
  },
  "with-name": {
    cardBackgroundColor: "#030712",
    heading: "Just for you - 20% OFF",
    logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  },
  "with-overlay": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-1.jpg",
    cardBackgroundColor: "#030712",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-light-lg.png",
  },
  "with-pattern": {
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/coupons/pattern.png",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-light-lg.png",
  },
};

type SectionProps = Omit<CardCouponsProps, "theme">;
type ResolvedProps = typeof sharedDefaults & SectionProps;

const Logo = ({
  props,
  width = 100,
}: {
  props: ResolvedProps;
  width?: number;
}) => (
  <Img
    alt={props.logoAlt}
    className={width === 100 ? "coupon-card-logo" : undefined}
    src={props.logoSrc}
    style={{ display: "inline", maxWidth: "100%", verticalAlign: "middle" }}
    width={width}
  />
);

const getCodeBackgroundColor = ({
  dark,
  props,
  white,
}: {
  dark: boolean;
  props: ResolvedProps;
  white: boolean;
}) => {
  if (white) {
    return "#fffffe";
  }
  if (dark) {
    return props.cardBackgroundColor;
  }
  return props.codeBackgroundColor;
};

const CodeBox = ({
  dark = false,
  props,
  white = false,
}: {
  dark?: boolean;
  props: ResolvedProps;
  white?: boolean;
}) => (
  <Section align="center" style={{ margin: "0 auto" }}>
    <Fragment>
      <Row>
        <Column
          style={{
            backgroundColor: getCodeBackgroundColor({ dark, props, white }),
            border: dark ? "1px solid #374151" : undefined,
            borderRadius: "8px",
            color: white || !dark ? "#030712" : props.headingColor,
            fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            padding: "8px 16px",
          }}
        >
          {props.code}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const OfferHeading = ({ props }: { props: ResolvedProps }) => (
  <Heading
    className="coupon-card-heading"
    style={{
      color: props.headingColor,
      fontFamily,
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
      margin: "36px 0 0",
      textAlign: "center",
    }}
    as="h3"
  >
    {props.heading}
  </Heading>
);

const StandardCardContent = ({
  codeStyle,
  props,
}: {
  codeStyle: "dark" | "white";
  props: ResolvedProps;
}) => (
  <>
    <Section className="coupon-card-edge-spacer" style={{ lineHeight: "28px" }}>
      &zwj;
    </Section>
    <Section style={{ textAlign: "center" }}>
      <Logo props={props} />
    </Section>
    <OfferHeading props={props} />
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <CodeBox
      dark={codeStyle === "dark"}
      props={props}
      white={codeStyle === "white"}
    />
    <Section className="coupon-card-edge-spacer" style={{ lineHeight: "28px" }}>
      &zwj;
    </Section>
  </>
);

const CouponCard = ({
  props,
  variant,
}: {
  props: ResolvedProps;
  variant: CardCouponsVariant;
}) => {
  if (variant === "with-name") {
    return (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column
              className="coupon-card-name-pad"
              style={{
                backgroundColor: props.cardBackgroundColor,
                borderRadius: "8px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                padding: "44px 10px",
                textAlign: "center",
              }}
            >
              <Logo props={props} />
              <OfferHeading props={props} />
              <Text
                style={{
                  color: props.mutedTextColor,
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: "16px 0 0",
                }}
              >
                {props.recipient}
              </Text>
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }

  if (variant === "background-image-header") {
    return (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column
              style={{
                backgroundColor: props.cardBackgroundColor,
                backgroundImage: `url('${props.backgroundImageSrc}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              }}
            >
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column style={{ width: "10px" }}>&zwj;</Column>
                    <Column>
                      <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
                      <Section width="100%">
                        <Fragment>
                          <Row>
                            <Column style={{ width: "50%" }}>
                              <Logo props={props} width={44} />
                            </Column>
                            <Column
                              style={{
                                color: props.headingColor,
                                fontFamily,
                                fontSize: "16px",
                                textAlign: "right",
                                width: "50%",
                              }}
                            >
                              {props.recipient}
                            </Column>
                          </Row>
                        </Fragment>
                      </Section>
                      <Heading
                        className="coupon-card-heading"
                        style={{
                          color: props.headingColor,
                          fontFamily,
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "32px",
                          margin: "72px 0 0",
                          textAlign: "center",
                        }}
                        as="h3"
                      >
                        {props.heading}
                      </Heading>
                      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                      <CodeBox props={props} white />
                      <Section style={{ lineHeight: "28px" }}>&zwj;</Section>
                    </Column>
                    <Column style={{ width: "10px" }}>&zwj;</Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }

  const card = (
    <Column
      style={{
        backgroundColor: props.cardBackgroundColor,
        backgroundImage: `url('${props.backgroundImageSrc}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "8px",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        padding: variant === "with-overlay" ? "12px 10px" : "0 10px",
      }}
    >
      {variant === "with-overlay" ? (
        <Section
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(3,7,18,0.6))",
            backgroundColor: "rgba(3,7,18,0.6)",
            borderRadius: "4px",
          }}
        >
          <StandardCardContent codeStyle="dark" props={props} />
        </Section>
      ) : (
        <StandardCardContent
          codeStyle={variant === "with-pattern" ? "dark" : "white"}
          props={props}
        />
      )}
    </Column>
  );

  return (
    <Section width="100%">
      <Fragment>
        <Row>{card}</Row>
      </Fragment>
    </Section>
  );
};

const Description = ({ props }: { props: ResolvedProps }) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column
          className="coupon-card-description"
          style={{ padding: "0 44px" }}
        >
          <Text
            style={{
              color: props.textColor,
              fontFamily,
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              margin: 0,
              textAlign: "center",
            }}
          >
            Use code: <strong>{props.code}</strong> at checkout, or click the
            link below to automatically apply the discount to your order.
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const CouponButton = ({ props }: { props: ResolvedProps }) => (
  <Section style={{ textAlign: "center" }}>
    <Link
      href={props.buttonHref}
      style={{
        backgroundColor: props.buttonBackgroundColor,
        borderRadius: "8px",
        color: props.buttonColor,
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1,
        padding: "14px 20px",
        textDecoration: "none",
      }}
    >
      <span style={{ marginRight: "8px" }}>{props.buttonLabel}</span>
      <span>
        <Img
          alt=""
          src={props.arrowIconSrc}
          style={{
            display: "inline",
            maxWidth: "100%",
            verticalAlign: "baseline",
          }}
          width={12}
        />
      </span>
    </Link>
  </Section>
);

export const CardCouponsSection = (props: SectionProps) => {
  const variant = props.variant ?? "with-overlay";
  const resolved = {
    ...sharedDefaults,
    ...variantDefaults[variant],
    ...props,
  } as ResolvedProps;
  const showDescription =
    variant === "with-name" ||
    variant === "with-pattern" ||
    variant === "with-overlay";

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
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section align="center" style={{ margin: "0 auto" }}>
              <Fragment>
                <Row>
                  <Column style={{ maxWidth: "100%", width: "400px" }}>
                    <Section className="coupon-card-shell">
                      <CouponCard props={resolved} variant={variant} />
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
            {showDescription ? (
              <>
                <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                <Description props={resolved} />
              </>
            ) : null}
            {variant === "with-name" ? (
              <>
                <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                <CodeBox props={resolved} />
              </>
            ) : null}
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <CouponButton props={resolved} />
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const CardCoupons = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "with-overlay",
  ...props
}: CardCouponsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>An extra 20% OFF</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CardCouponsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

CardCoupons.PreviewProps = {
  theme: defaultTheme,
  variant: "with-overlay",
} satisfies CardCouponsProps;
