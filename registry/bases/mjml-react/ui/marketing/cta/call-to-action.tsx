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
  MjmlSection,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/theme-default";

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

type CtaBundle_CTAWithTitleAndActionLeadVariant =
  | "title-and-lead"
  | "secondary-button"
  | "minimal";

interface CtaBundle_CTAWithTitleAndActionLeadProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  signoff?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonBackgroundColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  variant?: CtaBundle_CTAWithTitleAndActionLeadVariant;
}

const CtaBundle_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CtaBundle_CTAWithTitleAndActionLeadSection = (
  props: Omit<CtaBundle_CTAWithTitleAndActionLeadProps, "theme">
) => {
  const {
    backgroundColor,
    ctaHref,
    ctaLabel,
    heading,
    headingColor,
    primaryButtonBackgroundColor,
    primaryButtonTextColor,
    secondaryButtonBorderColor,
    secondaryButtonTextColor,
    secondaryCtaHref,
    secondaryCtaLabel,
    signoff,
    subtext,
    textColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    ctaHref: "https://example.com/",
    heading: "Confirm your email",
    headingColor: "#030712",
    primaryButtonBackgroundColor: "#4f46e5",
    primaryButtonTextColor: "#f8fafc",
    secondaryButtonBorderColor: "#d1d5db",
    secondaryButtonTextColor: "#4b5563",
    secondaryCtaHref: "https://example.com/",
    secondaryCtaLabel: "Learn more",
    signoff: "Thank you, the emailcn Team",
    subtext:
      "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
    textColor: "#4b5563",
    variant: "title-and-lead",
    ...props,
  };
  let defaultCtaLabel = "Shop now";
  if (variant === "title-and-lead") {
    defaultCtaLabel = "Activate account";
  } else if (variant === "minimal") {
    defaultCtaLabel = "Shop now →";
  }
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0">
        <CTACopy
          align={variant === "title-and-lead" ? "left" : "center"}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel ?? defaultCtaLabel}
          heading={heading}
          headingColor={headingColor}
          primaryButtonBackgroundColor={primaryButtonBackgroundColor}
          primaryButtonTextColor={primaryButtonTextColor}
          secondaryButtonBorderColor={secondaryButtonBorderColor}
          secondaryButtonTextColor={secondaryButtonTextColor}
          secondaryCtaHref={secondaryCtaHref}
          secondaryCtaLabel={
            variant === "secondary-button" ? secondaryCtaLabel : undefined
          }
          subtext={subtext}
          textColor={textColor}
        />
        {variant === "title-and-lead" ? (
          <MjmlText
            color={textColor}
            fontFamily={CtaBundle_fontFamily}
            fontSize="14px"
            lineHeight="20px"
            padding="28px 0 0"
          >
            {signoff}
          </MjmlText>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

const CtaBundle_CTAWithTitleAndActionLead = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CtaBundle_CTAWithTitleAndActionLeadProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Confirm your email"
    theme={theme}
  >
    <CtaBundle_CTAWithTitleAndActionLeadSection {...props} />
  </CTAEmailShell>
);

CtaBundle_CTAWithTitleAndActionLead.PreviewProps = {
  theme: defaultTheme,
  variant: "title-and-lead",
} satisfies CtaBundle_CTAWithTitleAndActionLeadProps;

const __CtaBundle = {
  Component: CtaBundle_CTAWithTitleAndActionLead,
  __CallToActionSection: CtaBundle_CTAWithTitleAndActionLeadSection,
};

const __Cta = __CtaBundle.Component;

const { __CallToActionSection } = __CtaBundle;

export interface CallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  signoff?: string;
  actions?: {
    href: string;
    label: string;
  }[];
}

export const CallToAction = ({
  theme,
  heading,
  description,
  signoff,
  actions,
}: CallToActionProps) => (
  <__Cta
    ctaHref={actions?.[0]?.href}
    ctaLabel={actions?.[0]?.label}
    heading={heading}
    secondaryCtaHref={actions?.[1]?.href}
    secondaryCtaLabel={actions?.[1]?.label}
    signoff={signoff}
    subtext={description}
    theme={theme}
    variant={(() => {
      if (actions && actions.length > 1) {
        return "secondary-button";
      }
      if (signoff) {
        return "title-and-lead";
      }
      return "minimal";
    })()}
  />
);

export const CallToActionSection = __CallToActionSection;

CallToAction.PreviewProps = {} satisfies CallToActionProps;
