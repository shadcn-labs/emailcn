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

export type SocialLinksHorizontalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksHorizontalProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksHorizontalVariant;
}

const SocialLinksHorizontalSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksHorizontalProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksHorizontalVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
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
          {(links ?? []).map((link, i) => (
            <span key={link.platform}>
              <a
                href={link.href}
                style={{
                  color: theme.colorTextMuted,
                  margin: "0 8px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
              {i < (links ?? []).length - 1 ? null : null}
            </span>
          ))}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const SocialsWithInlineTileLabels = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  variant = "default",
}: SocialLinksHorizontalProps) => (
  <Html>
    <Head />
    <Preview>social horizontal</Preview>
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
          <SocialLinksHorizontalSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

SocialsWithInlineTileLabels.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksHorizontalProps;
