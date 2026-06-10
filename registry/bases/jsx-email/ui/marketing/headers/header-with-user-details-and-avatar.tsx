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

export type HeaderLeftAlignedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLeftAlignedProps {
  theme?: EmailThemeTokens;
  title?: string;
  subtitle?: string;
  variant?: HeaderLeftAlignedVariant;
}

const HeaderLeftAlignedSection = ({
  subtitle,
  theme,
  title,
  variant,
}: {
  subtitle: string;
  theme: EmailThemeTokens;
  title: string;
  variant: HeaderLeftAlignedVariant;
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
            textAlign: "left",
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
              textAlign: "left",
            }}
          >
            {subtitle}
          </Text>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const HeaderWithUserDetailsAndAvatar = ({
  theme = defaultTheme,
  title = "Page Title",
  subtitle = "A left-aligned header section.",
  variant = "default",
}: HeaderLeftAlignedProps) => (
  <Html>
    <Head />
    <Preview>header left</Preview>
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
          <HeaderLeftAlignedSection
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

HeaderWithUserDetailsAndAvatar.PreviewProps = {
  subtitle: "Here's what's new this month.",
  theme: defaultTheme,
  title: "Latest Updates",
  variant: "default",
} satisfies HeaderLeftAlignedProps;
