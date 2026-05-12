/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterCenteredWithMenuAndSocialsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterCenteredWithMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  link1?: string;
  link1Href?: string;
  link2?: string;
  link2Href?: string;
  link3?: string;
  link3Href?: string;
  link4?: string;
  link4Href?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  copyright?: string;
  variant?: FooterCenteredWithMenuAndSocialsVariant;
}

export const FooterCenteredWithMenuAndSocialsSection = ({
  logoSrc = "https://via.placeholder.com/100x25",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  socialSrc1 = "https://via.placeholder.com/20x20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/20x20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/20x20",
  socialAlt3 = "LinkedIn",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: Omit<FooterCenteredWithMenuAndSocialsProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Img
          src={logoSrc}
          alt={logoAlt}
          width="100"
          height="25"
          className="mx-auto mb-6 h-auto object-contain"
        />
        <Row className="mb-6">
          <Column className="text-center">
            <a
              href={link1Href}
              className="mx-3 text-sm text-foreground-muted no-underline"
            >
              {link1}
            </a>
            <a
              href={link2Href}
              className="mx-3 text-sm text-foreground-muted no-underline"
            >
              {link2}
            </a>
            <a
              href={link3Href}
              className="mx-3 text-sm text-foreground-muted no-underline"
            >
              {link3}
            </a>
            <a
              href={link4Href}
              className="mx-3 text-sm text-foreground-muted no-underline"
            >
              {link4}
            </a>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column className="text-center">
            <Img
              src={socialSrc1}
              alt={socialAlt1}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
            <Img
              src={socialSrc2}
              alt={socialAlt2}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
            <Img
              src={socialSrc3}
              alt={socialAlt3}
              width="20"
              height="20"
              className="inline-block mx-2 h-auto object-contain"
            />
          </Column>
        </Row>
        <Text className="m-0 text-xs text-foreground-subtle">{copyright}</Text>
      </Section>
    </Section>
  );
};

export const FooterCenteredWithMenuAndSocials = ({
  theme = defaultTheme,
  logoSrc = "https://via.placeholder.com/100x25",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  socialSrc1 = "https://via.placeholder.com/20x20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://via.placeholder.com/20x20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://via.placeholder.com/20x20",
  socialAlt3 = "LinkedIn",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterCenteredWithMenuAndSocialsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterCenteredWithMenuAndSocialsSection
          copyright={copyright}
          link1={link1}
          link1Href={link1Href}
          link2={link2}
          link2Href={link2Href}
          link3={link3}
          link3Href={link3Href}
          link4={link4}
          link4Href={link4Href}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Contact",
  link4Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://via.placeholder.com/100x25",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1: "https://via.placeholder.com/20x20",
  socialSrc2: "https://via.placeholder.com/20x20",
  socialSrc3: "https://via.placeholder.com/20x20",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterCenteredWithMenuAndSocialsProps;
