import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Heading,
  Text,
  Link,
  Column,
  Row,
  Img,
} from "jsx-email";
import type { ReactElement } from "react";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CTAWithImageStripVariant =
  | "boxed-right"
  | "boxed-left"
  | "full-right"
  | "full-left";

export interface CTAWithImageStripProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageSrc4?: string;
  imageAlt4?: string;
  imageSrc5?: string;
  imageAlt5?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  stripBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: CTAWithImageStripVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .cta-strip-inner {
      margin-left: auto !important;
      margin-right: auto !important;
      width: auto !important;
    }

    .cta-strip-stack {
      display: block !important;
      width: 100% !important;
    }

    .cta-strip-outer-content {
      padding: 0 !important;
    }

    .cta-strip-copy {
      padding-left: 24px !important;
      padding-right: 24px !important;
      text-align: center !important;
    }

    .cta-strip-gap {
      line-height: 20px !important;
    }
  }

  .cta-strip-button:hover {
    background-color: #4338ca !important;
  }
`;

const sharedStripAssets = {
  imageSrc2: "https://emailcn.vercel.app/api/email-assets/cta/strip-2.jpg",
  imageSrc4: "https://emailcn.vercel.app/api/email-assets/cta/strip-4.jpg",
  imageSrc5: "https://emailcn.vercel.app/api/email-assets/cta/strip-5.jpg",
};

const variantContent = {
  "boxed-left": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    stripBackgroundColor: "#030712",
    ...sharedStripAssets,
  },
  "boxed-right": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    stripBackgroundColor: "#e5e7eb",
    ...sharedStripAssets,
  },
  "full-left": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    stripBackgroundColor: "#fffffe",
    ...sharedStripAssets,
  },
  "full-right": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    stripBackgroundColor: "#fffffe",
    ...sharedStripAssets,
  },
} satisfies Record<
  CTAWithImageStripVariant,
  {
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageSrc4: string;
    imageSrc5: string;
    stripBackgroundColor: string;
  }
>;

const defaultSectionStyles = {
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#f8fafc",
  ctaHref: "https://example.com/",
  ctaLabel: "Sign up today",
  heading: "Join the Adventure",
  headingColor: "#030712",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageAlt4: "",
  imageAlt5: "",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Join a community built for explorers. Sign up today and get early access to new collections, gear guides, and exclusive offers made for the outdoors.",
  textColor: "#4b5563",
};

type SectionProps = Omit<CTAWithImageStripProps, "theme">;
type ResolvedProps = typeof defaultSectionStyles &
  (typeof variantContent)[CTAWithImageStripVariant];

const CTAContent = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  subtext,
  textColor,
}: ResolvedProps) => (
  <Section className="cta-strip-copy">
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Heading
      style={{
        color: headingColor,
        fontFamily,
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "32px",
        margin: 0,
      }}
      as="h2"
    >
      {heading}
    </Heading>
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Text
      style={{
        color: textColor,
        fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {subtext}
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Link
      className="cta-strip-button"
      href={ctaHref}
      style={{
        backgroundColor: buttonBackgroundColor,
        borderRadius: "8px",
        color: buttonTextColor,
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        padding: "10px 22px",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      {ctaLabel}
    </Link>
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
  </Section>
);

const StripImage = ({
  alt,
  borderRadius = "4px",
  src,
}: {
  alt: string;
  borderRadius?: string;
  src: string;
}) => (
  <Img
    alt={alt}
    src={src}
    style={{ borderRadius, maxWidth: "100%", verticalAlign: "middle" }}
    width="116"
  />
);

const ImageColumn = ({
  children,
  firstOffset = false,
}: {
  children: ReactElement<{ src: string }>[];
  firstOffset?: boolean;
}) => (
  <Column style={{ verticalAlign: "middle" }}>
    {children.map((child, index) => (
      <Section
        key={child.props.src}
        style={{ marginTop: index === 0 && !firstOffset ? 0 : "24px" }}
      >
        {child}
      </Section>
    ))}
  </Column>
);

const ImageStrip = ({
  boxed,
  left,
  props,
}: {
  boxed: boolean;
  left: boolean;
  props: ResolvedProps;
}) => (
  <Column
    className="cta-strip-stack"
    style={{
      backgroundColor: props.stripBackgroundColor,
      width: boxed ? "304px" : undefined,
    }}
  >
    <Section className="cta-strip-inner" width="100%">
      <Fragment>
        <Row>
          {boxed || left ? (
            <Column style={{ width: "24px" }}>&zwj;</Column>
          ) : null}
          <ImageColumn firstOffset={!boxed}>
            <StripImage
              alt={props.imageAlt1}
              borderRadius={boxed ? "0 0 4px 4px" : "4px"}
              src={props.imageSrc1}
            />
            <StripImage alt={props.imageAlt2} src={props.imageSrc2} />
            <StripImage
              alt={props.imageAlt3}
              borderRadius={boxed ? "4px 4px 0 0" : "4px"}
              src={props.imageSrc3}
            />
          </ImageColumn>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <ImageColumn>
            <StripImage alt={props.imageAlt4} src={props.imageSrc4} />
            <StripImage alt={props.imageAlt5} src={props.imageSrc5} />
          </ImageColumn>
          {boxed || !left ? (
            <Column style={{ width: "24px" }}>&zwj;</Column>
          ) : null}
        </Row>
      </Fragment>
    </Section>
  </Column>
);

export const CTAWithImageStripSection = (props: SectionProps) => {
  const variant = props.variant ?? "boxed-right";
  const resolved = {
    ...defaultSectionStyles,
    ...variantContent[variant],
    ...props,
  } as ResolvedProps;
  const boxed = variant.startsWith("boxed");
  const left = variant.endsWith("left");
  const contentCell = (
    <Column
      className="cta-strip-stack"
      style={{
        textAlign: "left",
        verticalAlign: "middle",
        width: boxed ? "228px" : "252px",
      }}
    >
      <CTAContent {...resolved} />
    </Column>
  );
  const stripCell = <ImageStrip boxed={boxed} left={left} props={resolved} />;

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
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="cta-strip-outer-content"
                    style={{
                      paddingLeft: left ? 0 : "24px",
                      paddingRight: left ? "24px" : 0,
                    }}
                  >
                    <Section>
                      <Fragment>
                        <Row>
                          {left ? stripCell : contentCell}
                          <Column
                            className="cta-strip-stack cta-strip-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </Column>
                          {left ? contentCell : stripCell}
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

export const CTAWithImageStrip = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "boxed-right",
  ...props
}: CTAWithImageStripProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? defaultSectionStyles.heading}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CTAWithImageStripSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

CTAWithImageStrip.PreviewProps = {
  theme: defaultTheme,
  variant: "boxed-right",
} satisfies CTAWithImageStripProps;
