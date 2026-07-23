import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FeatureCopy,
  FeatureEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/feature/feature-shared";

export type FeatureWithMultipleProductImagesVariant =
  | "logo-left"
  | "logo-right"
  | "images-left"
  | "images-right";

export interface FeatureWithMultipleProductImagesProps {
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
  variant?: FeatureWithMultipleProductImagesVariant;
}

export const FeatureWithMultipleProductImagesSection = (
  props: Omit<FeatureWithMultipleProductImagesProps, "theme">
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

export const FeatureWithMultipleProductImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FeatureWithMultipleProductImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Built for the journey ahead"
    theme={theme}
  >
    <FeatureWithMultipleProductImagesSection {...props} />
  </FeatureEmailShell>
);

FeatureWithMultipleProductImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-left",
} satisfies FeatureWithMultipleProductImagesProps;
