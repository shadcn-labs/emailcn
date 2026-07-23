import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Heading,
  Section,
  Row,
  Column,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeroWithOverlayGradientVariant =
  | "split-with-logo"
  | "split-no-logo"
  | "unified-with-logo"
  | "unified-no-logo";

export interface HeroWithOverlayGradientProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  price?: string;
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
  variant?: HeroWithOverlayGradientVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-overlay-gradient-heading {
      font-size: 48px !important;
    }
  }

  .hero-overlay-gradient-cta:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<HeroWithOverlayGradientProps, "theme">;

export const HeroWithOverlayGradientSection = (props: SectionProps) => {
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
    price,
    subheading,
    textColor,
    variant,
  } = {
    backgroundColor: "#030712",
    backgroundImageSrc: `${assetRoot}/hero/overlay-gradient-bg.jpg`,
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Shop now",
    description:
      "Inspired by the granite giants of Yosemite, our latest pack is made for those who roam. Durable, weather-ready, and crafted for every climb, it’s built to carry your story, wherever the trail leads.",
    eyebrow: "Yosemite Collection",
    heading: "Forclaz 50L",
    imageAlt: "Forclaz backpack in Yosemite",
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    overlayColor: "rgba(3, 7, 18, 0.6)",
    pageBackgroundColor: "#f1f5f9",
    price: "Starts at $129.99",
    subheading: "Easyfit Version",
    textColor: "#f9fafb",
    variant: "split-with-logo",
    ...props,
  };

  const hasLogo = variant.endsWith("with-logo");
  const isSplit = variant.startsWith("split-");

  const title = (
    <>
      <Text
        style={{
          color: textColor,
          fontFamily,
          fontSize: "16px",
          fontWeight: 200,
          lineHeight: "24px",
          margin: 0,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </Text>
      <Heading
        className="hero-overlay-gradient-heading"
        style={{
          color: textColor,
          fontFamily,
          fontSize: "72px",
          fontWeight: 500,
          lineHeight: 1,
          margin: 0,
          textAlign: "center",
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
          textAlign: "center",
        }}
      >
        {subheading}
      </Text>
    </>
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
            {hasLogo ? (
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
                <Section style={{ lineHeight: "112px" }}>&zwj;</Section>
              </>
            ) : (
              <Section style={{ lineHeight: "136px" }}>&zwj;</Section>
            )}
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column
                    style={{
                      backgroundImage: `linear-gradient(rgba(3, 7, 18, 0), ${overlayColor})`,
                    }}
                  >
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          <Column style={{ padding: "44px 24px" }}>
                            {isSplit ? (
                              <>
                                {title}
                                <Section style={{ lineHeight: "388px" }}>
                                  &zwj;
                                </Section>
                              </>
                            ) : (
                              <>
                                <Section style={{ lineHeight: "232px" }}>
                                  &zwj;
                                </Section>
                                {title}
                                <Section style={{ lineHeight: "44px" }}>
                                  &zwj;
                                </Section>
                              </>
                            )}
                            <Heading
                              style={{
                                color: textColor,
                                fontFamily,
                                fontSize: "24px",
                                fontWeight: 500,
                                lineHeight: "32px",
                                margin: 0,
                                textAlign: "center",
                              }}
                              as="h2"
                            >
                              {price}
                            </Heading>
                            <Section style={{ lineHeight: "12px" }}>
                              &zwj;
                            </Section>
                            <Text
                              style={{
                                color: textColor,
                                fontFamily,
                                fontSize: "18px",
                                fontWeight: 300,
                                lineHeight: "32px",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              {description}
                            </Text>
                            <Section style={{ lineHeight: "28px" }}>
                              &zwj;
                            </Section>
                            {ctaLabel && ctaHref ? (
                              <Section style={{ textAlign: "center" }}>
                                <Link
                                  className="hero-overlay-gradient-cta"
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
                                  <span style={{ marginRight: "8px" }}>
                                    {ctaLabel}
                                  </span>
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
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeroWithOverlayGradient = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "split-with-logo",
  ...props
}: HeroWithOverlayGradientProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? "Forclaz 50L"}</Preview>
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
        <HeroWithOverlayGradientSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

HeroWithOverlayGradient.PreviewProps = {
  theme: defaultTheme,
  variant: "split-with-logo",
} satisfies HeroWithOverlayGradientProps;
