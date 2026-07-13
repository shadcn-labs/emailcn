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
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type LogoCloudVariant = "default" | "slanted-left" | "slanted-right";

export type LogoCloudTone = "boxed" | "outlined";

export interface LogoCloudProps {
  theme?: EmailThemeTokens;
  heading?: string;
  logoSrc1?: string;
  logoAlt1?: string;
  logoSrc2?: string;
  logoAlt2?: string;
  logoSrc3?: string;
  logoAlt3?: string;
  logoSrc4?: string;
  logoAlt4?: string;
  variant?: LogoCloudVariant;
  tone?: LogoCloudTone;
}

const toneStyle = (
  theme: EmailThemeTokens,
  tone: LogoCloudTone
): CSSProperties =>
  tone === "outlined"
    ? {
        border: `1px solid ${theme.colorBorder}`,
        borderRadius: "8px",
        padding: "16px 24px",
      }
    : {
        backgroundColor: theme.colorBackgroundMuted,
        borderRadius: "8px",
        padding: "16px 24px",
      };

export const LogoCloud = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/6",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/7",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/8",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/9",
  logoAlt4 = "Logo 4",
  variant = "default",
  tone = "boxed",
}: LogoCloudProps) => {
  const logos = [
    { alt: logoAlt1, src: logoSrc1 },
    { alt: logoAlt2, src: logoSrc2 },
    { alt: logoAlt3, src: logoSrc3 },
    { alt: logoAlt4, src: logoSrc4 },
  ];
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: theme.containerWidth,
            padding: "48px 0",
            textAlign: "center",
          }}
        >
          {heading ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeSm,
                letterSpacing: "0.05em",
                margin: "0 0 32px",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {heading}
            </Text>
          ) : null}
          <Row>
            {logos.map((logo) => (
              <Column
                key={logo.alt}
                style={{
                  padding: "0 8px",
                  verticalAlign: "middle",
                  width: "25%",
                }}
              >
                <span
                  style={{ display: "inline-block", ...toneStyle(theme, tone) }}
                >
                  <Img
                    src={logo.src}
                    alt={logo.alt}
                    width="120"
                    height="40"
                    style={{ height: "auto", objectFit: "contain" }}
                  />
                </span>
              </Column>
            ))}
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

LogoCloud.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoSrc1: "https://static.photos/business/120x40/10",
  logoSrc2: "https://static.photos/business/120x40/11",
  logoSrc3: "https://static.photos/business/120x40/12",
  logoSrc4: "https://static.photos/business/120x40/13",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies LogoCloudProps;
