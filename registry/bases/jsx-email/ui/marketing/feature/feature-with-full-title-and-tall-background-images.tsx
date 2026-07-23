import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
  Column,
  Row,
  Heading,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "logo-top-left"
  | "logo-top-right";

export interface FeatureWithFullTitleAndTallBackgroundImagesProps {
  theme?: EmailThemeTokens;
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
  variant?: FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .feature-full-stack { display: block !important; width: 100% !important; }
    .feature-full-gap { line-height: 24px !important; }
  }

  @media only screen and (max-width: 430px) {
    .feature-full-image-stack { display: block !important; width: 100% !important; }
    .feature-full-image-gap { line-height: 24px !important; }
  }
`;

const defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Discover clinically proven formulas designed to target concerns with precision and clarity.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Science-led skincare essentials.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-4.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-5.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#f3f4f6",
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-2.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<
  FeatureWithFullTitleAndTallBackgroundImagesProps,
  "theme"
>;
type ResolvedProps = typeof defaults & SectionProps;

const LogoPanel = ({ props }: { props: ResolvedProps }) => (
  <Section
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "144px",
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

const FeatureCopy = ({ props }: { props: ResolvedProps }) => (
  <>
    <Text
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: 0,
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
    className="feature-full-stack"
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
    className="feature-full-image-stack"
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
    <Section style={{ lineHeight: "280px" }}>&zwj;</Section>
  </Column>
);

const ImagesColumn = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-full-stack"
    style={{ verticalAlign: "top", width: "324px" }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <BackgroundCard imageSrc={props.imageSrc1} props={props} />
          <Column
            className="feature-full-image-stack feature-full-image-gap"
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

export const FeatureWithFullTitleAndTallBackgroundImagesSection = (
  props: SectionProps
) => {
  const variant = props.variant ?? "logo-bottom-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = { ...defaults, ...props } as ResolvedProps;
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
                    <Heading
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "32px",
                        margin: "0 0 24px",
                      }}
                      as="h2"
                    >
                      {resolved.heading}
                    </Heading>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {contentRight ? images : content}
                          <Column
                            className="feature-full-stack feature-full-gap"
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

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "logo-bottom-left",
  ...props
}: FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Science-led skincare essentials.</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <FeatureWithFullTitleAndTallBackgroundImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-bottom-left",
} satisfies FeatureWithFullTitleAndTallBackgroundImagesProps;
