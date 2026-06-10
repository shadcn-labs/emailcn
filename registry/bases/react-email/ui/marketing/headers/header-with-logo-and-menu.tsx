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

export type HeaderWithLogoAndMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndMenuProps {
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
  variant?: HeaderWithLogoAndMenuVariant;
}

export const HeaderWithLogoAndMenuSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  variant = "default",
}: Omit<HeaderWithLogoAndMenuProps, "theme">) => {
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
    <Section className={`bg-background py-6 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Row>
          <Column className="w-1/2 align-middle">
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="120"
              height="30"
              className="h-auto object-contain"
            />
          </Column>
          <Column className="w-1/2 align-middle text-right">
            <Text className="m-0 inline-block mr-4 text-sm text-foreground-muted no-underline">
              <a
                href={link1Href}
                className="text-foreground-muted no-underline"
              >
                {link1}
              </a>
            </Text>
            <Text className="m-0 inline-block mr-4 text-sm text-foreground-muted no-underline">
              <a
                href={link2Href}
                className="text-foreground-muted no-underline"
              >
                {link2}
              </a>
            </Text>
            <Text className="m-0 inline-block mr-4 text-sm text-foreground-muted no-underline">
              <a
                href={link3Href}
                className="text-foreground-muted no-underline"
              >
                {link3}
              </a>
            </Text>
            <Text className="m-0 inline-block text-sm text-foreground-muted no-underline">
              <a
                href={link4Href}
                className="text-foreground-muted no-underline"
              >
                {link4}
              </a>
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithLogoAndMenu = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  link1 = "Features",
  link1Href = "#",
  link2 = "Pricing",
  link2Href = "#",
  link3 = "About",
  link3Href = "#",
  link4 = "Contact",
  link4Href = "#",
  variant = "default",
}: HeaderWithLogoAndMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoAndMenuSection
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
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogoAndMenu.PreviewProps = {
  link1: "Features",
  link1Href: "#",
  link2: "Pricing",
  link2Href: "#",
  link3: "About",
  link3Href: "#",
  link4: "Contact",
  link4Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndMenuProps;
