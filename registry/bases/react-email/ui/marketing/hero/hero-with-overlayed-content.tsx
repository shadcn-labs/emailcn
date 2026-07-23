/* eslint-disable @next/next/no-img-element, complexity */
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
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
const assetRoot = "https://assets.mailviews.com/images/components";

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

export const HeroWithOverlayedContentSection = ({
  accentColor = "#D34A36",
  buttonBackgroundColor = "#D34A36",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Make an offer now",
  description = "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow = "Fresh Drop",
  heading = "Mid ‘77 Vintage",
  headingAccent = "Blazer",
  imageAlt = "Nike Blazer Mid ‘77 Vintage",
  imageSrc = `${assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt = "Mailviews",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/mailviews-insignia-mono.png`,
  slantColor = "#fffffe",
  subheading = "Only One Pair Left",
  textColor = "#030712",
  variant = "default",
}: SectionProps) => (
  <table
    aria-label={imageAlt || undefined}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role={imageAlt ? "img" : "presentation"}
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    width="100%"
  >
    <tbody>
      <tr>
        <td colSpan={3} style={{ height: "44px", lineHeight: "44px" }}>
          &zwj;
        </td>
      </tr>
      <tr>
        <td className="hero-overlayed-content-side" style={{ width: "48px" }}>
          &zwj;
        </td>
        <td style={{ textAlign: "center" }}>
          <a href={logoHref}>
            <img
              alt={logoAlt}
              src={logoSrc}
              width="65"
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
            />
          </a>
          <div style={{ height: "332px", lineHeight: "332px" }}>&zwj;</div>
          <p
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
          </p>
          <h1
            style={{
              color: textColor,
              fontFamily,
              fontSize: "48px",
              fontWeight: 300,
              lineHeight: "58px",
              margin: 0,
            }}
          >
            <span style={{ fontWeight: 500 }}>{headingAccent}</span> {heading}
          </h1>
          <p
            style={{
              color: textColor,
              fontFamily,
              fontSize: "18px",
              lineHeight: "28px",
              margin: 0,
            }}
          >
            {subheading}
          </p>
          <div style={{ height: "44px", lineHeight: "44px" }}>&zwj;</div>
          <p
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
          </p>
          <div style={{ height: "24px", lineHeight: "24px" }}>&zwj;</div>
          {ctaLabel && ctaHref ? (
            <a
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
              <img
                alt=""
                src={`${assetRoot}/icon-arrow-right.png`}
                width="12"
                style={{ maxWidth: "100%", verticalAlign: "baseline" }}
              />
            </a>
          ) : null}
        </td>
        <td className="hero-overlayed-content-side" style={{ width: "48px" }}>
          &zwj;
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          {variant === "default" ? (
            <div style={{ height: "64px", lineHeight: "64px" }}>&zwj;</div>
          ) : (
            <>
              <div style={{ height: "28px", lineHeight: "28px" }}>&zwj;</div>
              <div
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
        </td>
      </tr>
    </tbody>
  </table>
);

export const HeroWithOverlayedContent = ({
  accentColor = "#D34A36",
  buttonBackgroundColor = "#D34A36",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Make an offer now",
  description = "Step back into the golden era of hoops style with the iconic Blazer Mid '77 Vintage. A timeless mix of crisp white leather, retro suede accents, and that bold Swoosh, this pair delivers heritage with a modern edge.",
  eyebrow = "Fresh Drop",
  heading = "Mid ‘77 Vintage",
  headingAccent = "Blazer",
  imageAlt = "Nike Blazer Mid ‘77 Vintage",
  imageSrc = `${assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt = "Mailviews",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/mailviews-insignia-mono.png`,
  pageBackgroundColor = "#f1f5f9",
  slantColor = "#fffffe",
  subheading = "Only One Pair Left",
  textColor = "#030712",
  theme = defaultTheme,
  variant = "default",
}: HeroWithOverlayedContentProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{`${eyebrow} — ${headingAccent} ${heading}`}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroWithOverlayedContentSection
            accentColor={accentColor}
            buttonBackgroundColor={buttonBackgroundColor}
            buttonTextColor={buttonTextColor}
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            eyebrow={eyebrow}
            heading={heading}
            headingAccent={headingAccent}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            logoAlt={logoAlt}
            logoHref={logoHref}
            logoSrc={logoSrc}
            pageBackgroundColor={pageBackgroundColor}
            slantColor={slantColor}
            subheading={subheading}
            textColor={textColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

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
  logoAlt: "Mailviews",
  logoHref: "https://example.com",
  logoSrc: `${assetRoot}/mailviews-insignia-mono.png`,
  pageBackgroundColor: "#f1f5f9",
  slantColor: "#fffffe",
  subheading: "Only One Pair Left",
  textColor: "#030712",
  theme: defaultTheme,
  variant: "default",
} satisfies HeroWithOverlayedContentProps;
