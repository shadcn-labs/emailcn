import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Link,
  Heading,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CouponsWithContentOverlayedVariant =
  | "split"
  | "centered"
  | "code-bottom";

export interface CouponsWithContentOverlayedProps {
  theme?: EmailThemeTokens;
  overline?: string;
  discount?: string;
  code?: string;
  expiry?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  headingColor?: string;
  codeBackgroundColor?: string;
  codeColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CouponsWithContentOverlayedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .coupon-overlay-impact { font-size: 60px !important; }
    .coupon-overlay-inline { font-size: 36px !important; }
    .coupon-overlay-split-space { line-height: 192px !important; }
    .coupon-overlay-centered-space { line-height: 152px !important; }
    .coupon-overlay-bottom-space { line-height: 160px !important; }
  }
`;

const sharedDefaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png",
  buttonBackgroundColor: "#030712",
  buttonColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Shop now",
  code: "WINTER20OFF",
  codeBackgroundColor: "#fffffe",
  codeColor: "#030712",
  discount: "20% OFF",
  expiry: "until 31/10/2025",
  headingColor: "#fffffe",
  overline: "Our biggest sale of the year",
  pageBackgroundColor: "#f1f5f9",
};

const backgrounds: Record<CouponsWithContentOverlayedVariant, string> = {
  centered:
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-6.jpg",
  "code-bottom":
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-4.jpg",
  split: "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-5.jpg",
};

type SectionProps = Omit<CouponsWithContentOverlayedProps, "theme">;
type ResolvedProps = typeof sharedDefaults & SectionProps;

const Overline = ({
  bold,
  dark,
  props,
}: {
  bold: boolean;
  dark: boolean;
  props: ResolvedProps;
}) => (
  <Text
    style={{
      color: dark ? "#030712" : props.headingColor,
      fontFamily,
      fontSize: "16px",
      fontWeight: bold ? undefined : 500,
      lineHeight: "24px",
      margin: 0,
      textAlign: "center",
      textTransform: "uppercase",
    }}
  >
    {bold && props.overline === sharedDefaults.overline ? (
      <>
        Our <strong>biggest sale</strong> of the year
      </>
    ) : (
      props.overline
    )}
  </Text>
);

const CodeBlock = ({ props }: { props: ResolvedProps }) => (
  <>
    <Text
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "24px 0 12px",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      Your code:
    </Text>
    <Section align="center" style={{ margin: "0 auto" }}>
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: props.codeBackgroundColor,
              borderRadius: "8px",
              color: props.codeColor,
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
  </>
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

export const CouponsWithContentOverlayedSection = (props: SectionProps) => {
  const variant = props.variant ?? "code-bottom";
  const resolved = {
    ...sharedDefaults,
    backgroundImageSrc: backgrounds[variant],
    ...props,
  } as ResolvedProps;
  const centered = variant === "centered";
  const split = variant === "split";

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
              width: "600px",
            }}
          >
            {centered ? (
              <Section
                className="coupon-overlay-centered-space"
                style={{ lineHeight: "182px" }}
              >
                &zwj;
              </Section>
            ) : null}
            {!centered && !split ? (
              <Section
                className="coupon-overlay-bottom-space"
                style={{ lineHeight: "216px" }}
              >
                &zwj;
              </Section>
            ) : null}
            {split ? (
              <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            ) : null}
            <Overline bold={!centered} dark={centered} props={resolved} />
            {split ? (
              <Heading
                className="coupon-overlay-inline"
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
                {resolved.discount === sharedDefaults.discount
                  ? "An extra 20% OFF"
                  : resolved.discount}
              </Heading>
            ) : (
              <Heading
                className="coupon-overlay-impact"
                style={{
                  color: centered ? "#030712" : resolved.headingColor,
                  fontFamily,
                  fontSize: "96px",
                  fontWeight: 500,
                  lineHeight: "normal",
                  margin: 0,
                  textAlign: "center",
                }}
                as="h3"
              >
                {centered && resolved.discount === sharedDefaults.discount ? (
                  <>
                    20% <span style={{ fontWeight: 100 }}>OFF</span>
                  </>
                ) : (
                  resolved.discount
                )}
              </Heading>
            )}
            {centered ? (
              <Text
                style={{
                  color: "#030712",
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {resolved.expiry}
              </Text>
            ) : (
              <CodeBlock props={resolved} />
            )}
            {split ? (
              <Section
                className="coupon-overlay-split-space"
                style={{ lineHeight: "274px" }}
              >
                &zwj;
              </Section>
            ) : (
              <Section style={{ lineHeight: centered ? "24px" : "44px" }}>
                &zwj;
              </Section>
            )}
            {split ? (
              <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            ) : null}
            <CouponButton props={resolved} />
            {centered ? (
              <Section
                className="coupon-overlay-centered-space"
                style={{ lineHeight: "182px" }}
              >
                &zwj;
              </Section>
            ) : (
              <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            )}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const CouponsWithContentOverlayed = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "code-bottom",
  ...props
}: CouponsWithContentOverlayedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Our biggest sale of the year</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CouponsWithContentOverlayedSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

CouponsWithContentOverlayed.PreviewProps = {
  theme: defaultTheme,
  variant: "code-bottom",
} satisfies CouponsWithContentOverlayedProps;
