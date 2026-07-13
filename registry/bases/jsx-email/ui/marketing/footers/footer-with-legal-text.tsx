/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithLegalTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterWithLegalTextProps {
  theme?: EmailThemeTokens;
  legalText?: string;
  variant?: FooterWithLegalTextVariant;
}

export const FooterWithLegalText = ({
  theme = defaultTheme,
  legalText = "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: FooterWithLegalTextProps) => {
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
      <Preview>Footer</Preview>
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
            padding: "32px 0",
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
            <Hr
              style={{
                borderColor: theme.colorBorder,
                margin: "0 0 24px",
              }}
            />
            <Text
              style={{
                color: theme.colorTextSubtle,
                fontSize: theme.fontSizeSm,
                lineHeight: theme.lineHeightBase,
                margin: 0,
                textAlign: "center",
              }}
            >
              {legalText}
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

FooterWithLegalText.PreviewProps = {
  legalText:
    "© 2024 Acme Inc. All rights reserved. This email was sent to you because you signed up for our newsletter.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterWithLegalTextProps;
