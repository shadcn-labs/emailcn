import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Link,
  Section,
  Row,
  Column,
  Heading,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TwoColumnsImageGridWithFullWidthFeatureVariant =
  | "full-width-top"
  | "full-width-bottom"
  | "full-width-top-overlay"
  | "full-width-bottom-overlay";

export interface TwoColumnsImageGridWithFullWidthFeatureProps {
  theme?: TailwindConfig;
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
  <Link href={href}>
    <Img
      alt={alt}
      src={src}
      style={{ borderRadius: "4px", maxWidth: "100%", verticalAlign: "middle" }}
      width={width}
    />
  </Link>
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
                fontFamily,
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
                fontFamily,
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

const FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
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
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const ImageRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ResolvedProps;
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
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
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
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <TwoColumnsImageGridWithFullWidthFeatureSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  theme: defaultTheme,
  variant: "full-width-top",
} satisfies TwoColumnsImageGridWithFullWidthFeatureProps;
