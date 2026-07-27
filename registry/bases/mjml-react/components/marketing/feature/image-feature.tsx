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
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

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
  theme: EmailTheme;
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

type Feature_FeatureWithProductImageVariant = "image-left" | "image-right";

interface Feature_FeatureWithProductImageProps {
  theme?: EmailTheme;
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
  variant?: Feature_FeatureWithProductImageVariant;
}

const Feature_FeatureWithProductImageSection = ({
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
}: Omit<Feature_FeatureWithProductImageProps, "theme">) => {
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

const Feature_FeatureWithProductImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Feature_FeatureWithProductImageProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Powering every payment"
    theme={theme}
  >
    <Feature_FeatureWithProductImageSection {...props} />
  </FeatureEmailShell>
);

Feature_FeatureWithProductImage.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies Feature_FeatureWithProductImageProps;

const __Feature = Feature_FeatureWithProductImage;

export interface ImageFeatureProps {
  theme?: Parameters<typeof __Feature>[0]["theme"];
  heading?: string;
  body?: string;
  image?: {
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

export const ImageFeature = ({
  theme,
  heading,
  body,
  image,
  action,
  placement = "right",
}: ImageFeatureProps) => (
  <__Feature
    arrowIconSrc={action?.iconSrc}
    body={body}
    buttonHref={action?.href}
    buttonLabel={action?.label}
    heading={heading}
    imageAlt={image?.alt}
    imageSrc={image?.src}
    theme={theme}
    variant={`image-${placement}`}
  />
);

ImageFeature.PreviewProps = {
  placement: "right",
} satisfies ImageFeatureProps;
