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

export type SocialLinksDarkVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksDarkProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksDarkVariant;
}

const SocialLinksDarkSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksDarkProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksDarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(links ?? []).map((l) => (
          <Text
            key={l.platform}
            style={{
              color: theme.colorBackground,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
              padding: "0 12px",
              textAlign: "center",
            }}
          >
            <a
              href={l.href}
              style={{ color: theme.colorBackground, textDecoration: "none" }}
            >
              {l.platform}
            </a>
          </Text>
        ))}
      </Column>
    </Row>
  </Section>
);

export const PillBoxSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  variant = "default",
}: SocialLinksDarkProps) => (
  <Html>
    <Head />
    <Preview>social dark</Preview>
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
          <SocialLinksDarkSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
PillBoxSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksDarkProps;
