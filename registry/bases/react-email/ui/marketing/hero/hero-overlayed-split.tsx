import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Column,
  Section,
  Row,
  Link,
  Text,
  Heading,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroOverlayedSplitVariant = "overlay-left" | "overlay-right";

export interface HeroOverlayedSplitProps {
  theme?: TailwindConfig;
  eyebrow?: string;
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
  overlayColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroOverlayedSplitVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-overlayed-split-content {
      display: table-footer-group !important;
      width: 100% !important;
    }

    .hero-overlayed-split-spacer {
      display: table-header-group !important;
      height: 188px !important;
      line-height: 188px !important;
      width: 100% !important;
    }
  }
`;

type SectionProps = Required<
  Omit<HeroOverlayedSplitProps, "theme" | "variant">
> & {
  variant: HeroOverlayedSplitVariant;
};

export const HeroOverlayedSplitSection = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  imageAlt,
  imageSrc,
  logoAlt,
  logoHref,
  logoSrc,
  overlayColor,
  subheading,
  textColor,
  variant,
}: SectionProps) => {
  const content = (
    <Column
      className="hero-overlayed-split-content"
      style={{ background: overlayColor, width: "388px" }}
    >
      <Section width="100%">
        <Fragment>
          <Row>
            <Column style={{ padding: "44px 24px", textAlign: "left" }}>
              <Link href={logoHref}>
                <Img
                  alt={logoAlt}
                  src={logoSrc}
                  width="165"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
              </Link>
              <Section style={{ height: "144px", lineHeight: "144px" }}>
                &zwj;
              </Section>
              <Text
                style={{
                  color: textColor,
                  fontFamily,
                  fontSize: "16px",
                  fontWeight: 200,
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
              <Section style={{ height: "28px", lineHeight: "28px" }}>
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
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
  const spacer = (
    <Column
      aria-label={imageAlt || undefined}
      className="hero-overlayed-split-spacer"
      role={imageAlt ? "img" : undefined}
      style={{ fontSize: 0, lineHeight: 0, width: "212px" }}
    >
      &zwj;
    </Column>
  );

  return (
    <Section
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        tableLayout: "fixed",
      }}
      width="100%"
    >
      <Fragment>
        <Row>
          {variant === "overlay-left" ? (
            <>
              {content}
              {spacer}
            </>
          ) : (
            <>
              {spacer}
              {content}
            </>
          )}
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeroOverlayedSplit = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow = "Brew Stories",
  heading = "The Art of the Morning Ritual",
  imageAlt = "Coffee morning ritual",
  imageSrc = `${assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  pageBackgroundColor = "#f1f5f9",
  subheading = "January 31, 2025",
  textColor = "#f9fafb",
  theme = defaultTheme,
  variant = "overlay-left",
}: HeroOverlayedSplitProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{`${eyebrow} — ${heading}`}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroOverlayedSplitSection
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            eyebrow={eyebrow}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            logoAlt={logoAlt}
            logoHref={logoHref}
            logoSrc={logoSrc}
            overlayColor={overlayColor}
            pageBackgroundColor={pageBackgroundColor}
            subheading={subheading}
            textColor={textColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

HeroOverlayedSplit.PreviewProps = {
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow: "Brew Stories",
  heading: "The Art of the Morning Ritual",
  imageAlt: "Coffee morning ritual",
  imageSrc: `${assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${assetRoot}/emailcn-logo-light.png`,
  overlayColor: "rgba(3, 7, 18, 0.8)",
  pageBackgroundColor: "#f1f5f9",
  subheading: "January 31, 2025",
  textColor: "#f9fafb",
  theme: defaultTheme,
  variant: "overlay-left",
} satisfies HeroOverlayedSplitProps;
