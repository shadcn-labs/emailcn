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

export type HeaderWithUserDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithUserDetailsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  userName?: string;
  userEmail?: string;
  variant?: HeaderWithUserDetailsVariant;
}

export const HeaderWithUserDetails = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  userName = "John Doe",
  userEmail = "john@example.com",
  variant = "default",
}: HeaderWithUserDetailsProps) => {
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
                  textAlign: "right",
                  verticalAlign: "middle",
                  width: "50%",
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

HeaderWithUserDetails.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  userEmail: "john@example.com",
  userName: "John Doe",
  variant: "default",
} satisfies HeaderWithUserDetailsProps;
