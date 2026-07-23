import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type HeroSplitFullBleedVariant = "image-left" | "image-right";

export interface HeroSplitFullBleedProps {
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
  variant?: HeroSplitFullBleedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

type SectionProps = Required<
  Omit<HeroSplitFullBleedProps, "theme" | "variant">
> & {
  theme: EmailThemeTokens;
  variant: HeroSplitFullBleedVariant;
};

const HeroImageColumn = ({
  logoAlt,
  logoSrc,
}: Pick<SectionProps, "logoAlt" | "logoSrc">) => (
  <MjmlColumn
    cssClass="hero-split-column hero-split-image"
    direction="ltr"
    padding="0"
    verticalAlign="top"
    width="256px"
  >
    <MjmlImage
      align="center"
      alt={logoAlt}
      cssClass="hero-split-logo"
      padding="44px 24px 0"
      src={logoSrc}
      width="165px"
    />
  </MjmlColumn>
);

const HeroSpacerColumn = () => (
  <MjmlColumn
    cssClass="hero-split-column hero-split-spacer"
    direction="ltr"
    padding="0"
    width="24px"
  >
    <MjmlSpacer height="1px" />
  </MjmlColumn>
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
  <MjmlColumn
    backgroundColor={textBackgroundColor}
    cssClass="hero-split-column hero-split-text"
    direction="ltr"
    padding="0 24px"
    verticalAlign="bottom"
    width="320px"
  >
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="200"
      lineHeight="24px"
      padding="0"
    >
      {eyebrow}
    </MjmlText>
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={fontFamily}
      fontSize="48px"
      fontWeight="500"
      lineHeight="58px"
      padding="0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align="left"
      color="#030712"
      fontFamily={fontFamily}
      fontSize="18px"
      lineHeight="28px"
      padding="0"
    >
      {subheading}
    </MjmlText>
    <MjmlSpacer height="48px" />
    <MjmlText
      align="left"
      color="#4b5563"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="0"
    >
      {description}
      {price ? (
        <>
          <br />
          <br />
          <span style={{ fontWeight: 700 }}>{price}</span>
        </>
      ) : null}
    </MjmlText>
    <MjmlSpacer height="24px" />
    {ctaLabel && ctaHref ? (
      <MjmlButton
        align="left"
        backgroundColor={buttonBackgroundColor}
        borderRadius="8px"
        color={buttonTextColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={ctaHref}
        innerPadding="14px 20px"
        lineHeight="16px"
        padding="0"
      >
        {ctaLabel} →
      </MjmlButton>
    ) : null}
    <MjmlSpacer height="44px" />
  </MjmlColumn>
);

export const HeroSplitFullBleedSection = (props: SectionProps) => (
  <MjmlSection
    backgroundColor={props.textBackgroundColor}
    direction={props.variant === "image-right" ? "rtl" : "ltr"}
    padding="0"
  >
    <HeroImageColumn {...props} />
    <HeroSpacerColumn />
    <HeroTextColumn {...props} />
  </MjmlSection>
);

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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{`${heading} — ${subheading}`}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{`
        .hero-split-image,
        .hero-split-image > table,
        .hero-split-image > table > tbody > tr > td {
          background-image: url(${JSON.stringify(imageSrc)}) !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
          height: 600px !important;
        }

        @media only screen and (max-width: 599px) {
          .hero-split-column {
            width: 100% !important;
          }

          .hero-split-image,
          .hero-split-image > table,
          .hero-split-image > table > tbody > tr > td {
            height: 388px !important;
          }

          .hero-split-spacer,
          .hero-split-spacer > table,
          .hero-split-spacer > table > tbody > tr > td {
            height: 44px !important;
            line-height: 44px !important;
          }

          .hero-split-logo table {
            margin-left: 0 !important;
            margin-right: auto !important;
          }
        }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll color="#030712" fontFamily={fontFamily} />
        <MjmlText fontSize="16px" lineHeight="24px" />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody backgroundColor={pageBackgroundColor} width="600px">
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
        theme={theme}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
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
