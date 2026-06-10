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

export type FooterBasicVariant = "default" | "slanted-left" | "slanted-right";

export interface FooterBasicProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  variant?: FooterBasicVariant;
}

const FooterBasicSection = ({
  companyName,
  theme,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  variant: FooterBasicVariant;
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
            color: theme.colorTextMuted,
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

export const FooterCenteredWithMenuAndSocials = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  variant = "default",
}: FooterBasicProps) => (
  <Html>
    <Head />
    <Preview>footer basic</Preview>
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
          <FooterBasicSection
            companyName={companyName}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterBasicProps;
