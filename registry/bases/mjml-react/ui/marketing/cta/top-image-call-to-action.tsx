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

const CTAEmailShell = ({
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

const CTACopy = ({
  align = "center",
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  primaryButtonBackgroundColor,
  primaryButtonTextColor,
  secondaryButtonBorderColor = "#d1d5db",
  secondaryButtonTextColor = "#4b5563",
  secondaryCtaHref,
  secondaryCtaLabel,
  subtext,
  textColor,
}: {
  align?: "center" | "left" | "right";
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  headingColor: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonTextColor?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  subtext: string;
  textColor: string;
}) => (
  <>
    <MjmlText
      align={align}
      color={headingColor}
      fontFamily={fontFamily}
      fontSize="30px"
      fontWeight="600"
      lineHeight="36px"
      padding="0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="20px 0 0"
    >
      {subtext}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor={primaryButtonBackgroundColor}
      borderRadius="8px"
      color={primaryButtonTextColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={ctaHref}
      innerPadding="10px 22px"
      lineHeight="24px"
      padding="28px 0 0"
    >
      {ctaLabel}
    </MjmlButton>
    {secondaryCtaLabel ? (
      <MjmlButton
        align={align}
        backgroundColor="transparent"
        border={`1px solid ${secondaryButtonBorderColor}`}
        borderRadius="8px"
        color={secondaryButtonTextColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={secondaryCtaHref}
        innerPadding="9px 21px"
        lineHeight="24px"
        padding="12px 0 0"
      >
        {secondaryCtaLabel}
      </MjmlButton>
    ) : null}
  </>
);

interface Cta_CTAWithTopLargeImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

const Cta_CTAWithTopLargeImageSection = ({
  backgroundColor = "#fffffe",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#f8fafc",
  ctaHref = "https://example.com/",
  ctaLabel = "Activate & Save",
  heading = "Built for the journey ahead.",
  headingColor = "#030712",
  imageAlt = "",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/cta/cta-with-image-1.jpg",
  subtext = "You’re one step away from exploring our latest outdoor essentials. Confirm your email to complete your setup and get 10% off your first order.",
  textColor = "#4b5563",
}: Omit<Cta_CTAWithTopLargeImageProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
    <MjmlColumn padding="0">
      <MjmlImage
        alt={imageAlt}
        borderRadius="4px"
        padding="0"
        src={imageSrc}
        width="472px"
      />
      <MjmlSpacer height="24px" />
      <CTACopy
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        heading={heading}
        headingColor={headingColor}
        primaryButtonBackgroundColor={buttonBackgroundColor}
        primaryButtonTextColor={buttonTextColor}
        subtext={subtext}
        textColor={textColor}
      />
    </MjmlColumn>
  </MjmlSection>
);

const Cta_CTAWithTopLargeImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Cta_CTAWithTopLargeImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Built for the journey ahead"
    theme={theme}
  >
    <Cta_CTAWithTopLargeImageSection {...props} />
  </CTAEmailShell>
);

Cta_CTAWithTopLargeImage.PreviewProps = {
  theme: defaultTheme,
} satisfies Cta_CTAWithTopLargeImageProps;

const __Cta = Cta_CTAWithTopLargeImage;

export interface TopImageCallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
  image?: {
    src: string;
    alt?: string;
  };
}

export const TopImageCallToAction = ({
  theme,
  heading,
  description,
  action,
  image,
}: TopImageCallToActionProps) => (
  <__Cta
    ctaHref={action?.href}
    ctaLabel={action?.label}
    heading={heading}
    imageAlt={image?.alt}
    imageSrc={image?.src}
    subtext={description}
    theme={theme}
  />
);

TopImageCallToAction.PreviewProps = {} satisfies TopImageCallToActionProps;
