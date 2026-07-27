import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Column,
  Section,
  Row,
  Link,
  Text,
  Heading,
  Img,
  Button,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

type OverlaySplitHero_HeroOverlayedSplitVariant =
  | "overlay-left"
  | "overlay-right";

interface OverlaySplitHero_HeroOverlayedSplitProps {
  theme?: EmailThemeTokens;
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
  variant?: OverlaySplitHero_HeroOverlayedSplitVariant;
}

const OverlaySplitHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const OverlaySplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const OverlaySplitHero_responsiveStyles = `
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

type OverlaySplitHero_SectionProps = Required<
  Omit<OverlaySplitHero_HeroOverlayedSplitProps, "theme" | "variant">
> & {
  variant: OverlaySplitHero_HeroOverlayedSplitVariant;
};

const OverlaySplitHero_HeroOverlayedSplitSection = ({
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
}: OverlaySplitHero_SectionProps) => {
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
                  fontFamily: OverlaySplitHero_fontFamily,
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
                  fontFamily: OverlaySplitHero_fontFamily,
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
                  fontFamily: OverlaySplitHero_fontFamily,
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
                  fontFamily: OverlaySplitHero_fontFamily,
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
                    fontFamily: OverlaySplitHero_fontFamily,
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
                    src={`${OverlaySplitHero_assetRoot}/icon-arrow-right.png`}
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

const OverlaySplitHero_HeroOverlayedSplit = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow = "Brew Stories",
  heading = "The Art of the Morning Ritual",
  imageAlt = "Coffee morning ritual",
  imageSrc = `${OverlaySplitHero_assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt = "emailcn",
  logoHref = "https://example.com",
  logoSrc = `${OverlaySplitHero_assetRoot}/emailcn-logo-light.png`,
  overlayColor = "rgba(3, 7, 18, 0.8)",
  pageBackgroundColor = "#f1f5f9",
  subheading = "January 31, 2025",
  textColor = "#f9fafb",
  theme = defaultTheme,
  variant = "overlay-left",
}: OverlaySplitHero_HeroOverlayedSplitProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: OverlaySplitHero_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{`${eyebrow} — ${heading}`}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        color: theme.colorText,
        fontFamily: OverlaySplitHero_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <OverlaySplitHero_HeroOverlayedSplitSection
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
  </Html>
);

OverlaySplitHero_HeroOverlayedSplit.PreviewProps = {
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "From the first pour to the final sip, coffee is more than a drink — it’s a pause, a rhythm, a story in every cup. Discover how moments of calm begin with Sarina.",
  eyebrow: "Brew Stories",
  heading: "The Art of the Morning Ritual",
  imageAlt: "Coffee morning ritual",
  imageSrc: `${OverlaySplitHero_assetRoot}/hero/overlayed-split-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${OverlaySplitHero_assetRoot}/emailcn-logo-light.png`,
  overlayColor: "rgba(3, 7, 18, 0.8)",
  pageBackgroundColor: "#f1f5f9",
  subheading: "January 31, 2025",
  textColor: "#f9fafb",
  theme: defaultTheme,
  variant: "overlay-left",
} satisfies OverlaySplitHero_HeroOverlayedSplitProps;

const __OverlaySplitHero = OverlaySplitHero_HeroOverlayedSplit;

type ContainedSplitHero_HeroSplitContainedVariant =
  | "single-image-left"
  | "single-image-right"
  | "square-images-left"
  | "square-images-right"
  | "portrait-top-left"
  | "portrait-top-right"
  | "portrait-bottom-left"
  | "portrait-bottom-right";

interface ContainedSplitHero_HeroSplitContainedProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryImageSrc?: string;
  primaryImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: ContainedSplitHero_HeroSplitContainedVariant;
}

const ContainedSplitHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ContainedSplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const ContainedSplitHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-contained-column {
        display: block !important;
        width: 100% !important;
      }

      .hero-contained-spacer {
        height: 44px !important;
        line-height: 44px !important;
      }

      .hero-contained-content {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .hero-contained-stack {
        display: flex !important;
        width: 100% !important;
      }

      .hero-contained-stack-gap {
        display: none !important;
      }

      .hero-contained-stack-first {
        padding-right: 12px !important;
      }

      .hero-contained-stack-second {
        padding-left: 12px !important;
      }
    }

    @media only screen and (max-width: 430px) {
      .hero-contained-stack {
        display: block !important;
      }

      .hero-contained-stack-first,
      .hero-contained-stack-second {
        display: block !important;
        padding: 0 !important;
      }

      .hero-contained-stack-image {
        width: 100% !important;
      }

      .hero-contained-square-image {
        aspect-ratio: 16 / 9 !important;
        object-fit: cover !important;
      }
    }
  `;

interface ContainedSplitHero_HeroPreset {
  backgroundColor: string;
  ctaLabel: string;
  description: string;
  eyebrow: string;
  heading: string;
  logoSrc: string;
  mutedTextColor: string;
  price: string;
  primaryImageAlt: string;
  primaryImageSrc: string;
  secondaryImageAlt: string;
  secondaryImageSrc: string;
  subheading: string;
  textColor: string;
}

const ContainedSplitHero_presets = {
  portraitBottom: {
    backgroundColor: "#030712",
    ctaLabel: "Book a table now",
    description:
      "Fluffy steamed buns filled with rich, savory flavors and made fresh daily. A taste of authentic street food, crafted with passion and served with warmth, right in the heart of London.",
    eyebrow: "Taiwanese Steamed Shop",
    heading: "Gua Bao",
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo-light.png`,
    mutedTextColor: "#d1d5db",
    price: "",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-landscape-top.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-portrait-bottom.jpg`,
    subheading: "53 Lexington St. London",
    textColor: "#f9fafb",
  },
  portraitTop: {
    backgroundColor: "#fffffe",
    ctaLabel: "Discover now",
    description:
      "Handcrafted blends made with care, bottled to preserve freshness and flavor. A perfect balance of tradition and quality, designed to bring a touch of refinement to your everyday rituals.",
    eyebrow: "Es Kopi Susu",
    heading: "Sarina",
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo.png`,
    mutedTextColor: "#4b5563",
    price: "",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-portrait-top.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-landscape-bottom.jpg`,
    subheading: "Americano Grape Fruit",
    textColor: "#030712",
  },
  single: {
    backgroundColor: "#fffffe",
    ctaLabel: "Starts at $12.99",
    description:
      "A refreshing blend of cooling salt and soothing vanilla, this toothpaste brings a clean, calming experience to your everyday ritual. Gentle yet effective, it's designed to leave your smile brighter.",
    eyebrow: "Toothpaste",
    heading: "Salt.",
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo.png`,
    mutedTextColor: "#4b5563",
    price: "",
    primaryImageAlt: "Salt toothpaste",
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-bg.jpg`,
    secondaryImageAlt: "",
    secondaryImageSrc: "",
    subheading: "Dusk | French Vanilla",
    textColor: "#030712",
  },
  square: {
    backgroundColor: "#030712",
    ctaLabel: "Discover now",
    description:
      "A targeted solution that works deep to unclog pores, reduce excess oil, and calm irritation. Lightweight and powerful, this formula supports clearer, healthier-looking skin",
    eyebrow: "THE",
    heading: "Ordinary.",
    logoSrc: `${ContainedSplitHero_assetRoot}/emailcn-logo-light.png`,
    mutedTextColor: "#d1d5db",
    price: "From $8.99",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-square-1.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${ContainedSplitHero_assetRoot}/hero/split-contained-square-2.jpg`,
    subheading: "For blemish-prone skin",
    textColor: "#f9fafb",
  },
} satisfies Record<string, ContainedSplitHero_HeroPreset>;

type ContainedSplitHero_ResolvedProps = Required<
  Omit<ContainedSplitHero_HeroSplitContainedProps, "theme">
>;

const ContainedSplitHero_getPreset = (
  variant: ContainedSplitHero_HeroSplitContainedVariant
) => {
  if (variant.startsWith("single-")) {
    return ContainedSplitHero_presets.single;
  }
  if (variant.startsWith("square-")) {
    return ContainedSplitHero_presets.square;
  }
  if (variant.startsWith("portrait-bottom-")) {
    return ContainedSplitHero_presets.portraitBottom;
  }
  return ContainedSplitHero_presets.portraitTop;
};

const ContainedSplitHero_resolveProps = (
  props: Omit<ContainedSplitHero_HeroSplitContainedProps, "theme">
): ContainedSplitHero_ResolvedProps => {
  const {
    backgroundColor,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    logoAlt,
    logoSrc,
    mutedTextColor,
    pageBackgroundColor,
    price,
    primaryImageAlt,
    primaryImageSrc,
    secondaryImageAlt,
    secondaryImageSrc,
    subheading,
    textColor,
    variant,
  } = {
    variant:
      "single-image-left" as ContainedSplitHero_HeroSplitContainedVariant,
    ...props,
  };
  const preset = ContainedSplitHero_getPreset(variant);
  return {
    backgroundColor: backgroundColor ?? preset.backgroundColor,
    buttonBackgroundColor: buttonBackgroundColor ?? "#4f46e5",
    buttonTextColor: buttonTextColor ?? "#fffffe",
    ctaHref: ctaHref ?? "https://example.com",
    ctaLabel: ctaLabel ?? preset.ctaLabel,
    description: description ?? preset.description,
    eyebrow: eyebrow ?? preset.eyebrow,
    heading: heading ?? preset.heading,
    logoAlt: logoAlt ?? "emailcn",
    logoSrc: logoSrc ?? preset.logoSrc,
    mutedTextColor: mutedTextColor ?? preset.mutedTextColor,
    pageBackgroundColor: pageBackgroundColor ?? "#f1f5f9",
    price: price ?? preset.price,
    primaryImageAlt: primaryImageAlt ?? preset.primaryImageAlt,
    primaryImageSrc: primaryImageSrc ?? preset.primaryImageSrc,
    secondaryImageAlt: secondaryImageAlt ?? preset.secondaryImageAlt,
    secondaryImageSrc: secondaryImageSrc ?? preset.secondaryImageSrc,
    subheading: subheading ?? preset.subheading,
    textColor: textColor ?? preset.textColor,
    variant,
  };
};

const ContainedSplitHero_ImagePanel = ({
  props,
}: {
  props: ContainedSplitHero_ResolvedProps;
}) => {
  const single = props.variant.startsWith("single-");
  const square = props.variant.startsWith("square-");
  if (single) {
    return (
      <Column
        className="hero-contained-column hero-contained-single-image"
        style={{
          backgroundImage: `url(${props.primaryImageSrc})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "552px",
          verticalAlign: "top",
          width: "196px",
        }}
      >
        <Section style={{ padding: "44px 24px", textAlign: "center" }}>
          <Img
            alt={props.logoAlt}
            src={props.logoSrc}
            width="165"
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
          />
        </Section>
      </Column>
    );
  }
  return (
    <Column
      className="hero-contained-column hero-contained-image-panel"
      style={{ verticalAlign: "top", width: "244px" }}
    >
      <Section className="hero-contained-stack">
        <Section className="hero-contained-stack-first">
          <Img
            alt={props.primaryImageAlt}
            className={`hero-contained-stack-image${square ? " hero-contained-square-image" : ""}`}
            src={props.primaryImageSrc}
            width="244"
            style={{
              borderRadius: "4px",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
          />
        </Section>
        <Section
          className="hero-contained-stack-gap"
          style={{ height: "24px", lineHeight: "24px" }}
        >
          &zwj;
        </Section>
        <Section className="hero-contained-stack-second">
          <Img
            alt={props.secondaryImageAlt}
            className={`hero-contained-stack-image${square ? " hero-contained-square-image" : ""}`}
            src={props.secondaryImageSrc}
            width="244"
            style={{
              borderRadius: "4px",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
          />
        </Section>
      </Section>
    </Column>
  );
};

const ContainedSplitHero_ContentPanel = ({
  props,
}: {
  props: ContainedSplitHero_ResolvedProps;
}) => {
  const single = props.variant.startsWith("single-");
  return (
    <Column
      className="hero-contained-column hero-contained-content"
      style={{
        boxSizing: "border-box",
        padding: single ? "44px 24px" : "44px 24px",
        textAlign: "left",
        verticalAlign: single ? "bottom" : "top",
        width: single ? "332px" : "284px",
      }}
    >
      {single ? null : (
        <>
          <Img
            alt={props.logoAlt}
            src={props.logoSrc}
            width="165"
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
          />
          <Section style={{ height: "48px", lineHeight: "48px" }}>
            &zwj;
          </Section>
        </>
      )}
      <Text
        style={{
          color: props.textColor,
          fontFamily: ContainedSplitHero_fontFamily,
          fontSize: "16px",
          fontWeight: 200,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {props.eyebrow}
      </Text>
      <Heading
        style={{
          color: props.textColor,
          fontFamily: ContainedSplitHero_fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "58px",
          margin: 0,
        }}
        as="h1"
      >
        {props.heading}
      </Heading>
      <Text
        style={{
          color: props.textColor,
          fontFamily: ContainedSplitHero_fontFamily,
          fontSize: "18px",
          lineHeight: "28px",
          margin: 0,
        }}
      >
        {props.subheading}
      </Text>
      <Section style={{ height: "48px", lineHeight: "48px" }}>&zwj;</Section>
      <Text
        style={{
          color: props.mutedTextColor,
          fontFamily: ContainedSplitHero_fontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {props.description}
        {props.price ? (
          <>
            <br />
            <br />
            <span style={{ fontWeight: 700 }}>{props.price}</span>
          </>
        ) : null}
      </Text>
      <Section style={{ height: "24px", lineHeight: "24px" }}>&zwj;</Section>
      {props.ctaLabel && props.ctaHref ? (
        <Link
          href={props.ctaHref}
          style={{
            backgroundColor: props.buttonBackgroundColor,
            borderRadius: "8px",
            color: props.buttonTextColor,
            display: "inline-block",
            fontFamily: ContainedSplitHero_fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1,
            padding: "14px 20px",
            textDecoration: "none",
          }}
        >
          <span style={{ marginRight: "8px" }}>{props.ctaLabel}</span>
          <Img
            alt=""
            src={`${ContainedSplitHero_assetRoot}/icon-arrow-right.png`}
            width="12"
            style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          />
        </Link>
      ) : null}
    </Column>
  );
};

const ContainedSplitHero_SpacerColumn = () => (
  <Column
    className="hero-contained-column hero-contained-spacer"
    style={{ fontSize: 0, lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </Column>
);

const ContainedSplitHero_HeroSplitContainedSection = (
  input: Omit<ContainedSplitHero_HeroSplitContainedProps, "theme">
) => {
  const props = ContainedSplitHero_resolveProps(input);
  const imageLeft = props.variant.endsWith("-left");
  const image = <ContainedSplitHero_ImagePanel props={props} />;
  const content = <ContainedSplitHero_ContentPanel props={props} />;
  return (
    <Section style={{ backgroundColor: props.backgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "24px" }}>
            <Section style={{ tableLayout: "fixed" }} width="100%">
              <Fragment>
                <Row>
                  {imageLeft ? (
                    <>
                      {image}
                      <ContainedSplitHero_SpacerColumn />
                      {content}
                    </>
                  ) : (
                    <>
                      {content}
                      <ContainedSplitHero_SpacerColumn />
                      {image}
                    </>
                  )}
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const ContainedSplitHero_HeroSplitContained = ({
  theme = defaultTheme,
  ...props
}: ContainedSplitHero_HeroSplitContainedProps) => {
  const resolved = ContainedSplitHero_resolveProps(props);
  return (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{
            __html: ContainedSplitHero_responsiveStyles,
          }}
        />
      </EmailHead>
      <Preview>{`${resolved.heading} — ${resolved.subheading}`}</Preview>
      <Body
        style={{
          backgroundColor: resolved.pageBackgroundColor,
          color: theme.colorText,
          fontFamily: ContainedSplitHero_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <ContainedSplitHero_HeroSplitContainedSection
            {...props}
            variant={resolved.variant}
          />
        </Container>
      </Body>
    </Html>
  );
};

ContainedSplitHero_HeroSplitContained.PreviewProps = {
  theme: defaultTheme,
  variant: "single-image-left",
} satisfies ContainedSplitHero_HeroSplitContainedProps;

const __ContainedSplitHero = ContainedSplitHero_HeroSplitContained;

type FullBleedSplitHero_HeroSplitFullBleedVariant =
  | "image-left"
  | "image-right";

interface FullBleedSplitHero_HeroSplitFullBleedProps {
  theme?: EmailThemeTokens;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  textBackgroundColor?: string;
  pageBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: FullBleedSplitHero_HeroSplitFullBleedVariant;
}

const FullBleedSplitHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullBleedSplitHero_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-split-column {
        display: block !important;
        width: 100% !important;
      }

      .hero-split-image {
        height: 388px !important;
      }

      .hero-split-spacer {
        display: block !important;
        height: 44px !important;
        line-height: 44px !important;
        width: 100% !important;
      }

      .hero-split-text {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }

      .hero-split-logo {
        margin-left: 0 !important;
        margin-right: auto !important;
      }

      .hero-split-right .hero-split-image {
        display: table-header-group !important;
      }

      .hero-split-right .hero-split-spacer,
      .hero-split-right .hero-split-text {
        display: table-footer-group !important;
      }
    }
  `;

type FullBleedSplitHero_SectionProps = Required<
  Omit<FullBleedSplitHero_HeroSplitFullBleedProps, "theme" | "variant">
> & {
  variant: FullBleedSplitHero_HeroSplitFullBleedVariant;
};

const FullBleedSplitHero_HeroImageColumn = ({
  imageAlt,
  imageSrc,
  logoAlt,
  logoSrc,
}: Pick<
  FullBleedSplitHero_SectionProps,
  "imageAlt" | "imageSrc" | "logoAlt" | "logoSrc"
>) => (
  <Column
    aria-label={imageAlt || undefined}
    bgImage={imageSrc}
    className="hero-split-column hero-split-image"
    role={imageAlt ? "img" : undefined}
    style={{
      backgroundImage: `url(${imageSrc})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "600px",
      verticalAlign: "top",
      width: "256px",
    }}
  >
    <Img
      alt={logoAlt}
      className="hero-split-logo"
      src={logoSrc}
      width="165"
      style={{
        display: "block",
        margin: "44px auto 0",
        maxWidth: "100%",
      }}
    />
  </Column>
);

const FullBleedSplitHero_HeroSpacerColumn = () => (
  <Column
    className="hero-split-column hero-split-spacer"
    style={{ fontSize: 0, lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </Column>
);

const FullBleedSplitHero_HeroTextColumn = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  price,
  subheading,
  textBackgroundColor,
}: Pick<
  FullBleedSplitHero_SectionProps,
  | "buttonBackgroundColor"
  | "buttonTextColor"
  | "ctaHref"
  | "ctaLabel"
  | "description"
  | "eyebrow"
  | "heading"
  | "price"
  | "subheading"
  | "textBackgroundColor"
>) => (
  <Column
    className="hero-split-column hero-split-text"
    style={{
      backgroundColor: textBackgroundColor,
      padding: "0 24px",
      verticalAlign: "bottom",
      width: "320px",
    }}
  >
    <Text
      style={{
        color: "#030712",
        fontFamily: FullBleedSplitHero_fontFamily,
        fontSize: "16px",
        fontWeight: 200,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {eyebrow}
    </Text>
    <Text
      style={{
        color: "#030712",
        fontFamily: FullBleedSplitHero_fontFamily,
        fontSize: "48px",
        fontWeight: 500,
        lineHeight: "58px",
        margin: 0,
      }}
    >
      {heading}
    </Text>
    <Text
      style={{
        color: "#030712",
        fontFamily: FullBleedSplitHero_fontFamily,
        fontSize: "18px",
        lineHeight: "28px",
        margin: 0,
      }}
    >
      {subheading}
    </Text>
    <Section style={{ fontSize: 0, height: "48px", lineHeight: "48px" }}>
      &zwj;
    </Section>
    <Text
      style={{
        color: "#4b5563",
        fontFamily: FullBleedSplitHero_fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {description}
      {price ? (
        <>
          <br />
          <br />
          <span style={{ fontWeight: 700 }}>{price}</span>
        </>
      ) : null}
    </Text>
    <Section style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>
      &zwj;
    </Section>
    {ctaLabel && ctaHref ? (
      <Button
        align="left"
        height={44}
        href={ctaHref}
        width={166}
        style={{
          backgroundColor: buttonBackgroundColor,
          borderRadius: "8px",
          color: buttonTextColor,
          display: "inline-block",
          fontFamily: FullBleedSplitHero_fontFamily,
          fontSize: "16px",
          fontWeight: 500,
          height: "auto",
          lineHeight: 1,
          padding: "14px 20px",
          textDecoration: "none",
          width: "auto",
        }}
      >
        <span style={{ marginRight: "8px" }}>{ctaLabel}</span>
        <Img
          alt=""
          src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
          width="12"
          style={{
            display: "inline-block",
            maxWidth: "100%",
            verticalAlign: "baseline",
          }}
        />
      </Button>
    ) : null}
    <Section style={{ fontSize: 0, height: "44px", lineHeight: "44px" }}>
      &zwj;
    </Section>
  </Column>
);

const FullBleedSplitHero_HeroSplitFullBleedSection = (
  props: FullBleedSplitHero_SectionProps
) => {
  const image = <FullBleedSplitHero_HeroImageColumn {...props} />;
  const spacer = <FullBleedSplitHero_HeroSpacerColumn />;
  const text = <FullBleedSplitHero_HeroTextColumn {...props} />;
  return (
    <Section style={{ backgroundColor: props.textBackgroundColor, padding: 0 }}>
      <Row
        className={props.variant === "image-right" ? "hero-split-right" : ""}
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        {props.variant === "image-left" ? (
          <>
            {image}
            {spacer}
            {text}
          </>
        ) : (
          <>
            {text}
            {spacer}
            {image}
          </>
        )}
      </Row>
    </Section>
  );
};

const FullBleedSplitHero_HeroSplitFullBleed = ({
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#fffffe",
  ctaHref = "https://example.com",
  ctaLabel = "Discover now",
  description = "Handcrafted in small batches, Sarina blends the boldness of Americano with the brightness of grapefruit. A modern roast for those who crave flavor with edge and energy in every sip.",
  eyebrow = "Coffee",
  heading = "Sarina",
  imageAlt = "Sarina coffee bottle",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/hero/split-full-bleed-bg.jpg",
  logoAlt = "emailcn",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor = "#f1f5f9",
  price = "From $14.99",
  subheading = "Americano Grape Fruit",
  textBackgroundColor = "#fffffe",
  theme = defaultTheme,
  variant = "image-left",
}: FullBleedSplitHero_HeroSplitFullBleedProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: FullBleedSplitHero_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>{`${heading} — ${subheading}`}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        color: theme.colorText,
        fontFamily: FullBleedSplitHero_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{
          backgroundColor: textBackgroundColor,
          margin: "0 auto",
          maxWidth: "600px",
          width: "600px",
        }}
      >
        <FullBleedSplitHero_HeroSplitFullBleedSection
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
          logoSrc={logoSrc}
          pageBackgroundColor={pageBackgroundColor}
          price={price}
          subheading={subheading}
          textBackgroundColor={textBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FullBleedSplitHero_HeroSplitFullBleed.PreviewProps = {
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Discover now",
  description:
    "Handcrafted in small batches, Sarina blends the boldness of Americano with the brightness of grapefruit. A modern roast for those who crave flavor with edge and energy in every sip.",
  eyebrow: "Coffee",
  heading: "Sarina",
  imageAlt: "Sarina coffee bottle",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/hero/split-full-bleed-bg.jpg",
  logoAlt: "emailcn",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  pageBackgroundColor: "#f1f5f9",
  price: "From $14.99",
  subheading: "Americano Grape Fruit",
  textBackgroundColor: "#fffffe",
  theme: defaultTheme,
  variant: "image-left",
} satisfies FullBleedSplitHero_HeroSplitFullBleedProps;

const __FullBleedSplitHero = FullBleedSplitHero_HeroSplitFullBleed;

type OverlayContentHeroBundle_HeroWithOverlayedContentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

interface OverlayContentHeroBundle_HeroWithOverlayedContentProps {
  theme?: EmailThemeTokens;
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
  variant?: OverlayContentHeroBundle_HeroWithOverlayedContentVariant;
}

const OverlayContentHeroBundle_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const OverlayContentHeroBundle_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const OverlayContentHeroBundle_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .hero-overlayed-content-side {
        width: 24px !important;
      }

      .hero-overlayed-content-slant {
        border-left-width: 100vw !important;
      }
    }
  `;

type OverlayContentHeroBundle_SectionProps = Omit<
  OverlayContentHeroBundle_HeroWithOverlayedContentProps,
  "theme"
>;

const OverlayContentHeroBundle_sectionDefaults = {
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
  imageSrc: `${OverlayContentHeroBundle_assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${OverlayContentHeroBundle_assetRoot}/emailcn-insignia-mono.png`,
  pageBackgroundColor: "#f1f5f9",
  slantColor: "#fffffe",
  subheading: "Only One Pair Left",
  textColor: "#030712",
  variant: "default",
} satisfies OverlayContentHeroBundle_SectionProps;

const OverlayContentHeroBundle_HeroWithOverlayedContentSection = (
  props: OverlayContentHeroBundle_SectionProps
) => {
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
  } = { ...OverlayContentHeroBundle_sectionDefaults, ...props };
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
                fontFamily: OverlayContentHeroBundle_fontFamily,
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
                fontFamily: OverlayContentHeroBundle_fontFamily,
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
                fontFamily: OverlayContentHeroBundle_fontFamily,
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
                fontFamily: OverlayContentHeroBundle_fontFamily,
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
                  fontFamily: OverlayContentHeroBundle_fontFamily,
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
                  src={`${OverlayContentHeroBundle_assetRoot}/icon-arrow-right.png`}
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
            {(() => {
              if (variant === "default") {
                return (
                  <Section style={{ height: "64px", lineHeight: "64px" }}>
                    &zwj;
                  </Section>
                );
              }
              return (
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
              );
            })()}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const OverlayContentHeroBundle_HeroWithOverlayedContent = (
  props: OverlayContentHeroBundle_HeroWithOverlayedContentProps
) => {
  const { pageBackgroundColor, theme, ...sectionProps } = {
    ...OverlayContentHeroBundle_sectionDefaults,
    theme: defaultTheme,
    ...props,
  };
  return (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{
            __html: OverlayContentHeroBundle_responsiveStyles,
          }}
        />
      </EmailHead>
      <Preview>{`${sectionProps.eyebrow} — ${sectionProps.headingAccent} ${sectionProps.heading}`}</Preview>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          color: theme.colorText,
          fontFamily: OverlayContentHeroBundle_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <OverlayContentHeroBundle_HeroWithOverlayedContentSection
            {...sectionProps}
          />
        </Container>
      </Body>
    </Html>
  );
};

OverlayContentHeroBundle_HeroWithOverlayedContent.PreviewProps = {
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
  imageSrc: `${OverlayContentHeroBundle_assetRoot}/hero/overlayed/hero-overlayed-bg.jpg`,
  logoAlt: "emailcn",
  logoHref: "https://example.com",
  logoSrc: `${OverlayContentHeroBundle_assetRoot}/emailcn-insignia-mono.png`,
  pageBackgroundColor: "#f1f5f9",
  slantColor: "#fffffe",
  subheading: "Only One Pair Left",
  textColor: "#030712",
  theme: defaultTheme,
  variant: "default",
} satisfies OverlayContentHeroBundle_HeroWithOverlayedContentProps;

const __OverlayContentHeroBundle = {
  Component: OverlayContentHeroBundle_HeroWithOverlayedContent,
  __SplitHeroSection: OverlayContentHeroBundle_HeroWithOverlayedContentSection,
};

const __OverlayContentHero = __OverlayContentHeroBundle.Component;

const { __SplitHeroSection } = __OverlayContentHeroBundle;

type SlantedSplitHero_HeroWithSlantedSplitVariant =
  | "left-slanted-down"
  | "left-slanted-up"
  | "right-slanted-down"
  | "right-slanted-up";

interface SlantedSplitHero_HeroWithSlantedSplitProps {
  theme?: EmailThemeTokens;
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
  variant?: SlantedSplitHero_HeroWithSlantedSplitVariant;
}

const SlantedSplitHero_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SlantedSplitHero_assetRoot =
  "https://emailcn.vercel.app/api/email-assets";

const SlantedSplitHero_responsiveStyles = `
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

type SlantedSplitHero_SectionProps = Omit<
  SlantedSplitHero_HeroWithSlantedSplitProps,
  "theme"
>;

const SlantedSplitHero_HeroWithSlantedSplitSection = (
  props: SlantedSplitHero_SectionProps
) => {
  const {
    buttonBackgroundColor,
    buttonTextColor,
    contentBackgroundColor,
    ctaHref,
    ctaLabel,
    description,
    eyebrow,
    heading,
    imageAlt,
    imageBackgroundColor,
    imageSrc,
    logoAlt,
    logoHref,
    logoSrc,
    pageBackgroundColor,
    subheading,
    textColor,
    variant,
  } = {
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#fffffe",
    contentBackgroundColor: "#fffffe",
    ctaHref: "https://example.com",
    ctaLabel: "Discover now",
    description:
      "Celebrating creativity, community, and culture in every edition. Bob Cut brings stories to life through design and narrative — a modern take on the timeless power of print.",
    eyebrow: "Independent Publishing",
    heading: "Bob Cut",
    imageAlt: "Independent publishing photography",
    imageBackgroundColor: "#030712",
    imageSrc: `${SlantedSplitHero_assetRoot}/hero/split-slanted-bg.jpg`,
    logoAlt: "emailcn",
    logoHref: "https://example.com",
    logoSrc: `${SlantedSplitHero_assetRoot}/emailcn-logo-light.png`,
    pageBackgroundColor: "#f1f5f9",
    subheading: "January Edition",
    textColor: "#030712",
    variant: "left-slanted-down",
    ...props,
  };
  const isLeft = variant.startsWith("left-");
  const slantsDown = variant.endsWith("-down");
  const logo = (
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
  );
  const imageCore = (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
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
            <Section style={{ tableLayout: "fixed" }} width="100%">
              <Fragment>
                <Row>
                  {(() => {
                    if (isLeft) {
                      return (
                        <>
                          <Column
                            style={{
                              verticalAlign: slantsDown ? "top" : "bottom",
                            }}
                          >
                            <Section
                              className="hero-slanted-split-image-core"
                              style={{ width: "256px" }}
                            >
                              <Fragment>
                                <Row>
                                  <Column>
                                    {slantsDown ? (
                                      <>
                                        <Section style={{ lineHeight: "44px" }}>
                                          &zwj;
                                        </Section>
                                        {logo}
                                      </>
                                    ) : (
                                      <>
                                        {logo}
                                        <Section style={{ lineHeight: "44px" }}>
                                          &zwj;
                                        </Section>
                                      </>
                                    )}
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                          </Column>
                          <Column
                            className="hero-slanted-split-slant-cell"
                            style={{ position: "relative", width: "120px" }}
                          >
                            <Section
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
                          </Column>
                        </>
                      );
                    }
                    return (
                      <>
                        <Column
                          className="hero-slanted-split-slant-cell"
                          style={{ position: "relative", width: 0 }}
                        >
                          <Section
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
                        </Column>
                        <Column
                          style={{
                            verticalAlign: slantsDown ? "top" : "bottom",
                          }}
                        >
                          <Section
                            className="hero-slanted-split-image-core"
                            style={{ width: "256px" }}
                          >
                            <Fragment>
                              <Row>
                                <Column>
                                  {slantsDown ? (
                                    <>
                                      <Section style={{ lineHeight: "44px" }}>
                                        &zwj;
                                      </Section>
                                      {logo}
                                    </>
                                  ) : (
                                    <>
                                      {logo}
                                      <Section style={{ lineHeight: "44px" }}>
                                        &zwj;
                                      </Section>
                                    </>
                                  )}
                                </Column>
                              </Row>
                            </Fragment>
                          </Section>
                        </Column>
                      </>
                    );
                  })()}
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
  const copy = (
    <>
      <Text
        style={{
          color: textColor,
          fontFamily: SlantedSplitHero_fontFamily,
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
          fontFamily: SlantedSplitHero_fontFamily,
          fontSize: "48px",
          fontWeight: 500,
          margin: 0,
        }}
        as="h1"
      >
        {heading}
      </Heading>
      <Text
        style={{
          color: textColor,
          fontFamily: SlantedSplitHero_fontFamily,
          fontSize: "18px",
          lineHeight: "28px",
          margin: 0,
        }}
      >
        {subheading}
      </Text>
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <Text
        style={{
          color: textColor,
          fontFamily: SlantedSplitHero_fontFamily,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {description}
      </Text>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      {ctaLabel && ctaHref ? (
        <Link
          className="hero-slanted-split-cta"
          href={ctaHref}
          style={{
            backgroundColor: buttonBackgroundColor,
            borderRadius: "8px",
            color: buttonTextColor,
            display: "inline-block",
            fontFamily: SlantedSplitHero_fontFamily,
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
            src={`${SlantedSplitHero_assetRoot}/icon-arrow-right.png`}
            style={{ maxWidth: "100%", verticalAlign: "baseline" }}
            width="12"
          />
        </Link>
      ) : null}
    </>
  );
  const contentCell = isLeft ? (
    <Column
      className="hero-slanted-split-stack-left hero-slanted-split-content-left"
      style={{
        backgroundColor: contentBackgroundColor,
        padding: "44px 44px 44px 24px",
        textAlign: "left",
      }}
    >
      {copy}
    </Column>
  ) : (
    <Column
      className="hero-slanted-split-content-right"
      style={{
        backgroundColor: contentBackgroundColor,
        padding: "44px 24px 44px 44px",
        textAlign: "left",
      }}
    >
      <Section className="hero-slanted-split-content-inner-right">
        {copy}
      </Section>
    </Column>
  );
  const imageCell = (
    <Column
      className={
        isLeft
          ? "hero-slanted-split-stack-left hero-slanted-split-image-cell"
          : "hero-slanted-split-image-right hero-slanted-split-image-cell"
      }
      style={{ width: "256px" }}
    >
      {imageCore}
    </Column>
  );
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column style={{ maxWidth: "100%", width: "600px" }}>
            <Section width="100%">
              <Fragment>
                <Row>
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
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const SlantedSplitHero_HeroWithSlantedSplit = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-slanted-down",
  ...props
}: SlantedSplitHero_HeroWithSlantedSplitProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: SlantedSplitHero_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{props.heading ?? "Bob Cut"}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        color: theme.colorText,
        fontFamily: SlantedSplitHero_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <SlantedSplitHero_HeroWithSlantedSplitSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

SlantedSplitHero_HeroWithSlantedSplit.PreviewProps = {
  theme: defaultTheme,
  variant: "left-slanted-down",
} satisfies SlantedSplitHero_HeroWithSlantedSplitProps;

const __SlantedSplitHero = SlantedSplitHero_HeroWithSlantedSplit;

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

export interface SplitHeroProps {
  theme?: Parameters<typeof __ContainedSplitHero>[0]["theme"];
  content?: HeroContent;
  images?: HeroImage[];
  brand?: HeroBrand;
  treatment?: "contained" | "full-bleed" | "overlay" | "slanted";
  imagePosition?: "left" | "right";
  slant?: "up" | "down";
  overlayContent?: boolean;
}

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

export const SplitHero = ({
  theme,
  content,
  images,
  brand,
  treatment = "contained",
  imagePosition = "right",
  slant = "down",
  overlayContent = false,
}: SplitHeroProps) => {
  const contentValues = heroContentValues(content);
  const [image] = images ?? [];
  const imageValues = heroImageValues(image);
  const brandValues = heroBrandValues(brand);
  if (overlayContent) {
    return (
      <__OverlayContentHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        headingAccent={content?.emphasis}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={
          treatment === "slanted" ? `slanted-${imagePosition}` : "default"
        }
      />
    );
  }
  if (treatment === "overlay") {
    return (
      <__OverlaySplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`overlay-${imagePosition}`}
      />
    );
  }
  if (treatment === "full-bleed") {
    return (
      <__FullBleedSplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        price={content?.price}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`image-${imagePosition}`}
      />
    );
  }
  if (treatment === "slanted") {
    return (
      <__SlantedSplitHero
        ctaHref={contentValues.ctaHref}
        ctaLabel={contentValues.ctaLabel}
        description={contentValues.description}
        eyebrow={contentValues.eyebrow}
        heading={contentValues.heading}
        subheading={contentValues.subheading}
        imageAlt={imageValues.alt}
        imageSrc={imageValues.src}
        logoAlt={brandValues.logoAlt}
        logoHref={brandValues.logoHref}
        logoSrc={brandValues.logoSrc}
        theme={theme}
        variant={`${imagePosition}-slanted-${slant}`}
      />
    );
  }
  return (
    <__ContainedSplitHero
      ctaHref={contentValues.ctaHref}
      ctaLabel={contentValues.ctaLabel}
      description={contentValues.description}
      eyebrow={contentValues.eyebrow}
      heading={contentValues.heading}
      price={content?.price}
      subheading={contentValues.subheading}
      logoAlt={brandValues.logoAlt}
      logoSrc={brandValues.logoSrc}
      primaryImageAlt={imageValues.alt}
      primaryImageSrc={imageValues.src}
      secondaryImageAlt={images?.[1]?.alt}
      secondaryImageSrc={images?.[1]?.src}
      theme={theme}
      variant={
        images && images.length > 1
          ? `square-images-${imagePosition}`
          : `single-image-${imagePosition}`
      }
    />
  );
};

export const SplitHeroSection = __SplitHeroSection;

SplitHero.PreviewProps = {
  imagePosition: "right",
  overlayContent: false,
  slant: "down",
  treatment: "contained",
} satisfies SplitHeroProps;
