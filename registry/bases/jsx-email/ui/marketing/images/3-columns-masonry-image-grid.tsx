import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ThreeColumnsMasonryImageGridVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

export interface ThreeColumnsMasonryImageGridProps {
  theme?: EmailThemeTokens;
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
  variant?: ThreeColumnsMasonryImageGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .three-masonry-stack {
      display: block !important;
      width: 100% !important;
    }

    .three-masonry-gap {
      line-height: 24px !important;
    }

    .three-masonry-overlay-spacer {
      line-height: 296px !important;
    }

    .three-masonry-heading {
      font-size: 24px !important;
      line-height: 32px !important;
    }

    .three-masonry-text {
      font-size: 20px !important;
      line-height: 28px !important;
    }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  stackHeading1: "Gunkan Duo",
  stackHeading2: "Hamachi",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack.jpg",
  stackImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-2.jpg",
  stackSubtext1: "Ikura / Citrus Zest",
  stackSubtext2: "Yellowtail / Herb Dressing",
  textColor: "#fffffe",
  wideHeading: "Nigiri Selection",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  wideSubtext: "Premium Cuts / Seasonal Fish",
};

type SectionProps = Omit<ThreeColumnsMasonryImageGridProps, "theme">;
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
  heading,
  headingColor,
  imageSrc,
  spacer,
  subtext,
  textColor,
}: {
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
      className="three-masonry-overlay-spacer"
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
              className="three-masonry-heading"
              style={{
                color: headingColor,
                fontFamily,
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "28px",
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <p
              className="three-masonry-text"
              style={{
                color: textColor,
                fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
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
        spacer="86px"
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

export const ThreeColumnsMasonryImageGridSection = (props: SectionProps) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
  const stack = <StackedColumn overlay={overlay} props={resolved} />;
  const wide = <WideColumn overlay={overlay} props={resolved} />;

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
                    className="three-masonry-stack"
                    style={{
                      verticalAlign: "top",
                      width: stackedLeft ? "168px" : "360px",
                    }}
                  >
                    {stackedLeft ? stack : wide}
                  </td>
                  <td
                    className="three-masonry-stack three-masonry-gap"
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </td>
                  <td
                    className="three-masonry-stack"
                    style={{
                      verticalAlign: "top",
                      width: stackedLeft ? "360px" : "168px",
                    }}
                  >
                    {stackedLeft ? wide : stack}
                  </td>
                  <td style={{ width: "24px" }}>&zwj;</td>
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

export const ThreeColumnsMasonryImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: ThreeColumnsMasonryImageGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Three columns masonry image grid</Preview>
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
        <ThreeColumnsMasonryImageGridSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

ThreeColumnsMasonryImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnsMasonryImageGridProps;
