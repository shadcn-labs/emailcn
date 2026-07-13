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

export type HeaderWithLogoAndFinanceStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderWithLogoAndFinanceStatsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  variant?: HeaderWithLogoAndFinanceStatsVariant;
}

export const HeaderWithLogoAndFinanceStats = ({
  theme = defaultTheme,
  logoSrc = "https://static.photos/business/120x30/3",
  logoAlt = "Logo",
  stat1 = "$12,450",
  stat1Label = "Balance",
  stat2 = "+5.2%",
  stat2Label = "Change",
  variant = "default",
}: HeaderWithLogoAndFinanceStatsProps) => {
  const skew =
    variant === "slanted-left"
      ? "skewX(-10deg)"
      : variant === "slanted-right"
        ? "skewX(10deg)"
        : undefined;
  const unskew =
    variant === "slanted-left"
      ? "skewX(10deg)"
      : variant === "slanted-right"
        ? "skewX(-10deg)"
        : undefined;
  const labelStyle = {
    color: theme.colorTextMuted,
    fontSize: theme.fontSizeSm,
    margin: 0,
  };
  return (
    <Html>
      <Head />
      <Preview>Header</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Section
          style={{
            backgroundColor: theme.colorBackground,
            padding: "24px 0",
            transform: skew,
          }}
        >
          <Container
            style={{
              margin: "0 auto",
              maxWidth: theme.containerWidth,
              transform: unskew,
            }}
          >
            <Row>
              <Column style={{ verticalAlign: "middle", width: "50%" }}>
                <Img
                  src={logoSrc}
                  alt={logoAlt}
                  width="120"
                  height="30"
                  style={{ height: "auto", objectFit: "contain" }}
                />
              </Column>
              <Column
                style={{
                  paddingRight: "24px",
                  textAlign: "right",
                  verticalAlign: "middle",
                  width: "25%",
                }}
              >
                <Text style={labelStyle}>{stat1Label}</Text>
                <Text
                  style={{
                    color: theme.colorText,
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightBold,
                    margin: 0,
                  }}
                >
                  {stat1}
                </Text>
              </Column>
              <Column
                style={{
                  textAlign: "right",
                  verticalAlign: "middle",
                  width: "25%",
                }}
              >
                <Text style={labelStyle}>{stat2Label}</Text>
                <Text
                  style={{
                    color: theme.colorSuccess,
                    fontSize: theme.fontSizeSm,
                    fontWeight: theme.fontWeightBold,
                    margin: 0,
                  }}
                >
                  {stat2}
                </Text>
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

HeaderWithLogoAndFinanceStats.PreviewProps = {
  logoAlt: "Logo",
  logoSrc: "https://static.photos/business/120x30/4",
  stat1: "$12,450",
  stat1Label: "Balance",
  stat2: "+5.2%",
  stat2Label: "Change",
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderWithLogoAndFinanceStatsProps;
