/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderLogoVariant = "default" | "slanted-left" | "slanted-right";

export interface HeaderLogoProps {
  theme?: EmailThemeTokens;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  variant?: HeaderLogoVariant;
}

const HeaderLogoSection = ({
  logoAlt,
  logoUrl,
  logoWidth,
  theme,
  variant,
}: {
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  theme: EmailThemeTokens;
  variant: HeaderLogoVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column>
        {logoUrl ? (
          <Img
            alt={logoAlt}
            src={logoUrl}
            width={logoWidth}
            style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
          />
        ) : (
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeXl ?? "20px",
              fontWeight: theme.fontWeightBold,
              margin: 0,
              textAlign: "center",
            }}
          >
            {logoAlt}
          </Text>
        )}
      </Column>
    </Row>
  </Section>
);

export const HeaderWithLogoAndFinanceStats = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  variant = "default",
}: HeaderLogoProps) => (
  <Html>
    <Head />
    <Preview>header logo</Preview>
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
          <HeaderLogoSection
            logoAlt={logoAlt}
            logoUrl={logoUrl}
            logoWidth={logoWidth}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeaderWithLogoAndFinanceStats.PreviewProps = {
  logoAlt: "Acme",
  logoUrl: "https://static.photos/business/120x40/2",
  logoWidth: 120,
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoProps;
