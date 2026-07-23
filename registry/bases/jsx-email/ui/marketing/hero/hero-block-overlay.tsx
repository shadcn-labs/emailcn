import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Column,
  Section,
  Row,
  Text,
  Heading,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeroBlockOverlayVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

export interface HeroBlockOverlayProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroBlockOverlayVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-block-overlay-gap {
      width: 32px !important;
    }

    .hero-block-overlay-heading {
      font-size: 48px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .hero-block-overlay-gap {
      width: 24px !important;
    }

    .hero-block-overlay-copy-left {
      padding-left: 24px !important;
    }

    .hero-block-overlay-copy-right {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
  }

  .hero-block-overlay-cta:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<HeroBlockOverlayProps, "theme">;

export const HeroBlockOverlaySection = (props: SectionProps) => {
  const {
    backgroundColor,
    backgroundImageSrc,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    imageAlt,
    logoAlt,
    logoHref,
    logoSrc,
    overlayColor,
    pageBackgroundColor,
    subheading,
    textColor,
    variant,
  } = {
    backgroundColor: "#030712",
    backgroundImageSrc: `${assetRoot}/hero/block-overlay-bg.jpg`,
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover how",
    description:
      "SumUp is a global fintech leader transforming the way businesses accept payments. From mobile card readers to POS systems, we equip over 4 million merchants across 35+ countries with streamlined, secure tools that help them scale.",
    eyebrow: "Transaction fees as low as 0.89%",
    heading: "SumUp",
    imageAlt: "Entrepreneur using a SumUp payment terminal",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    overlayColor: "rgba(3, 7, 18, 0.8)",
    pageBackgroundColor: "#f1f5f9",
    subheading: "Powering Modern Entrepreneurs",
    textColor: "#f9fafb",
    variant: "left-centered",
    ...props,
  };

  const isLeft = variant.startsWith("left-");
  const placement = variant.replace(/^(left|right)-/, "");
  const showsLogo = placement === "centered" || placement === "bottom";
  const hasBottomSpacer = placement === "centered" || placement === "top";

  const copy = (
    <Column style={{ backgroundColor: overlayColor }}>
      <Section width="100%">
        <Fragment>
          <Row>
            <Column
              className={
                isLeft
                  ? "hero-block-overlay-copy-left"
                  : "hero-block-overlay-copy-right"
              }
              style={{ color: textColor, padding: "44px", textAlign: "left" }}
            >
              <Text
                style={{
                  fontFamily,
                  fontSize: "16px",
                  fontWeight: 200,
                  lineHeight: "24px",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </Text>
              <Heading
                className="hero-block-overlay-heading"
                style={{
                  fontFamily,
                  fontSize: "72px",
                  fontWeight: 500,
                  lineHeight: 1,
                  margin: 0,
                }}
                as="h1"
              >
                {heading}
              </Heading>
              <Text
                style={{
                  fontFamily,
                  fontSize: "18px",
                  lineHeight: "28px",
                  margin: 0,
                }}
              >
                {subheading}
              </Text>
              <Section style={{ lineHeight: "144px" }}>&zwj;</Section>
              <Text
                style={{
                  fontFamily,
                  fontSize: "18px",
                  fontWeight: 300,
                  lineHeight: "32px",
                  margin: 0,
                }}
              >
                {description}
              </Text>
              <Section style={{ lineHeight: "28px" }}>&zwj;</Section>
              {ctaLabel && ctaHref ? (
                <Link
                  className="hero-block-overlay-cta"
                  href={ctaHref}
                  style={{
                    backgroundColor: buttonBackgroundColor,
                    borderRadius: "8px",
                    color: buttonTextColor,
                    display: "inline-block",
                    fontFamily,
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1,
                    padding: "14px 20px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
                  <Img
                    alt=""
                    src={`${assetRoot}/icon-arrow-right.png`}
                    style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                    width="12"
                  />
                </Link>
              ) : null}
            </Column>
          </Row>
        </Fragment>
      </Section>
    </Column>
  );

  const gap = (
    <Column className="hero-block-overlay-gap" style={{ width: "192px" }}>
      &zwj;
    </Column>
  );

  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            aria-label={imageAlt || undefined}
            role={imageAlt ? "img" : undefined}
            style={{
              backgroundColor,
              backgroundImage: `url(${backgroundImageSrc})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {showsLogo ? (
              <>
                <Section style={{ lineHeight: "40px" }}>&zwj;</Section>
                <Section style={{ textAlign: "center" }}>
                  <Link href={logoHref}>
                    <Img
                      alt={logoAlt}
                      src={logoSrc}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width="165"
                    />
                  </Link>
                </Section>
                <Section style={{ lineHeight: "80px" }}>&zwj;</Section>
              </>
            ) : null}
            <Section width="100%">
              <Fragment>
                <Row>
                  {isLeft ? (
                    <>
                      {copy}
                      {gap}
                    </>
                  ) : (
                    <>
                      {gap}
                      {copy}
                    </>
                  )}
                </Row>
              </Fragment>
            </Section>
            {hasBottomSpacer ? (
              <Section style={{ lineHeight: "144px" }}>&zwj;</Section>
            ) : null}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeroBlockOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-centered",
  ...props
}: HeroBlockOverlayProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? "SumUp"}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        color: theme.colorText,
        fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <HeroBlockOverlaySection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

HeroBlockOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies HeroBlockOverlayProps;
