import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  FeatureCopy,
  FeatureEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/feature/feature-shared";

export type FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "logo-top-left"
  | "logo-top-right";

export interface FeatureWithFullTitleAndTallBackgroundImagesProps {
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
  variant?: FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const FeatureWithFullTitleAndTallBackgroundImagesSection = ({
  backgroundColor = "#fffffe",
  body = "Discover clinically proven formulas designed to target concerns with precision and clarity.",
  buttonHref = "https://example.com",
  buttonLabel = "Discover more",
  heading = "Science-led skincare essentials.",
  headingColor = "#030712",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-4.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-5.jpg",
  linkColor = "#4f46e5",
  logoAlt = "Monarch",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-2.png",
  textColor = "#4b5563",
  variant = "logo-bottom-left",
}: Omit<FeatureWithFullTitleAndTallBackgroundImagesProps, "theme">) => {
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const content = (
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
        heading=""
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
    <MjmlColumn key="feature-full-1" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc1}
        width="132px"
      />
    </MjmlColumn>,
    <MjmlColumn key="feature-full-2" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc2}
        width="132px"
      />
    </MjmlColumn>,
  ];

  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        <MjmlColumn padding="0">
          <MjmlText
            color={headingColor}
            fontFamily={fontFamily}
            fontSize="24px"
            fontWeight="600"
            lineHeight="32px"
            padding="0"
          >
            {heading}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="12px 12px 44px">
        {contentRight ? images : content}
        {contentRight ? content : images}
      </MjmlSection>
    </>
  );
};

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Science-led skincare essentials"
    theme={theme}
  >
    <FeatureWithFullTitleAndTallBackgroundImagesSection {...props} />
  </FeatureEmailShell>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-bottom-left",
} satisfies FeatureWithFullTitleAndTallBackgroundImagesProps;
