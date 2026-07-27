import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FeatureEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const FeatureCopy = ({
  align = "left",
  body,
  buttonHref,
  buttonLabel,
  heading,
  headingColor,
  linkColor,
  textColor,
}: {
  align?: "center" | "left" | "right";
  body: string;
  buttonHref: string;
  buttonLabel: string;
  heading: string;
  headingColor: string;
  linkColor: string;
  textColor: string;
}) => (
  <>
    {heading ? (
      <MjmlText
        align={align}
        color={headingColor}
        fontFamily={fontFamily}
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
        padding="0"
      >
        {heading}
      </MjmlText>
    ) : null}
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding={heading ? "16px 0 0" : "0"}
    >
      {body}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor="transparent"
      color={linkColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={buttonHref}
      innerPadding="6px 0"
      padding="16px 0 0"
    >
      {buttonLabel} →
    </MjmlButton>
  </>
);

type Feature_FeatureWithMultipleProductImagesVariant =
  | "logo-left"
  | "logo-right"
  | "images-left"
  | "images-right";

interface Feature_FeatureWithMultipleProductImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  middleImageSrc?: string;
  middleImageAlt?: string;
  smallImageSrc?: string;
  smallImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: Feature_FeatureWithMultipleProductImagesVariant;
}

const Feature_FeatureWithMultipleProductImagesSection = (
  props: Omit<Feature_FeatureWithMultipleProductImagesProps, "theme">
) => {
  const {
    backgroundColor,
    body,
    buttonHref,
    buttonLabel,
    heading,
    headingColor,
    largeImageAlt,
    largeImageSrc,
    linkColor,
    logoAlt,
    logoSrc,
    middleImageAlt,
    middleImageSrc,
    smallImageAlt,
    smallImageSrc,
    textColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    buttonHref: "https://example.com",
    buttonLabel: "Discover more",
    headingColor: "#030712",
    largeImageAlt: "Product Image 1",
    linkColor: "#4f46e5",
    logoAlt: "Visa",
    logoSrc: "https://emailcn.vercel.app/api/email-assets/logos/logo-visa.png",
    middleImageAlt: "Product Image 2",
    smallImageAlt: "Product Image 3",
    textColor: "#4b5563",
    variant: "logo-left",
    ...props,
  };
  const logoVariant = variant.startsWith("logo-");
  const artworkRight = variant.endsWith("-right");
  const resolved = logoVariant
    ? {
        body:
          body ??
          "Accepting cards should be quick, secure, and seamless. Discover our tools that simplify every transaction.",
        heading: heading ?? "Built for the journey ahead.",
        large:
          largeImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg.jpg",
        middle:
          middleImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
        small:
          smallImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm.jpg",
      }
    : {
        body:
          body ??
          "Explore durable layers that balance insulation, breathability, and all-day comfort.",
        heading: heading ?? "Outdoor essentials redefined.",
        large:
          largeImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-lg-2.jpg",
        middle:
          middleImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-md.jpg",
        small:
          smallImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-2-sm-2.jpg",
      };
  const artwork = (
    <MjmlColumn padding="0" verticalAlign="top" width="50%">
      {logoVariant ? (
        <>
          <MjmlImage
            align="center"
            alt={logoAlt}
            padding="24px"
            src={logoSrc}
            width="120px"
          />
          <MjmlSpacer height="16px" />
        </>
      ) : null}
      <MjmlImage
        alt={largeImageAlt}
        borderRadius="4px"
        padding="0"
        src={resolved.large}
        width="254px"
      />
      <MjmlSpacer height="16px" />
      <MjmlImage
        alt={middleImageAlt}
        borderRadius="4px"
        padding="0"
        src={resolved.middle}
        width="160px"
      />
      <MjmlSpacer height="12px" />
      <MjmlImage
        alt={smallImageAlt}
        borderRadius="4px"
        padding="0"
        src={resolved.small}
        width="96px"
      />
    </MjmlColumn>
  );
  const copy = (
    <MjmlColumn padding="0 0 0 32px" verticalAlign="middle" width="50%">
      <FeatureCopy
        body={resolved.body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={resolved.heading}
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      {artworkRight ? copy : artwork}
      {artworkRight ? artwork : copy}
    </MjmlSection>
  );
};

const Feature_FeatureWithMultipleProductImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Feature_FeatureWithMultipleProductImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Built for the journey ahead"
    theme={theme}
  >
    <Feature_FeatureWithMultipleProductImagesSection {...props} />
  </FeatureEmailShell>
);

Feature_FeatureWithMultipleProductImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-left",
} satisfies Feature_FeatureWithMultipleProductImagesProps;

const __Feature = Feature_FeatureWithMultipleProductImages;

export interface ProductImagesFeatureProps {
  theme?: Parameters<typeof __Feature>[0]["theme"];
  heading?: string;
  body?: string;
  images?: {
    src: string;
    alt?: string;
  }[];
  logo?: {
    src: string;
    alt?: string;
  };
  action?: {
    href: string;
    label: string;
    iconSrc?: string;
  };
  placement?: "left" | "right";
}

export const ProductImagesFeature = ({
  theme,
  heading,
  body,
  images,
  logo,
  action,
  placement = "right",
}: ProductImagesFeatureProps) => (
  <__Feature
    arrowIconSrc={action?.iconSrc}
    body={body}
    buttonHref={action?.href}
    buttonLabel={action?.label}
    heading={heading}
    largeImageAlt={images?.[0]?.alt}
    largeImageSrc={images?.[0]?.src}
    logoAlt={logo?.alt}
    logoSrc={logo?.src}
    middleImageAlt={images?.[1]?.alt}
    middleImageSrc={images?.[1]?.src}
    smallImageAlt={images?.[2]?.alt}
    smallImageSrc={images?.[2]?.src}
    theme={theme}
    variant={`images-${placement}`}
  />
);

ProductImagesFeature.PreviewProps = {
  placement: "right",
} satisfies ProductImagesFeatureProps;
