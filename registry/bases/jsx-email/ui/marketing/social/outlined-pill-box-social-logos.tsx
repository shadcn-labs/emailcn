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

export type SocialLinksCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksCenteredProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksCenteredVariant;
}

const SocialLinksCenteredSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksCenteredProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksCenteredVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            textAlign: "center",
          }}
        >
          {(links ?? []).map((link) => (
            <a
              key={link.platform}
              href={link.href}
              style={{
                color: theme.colorTextMuted,
                margin: "0 12px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const OutlinedPillBoxSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://youtube.com", label: "YouTube", platform: "youtube" },
    {
      href: "https://instagram.com",
      label: "Instagram",
      platform: "instagram",
    },
  ],
  variant = "default",
}: SocialLinksCenteredProps) => (
  <Html>
    <Head />
    <Preview>social centered</Preview>
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
          <SocialLinksCenteredSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

OutlinedPillBoxSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://youtube.com", label: "YouTube", platform: "youtube" },
    {
      href: "https://instagram.com",
      label: "Instagram",
      platform: "instagram",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksCenteredProps;
