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

export type FooterFullVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterFullProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
  variant?: FooterFullVariant;
}

const FooterFullSection = ({
  address,
  companyName,
  links,
  theme,
  unsubscribeHref,
  variant,
}: {
  address: string;
  companyName: string;
  links: FooterFullProps["links"];
  theme: EmailThemeTokens;
  unsubscribeHref: string;
  variant: FooterFullVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        {links && links.length > 0 ? (
          <Text
            style={{
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: "center",
            }}
          >
            {links.map((link, i) => (
              <span key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
                {i < links.length - 1 ? (
                  <span
                    style={{ color: theme.colorTextMuted, margin: "0 8px" }}
                  >
                    |
                  </span>
                ) : null}
              </span>
            ))}
          </Text>
        ) : null}
        {address ? (
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "8px",
              textAlign: "center",
            }}
          >
            {address}
          </Text>
        ) : null}
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </Text>
        {unsubscribeHref ? (
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              textAlign: "center",
            }}
          >
            <a href={unsubscribeHref} style={{ color: theme.colorTextMuted }}>
              Unsubscribe
            </a>
          </Text>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const FooterWithLegalText = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  address = "123 Main Street, San Francisco, CA 94105",
  links = [
    { href: "#privacy", label: "Privacy" },
    { href: "#terms", label: "Terms" },
  ],
  unsubscribeHref = "#",
  variant = "default",
}: FooterFullProps) => (
  <Html>
    <Head />
    <Preview>footer full</Preview>
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
          <FooterFullSection
            address={address}
            companyName={companyName}
            links={links}
            theme={theme}
            unsubscribeHref={unsubscribeHref}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterWithLegalText.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94105",
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
  variant: "default",
} satisfies FooterFullProps;
