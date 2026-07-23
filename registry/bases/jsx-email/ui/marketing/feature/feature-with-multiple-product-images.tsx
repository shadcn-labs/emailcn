import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FeatureWithMultipleProductImagesVariant =
  | "logo-left"
  | "logo-right"
  | "images-left"
  | "images-right";

export interface FeatureWithMultipleProductImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  middleImageSrc?: string;
  middleImageAlt?: string;
  smallImageSrc?: string;
  smallImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithMultipleProductImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-multiple-centered { margin-left: auto !important; margin-right: auto !important; }
    .feature-multiple-stack { display: block !important; width: 100% !important; }
    .feature-multiple-hide-mobile { display: none !important; }
    .feature-multiple-auto { width: auto !important; }
    .feature-multiple-gap { line-height: 44px !important; }
  }
`;

const sharedDefaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  headingColor: "#030712",
  linkColor: "#4f46e5",
  logoAlt: "Visa",
  logoBackgroundColor: "#f3f4f6",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/logos/logo-visa.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

const logoDefaults = {
  body: "Accepting cards should be quick, secure, and seamless. Discover our tools that simplify every transaction.",
  heading: "Built for the journey ahead.",
  largeImageAlt: "Product Image 1",
  largeImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg.jpg",
  middleImageAlt: "Product Image 2",
  middleImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
  smallImageAlt: "Product Image 2",
  smallImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
};

const imagesDefaults = {
  body: "Explore durable layers that balance insulation, breathability, and all-day comfort.",
  heading: "Outdoor essentials redefined.",
  largeImageAlt: "Product Image 1",
  largeImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg-2.jpg",
  middleImageAlt: "Product Image 2",
  middleImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-md.jpg",
  smallImageAlt: "Product Image 3",
  smallImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm-2.jpg",
};

type SectionProps = Omit<FeatureWithMultipleProductImagesProps, "theme">;
type ResolvedProps = typeof sharedDefaults &
  typeof imagesDefaults &
  SectionProps;

const ProductImage = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: number;
}) => (
  <Img
    alt={alt}
    src={src}
    style={{
      borderRadius: "4px",
      display: "inline",
      maxWidth: "100%",
      verticalAlign: "middle",
    }}
    width={width}
  />
);

const LogoArtwork = ({ props }: { props: ResolvedProps }) => (
  <Section
    className="feature-multiple-auto feature-multiple-centered"
    width="100%"
  >
    <Fragment>
      <Row>
        <Column style={{ verticalAlign: "bottom", width: "144px" }}>
          <ProductImage
            alt={props.largeImageAlt}
            src={props.largeImageSrc}
            width={144}
          />
        </Column>
        <Column style={{ width: "16px" }}>&zwj;</Column>
        <Column style={{ verticalAlign: "bottom", width: "96px" }}>
          <Section
            style={{
              backgroundColor: props.logoBackgroundColor,
              borderRadius: "4px",
              lineHeight: "96px",
              textAlign: "center",
            }}
          >
            <Img
              alt={props.logoAlt}
              src={props.logoSrc}
              style={{
                display: "inline",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width={50}
            />
          </Section>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const LogoImageGroup = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-multiple-stack"
    style={{ verticalAlign: "top", width: "256px" }}
  >
    <LogoArtwork props={props} />
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Section style={{ textAlign: "center" }}>
      <ProductImage
        alt={props.smallImageAlt}
        src={props.smallImageSrc}
        width={112}
      />
    </Section>
  </Column>
);

const ImagesArtwork = ({ props }: { props: ResolvedProps }) => (
  <Section
    className="feature-multiple-auto feature-multiple-centered"
    width="100%"
  >
    <Fragment>
      <Row>
        <Column style={{ verticalAlign: "bottom", width: "144px" }}>
          <Section style={{ textAlign: "right" }}>
            <ProductImage
              alt={props.largeImageAlt}
              src={props.largeImageSrc}
              width={144}
            />
          </Section>
          <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
          <Section style={{ textAlign: "right" }}>
            <ProductImage
              alt={props.middleImageAlt}
              src={props.middleImageSrc}
              width={112}
            />
          </Section>
        </Column>
        <Column style={{ width: "16px" }}>&zwj;</Column>
        <Column style={{ textAlign: "center", width: "96px" }}>
          <ProductImage
            alt={props.smallImageAlt}
            src={props.smallImageSrc}
            width={112}
          />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const ImagesGroup = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-multiple-stack"
    style={{ verticalAlign: "top", width: "256px" }}
  >
    <ImagesArtwork props={props} />
  </Column>
);

const FeatureCopy = ({
  logoVariant,
  props,
}: {
  logoVariant: boolean;
  props: ResolvedProps;
}) => (
  <Column
    className="feature-multiple-stack"
    style={{
      textAlign: "left",
      verticalAlign: logoVariant ? "top" : "middle",
    }}
  >
    <Heading
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "32px",
        margin: 0,
      }}
      as="h2"
    >
      {logoVariant && props.heading === logoDefaults.heading ? (
        <>
          Built for the <br className="feature-multiple-hide-mobile" /> journey
          ahead.
        </>
      ) : (
        props.heading
      )}
    </Heading>
    <Text
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: "16px 0 0",
      }}
    >
      {props.body}
    </Text>
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Section>
      <Link
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily,
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: 1,
          padding: "6px 0",
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
      </Link>
    </Section>
  </Column>
);

export const FeatureWithMultipleProductImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-left";
  const logoVariant = variant.startsWith("logo-");
  const defaults = logoVariant ? logoDefaults : imagesDefaults;
  const resolved = {
    ...sharedDefaults,
    ...defaults,
    ...props,
  } as ResolvedProps;
  const artworkRight = variant.endsWith("-right");
  const artwork = logoVariant ? (
    <LogoImageGroup props={resolved} />
  ) : (
    <ImagesGroup props={resolved} />
  );
  const copy = <FeatureCopy logoVariant={logoVariant} props={resolved} />;

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
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {artworkRight ? copy : artwork}
                          <Column
                            className="feature-multiple-stack feature-multiple-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </Column>
                          {artworkRight ? artwork : copy}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const FeatureWithMultipleProductImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "logo-left",
  ...props
}: FeatureWithMultipleProductImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Built for the journey ahead.</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <FeatureWithMultipleProductImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FeatureWithMultipleProductImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-left",
} satisfies FeatureWithMultipleProductImagesProps;
