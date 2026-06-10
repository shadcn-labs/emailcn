/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Html, Img, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeaderWithLogoVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  variant?: HeaderWithLogoVariant;
}

export const HeaderWithLogoSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  variant = "default",
}: Omit<HeaderWithLogoProps, "theme">) => {
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
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        <Img
          src={logoSrc}
          alt={logoAlt}
          width="120"
          height="30"
          className="mx-auto h-auto object-contain"
        />
      </Section>
    </Section>
  );
};

export const HeaderWithLogo = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  variant = "default",
}: HeaderWithLogoProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoSection
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogo.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoProps;
