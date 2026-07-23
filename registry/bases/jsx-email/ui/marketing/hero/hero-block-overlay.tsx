/* eslint-disable @next/next/no-img-element, complexity */
import { Body, Container, Head, Html, Preview } from "jsx-email";

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
const assetRoot = "https://assets.mailviews.com/images/components";

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

export const HeroBlockOverlaySection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${assetRoot}/hero/block-overlay-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover how",
  description = "SumUp is a global fintech leader transforming the way businesses accept payments. From mobile card readers to POS systems, we equip over 4 million merchants across 35+ countries with streamlined, secure tools that help them scale.",
  eyebrow = "Transaction fees as low as 0.89%",
  heading = "SumUp",
  imageAlt = "Entrepreneur using a SumUp payment terminal",
  logoAlt = "Mailviews",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/mailviews-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  pageBackgroundColor = "#f1f5f9",
  subheading = "Powering Modern Entrepreneurs",
  textColor = "#f9fafb",
  variant = "left-centered",
}: SectionProps) => {
  const isLeft = variant.startsWith("left-");
  const placement = variant.replace(/^(left|right)-/, "");
  const showsLogo = placement === "centered" || placement === "bottom";
  const hasBottomSpacer = placement === "centered" || placement === "top";

  const copy = (
    <td style={{ backgroundColor: overlayColor }}>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td
              className={
                isLeft
                  ? "hero-block-overlay-copy-left"
                  : "hero-block-overlay-copy-right"
              }
              style={{ color: textColor, padding: "44px", textAlign: "left" }}
            >
              <p
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
              </p>
              <h1
                className="hero-block-overlay-heading"
                style={{
                  fontFamily,
                  fontSize: "72px",
                  fontWeight: 500,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {heading}
              </h1>
              <p
                style={{
                  fontFamily,
                  fontSize: "18px",
                  lineHeight: "28px",
                  margin: 0,
                }}
              >
                {subheading}
              </p>
              <div style={{ lineHeight: "144px" }}>&zwj;</div>
              <p
                style={{
                  fontFamily,
                  fontSize: "18px",
                  fontWeight: 300,
                  lineHeight: "32px",
                  margin: 0,
                }}
              >
                {description}
              </p>
              <div style={{ lineHeight: "28px" }}>&zwj;</div>
              {ctaLabel && ctaHref ? (
                <a
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
                  <img
                    alt=""
                    src={`${assetRoot}/icon-arrow-right.png`}
                    style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                    width="12"
                  />
                </a>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );

  const gap = (
    <td className="hero-block-overlay-gap" style={{ width: "192px" }}>
      &zwj;
    </td>
  );

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
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
                <div style={{ lineHeight: "40px" }}>&zwj;</div>
                <div style={{ textAlign: "center" }}>
                  <a href={logoHref}>
                    <img
                      alt={logoAlt}
                      src={logoSrc}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width="165"
                    />
                  </a>
                </div>
                <div style={{ lineHeight: "80px" }}>&zwj;</div>
              </>
            ) : null}
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
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
                </tr>
              </tbody>
            </table>
            {hasBottomSpacer ? (
              <div style={{ lineHeight: "144px" }}>&zwj;</div>
            ) : null}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
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
