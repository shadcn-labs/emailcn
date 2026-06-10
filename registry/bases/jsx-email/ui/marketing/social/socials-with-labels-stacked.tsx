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

export type SocialLinksListVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksListProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksListVariant;
}

const SocialLinksListSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksListProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksListVariant;
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
              paddingBottom: "6px",
            }}
          >
            &raquo;{" "}
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

export const SocialsWithLabelsStacked = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksListProps) => (
  <Html>
    <Head />
    <Preview>social list</Preview>
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
          <SocialLinksListSection
            links={links}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SocialsWithLabelsStacked.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
    { href: "https://youtube.com", platform: "YouTube" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksListProps;
