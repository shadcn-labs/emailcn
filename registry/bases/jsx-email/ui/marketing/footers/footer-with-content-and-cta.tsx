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

export type FooterDisclaimerVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterDisclaimerProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  disclaimer?: string;
  variant?: FooterDisclaimerVariant;
}

const FooterDisclaimerSection = ({
  companyName,
  disclaimer,
  theme,
  variant,
}: {
  companyName: string;
  disclaimer: string;
  theme: EmailThemeTokens;
  variant: FooterDisclaimerVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundSubtle,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "11px",
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
            textAlign: "center",
          }}
        >
          {disclaimer}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "11px",
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

export const FooterWithContentAndCta = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  disclaimer = "This email was sent to you because you signed up for our newsletter.",
  variant = "default",
}: FooterDisclaimerProps) => (
  <Html>
    <Head />
    <Preview>footer disclaimer</Preview>
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
          <FooterDisclaimerSection
            companyName={companyName}
            disclaimer={disclaimer}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
FooterWithContentAndCta.PreviewProps = {
  companyName: "Acme Inc.",
  disclaimer:
    "This email was sent to you because you opted in to receive updates.",
  theme: defaultTheme,
  variant: "default",
} satisfies FooterDisclaimerProps;
