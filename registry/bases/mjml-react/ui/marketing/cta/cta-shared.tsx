import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const CTAEmailShell = ({
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

export const CTACopy = ({
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
