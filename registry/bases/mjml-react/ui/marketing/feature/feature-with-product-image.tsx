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

export type FeatureWithProductImageVariant = "image-left" | "image-right";

export interface FeatureWithProductImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithProductImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-product-stack { display: block !important; width: 100% !important; }
    .feature-product-image { width: 100% !important; }
    .feature-product-gap { line-height: 24px !important; }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Discover tools that make accepting payments faster, easier, and more reliable, wherever you serve customers.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Powering every payment.",
  headingColor: "#030712",
  imageAlt: "Product Image",
  imageSrc: "https://emailcn.vercel.app/api/email-assets/feature/feature-1.jpg",
  linkColor: "#4f46e5",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<FeatureWithProductImageProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const ProductImage = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-product-stack"
    style={{ verticalAlign: "top", width: "188px" }}
  >
    <img
      alt={props.imageAlt}
      className="feature-product-image"
      src={props.imageSrc}
      style={{ borderRadius: "4px", maxWidth: "100%", verticalAlign: "middle" }}
      width={188}
    />
  </td>
);

const ProductCopy = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-product-stack"
    style={{ textAlign: "left", verticalAlign: "top" }}
  >
    <h2
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "32px",
        margin: 0,
      }}
    >
      {props.heading}
    </h2>
    <p
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: "16px 0 0",
      }}
    >
      {props.body}
    </p>
    <div style={{ lineHeight: "16px" }}>&zwj;</div>
    <div>
      <a
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily,
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: 1,
          padding: "6px 0",
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
            width={16}
          />
        </span>
      </a>
    </div>
  </td>
);

export const FeatureWithProductImageSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const imageLeft = (props.variant ?? "image-left") === "image-left";
  const image = <ProductImage props={resolved} />;
  const copy = <ProductCopy props={resolved} />;

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
                          {imageLeft ? image : copy}
                          <td
                            className="feature-product-stack feature-product-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </td>
                          {imageLeft ? copy : image}
                        </tr>
                      </tbody>
                    </table>
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

export const FeatureWithProductImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "image-left",
  ...props
}: FeatureWithProductImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Powering every payment.</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FeatureWithProductImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithProductImage.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies FeatureWithProductImageProps;
