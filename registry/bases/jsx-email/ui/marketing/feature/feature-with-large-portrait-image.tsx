import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Heading,
  Text,
  Link,
  Column,
  Row,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FeatureWithLargePortraitImageVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "content-bottom-left"
  | "content-bottom-right"
  | "content-top-left"
  | "content-top-right";

export interface FeatureWithLargePortraitImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
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
  variant?: FeatureWithLargePortraitImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-portrait-stack { display: block !important; width: 100% !important; }
    .feature-portrait-image { width: 100% !important; }
    .feature-portrait-hide-mobile { display: none !important; }
    .feature-portrait-gap { line-height: 24px !important; }
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
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-north-face.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

const logoDefaults = {
  body: "Find advanced outerwear engineered to handle wind, rain, and sudden shifts in the elements.",
  heading: "Explore without limits.",
  portraitImageAlt: "Product Image",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-1.jpg",
  secondaryImageAlt: "Product Image 2",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg",
};

const contentDefaults = {
  body: "Experience cutting-edge performance, from dual-frequency GPS to pro-grade health insights.",
  heading: "Innovation on your wrist.",
  portraitImageAlt: "Product Image 1",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-2.jpg",
  secondaryImageAlt: "Product Image 2",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg",
};

const contentTopRightDefaults = {
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-3.jpg",
  secondaryImageSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-2.jpg",
};

type SectionProps = Omit<FeatureWithLargePortraitImageProps, "theme">;
type ResolvedProps = typeof sharedDefaults &
  typeof contentDefaults &
  SectionProps;

const ResponsiveImage = ({
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
    className="feature-portrait-image"
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

const LogoPanel = ({ props }: { props: ResolvedProps }) => (
  <Section
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "205px",
      textAlign: "center",
    }}
  >
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ display: "inline", maxWidth: "100%", verticalAlign: "middle" }}
      width={139}
    />
  </Section>
);

const SecondaryImage = ({ props }: { props: ResolvedProps }) => (
  <Section style={{ textAlign: "center" }}>
    <ResponsiveImage
      alt={props.secondaryImageAlt}
      src={props.secondaryImageSrc}
      width={205}
    />
  </Section>
);

const FeatureCopy = ({
  contentVariant,
  props,
}: {
  contentVariant: boolean;
  props: ResolvedProps;
}) => (
  <>
    <Heading
      style={{
        color: props.headingColor,
        fontFamily,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
        margin: 0,
      }}
      as="h2"
    >
      {contentVariant && props.heading === contentDefaults.heading ? (
        <>
          Innovation on <br className="feature-portrait-hide-mobile" /> your
          wrist.
        </>
      ) : (
        props.heading
      )}
    </Heading>
    <Text
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: "12px 0 0",
      }}
    >
      {props.body}
    </Text>
    <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
    <Section>
      <Link
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
      </Link>
    </Section>
  </>
);

const ContentColumn = ({
  contentVariant,
  mediaAfter,
  mediaKind,
  props,
}: {
  contentVariant: boolean;
  mediaAfter: boolean;
  mediaKind: "logo" | "secondary";
  props: ResolvedProps;
}) => {
  const media =
    mediaKind === "logo" ? (
      <LogoPanel props={props} />
    ) : (
      <SecondaryImage props={props} />
    );
  return (
    <Column
      className="feature-portrait-stack"
      style={{ textAlign: "left", verticalAlign: "top", width: "205px" }}
    >
      {mediaAfter ? null : (
        <Section style={{ marginBottom: "24px" }}>{media}</Section>
      )}
      <FeatureCopy contentVariant={contentVariant} props={props} />
      {mediaAfter ? (
        <Section style={{ marginTop: "24px" }}>{media}</Section>
      ) : null}
    </Column>
  );
};

const PortraitColumn = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-portrait-stack"
    style={{ verticalAlign: "top", width: "323px" }}
  >
    <ResponsiveImage
      alt={props.portraitImageAlt}
      src={props.portraitImageSrc}
      width={323}
    />
  </Column>
);

export const FeatureWithLargePortraitImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "logo-top-left";
  const contentVariant = variant.startsWith("content-");
  const variantDefaults = contentVariant ? contentDefaults : logoDefaults;
  const resolved = {
    ...sharedDefaults,
    ...variantDefaults,
    ...(variant.startsWith("content-top-") ? contentTopRightDefaults : {}),
    ...props,
  } as ResolvedProps;
  const portraitLeft = variant.endsWith("-right");
  const mediaAfter =
    variant.startsWith("logo-bottom-") || variant.startsWith("content-top-");
  const content = (
    <ContentColumn
      contentVariant={contentVariant}
      mediaAfter={mediaAfter}
      mediaKind={contentVariant ? "secondary" : "logo"}
      props={resolved}
    />
  );
  const portrait = <PortraitColumn props={resolved} />;

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
                          {portraitLeft ? portrait : content}
                          <Column
                            className="feature-portrait-stack feature-portrait-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </Column>
                          {portraitLeft ? content : portrait}
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

export const FeatureWithLargePortraitImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "logo-top-left",
  ...props
}: FeatureWithLargePortraitImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Explore without limits.</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <FeatureWithLargePortraitImageSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FeatureWithLargePortraitImage.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithLargePortraitImageProps;
