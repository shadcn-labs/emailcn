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

export type HeaderAccentVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderAccentProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderAccentVariant;
}

const HeaderAccentSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderAccentVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
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
          {subtitle}
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
          {title}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const HeaderWithLogoAndMenu = ({
  theme = defaultTheme,
  title = "Main Title",
  subtitle = "SECTION LABEL",
  variant = "default",
}: HeaderAccentProps) => (
  <Html>
    <Head />
    <Preview>header accent</Preview>
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
          <HeaderAccentSection
            subtitle={subtitle}
            theme={theme}
            title={title}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeaderWithLogoAndMenu.PreviewProps = {
  subtitle: "WHAT'S NEW",
  theme: defaultTheme,
  title: "Latest Features & Updates",
  variant: "default",
} satisfies HeaderAccentProps;
