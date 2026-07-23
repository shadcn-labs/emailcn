import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CardCouponsVariant =
  | "with-name"
  | "with-pattern"
  | "with-overlay"
  | "with-background-image"
  | "background-image-header";

export interface CardCouponsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  recipient?: string;
  code?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  codeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CardCouponsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const backgrounds: Partial<Record<CardCouponsVariant, string>> = {
  "background-image-header":
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-3.jpg",
  "with-background-image":
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-2.jpg",
  "with-overlay":
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-1.jpg",
  "with-pattern":
    "https://emailcn.vercel.app/api/email-assets/coupons/pattern.png",
};

export const CardCouponsSection = (props: Omit<CardCouponsProps, "theme">) => {
  const {
    heading,
    recipient,
    code,
    description,
    logoSrc,
    logoAlt,
    backgroundImageSrc,
    buttonLabel,
    buttonHref,
    backgroundColor,
    cardBackgroundColor,
    codeBackgroundColor,
    headingColor,
    textColor,
    mutedTextColor,
    buttonBackgroundColor,
    buttonColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    buttonBackgroundColor: "#4f46e5",
    buttonColor: "#fffffe",
    buttonHref: "https://example.com",
    buttonLabel: "Shop now",
    cardBackgroundColor: "#030712",
    code: "WINTER20OFF",
    codeBackgroundColor: "#f3f4f6",
    description:
      "Use code: WINTER20OFF at checkout, or click the link below to automatically apply the discount to your order.",
    headingColor: "#fffffe",
    logoAlt: "Brand",
    mutedTextColor: "#9ca3af",
    recipient: "Jenna Adams",
    textColor: "#4b5563",
    variant: "with-overlay" as CardCouponsVariant,
    ...props,
  };

  const resolvedHeading =
    heading ??
    (variant === "with-background-image" || variant === "with-overlay"
      ? "An extra 20% OFF"
      : "Just for you - 20% OFF");
  const resolvedLogo =
    logoSrc ??
    (variant === "with-name"
      ? "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
      : "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-light-lg.png");
  const showDescription = [
    "with-name",
    "with-pattern",
    "with-overlay",
  ].includes(variant);

  return (
    <>
      <MjmlSection
        backgroundColor={cardBackgroundColor}
        backgroundUrl={backgroundImageSrc ?? backgrounds[variant]}
        borderRadius="8px"
        padding="44px 64px"
      >
        <MjmlColumn padding="0" width="400px">
          <MjmlImage
            alt={logoAlt}
            padding="0"
            src={resolvedLogo}
            width="104px"
          />
          <MjmlSpacer height="32px" />
          {variant === "with-name" ? (
            <MjmlText
              align="center"
              color={mutedTextColor}
              fontFamily={fontFamily}
              fontSize="16px"
              lineHeight="24px"
              padding="0"
            >
              {recipient}
            </MjmlText>
          ) : null}
          <MjmlText
            align="center"
            color={headingColor}
            fontFamily={fontFamily}
            fontSize="28px"
            fontWeight="700"
            lineHeight="36px"
            padding="16px 0 0"
          >
            {resolvedHeading}
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlText
            align="center"
            color="#030712"
            containerBackgroundColor={codeBackgroundColor}
            fontFamily={fontFamily}
            fontSize="18px"
            fontWeight="600"
            lineHeight="24px"
            padding="12px 18px"
          >
            {code}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="24px 64px 44px">
        <MjmlColumn padding="0">
          {showDescription ? (
            <>
              <MjmlText
                align="center"
                color={textColor}
                fontFamily={fontFamily}
                fontSize="16px"
                lineHeight="24px"
                padding="0"
              >
                {description}
              </MjmlText>
              <MjmlSpacer height="44px" />
            </>
          ) : null}
          <MjmlButton
            backgroundColor={buttonBackgroundColor}
            borderRadius="8px"
            color={buttonColor}
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="500"
            href={buttonHref}
            innerPadding="14px 20px"
            lineHeight="16px"
            padding="0"
          >
            {buttonLabel} →
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

export const CardCoupons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "with-overlay",
  ...props
}: CardCouponsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>An extra 20% OFF</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <CardCouponsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CardCoupons.PreviewProps = {
  theme: defaultTheme,
  variant: "with-overlay",
} satisfies CardCouponsProps;
