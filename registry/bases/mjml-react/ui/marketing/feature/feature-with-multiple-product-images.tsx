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

export type FeatureWithMultipleProductImagesVariant =
  | "logo-left"
  | "logo-right"
  | "images-left"
  | "images-right";

export interface FeatureWithMultipleProductImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  middleImageSrc?: string;
  middleImageAlt?: string;
  smallImageSrc?: string;
  smallImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithMultipleProductImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-multiple-centered { margin-left: auto !important; margin-right: auto !important; }
    .feature-multiple-stack { display: block !important; width: 100% !important; }
    .feature-multiple-hide-mobile { display: none !important; }
    .feature-multiple-auto { width: auto !important; }
    .feature-multiple-gap { line-height: 44px !important; }
  }
`;

const sharedDefaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  headingColor: "#030712",
  linkColor: "#4f46e5",
  logoAlt: "Visa",
  logoBackgroundColor: "#f3f4f6",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/logos/logo-visa.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

const logoDefaults = {
  body: "Accepting cards should be quick, secure, and seamless. Discover our tools that simplify every transaction.",
  heading: "Built for the journey ahead.",
  largeImageAlt: "Product Image 1",
  largeImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg.jpg",
  middleImageAlt: "Product Image 2",
  middleImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
  smallImageAlt: "Product Image 2",
  smallImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
};

const imagesDefaults = {
  body: "Explore durable layers that balance insulation, breathability, and all-day comfort.",
  heading: "Outdoor essentials redefined.",
  largeImageAlt: "Product Image 1",
  largeImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg-2.jpg",
  middleImageAlt: "Product Image 2",
  middleImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-md.jpg",
  smallImageAlt: "Product Image 3",
  smallImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm-2.jpg",
};

type SectionProps = Omit<FeatureWithMultipleProductImagesProps, "theme">;
type ResolvedProps = typeof sharedDefaults &
  typeof imagesDefaults &
  SectionProps;

const ProductImage = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: number;
}) => (
  <img
    alt={alt}
    src={src}
    style={{
      borderRadius: "4px",
      display: "inline",
      maxWidth: "100%",
      verticalAlign: "middle",
    }}
    width={width}
  />
);

const LogoArtwork = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="feature-multiple-auto feature-multiple-centered"
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ verticalAlign: "bottom", width: "144px" }}>
          <ProductImage
            alt={props.largeImageAlt}
            src={props.largeImageSrc}
            width={144}
          />
        </td>
        <td style={{ width: "16px" }}>&zwj;</td>
        <td style={{ verticalAlign: "bottom", width: "96px" }}>
          <div
            style={{
              backgroundColor: props.logoBackgroundColor,
              borderRadius: "4px",
              lineHeight: "96px",
              textAlign: "center",
            }}
          >
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              style={{
                display: "inline",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width={50}
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

const LogoImageGroup = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-multiple-stack"
    style={{ verticalAlign: "top", width: "256px" }}
  >
    <LogoArtwork props={props} />
    <div style={{ lineHeight: "16px" }}>&zwj;</div>
    <div style={{ textAlign: "center" }}>
      <ProductImage
        alt={props.smallImageAlt}
        src={props.smallImageSrc}
        width={112}
      />
    </div>
  </td>
);

const ImagesArtwork = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="feature-multiple-auto feature-multiple-centered"
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ verticalAlign: "bottom", width: "144px" }}>
          <div style={{ textAlign: "right" }}>
            <ProductImage
              alt={props.largeImageAlt}
              src={props.largeImageSrc}
              width={144}
            />
          </div>
          <div style={{ lineHeight: "16px" }}>&zwj;</div>
          <div style={{ textAlign: "right" }}>
            <ProductImage
              alt={props.middleImageAlt}
              src={props.middleImageSrc}
              width={112}
            />
          </div>
        </td>
        <td style={{ width: "16px" }}>&zwj;</td>
        <td style={{ textAlign: "center", width: "96px" }}>
          <ProductImage
            alt={props.smallImageAlt}
            src={props.smallImageSrc}
            width={112}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

const ImagesGroup = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-multiple-stack"
    style={{ verticalAlign: "top", width: "256px" }}
  >
    <ImagesArtwork props={props} />
  </td>
);

const FeatureCopy = ({
  logoVariant,
  props,
}: {
  logoVariant: boolean;
  props: ResolvedProps;
}) => (
  <td
    className="feature-multiple-stack"
    style={{
      textAlign: "left",
      verticalAlign: logoVariant ? "top" : "middle",
    }}
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
      {logoVariant && props.heading === logoDefaults.heading ? (
        <>
          Built for the <br className="feature-multiple-hide-mobile" /> journey
          ahead.
        </>
      ) : (
        props.heading
      )}
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

export const FeatureWithMultipleProductImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-left";
  const logoVariant = variant.startsWith("logo-");
  const defaults = logoVariant ? logoDefaults : imagesDefaults;
  const resolved = {
    ...sharedDefaults,
    ...defaults,
    ...props,
  } as ResolvedProps;
  const artworkRight = variant.endsWith("-right");
  const artwork = logoVariant ? (
    <LogoImageGroup props={resolved} />
  ) : (
    <ImagesGroup props={resolved} />
  );
  const copy = <FeatureCopy logoVariant={logoVariant} props={resolved} />;

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
                          {artworkRight ? copy : artwork}
                          <td
                            className="feature-multiple-stack feature-multiple-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </td>
                          {artworkRight ? artwork : copy}
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

export const FeatureWithMultipleProductImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "logo-left",
  ...props
}: FeatureWithMultipleProductImagesProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Built for the journey ahead.</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FeatureWithMultipleProductImagesSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithMultipleProductImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-left",
} satisfies FeatureWithMultipleProductImagesProps;
