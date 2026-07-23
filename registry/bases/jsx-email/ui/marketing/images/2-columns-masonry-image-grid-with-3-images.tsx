import { Body, Container, Head, Html, Img, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type TwoColumnsMasonryImageGridWith3ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

export interface TwoColumnsMasonryImageGridWith3ImagesProps {
  theme?: EmailThemeTokens;
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
  variant?: TwoColumnsMasonryImageGridWith3ImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .masonry-three-stack {
      display: block !important;
      width: 100% !important;
    }

    .masonry-three-gap {
      line-height: 24px !important;
    }

    .masonry-three-landscape-spacer {
      line-height: 176px !important;
    }

    .masonry-three-portrait-spacer {
      line-height: 384px !important;
    }
  }
`;

const defaultSectionStyles = {
  backgroundColor: "#fffffe",
  heading1: "White Glass",
  heading2: "Flow White",
  heading3: "Hydra Blue",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  imageSrc1:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-5.jpg",
  imageSrc2:
    "https://assets.mailviews.com/images/components/image-grids/2-col-landscape-6.jpg",
  imageSrc3:
    "https://assets.mailviews.com/images/components/image-grids/2-col-portrait-4.jpg",
  pageBackgroundColor: "#f1f5f9",
  subtext1: "Eco-Friendly",
  subtext2: "Sport & Travel",
  subtext3: "Insulated Steel",
  textColor: "#fffffe",
};

type SectionProps = Omit<TwoColumnsMasonryImageGridWith3ImagesProps, "theme">;
type ResolvedProps = typeof defaultSectionStyles & SectionProps;

const OverlayCard = ({
  heading,
  headingColor,
  imageSrc,
  portrait = false,
  subtext,
  textColor,
}: {
  heading: string;
  headingColor: string;
  imageSrc: string;
  portrait?: boolean;
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
        portrait
          ? "masonry-three-portrait-spacer"
          : "masonry-three-landscape-spacer"
      }
      style={{ lineHeight: portrait ? "316px" : "106px" }}
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

const PlainImage = ({
  alt,
  href,
  src,
}: {
  alt: string;
  href: string;
  src: string;
}) => (
  <a href={href}>
    <Img
      alt={alt}
      src={src}
      style={{ borderRadius: "4px", maxWidth: "100%", verticalAlign: "middle" }}
      width="264"
    />
  </a>
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
        heading={props.heading1}
        headingColor={props.headingColor}
        imageSrc={props.imageSrc1}
        subtext={props.subtext1}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.imageAlt1}
        href={props.imageHref1}
        src={props.imageSrc1}
      />
    )}
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
    {overlay ? (
      <OverlayCard
        heading={props.heading2}
        headingColor={props.headingColor}
        imageSrc={props.imageSrc2}
        subtext={props.subtext2}
        textColor={props.textColor}
      />
    ) : (
      <PlainImage
        alt={props.imageAlt2}
        href={props.imageHref2}
        src={props.imageSrc2}
      />
    )}
  </>
);

const PortraitColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) =>
  overlay ? (
    <OverlayCard
      heading={props.heading3}
      headingColor={props.headingColor}
      imageSrc={props.imageSrc3}
      portrait
      subtext={props.subtext3}
      textColor={props.textColor}
    />
  ) : (
    <PlainImage
      alt={props.imageAlt3}
      href={props.imageHref3}
      src={props.imageSrc3}
    />
  );

export const TwoColumnsMasonryImageGridWith3ImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = { ...defaultSectionStyles, ...props } as ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
  const stacked = <StackedColumn overlay={overlay} props={resolved} />;
  const portrait = <PortraitColumn overlay={overlay} props={resolved} />;

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
                    className="masonry-three-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    {stackedLeft ? stacked : portrait}
                  </td>
                  <td
                    className="masonry-three-stack masonry-three-gap"
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </td>
                  <td
                    className="masonry-three-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    {stackedLeft ? portrait : stacked}
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

export const TwoColumnsMasonryImageGridWith3Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: TwoColumnsMasonryImageGridWith3ImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Two columns masonry image grid with three images</Preview>
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
        <TwoColumnsMasonryImageGridWith3ImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnsMasonryImageGridWith3ImagesProps;
