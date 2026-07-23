import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

export interface ThreeColumnsMasonryImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  stackImageSrc1?: string;
  stackImageAlt1?: string;
  stackImageHref1?: string;
  stackHeading1?: string;
  stackSubtext1?: string;
  stackImageSrc2?: string;
  stackImageAlt2?: string;
  stackImageHref2?: string;
  stackHeading2?: string;
  stackSubtext2?: string;
  wideImageSrc?: string;
  wideImageAlt?: string;
  wideImageHref?: string;
  wideHeading?: string;
  wideSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .three-masonry-feature-stack {
      display: block !important;
      width: 100% !important;
    }

    .three-masonry-feature-gap {
      line-height: 24px !important;
    }

    .three-masonry-feature-overlay-spacer {
      line-height: 160px !important;
    }

    .three-masonry-feature-small-spacer {
      line-height: 296px !important;
    }

    .three-masonry-feature-small-heading {
      font-size: 24px !important;
      line-height: 32px !important;
    }

    .three-masonry-feature-small-text {
      font-size: 20px !important;
      line-height: 28px !important;
    }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Slope Lines",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://assets.mailviews.com/images/components/image-grids/full-width-5.jpg",
  featureSubtext: "Optical Ski Illustration",
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  stackHeading1: "Bold",
  stackHeading2: "Wave",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://assets.mailviews.com/images/components/image-grids/3-col-masonry-stack-3.jpg",
  stackImageSrc2:
    "https://assets.mailviews.com/images/components/image-grids/3-col-masonry-stack-4.jpg",
  stackSubtext1: "Typography",
  stackSubtext2: "Fluid form",
  textColor: "#fffffe",
  wideHeading: "Mod Blocks",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://assets.mailviews.com/images/components/image-grids/3-col-masonry-2.jpg",
  wideSubtext: "Monochrome Geometric Pattern",
};

type SectionProps = Omit<
  ThreeColumnsMasonryImageGridWithFullWidthFeatureProps,
  "theme"
>;
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
  spacer,
  subtext,
  textColor,
}: {
  feature?: boolean;
  heading: string;
  headingColor: string;
  imageSrc: string;
  spacer: string;
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
        feature
          ? "three-masonry-feature-overlay-spacer"
          : "three-masonry-feature-small-spacer"
      }
      style={{ lineHeight: spacer }}
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
              className={
                feature ? undefined : "three-masonry-feature-small-heading"
              }
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
              className={
                feature ? undefined : "three-masonry-feature-small-text"
              }
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
              spacer="304px"
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

const StackedColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => (
  <>
    {overlay ? (
      <OverlayCard
        heading={props.stackHeading1}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc1}
        spacer="106px"
        subtext={props.stackSubtext1}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.stackImageAlt1}
        href={props.stackImageHref1}
        src={props.stackImageSrc1}
        width={168}
      />
    )}
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
    {overlay ? (
      <OverlayCard
        heading={props.stackHeading2}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc2}
        spacer="106px"
        subtext={props.stackSubtext2}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.stackImageAlt2}
        href={props.stackImageHref2}
        src={props.stackImageSrc2}
        width={168}
      />
    )}
  </>
);

const WideColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) =>
  overlay ? (
    <OverlayCard
      heading={props.wideHeading}
      headingColor={props.headingColor}
      imageSrc={props.wideImageSrc}
      spacer="316px"
      subtext={props.wideSubtext}
      textColor={props.textColor}
    />
  ) : (
    <PlainImage
      alt={props.wideImageAlt}
      href={props.wideImageHref}
      src={props.wideImageSrc}
      width={360}
    />
  );

const MasonryRow = ({
  equalColumns,
  overlay,
  props,
  stackedLeft,
}: {
  equalColumns: boolean;
  overlay: boolean;
  props: ResolvedProps;
  stackedLeft: boolean;
}) => {
  const stack = <StackedColumn overlay={overlay} props={props} />;
  const wide = <WideColumn overlay={overlay} props={props} />;
  const stackWidth = equalColumns ? "264px" : "168px";
  const wideWidth = equalColumns ? "264px" : "360px";

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
          <td
            className="three-masonry-feature-stack"
            style={{
              verticalAlign: "top",
              width: stackedLeft ? stackWidth : wideWidth,
            }}
          >
            {stackedLeft ? stack : wide}
          </td>
          <td
            className="three-masonry-feature-stack three-masonry-feature-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </td>
          <td
            className="three-masonry-feature-stack"
            style={{
              verticalAlign: "top",
              width: stackedLeft ? wideWidth : stackWidth,
            }}
          >
            {stackedLeft ? wide : stack}
          </td>
          <td style={{ width: "24px" }}>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ThreeColumnsMasonryImageGridWithFullWidthFeatureSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const overlay = variant.includes("overlay");
  const reverse = variant.endsWith("reverse");
  const stackedLeft = variant.startsWith("stacked-left");
  const equalColumns = overlay && variant !== "stacked-left-overlay";
  const feature = <FeatureRow overlay={overlay} props={resolved} />;
  const masonry = (
    <MasonryRow
      equalColumns={equalColumns}
      overlay={overlay}
      props={resolved}
      stackedLeft={stackedLeft}
    />
  );

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
            {reverse ? masonry : feature}
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            {reverse ? feature : masonry}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const ThreeColumnsMasonryImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: ThreeColumnsMasonryImageGridWithFullWidthFeatureProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Three columns masonry image grid with full width feature</Preview>
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
        <ThreeColumnsMasonryImageGridWithFullWidthFeatureSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnsMasonryImageGridWithFullWidthFeatureProps;
