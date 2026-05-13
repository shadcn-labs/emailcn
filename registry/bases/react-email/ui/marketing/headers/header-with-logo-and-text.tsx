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

export type HeaderWithLogoAndTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndTextProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
  variant?: HeaderWithLogoAndTextVariant;
}

export const HeaderWithLogoAndTextSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  text = "Welcome to our newsletter",
  variant = "default",
}: Omit<HeaderWithLogoAndTextProps, "theme">) => {
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
          <Column className="w-1/3 align-middle">
            <Img
              src={logoSrc}
              alt={logoAlt}
              width="120"
              height="30"
              className="h-auto object-contain"
            />
          </Column>
          <Column className="w-2/3 align-middle text-right">
            <Text className="m-0 text-sm text-foreground-muted">{text}</Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithLogoAndText = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  text = "Welcome to our newsletter",
  variant = "default",
}: HeaderWithLogoAndTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoAndTextSection
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          text={text}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogoAndText.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  text: "Welcome to our newsletter",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndTextProps;
