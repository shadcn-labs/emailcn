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

export type SocialLinksBorderedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface SocialLinksBorderedProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksBorderedVariant;
}
const SocialLinksBorderedSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksBorderedProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksBorderedVariant;
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
              style={{
                border: `1px solid ${theme.colorBorder}`,
                borderRadius: theme.borderRadius,
                color: theme.colorTextMuted,
                padding: "6px 12px",
                textDecoration: "none",
              }}
            >
              {l.platform}
            </a>
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);
export const OutlinedBoxSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksBorderedProps) => (
  <Html>
    <Head />
    <Preview>social bordered</Preview>
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
          <SocialLinksBorderedSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
OutlinedBoxSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksBorderedProps;
