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

export type SocialLinksWithIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksWithIconsProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksWithIconsVariant;
}

const SocialLinksWithIconsSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksWithIconsProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksWithIconsVariant;
}) => (
  <Section
    style={{ backgroundColor: theme.colorBackground, padding: "24px 0" }}
  >
    <Row>
      <Column>
        {(links ?? []).map((l) => (
          <Text
            key={l.platform}
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: "12px",
              margin: 0,
              padding: "0 12px",
              textAlign: "center",
            }}
          >
            <a
              href={l.href}
              style={{ color: theme.colorTextMuted, textDecoration: "none" }}
            >
              {l.label}
            </a>
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);

export const SquaredBoxSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
  ],
  variant = "default",
}: SocialLinksWithIconsProps) => (
  <Html>
    <Head />
    <Preview>social with icons</Preview>
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
          <SocialLinksWithIconsSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SquaredBoxSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksWithIconsProps;
