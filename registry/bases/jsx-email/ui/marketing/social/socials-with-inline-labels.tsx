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

export type SocialLinksGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksGridProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksGridVariant;
}

const SocialLinksGridSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksGridProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksGridVariant;
}) => (
  <Section
    style={{ backgroundColor: theme.colorBackgroundMuted, padding: "24px 0" }}
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
              padding: "8px 12px",
              textAlign: "center",
            }}
          >
            <a
              href={l.href}
              style={{ color: theme.colorTextMuted, textDecoration: "none" }}
            >
              {l.platform}
            </a>
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);

export const SocialsWithInlineLabels = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksGridProps) => (
  <Html>
    <Head />
    <Preview>social grid</Preview>
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
          <SocialLinksGridSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SocialsWithInlineLabels.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
    { href: "https://youtube.com", platform: "YouTube" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksGridProps;
