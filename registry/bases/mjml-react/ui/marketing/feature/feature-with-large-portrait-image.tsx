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

export type FeatureWithLargePortraitImageVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "content-bottom-left"
  | "content-bottom-right"
  | "content-top-left"
  | "content-top-right";

export interface FeatureWithLargePortraitImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
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
  variant?: FeatureWithLargePortraitImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-portrait-stack { display: block !important; width: 100% !important; }
    .feature-portrait-image { width: 100% !important; }
    .feature-portrait-hide-mobile { display: none !important; }
    .feature-portrait-gap { line-height: 24px !important; }
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
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-north-face.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

const logoDefaults = {
  body: "Find advanced outerwear engineered to handle wind, rain, and sudden shifts in the elements.",
  heading: "Explore without limits.",
  portraitImageAlt: "Product Image",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-1.jpg",
  secondaryImageAlt: "Product Image 2",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg",
};

const contentDefaults = {
  body: "Experience cutting-edge performance, from dual-frequency GPS to pro-grade health insights.",
  heading: "Innovation on your wrist.",
  portraitImageAlt: "Product Image 1",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-2.jpg",
  secondaryImageAlt: "Product Image 2",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg",
};

const contentTopRightDefaults = {
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-3.jpg",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-2.jpg",
};

type SectionProps = Omit<FeatureWithLargePortraitImageProps, "theme">;
type ResolvedProps = typeof sharedDefaults &
  typeof contentDefaults &
  SectionProps;

const ResponsiveImage = ({
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
    className="feature-portrait-image"
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

const LogoPanel = ({ props }: { props: ResolvedProps }) => (
  <div
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "205px",
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
      width={139}
    />
  </div>
);

const SecondaryImage = ({ props }: { props: ResolvedProps }) => (
  <div style={{ textAlign: "center" }}>
    <ResponsiveImage
      alt={props.secondaryImageAlt}
      src={props.secondaryImageSrc}
      width={205}
    />
  </div>
);

const FeatureCopy = ({
  contentVariant,
  props,
}: {
  contentVariant: boolean;
  props: ResolvedProps;
}) => (
  <>
    <h2
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
        margin: 0,
      }}
    >
      {contentVariant && props.heading === contentDefaults.heading ? (
        <>
          Innovation on <br className="feature-portrait-hide-mobile" /> your
          wrist.
        </>
      ) : (
        props.heading
      )}
    </h2>
    <p
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: "12px 0 0",
      }}
    >
      {props.body}
    </p>
    <div style={{ lineHeight: "12px" }}>&zwj;</div>
    <div>
      <a
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          padding: 0,
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
  </>
);

const ContentColumn = ({
  contentVariant,
  mediaAfter,
  mediaKind,
  props,
}: {
  contentVariant: boolean;
  mediaAfter: boolean;
  mediaKind: "logo" | "secondary";
  props: ResolvedProps;
}) => {
  const media =
    mediaKind === "logo" ? (
      <LogoPanel props={props} />
    ) : (
      <SecondaryImage props={props} />
    );

  return (
    <td
      className="feature-portrait-stack"
      style={{ textAlign: "left", verticalAlign: "top", width: "205px" }}
    >
      {mediaAfter ? null : <div style={{ marginBottom: "24px" }}>{media}</div>}
      <FeatureCopy contentVariant={contentVariant} props={props} />
      {mediaAfter ? <div style={{ marginTop: "24px" }}>{media}</div> : null}
    </td>
  );
};

const PortraitColumn = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-portrait-stack"
    style={{ verticalAlign: "top", width: "323px" }}
  >
    <ResponsiveImage
      alt={props.portraitImageAlt}
      src={props.portraitImageSrc}
      width={323}
    />
  </td>
);

export const FeatureWithLargePortraitImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "logo-top-left";
  const contentVariant = variant.startsWith("content-");
  const variantDefaults = contentVariant ? contentDefaults : logoDefaults;
  const resolved = {
    ...sharedDefaults,
    ...variantDefaults,
    ...(variant.startsWith("content-top-") ? contentTopRightDefaults : {}),
    ...props,
  } as ResolvedProps;
  const portraitLeft = variant.endsWith("-right");
  const mediaAfter =
    variant.startsWith("logo-bottom-") || variant.startsWith("content-top-");
  const content = (
    <ContentColumn
      contentVariant={contentVariant}
      mediaAfter={mediaAfter}
      mediaKind={contentVariant ? "secondary" : "logo"}
      props={resolved}
    />
  );
  const portrait = <PortraitColumn props={resolved} />;

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
                          {portraitLeft ? portrait : content}
                          <td
                            className="feature-portrait-stack feature-portrait-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </td>
                          {portraitLeft ? content : portrait}
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

export const FeatureWithLargePortraitImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "logo-top-left",
  ...props
}: FeatureWithLargePortraitImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Explore without limits.</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FeatureWithLargePortraitImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithLargePortraitImage.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithLargePortraitImageProps;
