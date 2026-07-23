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

export type FeatureWithDoubleTallBackgroundImagesVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right";

export interface FeatureWithDoubleTallBackgroundImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithDoubleTallBackgroundImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-double-stack {
      display: block !important;
      width: 100% !important;
    }

    .feature-double-gap {
      line-height: 24px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .feature-double-image-stack {
      display: block !important;
      width: 100% !important;
    }

    .feature-double-image-gap {
      line-height: 24px !important;
    }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://assets.mailviews.com/images/components/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Premium footwear, outerwear, and lifestyle pieces chosen for quality, comfort, and everyday performance.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Discover the Monarch Collection.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://assets.mailviews.com/images/components/feature/stripes-bg-1.jpg",
  imageSrc2:
    "https://assets.mailviews.com/images/components/feature/stripes-bg-2.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#030712",
  logoSrc:
    "https://assets.mailviews.com/images/components/feature/logo-stripes-1.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<FeatureWithDoubleTallBackgroundImagesProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

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

const FeatureCopy = ({ props }: { props: ResolvedProps }) => (
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
      {props.heading}
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
  logoAfter,
  props,
}: {
  logoAfter: boolean;
  props: ResolvedProps;
}) => (
  <td
    className="feature-double-stack"
    style={{ textAlign: "left", verticalAlign: "top", width: "204px" }}
  >
    {logoAfter ? null : (
      <div style={{ marginBottom: "24px" }}>
        <LogoPanel props={props} />
      </div>
    )}
    <FeatureCopy props={props} />
    {logoAfter ? (
      <div style={{ marginTop: "24px" }}>
        <LogoPanel props={props} />
      </div>
    ) : null}
  </td>
);

const BackgroundCard = ({
  imageSrc,
  props,
}: {
  imageSrc: string;
  props: ResolvedProps;
}) => (
  <td
    className="feature-double-image-stack"
    style={{
      backgroundColor: props.imageBackgroundColor,
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      textAlign: "center",
      width: "150px",
    }}
  >
    <div style={{ lineHeight: "410px" }}>&zwj;</div>
  </td>
);

const ImagesColumn = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-double-stack"
    style={{ verticalAlign: "top", width: "324px" }}
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
          <BackgroundCard imageSrc={props.imageSrc1} props={props} />
          <td
            className="feature-double-image-stack feature-double-image-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </td>
          <BackgroundCard imageSrc={props.imageSrc2} props={props} />
        </tr>
      </tbody>
    </table>
  </td>
);

export const FeatureWithDoubleTallBackgroundImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-top-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = {
    ...defaults,
    ...(contentRight
      ? {
          imageSrc2:
            "https://assets.mailviews.com/images/components/feature/stripes-bg-3.jpg",
        }
      : {}),
    ...props,
  } as ResolvedProps;
  const content = <ContentColumn logoAfter={logoAfter} props={resolved} />;
  const images = <ImagesColumn props={resolved} />;

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
                          {contentRight ? images : content}
                          <td
                            className="feature-double-stack feature-double-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </td>
                          {contentRight ? content : images}
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

export const FeatureWithDoubleTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "logo-top-left",
  ...props
}: FeatureWithDoubleTallBackgroundImagesProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Discover the Monarch Collection.</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FeatureWithDoubleTallBackgroundImagesSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithDoubleTallBackgroundImagesProps;
