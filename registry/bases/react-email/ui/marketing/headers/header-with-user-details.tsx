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

export type HeaderWithUserDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsVariant;
}

export const HeaderWithUserDetailsSection = ({
  logoSrc = "https://via.placeholder.com/120x30",
  logoAlt = "Logo",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: Omit<HeaderWithUserDetailsProps, "theme">) => {
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
            <Text className="m-0 text-sm font-medium text-foreground">
              {userName}
            </Text>
            <Text className="m-0 text-xs text-foreground-muted">
              {userEmail}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithUserDetails = ({
  theme = defaultTheme,
  logoSrc = "https://via.placeholder.com/120x30",
  logoAlt = "Logo",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithUserDetailsSection
          logoAlt={logoAlt}
          logoSrc={logoSrc}
          userEmail={userEmail}
          userName={userName}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HeaderWithUserDetails.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://via.placeholder.com/120x30",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsProps;
