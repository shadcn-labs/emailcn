import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Text,
  Heading,
  Section,
  Row,
  Column,
  Link,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CouponsWithCenteredTextVariant =
  | "impact"
  | "inline"
  | "impact-alt"
  | "impact-background";

export interface CouponsWithCenteredTextProps {
  theme?: TailwindConfig;
  overline?: string;
  discount?: string;
  code?: string;
  expiry?: string;
  description?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  codeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CouponsWithCenteredTextVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .coupon-centered-description { padding-left: 24px !important; padding-right: 24px !important; }
    .coupon-centered-impact { font-size: 60px !important; }
    .coupon-centered-inline { font-size: 36px !important; }
    .coupon-centered-code { margin-top: 16px !important; }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png",
  backgroundColor: "#fffffe",
  backgroundImageSrc:
    "https://emailcn.vercel.app/api/email-assets/coupons/pattern.png",
  buttonBackgroundColor: "#4f46e5",
  buttonColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Shop now",
  code: "WINTER20OFF",
  codeBackgroundColor: "#f3f4f6",
  description:
    "Use code: WINTER20OFF at checkout, or click the link below to automatically apply the discount to your order.",
  discount: "20% OFF",
  expiry: "until 31/10/2025",
  headingColor: "#030712",
  overline: "Our biggest sale of the year",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<CouponsWithCenteredTextProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const Overline = ({
  light,
  props,
}: {
  light: boolean;
  props: ResolvedProps;
}) => (
  <Text
    style={{
      color: light ? "#fffffe" : props.headingColor,
      fontFamily,
      fontSize: "16px",
      fontWeight: light ? 600 : undefined,
      lineHeight: "24px",
      margin: 0,
      textAlign: "center",
      textTransform: "uppercase",
    }}
  >
    {props.overline === defaults.overline && !light ? (
      <>
        Our <strong>biggest sale</strong> of the year
      </>
    ) : (
      props.overline
    )}
  </Text>
);

const ImpactHeading = ({
  alt,
  light,
  props,
}: {
  alt: boolean;
  light: boolean;
  props: ResolvedProps;
}) => (
  <Heading
    className="coupon-centered-impact"
    style={{
      color: light ? "#fffffe" : props.headingColor,
      fontFamily,
      fontSize: "96px",
      fontWeight: 500,
      lineHeight: "normal",
      margin: 0,
      textAlign: "center",
    }}
    as="h3"
  >
    {alt && props.discount === defaults.discount ? (
      <>
        20%<span style={{ fontWeight: 100 }}>OFF</span>
      </>
    ) : (
      props.discount
    )}
  </Heading>
);

const Description = ({
  light,
  props,
}: {
  light: boolean;
  props: ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column
          className="coupon-centered-description"
          style={{ padding: "0 44px" }}
        >
          <Text
            style={{
              color: light ? "#fffffe" : props.textColor,
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

const CodeBox = ({ props }: { props: ResolvedProps }) => (
  <Section
    align="center"
    className="coupon-centered-code"
    style={{ margin: "0 auto" }}
  >
    <Fragment>
      <Row>
        <Column
          style={{
            backgroundColor: props.codeBackgroundColor,
            borderRadius: "8px",
            color: props.headingColor,
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

export const CouponsWithCenteredTextSection = (props: SectionProps) => {
  const variant = props.variant ?? "impact";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const background = variant === "impact-background";
  const inline = variant === "inline";
  const alt = variant === "impact-alt";

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
              backgroundColor: background
                ? "#030712"
                : resolved.backgroundColor,
              backgroundImage: background
                ? `url('${resolved.backgroundImageSrc}')`
                : undefined,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              paddingBottom: background ? undefined : "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Overline light={background} props={resolved} />
            {inline ? (
              <Heading
                className="coupon-centered-inline"
                style={{
                  color: resolved.headingColor,
                  fontFamily,
                  fontSize: "48px",
                  fontWeight: 500,
                  lineHeight: "normal",
                  margin: 0,
                  textAlign: "center",
                }}
                as="h3"
              >
                {resolved.discount === defaults.discount
                  ? "An extra 20% OFF"
                  : resolved.discount}
              </Heading>
            ) : (
              <ImpactHeading
                alt={alt || background}
                light={background}
                props={resolved}
              />
            )}
            {alt ? (
              <Text
                style={{
                  color: resolved.headingColor,
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {resolved.expiry}
              </Text>
            ) : null}
            {!inline && !alt && !background ? (
              <CodeBox props={resolved} />
            ) : null}
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            <Description light={background} props={resolved} />
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <CouponButton props={resolved} />
            {background ? (
              <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            ) : null}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const CouponsWithCenteredText = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "impact",
  ...props
}: CouponsWithCenteredTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Our biggest sale of the year</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <CouponsWithCenteredTextSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

CouponsWithCenteredText.PreviewProps = {
  theme: defaultTheme,
  variant: "impact",
} satisfies CouponsWithCenteredTextProps;
