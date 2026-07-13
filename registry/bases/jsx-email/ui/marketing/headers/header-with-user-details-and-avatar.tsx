/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderWithUserDetailsAndAvatarVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsAndAvatarProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsAndAvatarVariant;
}

export const HeaderWithUserDetailsAndAvatar = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/4",
  logoAlt = "Logo",
  avatarSrc = "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-user-details-and-avatar-tsx-4&size=40",
  avatarAlt = "",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsAndAvatarProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  return (
    <Html>
      <Head />
      <Preview>Header</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Section
          style={{
            backgroundColor: theme.colorBackground,
            padding: "24px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              transform: unskew,
            }}
          >
            <Row>
              <Column style={{ verticalAlign: "middle", width: "50%" }}>
                <Img
                  src={logoSrc}
                  alt={logoAlt}
                  width="120"
                  height="30"
                  style={{ height: "auto", objectFit: "contain" }}
                />
              </Column>
              <Column
                style={{
                  paddingRight: "12px",
                  textAlign: "right",
                  verticalAlign: "middle",
                  width: "12%",
                }}
              >
                <Img
                  src={avatarSrc}
                  alt={avatarAlt}
                  width="40"
                  height="40"
                  style={{ borderRadius: "9999px", objectFit: "cover" }}
                />
              </Column>
              <Column
                style={{
                  textAlign: "left",
                  verticalAlign: "middle",
                  width: "38%",
                }}
              >
                <Text
                  style={{
                    color: theme.colorText,
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightMedium,
                    margin: 0,
                  }}
                >
                  {userName}
                </Text>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontSize: theme.fontSizeSm,
                    margin: 0,
                  }}
                >
                  {userEmail}
                </Text>
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

HeaderWithUserDetailsAndAvatar.PreviewProps = {
  avatarAlt: "",
  avatarSrc:
    "https://api.dicebear.com/9.x/initials/png?seed=glyph-registry-bases-jsx-email-ui-marketing-headers-header-with-user-details-and-avatar-tsx-8&size=40",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/8",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsAndAvatarProps;
