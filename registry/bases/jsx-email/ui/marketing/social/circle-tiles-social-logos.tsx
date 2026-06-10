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

export type SocialLinksAccentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface SocialLinksAccentProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksAccentVariant;
}
const SocialLinksAccentSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksAccentProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksAccentVariant;
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
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: "12px",
              margin: 0,
              padding: "0 12px",
              textAlign: "center",
            }}
          >
            <a
              href={l.href}
              style={{ color: theme.colorPrimary, textDecoration: "none" }}
            >
              {l.platform}
            </a>
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);
export const CircleTilesSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksAccentProps) => (
  <Html>
    <Head />
    <Preview>social accent</Preview>
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
          <SocialLinksAccentSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
CircleTilesSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksAccentProps;
