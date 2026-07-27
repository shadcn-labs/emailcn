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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
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
type Feature_FeatureWithLargePortraitImageVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "content-bottom-left"
  | "content-bottom-right"
  | "content-top-left"
  | "content-top-right";
interface Feature_FeatureWithLargePortraitImageProps {
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
  variant?: Feature_FeatureWithLargePortraitImageVariant;
}
const Feature_FeatureWithLargePortraitImageSection = (
  props: Omit<Feature_FeatureWithLargePortraitImageProps, "theme">
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
  const resolved = (() => {
    if (contentVariant) {
      return {
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
      };
    }
    return {
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
  })();
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
const Feature_FeatureWithLargePortraitImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Feature_FeatureWithLargePortraitImageProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Explore without limits"
    theme={theme}
  >
    <Feature_FeatureWithLargePortraitImageSection {...props} />
  </FeatureEmailShell>
);
Feature_FeatureWithLargePortraitImage.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies Feature_FeatureWithLargePortraitImageProps;
const __Feature = Feature_FeatureWithLargePortraitImage;
export interface PortraitFeatureProps {
  theme?: Parameters<typeof __Feature>[0]["theme"];
  heading?: string;
  body?: string;
  primaryImage?: {
    src: string;
    alt?: string;
  };
  secondaryImage?: {
    src: string;
    alt?: string;
  };
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
  contentPosition?: "top" | "bottom";
}
export const PortraitFeature = ({
  theme,
  heading,
  body,
  primaryImage,
  secondaryImage,
  logo,
  action,
  placement = "right",
  contentPosition,
}: PortraitFeatureProps) => (
  <__Feature
    arrowIconSrc={action?.iconSrc}
    body={body}
    buttonHref={action?.href}
    buttonLabel={action?.label}
    heading={heading}
    logoAlt={logo?.alt}
    logoSrc={logo?.src}
    portraitImageAlt={primaryImage?.alt}
    portraitImageSrc={primaryImage?.src}
    secondaryImageAlt={secondaryImage?.alt}
    secondaryImageSrc={secondaryImage?.src}
    theme={theme}
    variant={
      contentPosition
        ? `content-${contentPosition}-${placement}`
        : `logo-top-${placement}`
    }
  />
);
PortraitFeature.PreviewProps = {
  placement: "right",
} satisfies PortraitFeatureProps;
