import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

export interface TwoColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageHref1?: string;
  imageHeading1?: string;
  imageSubtext1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageHref2?: string;
  imageHeading2?: string;
  imageSubtext2?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsImageGridWithFullWidthFeatureVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .two-feature-stack {
      display: block !important;
      width: 100% !important;
    }

    .two-feature-gap {
      line-height: 24px !important;
    }

    .two-feature-overlay-spacer {
      line-height: 152px !important;
    }

    .two-feature-small-heading {
      font-size: 24px !important;
      line-height: 32px !important;
    }

    .two-feature-small-text {
      font-size: 20px !important;
      line-height: 28px !important;
    }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Arlo Bar Chair",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  featureSubtext: "Wood / Upholstered Seat",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageHeading1: "Milo Lounge Pair",
  imageHeading2: "Nova Dining Chair",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-3.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-4.jpg",
  imageSubtext1: "Velvet / Solid Wood Frame",
  imageSubtext2: "Curved Wood / Fabric Seat",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#fffffe",
};

type SectionProps = Omit<TwoColumnsImageGridWithFullWidthFeatureProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const PlainImage = ({
  alt,
  href,
  src,
  width,
}: {
  alt: string;
  href: string;
  src: string;
  width: number;
}) => (
  <a href={href}>
    <Img
      alt={alt}
      src={src}
      style={{ borderRadius: "4px", maxWidth: "100%", verticalAlign: "middle" }}
      width={width}
    />
  </a>
);

const OverlayCard = ({
  feature = false,
  heading,
  headingColor,
  imageSrc,
  subtext,
  textColor,
}: {
  feature?: boolean;
  heading: string;
  headingColor: string;
  imageSrc: string;
  subtext: string;
  textColor: string;
}) => (
  <div
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  >
    <div
      className="two-feature-overlay-spacer"
      style={{ lineHeight: feature ? "304px" : "106px" }}
    >
      &zwj;
    </div>
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
              background: "linear-gradient(to bottom, transparent, #000001)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <h4
              className={feature ? undefined : "two-feature-small-heading"}
              style={{
                color: headingColor,
                fontFamily,
                fontSize: feature ? "24px" : "20px",
                fontWeight: 700,
                lineHeight: feature ? "32px" : "28px",
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <p
              className={feature ? undefined : "two-feature-small-text"}
              style={{
                color: textColor,
                fontFamily,
                fontSize: feature ? "20px" : "14px",
                lineHeight: feature ? "28px" : "20px",
                margin: 0,
              }}
            >
              {subtext}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ width: "24px" }}>&zwj;</td>
        <td>
          {overlay ? (
            <OverlayCard
              feature
              heading={props.featureHeading}
              headingColor={props.headingColor}
              imageSrc={props.featureImageSrc}
              subtext={props.featureSubtext}
              textColor={props.textColor}
            />
          ) : (
            <PlainImage
              alt={props.featureImageAlt}
              href={props.featureImageHref}
              src={props.featureImageSrc}
              width={552}
            />
          )}
        </td>
        <td style={{ width: "24px" }}>&zwj;</td>
      </tr>
    </tbody>
  </table>
);

const ImageRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td style={{ width: "24px" }}>&zwj;</td>
        <td
          className="two-feature-stack"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          {overlay ? (
            <OverlayCard
              heading={props.imageHeading1}
              headingColor={props.headingColor}
              imageSrc={props.imageSrc1}
              subtext={props.imageSubtext1}
              textColor={props.textColor}
            />
          ) : (
            <PlainImage
              alt={props.imageAlt1}
              href={props.imageHref1}
              src={props.imageSrc1}
              width={264}
            />
          )}
        </td>
        <td
          className="two-feature-stack two-feature-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </td>
        <td
          className="two-feature-stack"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          {overlay ? (
            <OverlayCard
              heading={props.imageHeading2}
              headingColor={props.headingColor}
              imageSrc={props.imageSrc2}
              subtext={props.imageSubtext2}
              textColor={props.textColor}
            />
          ) : (
            <PlainImage
              alt={props.imageAlt2}
              href={props.imageHref2}
              src={props.imageSrc2}
              width={264}
            />
          )}
        </td>
        <td style={{ width: "24px" }}>&zwj;</td>
      </tr>
    </tbody>
  </table>
);

export const TwoColumnsImageGridWithFullWidthFeatureSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "full-width-top";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const featureBottom = variant.startsWith("full-width-bottom");
  const feature = <FeatureRow overlay={overlay} props={resolved} />;
  const images = <ImageRow overlay={overlay} props={resolved} />;

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
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            {featureBottom ? images : feature}
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            {featureBottom ? feature : images}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const TwoColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full-width-top",
  ...props
}: TwoColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Two columns image grid with full width feature</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <TwoColumnsImageGridWithFullWidthFeatureSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies TwoColumnsImageGridWithFullWidthFeatureProps;
