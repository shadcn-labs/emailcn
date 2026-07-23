/* eslint-disable @next/next/no-img-element */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <p
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
  </p>
);

const CodeBlock = ({ props }: { props: ResolvedProps }) => (
  <>
    <p
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
    </p>
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
          </td>
        </tr>
      </tbody>
    </table>
  </>
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
        <img
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
              width: "600px",
            }}
          >
            {centered ? (
              <div
                className="coupon-overlay-centered-space"
                style={{ lineHeight: "182px" }}
              >
                &zwj;
              </div>
            ) : null}
            {!centered && !split ? (
              <div
                className="coupon-overlay-bottom-space"
                style={{ lineHeight: "216px" }}
              >
                &zwj;
              </div>
            ) : null}
            {split ? <div style={{ lineHeight: "44px" }}>&zwj;</div> : null}
            <Overline bold={!centered} dark={centered} props={resolved} />
            {split ? (
              <h3
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
              >
                {resolved.discount === sharedDefaults.discount
                  ? "An extra 20% OFF"
                  : resolved.discount}
              </h3>
            ) : (
              <h3
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
              >
                {centered && resolved.discount === sharedDefaults.discount ? (
                  <>
                    20% <span style={{ fontWeight: 100 }}>OFF</span>
                  </>
                ) : (
                  resolved.discount
                )}
              </h3>
            )}
            {centered ? (
              <p
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
              </p>
            ) : (
              <CodeBlock props={resolved} />
            )}
            {split ? (
              <div
                className="coupon-overlay-split-space"
                style={{ lineHeight: "274px" }}
              >
                &zwj;
              </div>
            ) : (
              <div style={{ lineHeight: centered ? "24px" : "44px" }}>
                &zwj;
              </div>
            )}
            {split ? <div style={{ lineHeight: "44px" }}>&zwj;</div> : null}
            <CouponButton props={resolved} />
            {centered ? (
              <div
                className="coupon-overlay-centered-space"
                style={{ lineHeight: "182px" }}
              >
                &zwj;
              </div>
            ) : (
              <div style={{ lineHeight: "44px" }}>&zwj;</div>
            )}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const CouponsWithContentOverlayed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "code-bottom",
  ...props
}: CouponsWithContentOverlayedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our biggest sale of the year</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <CouponsWithContentOverlayedSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CouponsWithContentOverlayed.PreviewProps = {
  theme: defaultTheme,
  variant: "code-bottom",
} satisfies CouponsWithContentOverlayedProps;
