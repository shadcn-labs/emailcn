import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Link,
  Text,
  Heading,
  Row,
  Column,
  Img,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type AlignedHero_HeroAlignedOverlayVariant =
  | "content-left"
  | "content-left-reversed"
  | "content-right"
  | "content-right-reversed";

interface AlignedHero_HeroAlignedOverlayProps {
  theme?: EmailTheme;
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
  variant?: AlignedHero_HeroAlignedOverlayVariant;
}

const AlignedHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const AlignedHero_responsiveStyles = `
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

const AlignedHero_variantImages: Record<
  AlignedHero_HeroAlignedOverlayVariant,
  string
> = {
  "content-left": emailAsset(`hero/aligned-overlay-bg-1.png`),
  "content-left-reversed": emailAsset(`hero/aligned-overlay-bg-4.png`),
  "content-right": emailAsset(`hero/aligned-overlay-bg-2.png`),
  "content-right-reversed": emailAsset(`hero/aligned-overlay-bg-3.png`),
};

type AlignedHero_SectionProps = Required<
  Omit<AlignedHero_HeroAlignedOverlayProps, "theme" | "variant">
> & {
  variant: AlignedHero_HeroAlignedOverlayVariant;
};

const AlignedHero_HeroAlignedOverlaySection = ({
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
}: AlignedHero_SectionProps) => {
  const contentRight = variant.startsWith("content-right");
  const reversed = variant.endsWith("-reversed");
  const logo = (
    <Section>
      <Link href={logoHref}>
        <Img
          alt={logoAlt}
          src={logoSrc}
          width="165"
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
        />
      </Link>
    </Section>
  );
  const copy = (
    <>
      <Text
        style={{
          color: textColor,
          fontFamily: AlignedHero_fontFamily,
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
          fontFamily: AlignedHero_fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "58px",
          margin: 0,
        }}
        as="h1"
      >
        {headingStart}{" "}
        <span style={{ fontWeight: 300 }}>{headingEmphasis}</span> {headingEnd}
      </Heading>
      <Section style={{ height: "44px", lineHeight: "44px" }}>&zwj;</Section>
      <Text
        style={{
          color: textColor,
          fontFamily: AlignedHero_fontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {description}
      </Text>
      <Section style={{ height: "28px", lineHeight: "28px" }}>&zwj;</Section>
      {ctaLabel && ctaHref ? (
        <Link
          href={ctaHref}
          style={{
            backgroundColor: buttonBackgroundColor,
            borderRadius: "8px",
            color: buttonTextColor,
            display: "inline-block",
            fontFamily: AlignedHero_fontFamily,
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
            src={emailAsset(`icon-arrow-right.png`)}
            width="12"
            style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          />
        </Link>
      ) : null}
    </>
  );
  return (
    <Section
      aria-label={imageAlt || undefined}
      style={{
        backgroundColor,
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: `${contentRight ? "left" : "right"} ${reversed ? "bottom" : "top"}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "350px 600px",
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
            className="hero-aligned-overlay-start"
            style={{ width: contentRight ? "224px" : "48px" }}
          >
            &zwj;
          </Column>
          <Column
            className="hero-aligned-overlay-content"
            style={{ textAlign: contentRight ? "right" : "left" }}
          >
            {reversed ? copy : logo}
            <Section
              className="hero-aligned-overlay-logo-gap"
              style={{ height: "120px", lineHeight: "120px" }}
            >
              &zwj;
            </Section>
            {reversed ? logo : copy}
            <Section style={{ height: "44px", lineHeight: "44px" }}>
              &zwj;
            </Section>
          </Column>
          <Column
            className="hero-aligned-overlay-end"
            style={{ width: contentRight ? "44px" : "224px" }}
          >
            &zwj;
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const AlignedHero_HeroAlignedOverlay = ({
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
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = emailAsset(`emailcn-logo-light.png`),
  pageBackgroundColor = "#f1f5f9",
  textColor = "#f9fafb",
  theme = defaultTheme,
  variant = "content-left",
}: AlignedHero_HeroAlignedOverlayProps) => {
  const resolvedImageSrc = imageSrc ?? AlignedHero_variantImages[variant];
  return (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{ __html: AlignedHero_responsiveStyles }}
        />
      </EmailHead>
      <Preview>{`${eyebrow} — ${headingStart} ${headingEmphasis} ${headingEnd}`}</Preview>
      <Tailwind config={createEmailTailwindConfig(theme)}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
            fontFamily: AlignedHero_fontFamily,
          }}
          className="m-0"
        >
          <Container className="mx-auto max-w-[600px] w-[600px]">
            <AlignedHero_HeroAlignedOverlaySection
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

AlignedHero_HeroAlignedOverlay.PreviewProps = {
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
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: emailAsset(`emailcn-logo-light.png`),
  pageBackgroundColor: "#f1f5f9",
  textColor: "#f9fafb",
  theme: defaultTheme,
  variant: "content-left",
} satisfies AlignedHero_HeroAlignedOverlayProps;

const __AlignedHero = AlignedHero_HeroAlignedOverlay;

type BlockHero_HeroBlockOverlayVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

interface BlockHero_HeroBlockOverlayProps {
  theme?: EmailTheme;
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
  variant?: BlockHero_HeroBlockOverlayVariant;
}

const BlockHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const BlockHero_responsiveStyles = `
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

type BlockHero_SectionProps = Omit<BlockHero_HeroBlockOverlayProps, "theme">;

const BlockHero_HeroBlockOverlaySection = (props: BlockHero_SectionProps) => {
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
    backgroundImageSrc: emailAsset(`hero/block-overlay-bg.jpg`),
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
    logoSrc: emailAsset(`emailcn-logo-light.png`),
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
                  fontFamily: BlockHero_fontFamily,
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
                  fontFamily: BlockHero_fontFamily,
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
                  fontFamily: BlockHero_fontFamily,
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
                  fontFamily: BlockHero_fontFamily,
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
                    fontFamily: BlockHero_fontFamily,
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
                    src={emailAsset(`icon-arrow-right.png`)}
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

const BlockHero_HeroBlockOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-centered",
  ...props
}: BlockHero_HeroBlockOverlayProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: BlockHero_responsiveStyles }} />
    </EmailHead>
    <Preview>{props.heading ?? "SumUp"}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: BlockHero_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <BlockHero_HeroBlockOverlaySection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

BlockHero_HeroBlockOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies BlockHero_HeroBlockOverlayProps;

const __BlockHero = BlockHero_HeroBlockOverlay;

type BlockBleedHero_HeroBlockWithBleedVariant =
  | "left-centered"
  | "left-top"
  | "left-bottom"
  | "left-flush-vertical"
  | "right-centered"
  | "right-top"
  | "right-bottom"
  | "right-flush-vertical";

interface BlockBleedHero_HeroBlockWithBleedProps {
  theme?: EmailTheme;
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
  variant?: BlockBleedHero_HeroBlockWithBleedVariant;
}

const BlockBleedHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const BlockBleedHero_responsiveStyles = `
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

type BlockBleedHero_SectionProps = Omit<
  BlockBleedHero_HeroBlockWithBleedProps,
  "theme"
>;

const BlockBleedHero_HeroBlockWithBleedSection = (
  props: BlockBleedHero_SectionProps
) => {
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
    backgroundImageSrc: emailAsset(`hero/block-with-bleed-bg.jpg`),
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
    logoSrc: emailAsset(`emailcn-logo-light.png`),
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
                        fontFamily: BlockBleedHero_fontFamily,
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
                        fontFamily: BlockBleedHero_fontFamily,
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
                        fontFamily: BlockBleedHero_fontFamily,
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
                        fontFamily: BlockBleedHero_fontFamily,
                        fontSize: "18px",
                        fontWeight: 300,
                        lineHeight: "32px",
                        margin: 0,
                      }}
                    >
                      {description}
                    </Text>
                    <Section style={{ lineHeight: "28px" }}>&zwj;</Section>
                    {(() => {
                      if (ctaLabel && ctaHref) {
                        return (
                          <Section
                            style={{ textAlign: isLeft ? "left" : "right" }}
                          >
                            <Link
                              className="hero-block-bleed-cta"
                              href={ctaHref}
                              style={{
                                backgroundColor: buttonBackgroundColor,
                                borderRadius: "8px",
                                color: buttonTextColor,
                                display: "inline-block",
                                fontFamily: BlockBleedHero_fontFamily,
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
                                src={emailAsset(`icon-arrow-right.png`)}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "baseline",
                                }}
                                width="12"
                              />
                            </Link>
                          </Section>
                        );
                      }
                      return null;
                    })()}
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

const BlockBleedHero_HeroBlockWithBleed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-centered",
  ...props
}: BlockBleedHero_HeroBlockWithBleedProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: BlockBleedHero_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{props.heading ?? "Preserve the planet we share"}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: BlockBleedHero_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <BlockBleedHero_HeroBlockWithBleedSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

BlockBleedHero_HeroBlockWithBleed.PreviewProps = {
  theme: defaultTheme,
  variant: "left-centered",
} satisfies BlockBleedHero_HeroBlockWithBleedProps;

const __BlockBleedHero = BlockBleedHero_HeroBlockWithBleed;

type GradientHero_HeroWithOverlayGradientVariant =
  | "split-with-logo"
  | "split-no-logo"
  | "unified-with-logo"
  | "unified-no-logo";

interface GradientHero_HeroWithOverlayGradientProps {
  theme?: EmailTheme;
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
  variant?: GradientHero_HeroWithOverlayGradientVariant;
}

const GradientHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const GradientHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-overlay-gradient-heading {
        font-size: 48px !important;
      }
    }

    .hero-overlay-gradient-cta:hover {
      background-color: #4338ca !important;
    }
  `;

type GradientHero_SectionProps = Omit<
  GradientHero_HeroWithOverlayGradientProps,
  "theme"
>;

const GradientHero_HeroWithOverlayGradientSection = (
  props: GradientHero_SectionProps
) => {
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
    backgroundImageSrc: emailAsset(`hero/overlay-gradient-bg.jpg`),
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
    logoSrc: emailAsset(`emailcn-logo-light.png`),
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
          fontFamily: GradientHero_fontFamily,
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
          fontFamily: GradientHero_fontFamily,
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
          fontFamily: GradientHero_fontFamily,
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
                                fontFamily: GradientHero_fontFamily,
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
                                fontFamily: GradientHero_fontFamily,
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
                                    fontFamily: GradientHero_fontFamily,
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
                                    src={emailAsset(`icon-arrow-right.png`)}
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

const GradientHero_HeroWithOverlayGradient = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "split-with-logo",
  ...props
}: GradientHero_HeroWithOverlayGradientProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: GradientHero_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{props.heading ?? "Forclaz 50L"}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: GradientHero_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <GradientHero_HeroWithOverlayGradientSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

GradientHero_HeroWithOverlayGradient.PreviewProps = {
  theme: defaultTheme,
  variant: "split-with-logo",
} satisfies GradientHero_HeroWithOverlayGradientProps;

const __GradientHero = GradientHero_HeroWithOverlayGradient;

export interface HeroContent {
  eyebrow?: string;
  heading?: string;
  emphasis?: string;
  subheading?: string;
  description?: string;
  price?: string;
  actions?: {
    href: string;
    label: string;
  }[];
}

export interface HeroImage {
  src: string;
  alt?: string;
}

export interface HeroBrand {
  logo: HeroImage;
  href?: string;
}

export interface OverlayHeroProps {
  theme?: Parameters<typeof __BlockHero>[0]["theme"];
  content?: HeroContent;
  backgroundImage?: HeroImage;
  brand?: HeroBrand;
  treatment?: "aligned" | "block" | "gradient" | "content-card";
  position?:
    | "top-left"
    | "center-left"
    | "bottom-left"
    | "top-right"
    | "center-right"
    | "bottom-right";
  bleed?: boolean;
  reverse?: boolean;
  variant?:
    | Parameters<typeof __AlignedHero>[0]["variant"]
    | Parameters<typeof __BlockHero>[0]["variant"]
    | Parameters<typeof __BlockBleedHero>[0]["variant"]
    | Parameters<typeof __GradientHero>[0]["variant"];
}

const blockPosition = (position: NonNullable<OverlayHeroProps["position"]>) => {
  const [vertical, horizontal] = position.split("-");
  return `${horizontal}-${vertical === "center" ? "centered" : vertical}`;
};

const heroContentValues = (content: HeroContent | undefined) => {
  const { actions, description, eyebrow, heading, subheading } = content ?? {};
  const [action] = actions ?? [];
  return {
    ctaHref: action?.href,
    ctaLabel: action?.label,
    description,
    eyebrow,
    heading,
    subheading,
  };
};

const heroImageValues = (image: HeroImage | undefined) => ({
  alt: image?.alt,
  src: image?.src,
});

const heroBrandValues = (brand: HeroBrand | undefined) => {
  const { href, logo } = brand ?? {};
  return {
    logoAlt: logo?.alt,
    logoHref: href,
    logoSrc: logo?.src,
  };
};

export const OverlayHero = ({
  theme,
  content,
  backgroundImage,
  brand,
  treatment = "block",
  position = "center-left",
  bleed = false,
  reverse = false,
  variant: variantOverride,
}: OverlayHeroProps) => {
  const contentValues = heroContentValues(content);
  const backgroundValues = heroImageValues(backgroundImage);
  const brandValues = heroBrandValues(brand);
  const side = position.endsWith("right") ? "right" : "left";
  if (treatment === "aligned") {
    return (
      <__AlignedHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        headingEmphasis={content?.emphasis}
        headingStart={contentValues.heading}
        imageAlt={backgroundValues.alt}
        imageSrc={backgroundValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={
          (variantOverride ??
            `content-${side}${reverse ? "-reversed" : ""}`) as Parameters<
            typeof __AlignedHero
          >[0]["variant"]
        }
      />
    );
  }
  if (treatment === "gradient") {
    return (
      <__GradientHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        price={content?.price}
        subheading={contentValues.subheading}
        backgroundImageSrc={backgroundValues.src}
        imageAlt={backgroundValues.alt}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={
          (variantOverride ??
            `${side === "left" ? "split" : "unified"}-${brand ? "with-logo" : "no-logo"}`) as Parameters<
            typeof __GradientHero
          >[0]["variant"]
        }
      />
    );
  }
  const Component = bleed ? __BlockBleedHero : __BlockHero;
  return (
    <Component
      ctaHref={contentValues.ctaHref}
      ctaLabel={contentValues.ctaLabel}
      description={contentValues.description}
      eyebrow={contentValues.eyebrow}
      heading={contentValues.heading}
      subheading={contentValues.subheading}
      backgroundImageSrc={backgroundValues.src}
      imageAlt={backgroundValues.alt}
      logoAlt={brandValues.logoAlt}
      logoHref={brandValues.logoHref}
      logoSrc={brandValues.logoSrc}
      theme={theme}
      variant={
        (variantOverride ?? blockPosition(position)) as Parameters<
          typeof Component
        >[0]["variant"]
      }
    />
  );
};

OverlayHero.PreviewProps = {
  bleed: false,
  position: "center-left",
  reverse: false,
  treatment: "block",
} satisfies OverlayHeroProps;
