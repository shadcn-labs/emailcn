import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ThreeColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

export interface ThreeColumnsImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageHref1?: string;
  heading1?: string;
  subtext1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageHref2?: string;
  heading2?: string;
  subtext2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageHref3?: string;
  heading3?: string;
  subtext3?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnsImageGridWithFullWidthFeatureVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 430px) {
    .three-feature-plain-stack {
      display: block !important;
      width: 100% !important;
    }

    .three-feature-plain-gap {
      line-height: 24px !important;
    }
  }

  @media only screen and (max-width: 599px) {
    .three-feature-image {
      width: 100% !important;
    }

    .three-feature-overlay-stack {
      display: block !important;
      width: 100% !important;
    }

    .three-feature-overlay-gap {
      line-height: 24px !important;
    }

    .three-feature-main-spacer {
      line-height: 384px !important;
    }

    .three-feature-small-spacer {
      line-height: 256px !important;
    }

    .three-feature-small-heading {
      font-size: 24px !important;
      line-height: 32px !important;
    }

    .three-feature-small-text {
      font-size: 20px !important;
      line-height: 28px !important;
    }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Island Escape",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-6.jpg",
  featureSubtext: "Private Paradise",
  heading1: "Aqua Retreat",
  heading2: "Ocean Spa",
  heading3: "Sand Stroll",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-4.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-5.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-6.jpg",
  pageBackgroundColor: "#f1f5f9",
  subtext1: "Private pools",
  subtext2: "Relax & restore",
  subtext3: "Beach freedom",
  textColor: "#fffffe",
};

type SectionProps = Omit<
  ThreeColumnsImageGridWithFullWidthFeatureProps,
  "theme"
>;
type ResolvedProps = typeof defaults & SectionProps;

const PlainImage = ({
  alt,
  className,
  href,
  src,
  width,
}: {
  alt: string;
  className?: string;
  href: string;
  src: string;
  width: number;
}) => (
  <a href={href}>
    <Img
      alt={alt}
      className={className}
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
      className={
        feature ? "three-feature-main-spacer" : "three-feature-small-spacer"
      }
      style={{ lineHeight: feature ? "304px" : "88px" }}
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
              className={feature ? undefined : "three-feature-small-heading"}
              style={{
                color: headingColor,
                fontFamily,
                fontSize: feature ? "24px" : "16px",
                fontWeight: 700,
                lineHeight: feature ? "32px" : "24px",
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <p
              className={feature ? undefined : "three-feature-small-text"}
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
              className="three-feature-image"
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

const GridItem = ({
  alt,
  heading,
  href,
  overlay,
  props,
  src,
  subtext,
}: {
  alt: string;
  heading: string;
  href: string;
  overlay: boolean;
  props: ResolvedProps;
  src: string;
  subtext: string;
}) =>
  overlay ? (
    <OverlayCard
      heading={heading}
      headingColor={props.headingColor}
      imageSrc={src}
      subtext={subtext}
      textColor={props.textColor}
    />
  ) : (
    <PlainImage alt={alt} href={href} src={src} width={168} />
  );

const GridRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => {
  const stackClass = overlay
    ? "three-feature-overlay-stack"
    : "three-feature-plain-stack";
  const gapClass = overlay
    ? "three-feature-overlay-gap"
    : "three-feature-plain-gap";

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
          <td style={{ width: "24px" }}>&zwj;</td>
          <td className={stackClass} style={{ width: "168px" }}>
            <GridItem
              alt={props.imageAlt1}
              heading={props.heading1}
              href={props.imageHref1}
              overlay={overlay}
              props={props}
              src={props.imageSrc1}
              subtext={props.subtext1}
            />
          </td>
          <td className={`${stackClass} ${gapClass}`} style={{ width: "24px" }}>
            &zwj;
          </td>
          <td className={stackClass} style={{ width: "168px" }}>
            <GridItem
              alt={props.imageAlt2}
              heading={props.heading2}
              href={props.imageHref2}
              overlay={overlay}
              props={props}
              src={props.imageSrc2}
              subtext={props.subtext2}
            />
          </td>
          <td className={`${stackClass} ${gapClass}`} style={{ width: "24px" }}>
            &zwj;
          </td>
          <td className={stackClass} style={{ width: "168px" }}>
            <GridItem
              alt={props.imageAlt3}
              heading={props.heading3}
              href={props.imageHref3}
              overlay={overlay}
              props={props}
              src={props.imageSrc3}
              subtext={props.subtext3}
            />
          </td>
          <td style={{ width: "24px" }}>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ThreeColumnsImageGridWithFullWidthFeatureSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "full-width-top";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const featureBottom = variant.startsWith("full-width-bottom");
  const feature = <FeatureRow overlay={overlay} props={resolved} />;
  const grid = <GridRow overlay={overlay} props={resolved} />;

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
            {featureBottom ? grid : feature}
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            {featureBottom ? feature : grid}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ThreeColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full-width-top",
  ...props
}: ThreeColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Three columns image grid with full width feature</Preview>
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
        <ThreeColumnsImageGridWithFullWidthFeatureSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

ThreeColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies ThreeColumnsImageGridWithFullWidthFeatureProps;
