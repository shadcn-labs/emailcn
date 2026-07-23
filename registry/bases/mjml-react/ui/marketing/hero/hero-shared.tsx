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
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const HeroEmailShell = ({
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

export const HeroCopy = ({
  align = "left",
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  description,
  descriptionColor,
  eyebrow,
  heading,
  logoAlt,
  logoHref,
  logoSrc,
  subheading,
  textColor,
}: {
  align?: "center" | "left" | "right";
  buttonBackgroundColor: string;
  buttonTextColor: string;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  descriptionColor?: string;
  eyebrow: string;
  heading: string;
  logoAlt?: string;
  logoHref?: string;
  logoSrc?: string;
  subheading: string;
  textColor: string;
}) => (
  <>
    {logoSrc ? (
      <MjmlImage
        align={align}
        alt={logoAlt}
        href={logoHref}
        padding="0 0 32px"
        src={logoSrc}
        width="165px"
      />
    ) : null}
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      lineHeight="24px"
      padding="0"
      textTransform="uppercase"
    >
      {eyebrow}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="48px"
      fontWeight="600"
      lineHeight="52px"
      padding="8px 0 0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="20px"
      fontWeight="500"
      lineHeight="28px"
      padding="8px 0 0"
    >
      {subheading}
    </MjmlText>
    <MjmlText
      align={align}
      color={descriptionColor ?? textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="20px 0 0"
    >
      {description}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor={buttonBackgroundColor}
      borderRadius="8px"
      color={buttonTextColor}
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
  </>
);

export const NativeBackgroundHero = ({
  align = "left",
  backgroundColor,
  backgroundImageSrc,
  buttonBackgroundColor,
  buttonTextColor,
  contentBackgroundColor,
  contentRight = false,
  ctaHref,
  ctaLabel,
  description,
  eyebrow,
  heading,
  logoAlt,
  logoHref,
  logoSrc,
  padding = "64px 44px",
  subheading,
  textColor,
}: {
  align?: "center" | "left" | "right";
  backgroundColor: string;
  backgroundImageSrc: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  contentBackgroundColor?: string;
  contentRight?: boolean;
  ctaHref: string;
  ctaLabel: string;
  description: string;
  eyebrow: string;
  heading: string;
  logoAlt?: string;
  logoHref?: string;
  logoSrc?: string;
  padding?: string;
  subheading: string;
  textColor: string;
}) => (
  <MjmlSection
    backgroundColor={backgroundColor}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundUrl={backgroundImageSrc}
    direction={contentRight ? "rtl" : "ltr"}
    padding={padding}
  >
    {contentRight ? (
      <MjmlColumn padding="0" width="34%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
    ) : null}
    <MjmlColumn
      backgroundColor={contentBackgroundColor}
      borderRadius={contentBackgroundColor ? "8px" : "0"}
      direction="ltr"
      padding={contentBackgroundColor ? "36px" : "0"}
      verticalAlign="middle"
      width="66%"
    >
      <HeroCopy
        align={align}
        buttonBackgroundColor={buttonBackgroundColor}
        buttonTextColor={buttonTextColor}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        description={description}
        eyebrow={eyebrow}
        heading={heading}
        logoAlt={logoAlt}
        logoHref={logoHref}
        logoSrc={logoSrc}
        subheading={subheading}
        textColor={textColor}
      />
    </MjmlColumn>
    {contentRight ? null : (
      <MjmlColumn padding="0" width="34%">
        <MjmlSpacer height="1px" />
      </MjmlColumn>
    )}
  </MjmlSection>
);
