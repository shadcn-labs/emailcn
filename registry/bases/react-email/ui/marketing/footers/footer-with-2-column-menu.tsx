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

export type FooterWith2ColumnMenuVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWith2ColumnMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  col1Heading?: string;
  col1Link1?: string;
  col1Link1Href?: string;
  col1Link2?: string;
  col1Link2Href?: string;
  col1Link3?: string;
  col1Link3Href?: string;
  col2Heading?: string;
  col2Link1?: string;
  col2Link1Href?: string;
  col2Link2?: string;
  col2Link2Href?: string;
  col2Link3?: string;
  col2Link3Href?: string;
  variant?: FooterWith2ColumnMenuVariant;
}

export const FooterWith2ColumnMenuSection = ({
  logoSrc = "https://via.placeholder.com/100x25",
  logoAlt = "Logo",
  col1Heading = "Product",
  col1Link1 = "Features",
  col1Link1Href = "#",
  col1Link2 = "Pricing",
  col1Link2Href = "#",
  col1Link3 = "FAQ",
  col1Link3Href = "#",
  col2Heading = "Company",
  col2Link1 = "About",
  col2Link1Href = "#",
  col2Link2 = "Blog",
  col2Link2Href = "#",
  col2Link3 = "Contact",
  col2Link3Href = "#",
  variant = "default",
}: Omit<FooterWith2ColumnMenuProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Section className="mb-6 text-center">
          <Img
            src={logoSrc}
            alt={logoAlt}
            width="100"
            height="25"
            className="mx-auto h-auto object-contain"
          />
        </Section>
        <Row>
          <Column className="w-1/2 text-center align-top">
            <Text className="m-0 mb-3 text-sm font-medium text-foreground">
              {col1Heading}
            </Text>
            <Text className="m-0 mb-2 text-xs text-foreground-muted">
              <a
                href={col1Link1Href}
                className="text-foreground-muted no-underline"
              >
                {col1Link1}
              </a>
            </Text>
            <Text className="m-0 mb-2 text-xs text-foreground-muted">
              <a
                href={col1Link2Href}
                className="text-foreground-muted no-underline"
              >
                {col1Link2}
              </a>
            </Text>
            <Text className="m-0 text-xs text-foreground-muted">
              <a
                href={col1Link3Href}
                className="text-foreground-muted no-underline"
              >
                {col1Link3}
              </a>
            </Text>
          </Column>
          <Column className="w-1/2 text-center align-top">
            <Text className="m-0 mb-3 text-sm font-medium text-foreground">
              {col2Heading}
            </Text>
            <Text className="m-0 mb-2 text-xs text-foreground-muted">
              <a
                href={col2Link1Href}
                className="text-foreground-muted no-underline"
              >
                {col2Link1}
              </a>
            </Text>
            <Text className="m-0 mb-2 text-xs text-foreground-muted">
              <a
                href={col2Link2Href}
                className="text-foreground-muted no-underline"
              >
                {col2Link2}
              </a>
            </Text>
            <Text className="m-0 text-xs text-foreground-muted">
              <a
                href={col2Link3Href}
                className="text-foreground-muted no-underline"
              >
                {col2Link3}
              </a>
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const FooterWith2ColumnMenu = ({
  theme = defaultTheme,
  logoSrc = "https://via.placeholder.com/100x25",
  logoAlt = "Logo",
  col1Heading = "Product",
  col1Link1 = "Features",
  col1Link1Href = "#",
  col1Link2 = "Pricing",
  col1Link2Href = "#",
  col1Link3 = "FAQ",
  col1Link3Href = "#",
  col2Heading = "Company",
  col2Link1 = "About",
  col2Link1Href = "#",
  col2Link2 = "Blog",
  col2Link2Href = "#",
  col2Link3 = "Contact",
  col2Link3Href = "#",
  variant = "default",
}: FooterWith2ColumnMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FooterWith2ColumnMenuSection
          col1Heading={col1Heading}
          col1Link1={col1Link1}
          col1Link1Href={col1Link1Href}
          col1Link2={col1Link2}
          col1Link2Href={col1Link2Href}
          col1Link3={col1Link3}
          col1Link3Href={col1Link3Href}
          col2Heading={col2Heading}
          col2Link1={col2Link1}
          col2Link1Href={col2Link1Href}
          col2Link2={col2Link2}
          col2Link2Href={col2Link2Href}
          col2Link3={col2Link3}
          col2Link3Href={col2Link3Href}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FooterWith2ColumnMenu.PreviewProps = {
  col1Heading: "Product",
  col1Link1: "Features",
  col1Link1Href: "#",
  col1Link2: "Pricing",
  col1Link2Href: "#",
  col1Link3: "FAQ",
  col1Link3Href: "#",
  col2Heading: "Company",
  col2Link1: "About",
  col2Link1Href: "#",
  col2Link2: "Blog",
  col2Link2Href: "#",
  col2Link3: "Contact",
  col2Link3Href: "#",
  logoAlt: "Logo",
  logoSrc: "https://via.placeholder.com/100x25",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWith2ColumnMenuProps;
