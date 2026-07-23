import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FeatureCopy,
  FeatureEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/feature/feature-shared";

export type FeatureWithProductImageVariant = "image-left" | "image-right";

export interface FeatureWithProductImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: FeatureWithProductImageVariant;
}

export const FeatureWithProductImageSection = ({
  backgroundColor = "#fffffe",
  body = "Discover tools that make accepting payments faster, easier, and more reliable, wherever you serve customers.",
  buttonHref = "https://example.com",
  buttonLabel = "Discover more",
  heading = "Powering every payment.",
  headingColor = "#030712",
  imageAlt = "Product Image",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/feature/feature-1.jpg",
  linkColor = "#4f46e5",
  textColor = "#4b5563",
  variant = "image-left",
}: Omit<FeatureWithProductImageProps, "theme">) => {
  const image = (
    <MjmlColumn padding="0" verticalAlign="top" width="36%">
      <MjmlImage
        alt={imageAlt}
        borderRadius="4px"
        padding="0"
        src={imageSrc}
        width="188px"
      />
    </MjmlColumn>
  );
  const copy = (
    <MjmlColumn padding="0 0 0 24px" verticalAlign="top" width="64%">
      <FeatureCopy
        body={body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={heading}
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      {variant === "image-left" ? image : copy}
      {variant === "image-left" ? copy : image}
    </MjmlSection>
  );
};

export const FeatureWithProductImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FeatureWithProductImageProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Powering every payment"
    theme={theme}
  >
    <FeatureWithProductImageSection {...props} />
  </FeatureEmailShell>
);

FeatureWithProductImage.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies FeatureWithProductImageProps;
