/* eslint-disable @next/next/no-img-element, complexity */
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroWithSlantedSplitVariant =
  | "left-slanted-down"
  | "left-slanted-up"
  | "right-slanted-down"
  | "right-slanted-up";

export interface HeroWithSlantedSplitProps {
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
  imageBackgroundColor?: string;
  contentBackgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroWithSlantedSplitVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-slanted-split-stack-left {
      display: block !important;
    }

    .hero-slanted-split-content-right {
      display: table-footer-group !important;
    }

    .hero-slanted-split-image-right {
      display: table-header-group !important;
    }

    .hero-slanted-split-image-cell {
      width: 100% !important;
    }

    .hero-slanted-split-image-core {
      width: 100vw !important;
    }

    .hero-slanted-split-slant-cell {
      max-width: 100% !important;
    }

    .hero-slanted-split-triangle {
      border-bottom-width: 388px !important;
      border-top-width: 388px !important;
    }

    .hero-slanted-split-content-left,
    .hero-slanted-split-content-inner-right {
      padding: 44px 24px !important;
    }
  }

  .hero-slanted-split-cta:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<HeroWithSlantedSplitProps, "theme">;

export const HeroWithSlantedSplitSection = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  contentBackgroundColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Celebrating creativity, community, and culture in every edition. Bob Cut brings stories to life through design and narrative — a modern take on the timeless power of print.",
  eyebrow = "Independent Publishing",
  heading = "Bob Cut",
  imageAlt = "Independent publishing photography",
  imageBackgroundColor = "#030712",
  imageSrc = `${assetRoot}/hero/split-slanted-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/emailcn-logo-light.png`,
  pageBackgroundColor = "#f1f5f9",
  subheading = "January Edition",
  textColor = "#030712",
  variant = "left-slanted-down",
}: SectionProps) => {
  const isLeft = variant.startsWith("left-");
  const slantsDown = variant.endsWith("-down");

  const logo = (
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
  );

  const imageCore = (
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
            aria-label={imageAlt || undefined}
            role={imageAlt ? "img" : undefined}
            style={{
              backgroundColor: imageBackgroundColor,
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{ tableLayout: "fixed" }}
              width="100%"
            >
              <tbody>
                <tr>
                  {isLeft ? (
                    <>
                      <td
                        style={{
                          verticalAlign: slantsDown ? "top" : "bottom",
                        }}
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="hero-slanted-split-image-core"
                          role="presentation"
                          style={{ width: "256px" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                {slantsDown ? (
                                  <>
                                    <div style={{ lineHeight: "44px" }}>
                                      &zwj;
                                    </div>
                                    {logo}
                                  </>
                                ) : (
                                  <>
                                    {logo}
                                    <div style={{ lineHeight: "44px" }}>
                                      &zwj;
                                    </div>
                                  </>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td
                        className="hero-slanted-split-slant-cell"
                        style={{ position: "relative", width: "120px" }}
                      >
                        <div
                          className="hero-slanted-split-triangle"
                          style={{
                            borderBottom: slantsDown
                              ? `600px solid ${contentBackgroundColor}`
                              : undefined,
                            borderLeft: "120px solid transparent",
                            borderTop: slantsDown
                              ? undefined
                              : `600px solid ${contentBackgroundColor}`,
                            height: 0,
                            width: 0,
                          }}
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td
                        className="hero-slanted-split-slant-cell"
                        style={{ position: "relative", width: 0 }}
                      >
                        <div
                          className="hero-slanted-split-triangle"
                          style={{
                            borderLeft: slantsDown
                              ? `120px solid ${contentBackgroundColor}`
                              : undefined,
                            borderRight: slantsDown
                              ? undefined
                              : "120px solid transparent",
                            borderTop: slantsDown
                              ? "600px solid transparent"
                              : `600px solid ${contentBackgroundColor}`,
                            height: 0,
                            left: "-1px",
                            position: "relative",
                            width: 0,
                          }}
                        />
                      </td>
                      <td
                        style={{
                          verticalAlign: slantsDown ? "top" : "bottom",
                        }}
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="hero-slanted-split-image-core"
                          role="presentation"
                          style={{ width: "256px" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                {slantsDown ? (
                                  <>
                                    <div style={{ lineHeight: "44px" }}>
                                      &zwj;
                                    </div>
                                    {logo}
                                  </>
                                ) : (
                                  <>
                                    {logo}
                                    <div style={{ lineHeight: "44px" }}>
                                      &zwj;
                                    </div>
                                  </>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );

  const copy = (
    <>
      <p
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
      </p>
      <h1
        style={{
          color: textColor,
          fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          margin: 0,
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
        }}
      >
        {subheading}
      </p>
      <div style={{ lineHeight: "44px" }}>&zwj;</div>
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
      <div style={{ lineHeight: "24px" }}>&zwj;</div>
      {ctaLabel && ctaHref ? (
        <a
          className="hero-slanted-split-cta"
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
    </>
  );

  const contentCell = isLeft ? (
    <td
      className="hero-slanted-split-stack-left hero-slanted-split-content-left"
      style={{
        backgroundColor: contentBackgroundColor,
        padding: "44px 44px 44px 24px",
        textAlign: "left",
      }}
    >
      {copy}
    </td>
  ) : (
    <td
      className="hero-slanted-split-content-right"
      style={{
        backgroundColor: contentBackgroundColor,
        padding: "44px 24px 44px 44px",
        textAlign: "left",
      }}
    >
      <div className="hero-slanted-split-content-inner-right">{copy}</div>
    </td>
  );

  const imageCell = (
    <td
      className={
        isLeft
          ? "hero-slanted-split-stack-left hero-slanted-split-image-cell"
          : "hero-slanted-split-image-right hero-slanted-split-image-cell"
      }
      style={{ width: "256px" }}
    >
      {imageCore}
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
          <td style={{ maxWidth: "100%", width: "600px" }}>
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
                      {imageCell}
                      {contentCell}
                    </>
                  ) : (
                    <>
                      {contentCell}
                      {imageCell}
                    </>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeroWithSlantedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-slanted-down",
  ...props
}: HeroWithSlantedSplitProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? "Bob Cut"}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroWithSlantedSplitSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

HeroWithSlantedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "left-slanted-down",
} satisfies HeroWithSlantedSplitProps;
