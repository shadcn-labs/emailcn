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

export type HeaderMinimalVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderMinimalProps {
  theme?: EmailThemeTokens;
  title?: string;
  variant?: HeaderMinimalVariant;
}

const HeaderMinimalSection = ({
  theme,
  title,
  variant,
}: {
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderMinimalVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0 ${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeXl ?? "20px",
            fontWeight: theme.fontWeightMedium,
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

export const HeaderWithUserDetails = ({
  theme = defaultTheme,
  title = "Section Title",
  variant = "default",
}: HeaderMinimalProps) => (
  <Html>
    <Head />
    <Preview>header minimal</Preview>
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
          <HeaderMinimalSection theme={theme} title={title} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeaderWithUserDetails.PreviewProps = {
  theme: defaultTheme,
  title: "What Our Customers Say",
  variant: "default",
} satisfies HeaderMinimalProps;
