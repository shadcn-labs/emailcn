import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeroSplitFullBleedVariant = "image-left" | "image-right";

export interface HeroSplitFullBleedProps {
  theme?: TailwindConfig;
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
  variant?: HeroSplitFullBleedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
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

type SectionProps = Required<
  Omit<HeroSplitFullBleedProps, "theme" | "variant">
> & {
  variant: HeroSplitFullBleedVariant;
};

const HeroImageColumn = ({
  imageAlt,
  imageSrc,
  logoAlt,
  logoSrc,
}: Pick<SectionProps, "imageAlt" | "imageSrc" | "logoAlt" | "logoSrc">) => (
  <Column
    aria-label={imageAlt || undefined}
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

const HeroSpacerColumn = () => (
  <Column
    className="hero-split-column hero-split-spacer"
    style={{ fontSize: 0, lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </Column>
);

const HeroTextColumn = ({
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
  SectionProps,
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
        fontFamily,
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
        fontFamily,
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
        fontFamily,
        fontSize: "18px",
        lineHeight: "28px",
        margin: 0,
      }}
    >
      {subheading}
    </Text>
    <div style={{ fontSize: 0, height: "48px", lineHeight: "48px" }}>&zwj;</div>
    <Text
      style={{
        color: "#4b5563",
        fontFamily,
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
    <div style={{ fontSize: 0, height: "24px", lineHeight: "24px" }}>&zwj;</div>
    {ctaLabel && ctaHref ? (
      <Button
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
    <div style={{ fontSize: 0, height: "44px", lineHeight: "44px" }}>&zwj;</div>
  </Column>
);

export const HeroSplitFullBleedSection = (props: SectionProps) => {
  const image = <HeroImageColumn {...props} />;
  const spacer = <HeroSpacerColumn />;
  const text = <HeroTextColumn {...props} />;

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

export const HeroSplitFullBleed = ({
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
}: HeroSplitFullBleedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{`${heading} — ${subheading}`}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily,
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
          <HeroSplitFullBleedSection
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
    </Tailwind>
  </Html>
);

HeroSplitFullBleed.PreviewProps = {
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
} satisfies HeroSplitFullBleedProps;
