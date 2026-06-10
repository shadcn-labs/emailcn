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

export type HeaderCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderCenteredProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderCenteredVariant;
}

const HeaderCenteredSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderCenteredVariant;
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
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg ?? "16px",
              lineHeight: theme.lineHeightBase,
              margin: 0,
              textAlign: "center",
            }}
          >
            {subtitle}
          </Text>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeaderWithLogoAndText = ({
  theme = defaultTheme,
  title = "Page Title",
  subtitle = "A short description or tagline goes here.",
  variant = "default",
}: HeaderCenteredProps) => (
  <Html>
    <Head />
    <Preview>header centered</Preview>
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
          <HeaderCenteredSection
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

HeaderWithLogoAndText.PreviewProps = {
  subtitle: "Stay up to date with the latest news and updates.",
  theme: defaultTheme,
  title: "Welcome to Our Newsletter",
  variant: "default",
} satisfies HeaderCenteredProps;
