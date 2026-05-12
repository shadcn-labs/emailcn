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

export type HeaderWithLogoAndBadgeVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndBadgeProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  badgeText?: string;
  variant?: HeaderWithLogoAndBadgeVariant;
}

export const HeaderWithLogoAndBadgeSection = ({
  logoSrc = "https://via.placeholder.com/120x30",
  logoAlt = "Logo",
  badgeText = "New",
  variant = "default",
}: Omit<HeaderWithLogoAndBadgeProps, "theme">) => {
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
            {badgeText ? (
              <Section className="inline-block rounded-full bg-primary px-3 py-1">
                <Text className="m-0 text-xs font-medium text-primary-fg">
                  {badgeText}
                </Text>
              </Section>
            ) : null}
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithLogoAndBadge = ({
  theme = defaultTheme,
  logoSrc = "https://via.placeholder.com/120x30",
  logoAlt = "Logo",
  badgeText = "New",
  variant = "default",
}: HeaderWithLogoAndBadgeProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithLogoAndBadgeSection
          badgeText={badgeText}
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithLogoAndBadge.PreviewProps = {
  badgeText: "New",
  logoAlt: "Logo",
  logoSrc: "https://via.placeholder.com/120x30",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndBadgeProps;
