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

export type FooterLinksVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterLinksProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  links?: { label: string; href: string }[];
  variant?: FooterLinksVariant;
}

const FooterLinksSection = ({
  companyName,
  links,
  theme,
  variant,
}: {
  companyName: string;
  links: FooterLinksProps["links"];
  theme: EmailThemeTokens;
  variant: FooterLinksVariant;
}) => {
  const items = links ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`,
      }}
    >
      <Row>
        {items.length > 0 ? (
          <Column style={{ paddingBottom: theme.spacingBase ?? "16px" }}>
            {items.map((link) => (
              <Text
                key={link.label}
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  margin: 0,
                  padding: "0 8px",
                  textAlign: "center",
                }}
              >
                <a
                  href={link.href}
                  style={{
                    color: theme.colorTextMuted,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </Text>
            ))}
          </Column>
        ) : null}
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              textAlign: "center",
            }}
          >
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export const FooterWithOversizedLogoAndFullMenu = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  links = [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  variant = "default",
}: FooterLinksProps) => (
  <Html>
    <Head />
    <Preview>footer links</Preview>
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
          <FooterLinksSection
            companyName={companyName}
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterWithOversizedLogoAndFullMenu.PreviewProps = {
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FooterLinksProps;
