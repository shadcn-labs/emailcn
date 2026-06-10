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

export type FooterUnsubscribeVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FooterUnsubscribeProps {
  theme?: EmailThemeTokens;
  companyName?: string;
  unsubscribeHref?: string;
  variant?: FooterUnsubscribeVariant;
}

const FooterUnsubscribeSection = ({
  companyName,
  theme,
  unsubscribeHref,
  variant,
}: {
  companyName: string;
  theme: EmailThemeTokens;
  unsubscribeHref: string;
  variant: FooterUnsubscribeVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
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
          If you no longer wish to receive these emails, you can{" "}
          <a href={unsubscribeHref} style={{ color: theme.colorTextMuted }}>
            unsubscribe
          </a>
          .
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

export const SimpleFooterWithSocialIcons = ({
  theme = defaultTheme,
  companyName = "Acme Inc.",
  unsubscribeHref = "#",
  variant = "default",
}: FooterUnsubscribeProps) => (
  <Html>
    <Head />
    <Preview>footer unsubscribe</Preview>
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
          <FooterUnsubscribeSection
            companyName={companyName}
            theme={theme}
            unsubscribeHref={unsubscribeHref}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SimpleFooterWithSocialIcons.PreviewProps = {
  companyName: "Acme Inc.",
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
  variant: "default",
} satisfies FooterUnsubscribeProps;
