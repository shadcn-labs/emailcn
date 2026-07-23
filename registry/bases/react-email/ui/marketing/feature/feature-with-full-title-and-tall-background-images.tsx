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

export type FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "logo-top-left"
  | "logo-top-right";

export interface FeatureWithFullTitleAndTallBackgroundImagesProps {
  theme?: TailwindConfig;
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
  variant?: FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-full-stack { display: block !important; width: 100% !important; }
    .feature-full-gap { line-height: 24px !important; }
  }

  @media only screen and (max-width: 430px) {
    .feature-full-image-stack { display: block !important; width: 100% !important; }
    .feature-full-image-gap { line-height: 24px !important; }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://assets.mailviews.com/images/components/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Discover clinically proven formulas designed to target concerns with precision and clarity.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Science-led skincare essentials.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://assets.mailviews.com/images/components/feature/stripes-bg-4.jpg",
  imageSrc2:
    "https://assets.mailviews.com/images/components/feature/stripes-bg-5.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#f3f4f6",
  logoSrc:
    "https://assets.mailviews.com/images/components/feature/logo-stripes-2.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<
  FeatureWithFullTitleAndTallBackgroundImagesProps,
  "theme"
>;
type ResolvedProps = typeof defaults & SectionProps;

const LogoPanel = ({ props }: { props: ResolvedProps }) => (
  <div
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "144px",
      textAlign: "center",
    }}
  >
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ display: "inline", maxWidth: "100%", verticalAlign: "middle" }}
      width={139}
    />
  </div>
);

const FeatureCopy = ({ props }: { props: ResolvedProps }) => (
  <>
    <p
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: 0,
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
          <Img
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
    className="feature-full-stack"
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
    className="feature-full-image-stack"
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
    <div style={{ lineHeight: "280px" }}>&zwj;</div>
  </td>
);

const ImagesColumn = ({ props }: { props: ResolvedProps }) => (
  <td
    className="feature-full-stack"
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
            className="feature-full-image-stack feature-full-image-gap"
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

export const FeatureWithFullTitleAndTallBackgroundImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-bottom-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = { ...defaults, ...props } as ResolvedProps;
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
                    <h2
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "32px",
                        margin: "0 0 24px",
                      }}
                    >
                      {resolved.heading}
                    </h2>
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
                            className="feature-full-stack feature-full-gap"
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

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "logo-bottom-left",
  ...props
}: FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Science-led skincare essentials.</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <FeatureWithFullTitleAndTallBackgroundImagesSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-bottom-left",
} satisfies FeatureWithFullTitleAndTallBackgroundImagesProps;
