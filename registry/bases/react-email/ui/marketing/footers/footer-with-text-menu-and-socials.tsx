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

export type FooterWithTextMenuAndSocialsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithTextMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
  link1?: string;
  link1Href?: string;
  link2?: string;
  link2Href?: string;
  link3?: string;
  link3Href?: string;
  socialSrc1?: string;
  socialAlt1?: string;
  socialSrc2?: string;
  socialAlt2?: string;
  socialSrc3?: string;
  socialAlt3?: string;
  variant?: FooterWithTextMenuAndSocialsVariant;
}

export const FooterWithTextMenuAndSocialsSection = ({
  logoSrc = "https://static.photos/business/100x25/2",
  logoAlt = "Logo",
  text = "© 2024 Acme Inc. All rights reserved.",
  link1 = "Privacy",
  link1Href = "#",
  link2 = "Terms",
  link2Href = "#",
  link3 = "Contact",
  link3Href = "#",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-2&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-3&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-4&size=20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: Omit<FooterWithTextMenuAndSocialsProps, "theme">) => {
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
          className="mx-auto mb-4 h-auto object-contain"
        />
        <Row className="mb-4">
          <Column className="text-center">
            <a
              href={link1Href}
              className="mx-2 text-xs text-foreground-muted no-underline"
            >
              {link1}
            </a>
            <a
              href={link2Href}
              className="mx-2 text-xs text-foreground-muted no-underline"
            >
              {link2}
            </a>
            <a
              href={link3Href}
              className="mx-2 text-xs text-foreground-muted no-underline"
            >
              {link3}
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
        <Text className="m-0 text-xs text-foreground-subtle">{text}</Text>
      </Section>
    </Section>
  );
};

export const FooterWithTextMenuAndSocials = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/100x25/6",
  logoAlt = "Logo",
  text = "© 2024 Acme Inc. All rights reserved.",
  link1 = "Privacy",
  link1Href = "#",
  link2 = "Terms",
  link2Href = "#",
  link3 = "Contact",
  link3Href = "#",
  socialSrc1 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-6&size=20",
  socialAlt1 = "Twitter",
  socialSrc2 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-7&size=20",
  socialAlt2 = "Facebook",
  socialSrc3 = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-8&size=20",
  socialAlt3 = "LinkedIn",
  variant = "default",
}: FooterWithTextMenuAndSocialsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWithTextMenuAndSocialsSection
          link1={link1}
          link1Href={link1Href}
          link2={link2}
          link2Href={link2Href}
          link3={link3}
          link3Href={link3Href}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          socialAlt1={socialAlt1}
          socialAlt2={socialAlt2}
          socialAlt3={socialAlt3}
          socialSrc1={socialSrc1}
          socialSrc2={socialSrc2}
          socialSrc3={socialSrc3}
          text={text}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FooterWithTextMenuAndSocials.PreviewProps = {
  link1: "Privacy",
  link1Href: "#",
  link2: "Terms",
  link2Href: "#",
  link3: "Contact",
  link3Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/100x25/10",
  socialAlt1: "Twitter",
  socialAlt2: "Facebook",
  socialAlt3: "LinkedIn",
  socialSrc1:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-10&size=20",
  socialSrc2:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-11&size=20",
  socialSrc3:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-footers-footer-with-text-menu-and-socials-tsx-12&size=20",
  text: "© 2024 Acme Inc. All rights reserved.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithTextMenuAndSocialsProps;
