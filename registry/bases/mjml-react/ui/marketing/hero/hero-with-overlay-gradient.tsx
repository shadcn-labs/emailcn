/* eslint-disable @next/next/no-img-element, complexity */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
const assetRoot = "https://assets.mailviews.com/images/components";

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

export const HeroWithOverlayGradientSection = ({
  backgroundColor = "#030712",
  backgroundImageSrc = `${assetRoot}/hero/overlay-gradient-bg.jpg`,
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Shop now",
  description = "Inspired by the granite giants of Yosemite, our latest pack is made for those who roam. Durable, weather-ready, and crafted for every climb, it’s built to carry your story, wherever the trail leads.",
  eyebrow = "Yosemite Collection",
  heading = "Forclaz 50L",
  imageAlt = "Forclaz backpack in Yosemite",
  logoAlt = "Mailviews",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/mailviews-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.6)",
  pageBackgroundColor = "#f1f5f9",
  price = "Starts at $129.99",
  subheading = "Easyfit Version",
  textColor = "#f9fafb",
  variant = "split-with-logo",
}: SectionProps) => {
  const hasLogo = variant.endsWith("with-logo");
  const isSplit = variant.startsWith("split-");

  const title = (
    <>
      <p
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
      </p>
      <h1
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
      >
        {heading}
      </h1>
      <p
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
      </p>
    </>
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
            {hasLogo ? (
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
                <div style={{ lineHeight: "112px" }}>&zwj;</div>
              </>
            ) : (
              <div style={{ lineHeight: "136px" }}>&zwj;</div>
            )}
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ width: "24px" }}>&zwj;</td>
                  <td
                    style={{
                      backgroundImage: `linear-gradient(rgba(3, 7, 18, 0), ${overlayColor})`,
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td style={{ padding: "44px 24px" }}>
                            {isSplit ? (
                              <>
                                {title}
                                <div style={{ lineHeight: "388px" }}>&zwj;</div>
                              </>
                            ) : (
                              <>
                                <div style={{ lineHeight: "232px" }}>&zwj;</div>
                                {title}
                                <div style={{ lineHeight: "44px" }}>&zwj;</div>
                              </>
                            )}
                            <h2
                              style={{
                                color: textColor,
                                fontFamily,
                                fontSize: "24px",
                                fontWeight: 500,
                                lineHeight: "32px",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              {price}
                            </h2>
                            <div style={{ lineHeight: "12px" }}>&zwj;</div>
                            <p
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
                            </p>
                            <div style={{ lineHeight: "28px" }}>&zwj;</div>
                            {ctaLabel && ctaHref ? (
                              <div style={{ textAlign: "center" }}>
                                <a
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
                                  <img
                                    alt=""
                                    src={`${assetRoot}/icon-arrow-right.png`}
                                    style={{
                                      maxWidth: "100%",
                                      verticalAlign: "baseline",
                                    }}
                                    width="12"
                                  />
                                </a>
                              </div>
                            ) : null}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ width: "24px" }}>&zwj;</td>
                </tr>
              </tbody>
            </table>
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeroWithOverlayGradient = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "split-with-logo",
  ...props
}: HeroWithOverlayGradientProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{props.heading ?? "Forclaz 50L"}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <HeroWithOverlayGradientSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeroWithOverlayGradient.PreviewProps = {
  theme: defaultTheme,
  variant: "split-with-logo",
} satisfies HeroWithOverlayGradientProps;
