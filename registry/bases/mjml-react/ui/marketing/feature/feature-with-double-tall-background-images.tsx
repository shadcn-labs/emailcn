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

export type FeatureWithDoubleTallBackgroundImagesVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right";

export interface FeatureWithDoubleTallBackgroundImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithDoubleTallBackgroundImagesVariant;
}

export const FeatureWithDoubleTallBackgroundImagesSection = ({
  backgroundColor = "#fffffe",
  body = "Premium footwear, outerwear, and lifestyle pieces chosen for quality, comfort, and everyday performance.",
  buttonHref = "https://example.com",
  buttonLabel = "Discover more",
  heading = "Discover the Monarch Collection.",
  headingColor = "#030712",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-1.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-2.jpg",
  linkColor = "#4f46e5",
  logoAlt = "Monarch",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-1.png",
  textColor = "#4b5563",
  variant = "logo-top-left",
}: Omit<FeatureWithDoubleTallBackgroundImagesProps, "theme">) => {
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const copy = (
    <MjmlColumn padding="0 12px" verticalAlign="top" width="48%">
      {logoAfter ? null : (
        <>
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
          <MjmlSpacer height="24px" />
        </>
      )}
      <FeatureCopy
        body={body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={heading}
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
      {logoAfter ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );
  const images = [
    <MjmlColumn key="feature-double-1" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc1}
        width="132px"
      />
    </MjmlColumn>,
    <MjmlColumn key="feature-double-2" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={
          contentRight
            ? "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-3.jpg"
            : imageSrc2
        }
        width="132px"
      />
    </MjmlColumn>,
  ];

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 12px">
      {contentRight ? images : copy}
      {contentRight ? copy : images}
    </MjmlSection>
  );
};

export const FeatureWithDoubleTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FeatureWithDoubleTallBackgroundImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Discover the Monarch Collection"
    theme={theme}
  >
    <FeatureWithDoubleTallBackgroundImagesSection {...props} />
  </FeatureEmailShell>
);

FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies FeatureWithDoubleTallBackgroundImagesProps;
