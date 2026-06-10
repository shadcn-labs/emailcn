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

export type SocialLinksCompactVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksCompactProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksCompactVariant;
}

const SocialLinksCompactSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksCompactProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksCompactVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingBase ?? "16px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(links ?? []).map((l, i) => (
          <Text
            key={l.platform}
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "11px",
              margin: 0,
              padding: "0 8px",
              textAlign: "center",
            }}
          >
            <a
              href={l.href}
              style={{ color: theme.colorTextMuted, textDecoration: "none" }}
            >
              {l.platform}
            </a>
            {i < (links ?? []).length - 1 ? (
              <span style={{ color: theme.colorBorder, margin: "0 4px" }}>
                |
              </span>
            ) : null}
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);

export const OutlinedSquareTilesSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  variant = "default",
}: SocialLinksCompactProps) => (
  <Html>
    <Head />
    <Preview>social compact</Preview>
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
          <SocialLinksCompactSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
OutlinedSquareTilesSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksCompactProps;
