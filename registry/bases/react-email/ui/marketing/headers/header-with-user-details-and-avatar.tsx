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

export type HeaderWithUserDetailsAndAvatarVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsAndAvatarProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsAndAvatarVariant;
}

export const HeaderWithUserDetailsAndAvatarSection = ({
  logoSrc = "https://static.photos/business/120x30/2",
  logoAlt = "Logo",
  avatarSrc = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-user-details-and-avatar-tsx-2&size=40",
  avatarAlt = "",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: Omit<HeaderWithUserDetailsAndAvatarProps, "theme">) => {
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
            <Row className="inline-block">
              <Column className="pr-3 align-middle">
                <Img
                  src={avatarSrc}
                  alt={avatarAlt}
                  width="40"
                  height="40"
                  className="rounded-full object-cover"
                />
              </Column>
              <Column className="align-middle">
                <Text className="m-0 text-sm font-medium text-foreground">
                  {userName}
                </Text>
                <Text className="m-0 text-xs text-foreground-muted">
                  {userEmail}
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HeaderWithUserDetailsAndAvatar = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/4",
  logoAlt = "Logo",
  avatarSrc = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-user-details-and-avatar-tsx-4&size=40",
  avatarAlt = "",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsAndAvatarProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Header</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HeaderWithUserDetailsAndAvatarSection
          avatarAlt={avatarAlt}
          avatarSrc={avatarSrc}
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

HeaderWithUserDetailsAndAvatar.PreviewProps = {
  avatarAlt: "Avatar",
  avatarSrc:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-react-email-ui-marketing-headers-header-with-user-details-and-avatar-tsx-5&size=40",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/7",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsAndAvatarProps;
