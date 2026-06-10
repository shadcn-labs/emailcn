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
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type LogosBorderedVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosBorderedProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosBorderedVariant;
}

const LogosBorderedSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosBorderedProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosBorderedVariant;
}) => {
  const items = logos ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.slice(0, 4).map((logo, i) => (
          <Column
            key={logo.alt + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "middle",
              width: `${100 / Math.min(items.length, 4)}%`,
            }}
          >
            <Section
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "24px",
              }}
            >
              <Row>
                <Img
                  alt={logo.alt}
                  src={logo.src}
                  width={logo.width ?? 120}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                  }}
                />
              </Row>
            </Section>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const BoxedLogoCloud = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/120x40/2" },
    { alt: "Company 2", src: "https://static.photos/business/120x40/3" },
    { alt: "Company 3", src: "https://static.photos/business/120x40/4" },
  ],
  variant = "default",
}: LogosBorderedProps) => (
  <Html>
    <Head />
    <Preview>logos bordered</Preview>
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
          <LogosBorderedSection logos={logos} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

BoxedLogoCloud.PreviewProps = {
  logos: [
    {
      alt: "Acme Corp",
      src: "https://static.photos/business/120x40/5",
      width: 120,
    },
    {
      alt: "TechCo",
      src: "https://static.photos/business/120x40/6",
      width: 120,
    },
    {
      alt: "Global Inc",
      src: "https://static.photos/business/120x40/7",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosBorderedProps;
