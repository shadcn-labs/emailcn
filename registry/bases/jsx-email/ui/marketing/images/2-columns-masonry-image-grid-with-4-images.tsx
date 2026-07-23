import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type TwoColumnsMasonryImageGridWith4ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

export interface TwoColumnsMasonryImageGridWith4ImagesProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  landscapeImageSrc1?: string;
  landscapeImageAlt1?: string;
  landscapeImageHref1?: string;
  landscapeHeading1?: string;
  landscapeSubtext1?: string;
  landscapeImageSrc2?: string;
  landscapeImageAlt2?: string;
  landscapeImageHref2?: string;
  landscapeHeading2?: string;
  landscapeSubtext2?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  portraitImageHref?: string;
  portraitHeading?: string;
  portraitSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsMasonryImageGridWith4ImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .masonry-four-stack {
      display: block !important;
      width: 100% !important;
    }

    .masonry-four-gap {
      line-height: 24px !important;
    }

    .masonry-four-landscape-spacer {
      line-height: 176px !important;
    }

    .masonry-four-tall-spacer {
      line-height: 384px !important;
    }

    .masonry-four-small-heading {
      font-size: 24px !important;
      line-height: 32px !important;
    }

    .masonry-four-small-text {
      font-size: 20px !important;
      line-height: 28px !important;
    }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Nemora",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-3.jpg",
  featureSubtext: "Pants and shirts",
  headingColor: "#fffffe",
  landscapeHeading1: "Reckless",
  landscapeHeading2: "Nike",
  landscapeImageAlt1: "",
  landscapeImageAlt2: "",
  landscapeImageHref1: "https://example.com",
  landscapeImageHref2: "https://example.com",
  landscapeImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  landscapeImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  landscapeSubtext1: "Accessories",
  landscapeSubtext2: "Shoes and accessories",
  pageBackgroundColor: "#f1f5f9",
  portraitHeading: "Omakase",
  portraitImageAlt: "",
  portraitImageHref: "https://example.com",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-3.jpg",
  portraitSubtext: "T-shirts and sweats",
  textColor: "#fffffe",
};

type SectionProps = Omit<TwoColumnsMasonryImageGridWith4ImagesProps, "theme">;
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
  portrait = false,
  subtext,
  textColor,
}: {
  feature?: boolean;
  heading: string;
  headingColor: string;
  imageSrc: string;
  portrait?: boolean;
  subtext: string;
  textColor: string;
}) => {
  let spacer = "106px";
  let spacerClass = "masonry-four-landscape-spacer";
  if (feature) {
    spacer = "304px";
    spacerClass = "masonry-four-tall-spacer";
  } else if (portrait) {
    spacer = "316px";
    spacerClass = "masonry-four-tall-spacer";
  }

  return (
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
      <div className={spacerClass} style={{ lineHeight: spacer }}>
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
                className={feature ? undefined : "masonry-four-small-heading"}
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
                className={feature ? undefined : "masonry-four-small-text"}
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
};

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

const LandscapeStack = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => (
  <>
    {overlay ? (
      <OverlayCard
        heading={props.landscapeHeading1}
        headingColor={props.headingColor}
        imageSrc={props.landscapeImageSrc1}
        subtext={props.landscapeSubtext1}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.landscapeImageAlt1}
        href={props.landscapeImageHref1}
        src={props.landscapeImageSrc1}
        width={264}
      />
    )}
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
    {overlay ? (
      <OverlayCard
        heading={props.landscapeHeading2}
        headingColor={props.headingColor}
        imageSrc={props.landscapeImageSrc2}
        subtext={props.landscapeSubtext2}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.landscapeImageAlt2}
        href={props.landscapeImageHref2}
        src={props.landscapeImageSrc2}
        width={264}
      />
    )}
  </>
);

const PortraitCard = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) =>
  overlay ? (
    <OverlayCard
      heading={props.portraitHeading}
      headingColor={props.headingColor}
      imageSrc={props.portraitImageSrc}
      portrait
      subtext={props.portraitSubtext}
      textColor={props.textColor}
    />
  ) : (
    <PlainImage
      alt={props.portraitImageAlt}
      href={props.portraitImageHref}
      src={props.portraitImageSrc}
      width={264}
    />
  );

const MasonryRow = ({
  overlay,
  props,
  stackedLeft,
}: {
  overlay: boolean;
  props: ResolvedProps;
  stackedLeft: boolean;
}) => {
  const landscape = <LandscapeStack overlay={overlay} props={props} />;
  const portrait = <PortraitCard overlay={overlay} props={props} />;

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
            className="masonry-four-stack"
            style={{ verticalAlign: "top", width: "264px" }}
          >
            {stackedLeft ? landscape : portrait}
          </td>
          <td
            className="masonry-four-stack masonry-four-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </td>
          <td
            className="masonry-four-stack"
            style={{ verticalAlign: "top", width: "264px" }}
          >
            {stackedLeft ? portrait : landscape}
          </td>
          <td style={{ width: "24px" }}>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const TwoColumnsMasonryImageGridWith4ImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const overlay = variant.includes("overlay");
  const reverse = variant.endsWith("reverse");
  const stackedLeft = variant.startsWith("stacked-left");
  const feature = <FeatureRow overlay={overlay} props={resolved} />;
  const masonry = (
    <MasonryRow overlay={overlay} props={resolved} stackedLeft={stackedLeft} />
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

export const TwoColumnsMasonryImageGridWith4Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: TwoColumnsMasonryImageGridWith4ImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Two columns masonry image grid with four images</Preview>
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
        <TwoColumnsMasonryImageGridWith4ImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnsMasonryImageGridWith4ImagesProps;
