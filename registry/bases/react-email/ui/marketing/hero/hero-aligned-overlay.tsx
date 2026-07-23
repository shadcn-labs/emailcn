/* eslint-disable @next/next/no-img-element */
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroAlignedOverlayVariant =
  | "content-left"
  | "content-left-reversed"
  | "content-right"
  | "content-right-reversed";

export interface HeroAlignedOverlayProps {
  theme?: TailwindConfig;
  eyebrow?: string;
  headingStart?: string;
  headingEmphasis?: string;
  headingEnd?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: HeroAlignedOverlayVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://assets.mailviews.com/images/components";

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .hero-aligned-overlay-start {
      width: 24px !important;
    }

    .hero-aligned-overlay-end {
      width: 112px !important;
    }

    .hero-aligned-overlay-content {
      text-align: left !important;
    }

    .hero-aligned-overlay-logo-gap {
      height: 220px !important;
      line-height: 220px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .hero-aligned-overlay-end {
      width: 24px !important;
    }
  }
`;

const variantImages: Record<HeroAlignedOverlayVariant, string> = {
  "content-left": `${assetRoot}/hero/aligned-overlay-bg-1.png`,
  "content-left-reversed": `${assetRoot}/hero/aligned-overlay-bg-4.png`,
  "content-right": `${assetRoot}/hero/aligned-overlay-bg-2.png`,
  "content-right-reversed": `${assetRoot}/hero/aligned-overlay-bg-3.png`,
};

type SectionProps = Required<
  Omit<HeroAlignedOverlayProps, "theme" | "variant">
> & {
  variant: HeroAlignedOverlayVariant;
};

export const HeroAlignedOverlaySection = ({
  backgroundColor,
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  headingEmphasis,
  headingEnd,
  headingStart,
  imageAlt,
  imageSrc,
  logoAlt,
  logoHref,
  logoSrc,
  textColor,
  variant,
}: SectionProps) => {
  const contentRight = variant.startsWith("content-right");
  const reversed = variant.endsWith("-reversed");
  const logo = (
    <div>
      <a href={logoHref}>
        <img
          alt={logoAlt}
          src={logoSrc}
          width="165"
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
        />
      </a>
    </div>
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
          lineHeight: "58px",
          margin: 0,
        }}
      >
        {headingStart}{" "}
        <span style={{ fontWeight: 300 }}>{headingEmphasis}</span> {headingEnd}
      </h1>
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
      <div style={{ height: "28px", lineHeight: "28px" }}>&zwj;</div>
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
    </>
  );

  return (
    <table
      aria-label={imageAlt || undefined}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role={imageAlt ? "img" : "presentation"}
      style={{
        backgroundColor,
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `${contentRight ? "left" : "right"} ${reversed ? "bottom" : "top"}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "350px 600px",
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
          <td
            className="hero-aligned-overlay-start"
            style={{ width: contentRight ? "224px" : "48px" }}
          >
            &zwj;
          </td>
          <td
            className="hero-aligned-overlay-content"
            style={{ textAlign: contentRight ? "right" : "left" }}
          >
            {reversed ? copy : logo}
            <div
              className="hero-aligned-overlay-logo-gap"
              style={{ height: "120px", lineHeight: "120px" }}
            >
              &zwj;
            </div>
            {reversed ? logo : copy}
            <div style={{ height: "44px", lineHeight: "44px" }}>&zwj;</div>
          </td>
          <td
            className="hero-aligned-overlay-end"
            style={{ width: contentRight ? "44px" : "224px" }}
          >
            &zwj;
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeroAlignedOverlay = ({
  backgroundColor = "#030712",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Plan with confidence, explore with ease, and make every journey uniquely yours. Our curated guides, travel tools, and insider tips are designed to inspire your next adventure — all in one spot.",
  eyebrow = "Discover the world your way",
  headingEmphasis = "unforgettable",
  headingEnd = "escape",
  headingStart = "Your next",
  imageAlt = "Travel window collage",
  imageSrc,
  logoAlt = "Mailviews",
  logoHref = "https://example.com",
  logoSrc = `${assetRoot}/mailviews-logo-light.png`,
  pageBackgroundColor = "#f1f5f9",
  textColor = "#f9fafb",
  theme = defaultTheme,
  variant = "content-left",
}: HeroAlignedOverlayProps) => {
  const resolvedImageSrc = imageSrc ?? variantImages[variant];

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{`${eyebrow} — ${headingStart} ${headingEmphasis} ${headingEnd}`}</Preview>
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
            <HeroAlignedOverlaySection
              backgroundColor={backgroundColor}
              buttonBackgroundColor={buttonBackgroundColor}
              buttonTextColor={buttonTextColor}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              description={description}
              eyebrow={eyebrow}
              headingEmphasis={headingEmphasis}
              headingEnd={headingEnd}
              headingStart={headingStart}
              imageAlt={imageAlt}
              imageSrc={resolvedImageSrc}
              logoAlt={logoAlt}
              logoHref={logoHref}
              logoSrc={logoSrc}
              pageBackgroundColor={pageBackgroundColor}
              textColor={textColor}
              variant={variant}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

HeroAlignedOverlay.PreviewProps = {
  backgroundColor: "#030712",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "Plan with confidence, explore with ease, and make every journey uniquely yours. Our curated guides, travel tools, and insider tips are designed to inspire your next adventure — all in one spot.",
  eyebrow: "Discover the world your way",
  headingEmphasis: "unforgettable",
  headingEnd: "escape",
  headingStart: "Your next",
  imageAlt: "Travel window collage",
  logoAlt: "Mailviews",
  logoHref: "https://example.com",
  logoSrc: `${assetRoot}/mailviews-logo-light.png`,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#f9fafb",
  theme: defaultTheme,
  variant: "content-left",
} satisfies HeroAlignedOverlayProps;
