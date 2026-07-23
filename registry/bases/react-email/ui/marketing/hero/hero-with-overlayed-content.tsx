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
  Link,
  Text,
  Heading,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeroWithOverlayedContentProps {
  theme?: TailwindConfig;
  eyebrow?: string;
  headingAccent?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  slantColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithOverlayedContentVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-overlayed-content-side {
      width: 24px !important;
    }

    .hero-overlayed-content-slant {
      border-left-width: 100vw !important;
    }
  }
`;

type SectionProps = Omit<HeroWithOverlayedContentProps, "theme">;

const sectionDefaults = {
  accentColor: "#D34A36",
  buttonBackgroundColor: "#D34A36",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Make an offer now",
  description:
    "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow: "Fresh Drop",
  heading: "Mid ‘77 Vintage",
  headingAccent: "Blazer",
  imageAlt: "Nike Blazer Mid ‘77 Vintage",
  imageSrc: `${assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${assetRoot}/emailcn-insignia-mono.png`,
  pageBackgroundColor: "#f1f5f9",
  slantColor: "#fffffe",
  subheading: "Only One Pair Left",
  textColor: "#030712",
  variant: "default",
} satisfies SectionProps;

export const HeroWithOverlayedContentSection = (props: SectionProps) => {
  const {
    accentColor,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    headingAccent,
    imageAlt,
    imageSrc,
    logoAlt,
    logoHref,
    logoSrc,
    slantColor,
    subheading,
    textColor,
    variant,
  } = { ...sectionDefaults, ...props };

  return (
    <Section
      aria-label={imageAlt || undefined}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column colSpan={3} style={{ height: "44px", lineHeight: "44px" }}>
            &zwj;
          </Column>
        </Row>
        <Row>
          <Column
            className="hero-overlayed-content-side"
            style={{ width: "48px" }}
          >
            &zwj;
          </Column>
          <Column style={{ textAlign: "center" }}>
            <Link href={logoHref}>
              <Img
                alt={logoAlt}
                src={logoSrc}
                width="65"
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
              />
            </Link>
            <Section style={{ height: "332px", lineHeight: "332px" }}>
              &zwj;
            </Section>
            <Text
              style={{
                color: accentColor,
                fontFamily,
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {eyebrow}
            </Text>
            <Heading
              style={{
                color: textColor,
                fontFamily,
                fontSize: "48px",
                fontWeight: 300,
                lineHeight: "58px",
                margin: 0,
              }}
              as="h1"
            >
              <span style={{ fontWeight: 500 }}>{headingAccent}</span> {heading}
            </Heading>
            <Text
              style={{
                color: textColor,
                fontFamily,
                fontSize: "18px",
                lineHeight: "28px",
                margin: 0,
              }}
            >
              {subheading}
            </Text>
            <Section style={{ height: "44px", lineHeight: "44px" }}>
              &zwj;
            </Section>
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
              {description}
            </Text>
            <Section style={{ height: "24px", lineHeight: "24px" }}>
              &zwj;
            </Section>
            {ctaLabel && ctaHref ? (
              <Link
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
                  width="12"
                  style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                />
              </Link>
            ) : null}
          </Column>
          <Column
            className="hero-overlayed-content-side"
            style={{ width: "48px" }}
          >
            &zwj;
          </Column>
        </Row>
        <Row>
          <Column colSpan={3}>
            {variant === "default" ? (
              <Section style={{ height: "64px", lineHeight: "64px" }}>
                &zwj;
              </Section>
            ) : (
              <>
                <Section style={{ height: "28px", lineHeight: "28px" }}>
                  &zwj;
                </Section>
                <Section
                  className="hero-overlayed-content-slant"
                  style={{
                    borderColor: `transparent transparent ${slantColor}`,
                    borderStyle: "solid",
                    borderWidth:
                      variant === "slanted-left"
                        ? "0 0 100px 600px"
                        : "0 600px 100px 0",
                    height: 0,
                    width: 0,
                  }}
                />
              </>
            )}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeroWithOverlayedContent = (
  props: HeroWithOverlayedContentProps
) => {
  const { pageBackgroundColor, theme, ...sectionProps } = {
    ...sectionDefaults,
    theme: defaultTheme,
    ...props,
  };

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{`${sectionProps.eyebrow} — ${sectionProps.headingAccent} ${sectionProps.heading}`}</Preview>
      <Tailwind config={theme}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
            fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
          >
            <HeroWithOverlayedContentSection {...sectionProps} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

HeroWithOverlayedContent.PreviewProps = {
  accentColor: "#D34A36",
  buttonBackgroundColor: "#D34A36",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Make an offer now",
  description:
    "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow: "Fresh Drop",
  heading: "Mid ‘77 Vintage",
  headingAccent: "Blazer",
  imageAlt: "Nike Blazer Mid ‘77 Vintage",
  imageSrc: `${assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${assetRoot}/emailcn-insignia-mono.png`,
  pageBackgroundColor: "#f1f5f9",
  slantColor: "#fffffe",
  subheading: "Only One Pair Left",
  textColor: "#030712",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
