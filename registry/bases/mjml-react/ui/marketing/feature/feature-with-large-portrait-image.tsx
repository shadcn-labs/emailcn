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

export type FeatureWithLargePortraitImageVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "content-bottom-left"
  | "content-bottom-right"
  | "content-top-left"
  | "content-top-right";

export interface FeatureWithLargePortraitImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
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
  variant?: FeatureWithLargePortraitImageVariant;
}

export const FeatureWithLargePortraitImageSection = (
  props: Omit<FeatureWithLargePortraitImageProps, "theme">
) => {
  const {
    backgroundColor,
    body,
    buttonHref,
    buttonLabel,
    heading,
    headingColor,
    linkColor,
    logoAlt,
    logoSrc,
    portraitImageAlt,
    portraitImageSrc,
    secondaryImageAlt,
    secondaryImageSrc,
    textColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    buttonHref: "https://example.com",
    buttonLabel: "Discover more",
    headingColor: "#030712",
    linkColor: "#4f46e5",
    logoAlt: "The North Face",
    logoSrc:
      "https://emailcn.vercel.app/api/email-assets/feature/logo-north-face.png",
    portraitImageAlt: "Product Image",
    secondaryImageAlt: "Product Image 2",
    textColor: "#4b5563",
    variant: "logo-top-left",
    ...props,
  };

  const contentVariant = variant.startsWith("content-");
  const portraitLeft = variant.endsWith("-right");
  const mediaAfter =
    variant.startsWith("logo-bottom-") || variant.startsWith("content-top-");
  const resolved = contentVariant
    ? {
        body:
          body ??
          "Experience cutting-edge performance, from dual-frequency GPS to pro-grade health insights.",
        heading: heading ?? "Innovation on your wrist.",
        portrait:
          portraitImageSrc ??
          (variant.startsWith("content-top-")
            ? "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-3.jpg"
            : "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-2.jpg"),
        secondary:
          secondaryImageSrc ??
          (variant.startsWith("content-top-")
            ? "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-2.jpg"
            : "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg"),
      }
    : {
        body:
          body ??
          "Find advanced outerwear engineered to handle wind, rain, and sudden shifts in the elements.",
        heading: heading ?? "Explore without limits.",
        portrait:
          portraitImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-3-lg-1.jpg",
        secondary:
          secondaryImageSrc ??
          "https://emailcn.vercel.app/api/email-assets/feature/feature-3-sm-1.jpg",
      };
  const media = (
    <MjmlImage
      align="left"
      alt={contentVariant ? secondaryImageAlt : logoAlt}
      borderRadius="4px"
      padding="0"
      src={contentVariant ? resolved.secondary : logoSrc}
      width={contentVariant ? "180px" : "139px"}
    />
  );
  const content = (
    <MjmlColumn padding="0 12px" verticalAlign="top" width="40%">
      {mediaAfter ? null : (
        <>
          {media}
          <MjmlSpacer height="24px" />
        </>
      )}
      <FeatureCopy
        body={resolved.body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={resolved.heading}
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
      {mediaAfter ? (
        <>
          <MjmlSpacer height="24px" />
          {media}
        </>
      ) : null}
    </MjmlColumn>
  );
  const portrait = (
    <MjmlColumn padding="0 12px" verticalAlign="top" width="60%">
      <MjmlImage
        alt={portraitImageAlt}
        borderRadius="4px"
        padding="0"
        src={resolved.portrait}
        width="323px"
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 12px">
      {portraitLeft ? portrait : content}
      {portraitLeft ? content : portrait}
    </MjmlSection>
  );
};

export const FeatureWithLargePortraitImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FeatureWithLargePortraitImageProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Explore without limits"
    theme={theme}
  >
    <FeatureWithLargePortraitImageSection {...props} />
  </FeatureEmailShell>
);

FeatureWithLargePortraitImage.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithLargePortraitImageProps;
