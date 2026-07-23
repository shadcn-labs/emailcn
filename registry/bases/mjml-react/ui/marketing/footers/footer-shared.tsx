import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlPreview,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export interface NativeFooterLink {
  href: string;
  label: string;
}

export interface NativeFooterSocial extends NativeFooterLink {
  iconSrc: string;
}

export const FooterEmailShell = ({
  children,
  pageBackgroundColor,
  preview = "Footer",
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview?: string;
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

export const FooterLogo = ({
  align = "left",
  alt,
  href,
  padding = "0",
  src,
  width = "48px",
}: {
  align?: "center" | "left" | "right";
  alt: string;
  href: string;
  padding?: string;
  src: string;
  width?: string;
}) => (
  <MjmlImage
    align={align}
    alt={alt}
    href={href}
    padding={padding}
    src={src}
    width={width}
  />
);

export const FooterCopy = ({
  align = "left",
  children,
  color,
  fontSize = "14px",
  fontWeight = "400",
  lineHeight = "22px",
  padding = "0",
}: {
  align?: "center" | "left" | "right";
  children: ReactNode;
  color: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  padding?: string;
}) => (
  <MjmlText
    align={align}
    color={color}
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    padding={padding}
  >
    {children}
  </MjmlText>
);

export const FooterMenu = ({
  align = "left",
  links,
  textColor,
}: {
  align?: "center" | "left" | "right";
  links: NativeFooterLink[];
  textColor: string;
}) => (
  <MjmlNavbar align={align} padding="0">
    {links.map((link) => (
      <MjmlNavbarLink
        color={textColor}
        fontFamily={fontFamily}
        fontSize="14px"
        href={link.href}
        key={`${link.label}-${link.href}`}
        padding="4px 10px"
      >
        {link.label}
      </MjmlNavbarLink>
    ))}
  </MjmlNavbar>
);

export const FooterVerticalMenu = ({
  align = "left",
  heading,
  headingColor,
  links,
  textColor,
}: {
  align?: "center" | "left" | "right";
  heading: string;
  headingColor: string;
  links: NativeFooterLink[];
  textColor: string;
}) => (
  <>
    <FooterCopy
      align={align}
      color={headingColor}
      fontWeight="600"
      padding="0 0 8px"
    >
      {heading}
    </FooterCopy>
    {links.map((link) => (
      <MjmlButton
        align={align}
        backgroundColor="transparent"
        color={textColor}
        fontFamily={fontFamily}
        fontSize="14px"
        href={link.href}
        innerPadding="0"
        key={`${link.label}-${link.href}`}
        lineHeight="24px"
        padding="2px 0"
      >
        {link.label}
      </MjmlButton>
    ))}
  </>
);

export const FooterSocials = ({
  align = "left",
  socials,
}: {
  align?: "center" | "left" | "right";
  socials: NativeFooterSocial[];
}) => (
  <MjmlSocial align={align} iconSize="24px" mode="horizontal" padding="0">
    {socials.map((social) => (
      <MjmlSocialElement
        alt={social.label}
        href={social.href}
        key={`${social.label}-${social.href}`}
        name={social.label.toLowerCase()}
        padding="4px"
        src={social.iconSrc}
      />
    ))}
  </MjmlSocial>
);

export const FooterLegal = ({
  align = "left",
  copyright,
  mutedTextColor,
  unsubscribeHref,
}: {
  align?: "center" | "left" | "right";
  copyright: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}) => (
  <>
    <FooterCopy align={align} color={mutedTextColor}>
      {copyright}
    </FooterCopy>
    <MjmlButton
      align={align}
      backgroundColor="transparent"
      color={mutedTextColor}
      fontFamily={fontFamily}
      fontSize="12px"
      href={unsubscribeHref}
      innerPadding="0"
      lineHeight="20px"
      padding="4px 0 0"
      textDecoration="underline"
    >
      Unsubscribe
    </MjmlButton>
  </>
);

export const FooterCta = ({
  align = "left",
  backgroundColor,
  color,
  href,
  label,
  padding = "20px 0 0",
}: {
  align?: "center" | "left" | "right";
  backgroundColor: string;
  color: string;
  href: string;
  label: string;
  padding?: string;
}) => (
  <MjmlButton
    align={align}
    backgroundColor={backgroundColor}
    borderRadius="8px"
    color={color}
    fontFamily={fontFamily}
    fontSize="15px"
    fontWeight="600"
    href={href}
    innerPadding="12px 22px"
    padding={padding}
  >
    {label}
  </MjmlButton>
);
