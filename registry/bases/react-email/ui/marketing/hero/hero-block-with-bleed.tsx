import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Link,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroBlockWithBleedVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

export interface HeroBlockWithBleedProps {
  theme?: TailwindConfig;
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
  variant?: HeroBlockWithBleedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-block-bleed-spacer {
      width: 40px !important;
    }

    .hero-block-bleed-copy {
      width: 430px !important;
    }

    .hero-block-bleed-overlay {
      max-width: 100% !important;
    }

    .hero-block-bleed-heading {
      font-size: 48px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .hero-block-bleed-copy {
      width: 360px !important;
    }
  }

  .hero-block-bleed-cta:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<HeroBlockWithBleedProps, "theme">;

export const HeroBlockWithBleedSection = (props: SectionProps) => {
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
    backgroundImageSrc: `${assetRoot}/hero/block-with-bleed-bg.jpg`,
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover how",
    description:
      "Where golden dunes meet the distant peaks, nature speaks in silence. These fragile landscapes remind us how balance sustains beauty — and how every action we take can help protect it.",
    eyebrow: "Lush oasis, Our Wonderworld.",
    heading: "Preserve the planet we share",
    imageAlt: "Golden dunes beneath distant mountains",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    overlayColor: "rgba(3, 7, 18, 0.8)",
    pageBackgroundColor: "#f1f5f9",
    subheading: "Take action today.",
    textColor: "#f9fafb",
    variant: "left-centered",
    ...props,
  };

  const isLeft = variant.startsWith("left-");
  const placement = variant.replace(/^(left|right)-/, "");
  const showsLogo = placement === "centered" || placement === "bottom";
  const hasBottomSpacer = placement === "centered" || placement === "top";

  const copy = (
    <Section>
      <Fragment>
        <Row>
          <Column>
            <Section
              className="hero-block-bleed-copy"
              style={{ width: "520px" }}
            >
              <Fragment>
                <Row>
                  <Column
                    className="hero-block-bleed-spacer"
                    style={{ width: "80px" }}
                  >
                    &zwj;
                  </Column>
                  <Column
                    style={{
                      color: textColor,
                      textAlign: isLeft ? "left" : "right",
                    }}
                  >
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
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
                      className="hero-block-bleed-heading"
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
                      <Section style={{ textAlign: isLeft ? "left" : "right" }}>
                        <Link
                          className="hero-block-bleed-cta"
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
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "baseline",
                            }}
                            width="12"
                          />
                        </Link>
                      </Section>
                    ) : null}
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
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
            <Section style={{ tableLayout: "fixed" }} width="100%">
              <Fragment>
                <Row>
                  {isLeft ? (
                    <>
                      <Column
                        className="hero-block-bleed-overlay"
                        style={{
                          backgroundColor: overlayColor,
                          width: "300px",
                        }}
                      >
                        {copy}
                      </Column>
                      <Column>&zwj;</Column>
                    </>
                  ) : (
                    <>
                      <Column>{copy}</Column>
                      <Column
                        className="hero-block-bleed-overlay"
                        style={{
                          backgroundColor: overlayColor,
                          width: "300px",
                        }}
                      >
                        &zwj;
                      </Column>
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

export const HeroBlockWithBleed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-centered",
  ...props
}: HeroBlockWithBleedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? "Preserve the planet we share"}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroBlockWithBleedSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

HeroBlockWithBleed.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies HeroBlockWithBleedProps;
