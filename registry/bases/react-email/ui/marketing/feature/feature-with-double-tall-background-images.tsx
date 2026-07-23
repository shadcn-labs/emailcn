import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Section,
  Heading,
  Text,
  Link,
  Column,
  Row,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FeatureWithDoubleTallBackgroundImagesVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right";

export interface FeatureWithDoubleTallBackgroundImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithDoubleTallBackgroundImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-double-stack {
      display: block !important;
      width: 100% !important;
    }

    .feature-double-gap {
      line-height: 24px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .feature-double-image-stack {
      display: block !important;
      width: 100% !important;
    }

    .feature-double-image-gap {
      line-height: 24px !important;
    }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Premium footwear, outerwear, and lifestyle pieces chosen for quality, comfort, and everyday performance.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Discover the Monarch Collection.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-1.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-2.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#030712",
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-1.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<FeatureWithDoubleTallBackgroundImagesProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

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
      style={{
        display: "inline",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={139}
    />
  </Section>
);

const FeatureCopy = ({ props }: { props: ResolvedProps }) => (
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
      {props.heading}
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
  logoAfter,
  props,
}: {
  logoAfter: boolean;
  props: ResolvedProps;
}) => (
  <Column
    className="feature-double-stack"
    style={{ textAlign: "left", verticalAlign: "top", width: "204px" }}
  >
    {logoAfter ? null : (
      <Section style={{ marginBottom: "24px" }}>
        <LogoPanel props={props} />
      </Section>
    )}
    <FeatureCopy props={props} />
    {logoAfter ? (
      <Section style={{ marginTop: "24px" }}>
        <LogoPanel props={props} />
      </Section>
    ) : null}
  </Column>
);

const BackgroundCard = ({
  imageSrc,
  props,
}: {
  imageSrc: string;
  props: ResolvedProps;
}) => (
  <Column
    className="feature-double-image-stack"
    style={{
      backgroundColor: props.imageBackgroundColor,
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      textAlign: "center",
      width: "150px",
    }}
  >
    <Section style={{ lineHeight: "410px" }}>&zwj;</Section>
  </Column>
);

const ImagesColumn = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-double-stack"
    style={{ verticalAlign: "top", width: "324px" }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <BackgroundCard imageSrc={props.imageSrc1} props={props} />
          <Column
            className="feature-double-image-stack feature-double-image-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <BackgroundCard imageSrc={props.imageSrc2} props={props} />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

export const FeatureWithDoubleTallBackgroundImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-top-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = {
    ...defaults,
    ...(contentRight
      ? {
          imageSrc2:
            "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-3.jpg",
        }
      : {}),
    ...props,
  } as ResolvedProps;
  const content = <ContentColumn logoAfter={logoAfter} props={resolved} />;
  const images = <ImagesColumn props={resolved} />;

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
                          {contentRight ? images : content}
                          <Column
                            className="feature-double-stack feature-double-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </Column>
                          {contentRight ? content : images}
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

export const FeatureWithDoubleTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "logo-top-left",
  ...props
}: FeatureWithDoubleTallBackgroundImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Discover the Monarch Collection.</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <FeatureWithDoubleTallBackgroundImagesSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithDoubleTallBackgroundImagesProps;
