import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Link,
  Section,
  Row,
  Column,
  Heading,
  Text,
} from "jsx-email";
import { Fragment } from "react";

import { EmailTailwind } from "@/components/email/email-tailwind";
import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

type TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

interface TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps {
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
  variant?: TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureVariant;
}

const TwoColumnFeatureGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnFeatureGrid_responsiveStyles = `
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

const TwoColumnFeatureGrid_defaults = {
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

type TwoColumnFeatureGrid_SectionProps = Omit<
  TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps,
  "theme"
>;

type TwoColumnFeatureGrid_ResolvedProps = typeof TwoColumnFeatureGrid_defaults &
  TwoColumnFeatureGrid_SectionProps;

const TwoColumnFeatureGrid_PlainImage = ({
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
  <Link href={href}>
    <Img
      alt={alt}
      src={src}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={width}
    />
  </Link>
);

const TwoColumnFeatureGrid_OverlayCard = ({
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
  <Section
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  >
    <Section
      className="two-feature-overlay-spacer"
      style={{ lineHeight: feature ? "304px" : "106px" }}
    >
      &zwj;
    </Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              background: "linear-gradient(to bottom, transparent, #000001)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <Heading
              className={feature ? undefined : "two-feature-small-heading"}
              style={{
                color: headingColor,
                fontFamily: TwoColumnFeatureGrid_fontFamily,
                fontSize: feature ? "24px" : "20px",
                fontWeight: 700,
                lineHeight: feature ? "32px" : "28px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              className={feature ? undefined : "two-feature-small-text"}
              style={{
                color: textColor,
                fontFamily: TwoColumnFeatureGrid_fontFamily,
                fontSize: feature ? "20px" : "14px",
                lineHeight: feature ? "28px" : "20px",
                margin: 0,
              }}
            >
              {subtext}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Section>
);

const TwoColumnFeatureGrid_FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnFeatureGrid_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
          {overlay ? (
            <TwoColumnFeatureGrid_OverlayCard
              feature
              heading={props.featureHeading}
              headingColor={props.headingColor}
              imageSrc={props.featureImageSrc}
              subtext={props.featureSubtext}
              textColor={props.textColor}
            />
          ) : (
            <TwoColumnFeatureGrid_PlainImage
              alt={props.featureImageAlt}
              href={props.featureImageHref}
              src={props.featureImageSrc}
              width={552}
            />
          )}
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const TwoColumnFeatureGrid_ImageRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnFeatureGrid_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column
          className="two-feature-stack"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          {overlay ? (
            <TwoColumnFeatureGrid_OverlayCard
              heading={props.imageHeading1}
              headingColor={props.headingColor}
              imageSrc={props.imageSrc1}
              subtext={props.imageSubtext1}
              textColor={props.textColor}
            />
          ) : (
            <TwoColumnFeatureGrid_PlainImage
              alt={props.imageAlt1}
              href={props.imageHref1}
              src={props.imageSrc1}
              width={264}
            />
          )}
        </Column>
        <Column
          className="two-feature-stack two-feature-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </Column>
        <Column
          className="two-feature-stack"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          {overlay ? (
            <TwoColumnFeatureGrid_OverlayCard
              heading={props.imageHeading2}
              headingColor={props.headingColor}
              imageSrc={props.imageSrc2}
              subtext={props.imageSubtext2}
              textColor={props.textColor}
            />
          ) : (
            <TwoColumnFeatureGrid_PlainImage
              alt={props.imageAlt2}
              href={props.imageHref2}
              src={props.imageSrc2}
              width={264}
            />
          )}
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureSection = (
  props: TwoColumnFeatureGrid_SectionProps
) => {
  const variant = props.variant ?? "full-width-top";
  const resolved = {
    ...TwoColumnFeatureGrid_defaults,
    ...props,
  } as TwoColumnFeatureGrid_ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const featureBottom = variant.startsWith("full-width-bottom");
  const feature = (
    <TwoColumnFeatureGrid_FeatureRow overlay={overlay} props={resolved} />
  );
  const images = (
    <TwoColumnFeatureGrid_ImageRow overlay={overlay} props={resolved} />
  );
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            {featureBottom ? images : feature}
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            {featureBottom ? feature : images}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full-width-top",
  ...props
}: TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: TwoColumnFeatureGrid_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Two columns image grid with full width feature</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: TwoColumnFeatureGrid_fontFamily,
        }}
        className="m-0"
      >
        <Container
          style={{
            width: theme.containerWidth,
          }}
          className="mx-auto max-w-email"
        >
          <TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeatureProps;

const __TwoColumnFeatureGrid =
  TwoColumnFeatureGrid_TwoColumnsImageGridWithFullWidthFeature;

type ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

interface ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps {
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
  variant?: ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureVariant;
}

const ThreeColumnFeatureGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ThreeColumnFeatureGrid_responsiveStyles = `
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

const ThreeColumnFeatureGrid_defaults = {
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

type ThreeColumnFeatureGrid_SectionProps = Omit<
  ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps,
  "theme"
>;

type ThreeColumnFeatureGrid_ResolvedProps =
  typeof ThreeColumnFeatureGrid_defaults & ThreeColumnFeatureGrid_SectionProps;

const ThreeColumnFeatureGrid_PlainImage = ({
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
  <Link href={href}>
    <Img
      alt={alt}
      className={className}
      src={src}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={width}
    />
  </Link>
);

const ThreeColumnFeatureGrid_OverlayCard = ({
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
  <Section
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  >
    <Section
      className={
        feature ? "three-feature-main-spacer" : "three-feature-small-spacer"
      }
      style={{ lineHeight: feature ? "304px" : "88px" }}
    >
      &zwj;
    </Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              background: "linear-gradient(to bottom, transparent, #000001)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <Heading
              className={feature ? undefined : "three-feature-small-heading"}
              style={{
                color: headingColor,
                fontFamily: ThreeColumnFeatureGrid_fontFamily,
                fontSize: feature ? "24px" : "16px",
                fontWeight: 700,
                lineHeight: feature ? "32px" : "24px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              className={feature ? undefined : "three-feature-small-text"}
              style={{
                color: textColor,
                fontFamily: ThreeColumnFeatureGrid_fontFamily,
                fontSize: feature ? "20px" : "14px",
                lineHeight: feature ? "28px" : "20px",
                margin: 0,
              }}
            >
              {subtext}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Section>
);

const ThreeColumnFeatureGrid_FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnFeatureGrid_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
          {overlay ? (
            <ThreeColumnFeatureGrid_OverlayCard
              feature
              heading={props.featureHeading}
              headingColor={props.headingColor}
              imageSrc={props.featureImageSrc}
              subtext={props.featureSubtext}
              textColor={props.textColor}
            />
          ) : (
            <ThreeColumnFeatureGrid_PlainImage
              alt={props.featureImageAlt}
              className="three-feature-image"
              href={props.featureImageHref}
              src={props.featureImageSrc}
              width={552}
            />
          )}
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const ThreeColumnFeatureGrid_GridItem = ({
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
  props: ThreeColumnFeatureGrid_ResolvedProps;
  src: string;
  subtext: string;
}) =>
  overlay ? (
    <ThreeColumnFeatureGrid_OverlayCard
      heading={heading}
      headingColor={props.headingColor}
      imageSrc={src}
      subtext={subtext}
      textColor={props.textColor}
    />
  ) : (
    <ThreeColumnFeatureGrid_PlainImage
      alt={alt}
      href={href}
      src={src}
      width={168}
    />
  );

const ThreeColumnFeatureGrid_GridRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnFeatureGrid_ResolvedProps;
}) => {
  const stackClass = overlay
    ? "three-feature-overlay-stack"
    : "three-feature-plain-stack";
  const gapClass = overlay
    ? "three-feature-overlay-gap"
    : "three-feature-plain-gap";
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column className={stackClass} style={{ width: "168px" }}>
            <ThreeColumnFeatureGrid_GridItem
              alt={props.imageAlt1}
              heading={props.heading1}
              href={props.imageHref1}
              overlay={overlay}
              props={props}
              src={props.imageSrc1}
              subtext={props.subtext1}
            />
          </Column>
          <Column
            className={`${stackClass} ${gapClass}`}
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <Column className={stackClass} style={{ width: "168px" }}>
            <ThreeColumnFeatureGrid_GridItem
              alt={props.imageAlt2}
              heading={props.heading2}
              href={props.imageHref2}
              overlay={overlay}
              props={props}
              src={props.imageSrc2}
              subtext={props.subtext2}
            />
          </Column>
          <Column
            className={`${stackClass} ${gapClass}`}
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <Column className={stackClass} style={{ width: "168px" }}>
            <ThreeColumnFeatureGrid_GridItem
              alt={props.imageAlt3}
              heading={props.heading3}
              href={props.imageHref3}
              overlay={overlay}
              props={props}
              src={props.imageSrc3}
              subtext={props.subtext3}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureSection =
  (props: ThreeColumnFeatureGrid_SectionProps) => {
    const variant = props.variant ?? "full-width-top";
    const resolved = {
      ...ThreeColumnFeatureGrid_defaults,
      ...props,
    } as ThreeColumnFeatureGrid_ResolvedProps;
    const overlay = variant.endsWith("overlay");
    const featureBottom = variant.startsWith("full-width-bottom");
    const feature = (
      <ThreeColumnFeatureGrid_FeatureRow overlay={overlay} props={resolved} />
    );
    const grid = (
      <ThreeColumnFeatureGrid_GridRow overlay={overlay} props={resolved} />
    );
    return (
      <Section
        style={{ backgroundColor: resolved.pageBackgroundColor }}
        width="100%"
      >
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              style={{
                backgroundColor: resolved.backgroundColor,
                maxWidth: "100%",
                paddingBottom: "24px",
                width: "600px",
              }}
            >
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              {featureBottom ? grid : feature}
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              {featureBottom ? feature : grid}
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    );
  };

const ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full-width-top",
  ...props
}: ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: ThreeColumnFeatureGrid_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Three columns image grid with full width feature</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: ThreeColumnFeatureGrid_fontFamily,
        }}
        className="m-0"
      >
        <Container
          style={{
            width: theme.containerWidth,
          }}
          className="mx-auto max-w-email"
        >
          <ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature.PreviewProps =
  {
    theme: defaultTheme,
    variant: "full-width-top",
  } satisfies ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeatureProps;

const __ThreeColumnFeatureGrid =
  ThreeColumnFeatureGrid_ThreeColumnsImageGridWithFullWidthFeature;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface FeaturedImageGridProps {
  theme?: Parameters<typeof __TwoColumnFeatureGrid>[0]["theme"];
  images?: GalleryImage[];
  feature?: GalleryImage;
  columns?: 2 | 3;
  featurePosition?: "top" | "bottom";
  overlay?: boolean;
}

const featuredImageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const FeaturedImageGrid = ({
  theme,
  images,
  feature,
  columns = 2,
  featurePosition = "top",
  overlay = false,
}: FeaturedImageGridProps) => {
  const Component =
    columns === 3 ? __ThreeColumnFeatureGrid : __TwoColumnFeatureGrid;
  const [first, second, third] = images ?? [];
  const featureItem = featuredImageGridItem(feature);
  const image1 = featuredImageGridItem(first);
  const image2 = featuredImageGridItem(second);
  const image3 = featuredImageGridItem(third);
  return (
    <Component
      featureHeading={featureItem.heading}
      featureImageAlt={featureItem.alt}
      featureImageHref={featureItem.href}
      featureImageSrc={featureItem.src}
      featureSubtext={featureItem.subtext}
      imageAlt1={image1.alt}
      imageHref1={image1.href}
      imageSrc1={image1.src}
      heading1={image1.heading}
      subtext1={image1.subtext}
      imageAlt2={image2.alt}
      imageHref2={image2.href}
      imageSrc2={image2.src}
      heading2={image2.heading}
      subtext2={image2.subtext}
      imageAlt3={image3.alt}
      imageHref3={image3.href}
      imageSrc3={image3.src}
      heading3={image3.heading}
      subtext3={image3.subtext}
      theme={theme}
      variant={`full-width-${featurePosition}${overlay ? "-overlay" : ""}`}
    />
  );
};

FeaturedImageGrid.PreviewProps = {
  columns: 2,
  featurePosition: "top",
  overlay: false,
} satisfies FeaturedImageGridProps;
