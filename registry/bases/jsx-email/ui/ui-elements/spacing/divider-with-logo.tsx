/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface DividerWithLogoProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithLogoSection = ({
  logoSrc,
  logoAlt,
  theme,
}: {
  logoSrc?: string;
  logoAlt: string;
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
        {logoSrc ? (
          <Img
            alt={logoAlt}
            src={logoSrc}
            width={80}
            style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
          />
        ) : null}
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

export const DividerWithLogo = ({
  theme = defaultTheme,
  logoSrc,
  logoAlt = "Logo",
  variant = "default",
}: DividerWithLogoProps) => (
  <Html>
    <Head />
    <Preview>divider-logo</Preview>
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
          <DividerWithLogoSection
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithLogo.PreviewProps = {
  logoAlt: "Brand",
  logoSrc: "https://static.photos/business/320x80/2",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithLogoProps;
