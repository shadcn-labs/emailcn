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

export type FooterDarkVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterDarkProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterDarkVariant;
}

const FooterDarkSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterDarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorBackground,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            textAlign: "center",
          }}
        >
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </Text>
      </Column>
    </Row>
  </Section>
);

export const FooterWith3ColMenu = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterDarkProps) => (
  <Html>
    <Head />
    <Preview>footer dark</Preview>
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
          <FooterDarkSection
            companyName={companyName}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterWith3ColMenu.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterDarkProps;
