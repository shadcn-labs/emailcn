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
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderWithLogoAndBadgeVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndBadgeProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  badgeText?: string;
  variant?: HeaderWithLogoAndBadgeVariant;
}

export const HeaderWithLogoAndBadge = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  badgeText = "New",
  variant = "default",
}: HeaderWithLogoAndBadgeProps) => {
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
                {badgeText ? (
                  <span
                    style={{
                      backgroundColor: theme.colorPrimary,
                      borderRadius: "9999px",
                      color: theme.colorPrimaryForeground ?? "#ffffff",
                      display: "inline-block",
                      fontSize: theme.fontSizeSm,
                      fontWeight: theme.fontWeightMedium,
                      padding: "4px 12px",
                    }}
                  >
                    {badgeText}
                  </span>
                ) : null}
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

HeaderWithLogoAndBadge.PreviewProps = {
  badgeText: "New",
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndBadgeProps;
