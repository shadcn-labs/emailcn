import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Column,
  Section,
  Text,
  Heading,
  Link,
  Row,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeroSplitContainedVariant =
  | "single-image-left"
  | "single-image-right"
  | "square-images-left"
  | "square-images-right"
  | "portrait-top-left"
  | "portrait-top-right"
  | "portrait-bottom-left"
  | "portrait-bottom-right";

export interface HeroSplitContainedProps {
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
  variant?: HeroSplitContainedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const assetRoot = "https://emailcn.vercel.app/api/email-assets";

const responsiveStyles = `
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

interface HeroPreset {
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

const presets = {
  portraitBottom: {
    backgroundColor: "#030712",
    ctaLabel: "Book a table now",
    description:
      "Fluffy steamed buns filled with rich, savory flavors and made fresh daily. A taste of authentic street food, crafted with passion and served with warmth, right in the heart of London.",
    eyebrow: "Taiwanese Steamed Shop",
    heading: "Gua Bao",
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    mutedTextColor: "#d1d5db",
    price: "",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${assetRoot}/hero/split-contained-landscape-top.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${assetRoot}/hero/split-contained-portrait-bottom.jpg`,
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
    logoSrc: `${assetRoot}/emailcn-logo.png`,
    mutedTextColor: "#4b5563",
    price: "",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${assetRoot}/hero/split-contained-portrait-top.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${assetRoot}/hero/split-contained-landscape-bottom.jpg`,
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
    logoSrc: `${assetRoot}/emailcn-logo.png`,
    mutedTextColor: "#4b5563",
    price: "",
    primaryImageAlt: "Salt toothpaste",
    primaryImageSrc: `${assetRoot}/hero/split-contained-bg.jpg`,
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
    logoSrc: `${assetRoot}/emailcn-logo-light.png`,
    mutedTextColor: "#d1d5db",
    price: "From $8.99",
    primaryImageAlt: "Top image",
    primaryImageSrc: `${assetRoot}/hero/split-contained-square-1.jpg`,
    secondaryImageAlt: "Bottom image",
    secondaryImageSrc: `${assetRoot}/hero/split-contained-square-2.jpg`,
    subheading: "For blemish-prone skin",
    textColor: "#f9fafb",
  },
} satisfies Record<string, HeroPreset>;

type ResolvedProps = Required<Omit<HeroSplitContainedProps, "theme">>;

const getPreset = (variant: HeroSplitContainedVariant) => {
  if (variant.startsWith("single-")) {
    return presets.single;
  }
  if (variant.startsWith("square-")) {
    return presets.square;
  }
  if (variant.startsWith("portrait-bottom-")) {
    return presets.portraitBottom;
  }
  return presets.portraitTop;
};

const resolveProps = (
  props: Omit<HeroSplitContainedProps, "theme">
): ResolvedProps => {
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
    variant: "single-image-left" as HeroSplitContainedVariant,
    ...props,
  };

  const preset = getPreset(variant);

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

const ImagePanel = ({ props }: { props: ResolvedProps }) => {
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

const ContentPanel = ({ props }: { props: ResolvedProps }) => {
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
          fontFamily,
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
          fontFamily,
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
          fontFamily,
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
          fontFamily,
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
            fontFamily,
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
            src={`${assetRoot}/icon-arrow-right.png`}
            width="12"
            style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          />
        </Link>
      ) : null}
    </Column>
  );
};

const SpacerColumn = () => (
  <Column
    className="hero-contained-column hero-contained-spacer"
    style={{ fontSize: 0, lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </Column>
);

export const HeroSplitContainedSection = (
  input: Omit<HeroSplitContainedProps, "theme">
) => {
  const props = resolveProps(input);
  const imageLeft = props.variant.endsWith("-left");
  const image = <ImagePanel props={props} />;
  const content = <ContentPanel props={props} />;

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
                      <SpacerColumn />
                      {content}
                    </>
                  ) : (
                    <>
                      {content}
                      <SpacerColumn />
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

export const HeroSplitContained = ({
  theme = defaultTheme,
  ...props
}: HeroSplitContainedProps) => {
  const resolved = resolveProps(props);

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{`${resolved.heading} — ${resolved.subheading}`}</Preview>
      <Body
        style={{
          backgroundColor: resolved.pageBackgroundColor,
          color: theme.colorText,
          fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <HeroSplitContainedSection {...props} variant={resolved.variant} />
        </Container>
      </Body>
    </Html>
  );
};

HeroSplitContained.PreviewProps = {
  theme: defaultTheme,
  variant: "single-image-left",
} satisfies HeroSplitContainedProps;
