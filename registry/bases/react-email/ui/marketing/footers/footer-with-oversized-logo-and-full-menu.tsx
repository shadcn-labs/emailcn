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

export type FooterWithOversizedLogoAndFullMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithOversizedLogoAndFullMenuProps {
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
  link5?: string;
  link5Href?: string;
  copyright?: string;
  variant?: FooterWithOversizedLogoAndFullMenuVariant;
}

export const FooterWithOversizedLogoAndFullMenuSection = ({
  logoSrc = "https://via.placeholder.com/160x40",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Blog",
  link4Href = "#",
  link5 = "Contact",
  link5Href = "#",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: Omit<FooterWithOversizedLogoAndFullMenuProps, "theme">) => {
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
          width="160"
          height="40"
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
            <a
              href={link5Href}
              className="mx-3 text-sm text-foreground-muted no-underline"
            >
              {link5}
            </a>
          </Column>
        </Row>
        <Text className="m-0 text-xs text-foreground-subtle">{copyright}</Text>
      </Section>
    </Section>
  );
};

export const FooterWithOversizedLogoAndFullMenu = ({
  theme = defaultTheme,
  logoSrc = "https://via.placeholder.com/160x40",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Blog",
  link4Href = "#",
  link5 = "Contact",
  link5Href = "#",
  copyright = "© 2024 Acme Inc.",
  variant = "default",
}: FooterWithOversizedLogoAndFullMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWithOversizedLogoAndFullMenuSection
          copyright={copyright}
          link1={link1}
          link1Href={link1Href}
          link2={link2}
          link2Href={link2Href}
          link3={link3}
          link3Href={link3Href}
          link4={link4}
          link4Href={link4Href}
          link5={link5}
          link5Href={link5Href}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FooterWithOversizedLogoAndFullMenu.PreviewProps = {
  copyright: "© 2024 Acme Inc.",
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Blog",
  link4Href: "#",
  link5: "Contact",
  link5Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://via.placeholder.com/160x40",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithOversizedLogoAndFullMenuProps;
