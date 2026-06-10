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

export type FooterMinimalVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterMinimalProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterMinimalVariant;
}

const FooterMinimalSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterMinimalVariant;
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
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} {companyName}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const FooterWithTextMenuAndSocials = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterMinimalProps) => (
  <Html>
    <Head />
    <Preview>footer minimal</Preview>
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
          <FooterMinimalSection
            companyName={companyName}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterWithTextMenuAndSocials.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterMinimalProps;
