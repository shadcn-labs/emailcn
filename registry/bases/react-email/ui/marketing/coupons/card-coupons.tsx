import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CardCouponsVariant =
  | "with-name"
  | "with-pattern"
  | "with-overlay"
  | "with-background-image"
  | "background-image-header";

export interface CardCouponsProps {
  theme?: TailwindConfig;
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
    "https://assets.mailviews.com/images/components/icon-arrow-right.png",
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
      "https://assets.mailviews.com/images/components/coupons/bg-image-3.jpg",
    code: "JFY20OFF",
    heading: "Just for you - 20% OFF",
    logoSrc:
      "https://assets.mailviews.com/images/components/maizzle-insignia-light-lg.png",
  },
  "with-background-image": {
    backgroundImageSrc:
      "https://assets.mailviews.com/images/components/coupons/bg-image-2.jpg",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://assets.mailviews.com/images/components/maizzle-insignia-light-lg.png",
  },
  "with-name": {
    cardBackgroundColor: "#030712",
    heading: "Just for you - 20% OFF",
    logoSrc:
      "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  },
  "with-overlay": {
    backgroundImageSrc:
      "https://assets.mailviews.com/images/components/coupons/bg-image-1.jpg",
    cardBackgroundColor: "#030712",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://assets.mailviews.com/images/components/maizzle-insignia-light-lg.png",
  },
  "with-pattern": {
    backgroundImageSrc:
      "https://assets.mailviews.com/images/components/coupons/pattern.png",
    heading: "An extra 20% OFF",
    logoSrc:
      "https://assets.mailviews.com/images/components/maizzle-insignia-light-lg.png",
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
  <table
    align="center"
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ margin: "0 auto" }}
  >
    <tbody>
      <tr>
        <td
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
        </td>
      </tr>
    </tbody>
  </table>
);

const OfferHeading = ({ props }: { props: ResolvedProps }) => (
  <h3
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
  >
    {props.heading}
  </h3>
);

const StandardCardContent = ({
  codeStyle,
  props,
}: {
  codeStyle: "dark" | "white";
  props: ResolvedProps;
}) => (
  <>
    <div className="coupon-card-edge-spacer" style={{ lineHeight: "28px" }}>
      &zwj;
    </div>
    <div style={{ textAlign: "center" }}>
      <Logo props={props} />
    </div>
    <OfferHeading props={props} />
    <div style={{ lineHeight: "16px" }}>&zwj;</div>
    <CodeBox
      dark={codeStyle === "dark"}
      props={props}
      white={codeStyle === "white"}
    />
    <div className="coupon-card-edge-spacer" style={{ lineHeight: "28px" }}>
      &zwj;
    </div>
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
              <p
                style={{
                  color: props.mutedTextColor,
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  margin: "16px 0 0",
                }}
              >
                {props.recipient}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (variant === "background-image-header") {
    return (
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
                backgroundColor: props.cardBackgroundColor,
                backgroundImage: `url('${props.backgroundImageSrc}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td style={{ width: "10px" }}>&zwj;</td>
                    <td>
                      <div style={{ lineHeight: "12px" }}>&zwj;</div>
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td style={{ width: "50%" }}>
                              <Logo props={props} width={44} />
                            </td>
                            <td
                              style={{
                                color: props.headingColor,
                                fontFamily,
                                fontSize: "16px",
                                textAlign: "right",
                                width: "50%",
                              }}
                            >
                              {props.recipient}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h3
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
                      >
                        {props.heading}
                      </h3>
                      <div style={{ lineHeight: "16px" }}>&zwj;</div>
                      <CodeBox props={props} white />
                      <div style={{ lineHeight: "28px" }}>&zwj;</div>
                    </td>
                    <td style={{ width: "10px" }}>&zwj;</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  const card = (
    <td
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
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(3,7,18,0.6))",
            backgroundColor: "rgba(3,7,18,0.6)",
            borderRadius: "4px",
          }}
        >
          <StandardCardContent codeStyle="dark" props={props} />
        </div>
      ) : (
        <StandardCardContent
          codeStyle={variant === "with-pattern" ? "dark" : "white"}
          props={props}
        />
      )}
    </td>
  );

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>{card}</tr>
      </tbody>
    </table>
  );
};

const Description = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td className="coupon-card-description" style={{ padding: "0 44px" }}>
          <p
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
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

const CouponButton = ({ props }: { props: ResolvedProps }) => (
  <div style={{ textAlign: "center" }}>
    <a
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
    </a>
  </div>
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
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <table
              align="center"
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{ margin: "0 auto" }}
            >
              <tbody>
                <tr>
                  <td style={{ maxWidth: "100%", width: "400px" }}>
                    <div className="coupon-card-shell">
                      <CouponCard props={resolved} variant={variant} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {showDescription ? (
              <>
                <div style={{ lineHeight: "24px" }}>&zwj;</div>
                <Description props={resolved} />
              </>
            ) : null}
            {variant === "with-name" ? (
              <>
                <div style={{ lineHeight: "24px" }}>&zwj;</div>
                <CodeBox props={resolved} />
              </>
            ) : null}
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <CouponButton props={resolved} />
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const CardCoupons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "with-overlay",
  ...props
}: CardCouponsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>An extra 20% OFF</Preview>
    <Tailwind config={theme}>
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
    </Tailwind>
  </Html>
);

CardCoupons.PreviewProps = {
  theme: defaultTheme,
  variant: "with-overlay",
} satisfies CardCouponsProps;
