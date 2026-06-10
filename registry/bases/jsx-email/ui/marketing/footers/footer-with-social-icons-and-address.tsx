/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterSocialVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterSocialProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  socialLinks?: { label: string; href: string }[];
  variant?: FooterSocialVariant;
}

const FooterSocialSection = ({
  companyName,
  socialLinks,
  theme,
  variant,
}: {
  companyName: string;
  socialLinks: FooterSocialProps["socialLinks"];
  theme: EmailThemeTokens;
  variant: FooterSocialVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        {socialLinks && socialLinks.length > 0 ? (
          <Text
            style={{
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: "center",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: theme.colorTextMuted,
                  margin: "0 8px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </Text>
        ) : null}
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </Text>
      </Column>
    </Row>
  </Section>
);

export const FooterWithSocialIconsAndAddress = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  socialLinks = [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://github.com", label: "GitHub" },
  ],
  variant = "default",
}: FooterSocialProps) => (
  <Html>
    <Head />
    <Preview>footer social</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <FooterSocialSection
            companyName={companyName}
            socialLinks={socialLinks}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterWithSocialIconsAndAddress.PreviewProps = {
  companyName: "Acme Inc.",
  socialLinks: [
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FooterSocialProps;
