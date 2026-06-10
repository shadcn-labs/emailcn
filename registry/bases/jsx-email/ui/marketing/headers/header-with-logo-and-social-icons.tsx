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

export type HeaderBadgeVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderBadgeProps {
  theme?: EmailThemeTokens;
  badge?: string;
  heading?: string;
  variant?: HeaderBadgeVariant;
}

const HeaderBadgeSection = ({
  badge,
  heading,
  theme,
  variant,
}: {
  badge: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: HeaderBadgeVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimary,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {badge}
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const HeaderWithLogoAndSocialIcons = ({
  theme = defaultTheme,
  badge = "NEW",
  heading = "Introducing Our Latest Feature",
  variant = "default",
}: HeaderBadgeProps) => (
  <Html>
    <Head />
    <Preview>header badge</Preview>
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
          <HeaderBadgeSection
            badge={badge}
            heading={heading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeaderWithLogoAndSocialIcons.PreviewProps = {
  badge: "ANNOUNCEMENT",
  heading: "Big News Coming Soon",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderBadgeProps;
