/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface DividerWithButtonProps {
  theme?: EmailThemeTokens;
  label?: string;
  href?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithButtonSection = ({
  label,
  href,
  theme,
}: {
  label: string;
  href: string;
  theme: EmailThemeTokens;
}) => (
  <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}>
    <Row>
      <Column>
        <Hr
          style={{
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopColor: theme.colorBorder,
            borderTopStyle: "solid",
            marginBottom: theme.spacingBase ?? "16px",
            width: "100%",
          }}
        />
        <Button
          href={href}
          align="center"
          width={160}
          height={40}
          style={{
            backgroundColor: theme.colorPrimary,
            borderRadius: theme.borderRadius,
            color: theme.colorPrimaryForeground ?? "#ffffff",
            display: "inline-block",
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            fontWeight: theme.fontWeightMedium ?? "500",
            height: "auto",
            padding: `${theme.spacingBase ?? "16px"} ${theme.spacingLg ?? "24px"}`,
            textDecoration: "none",
            width: "auto",
          }}
        >
          {label}
        </Button>
        <Hr
          style={{
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopColor: theme.colorBorder,
            borderTopStyle: "solid",
            marginTop: theme.spacingBase ?? "16px",
            width: "100%",
          }}
        />
      </Column>
    </Row>
  </Section>
);

export const DividerWithButton = ({
  theme = defaultTheme,
  label = "View All",
  href = "#",
  variant = "default",
}: DividerWithButtonProps) => (
  <Html>
    <Head />
    <Preview>divider-btn</Preview>
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
          <DividerWithButtonSection label={label} href={href} theme={theme} />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithButton.PreviewProps = {
  href: "https://example.com",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithButtonProps;
