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

export type LogosInlineVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosInlineProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosInlineVariant;
}

const LogosInlineSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosInlineProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosInlineVariant;
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
        <Column>
          {items.slice(0, 6).map((logo, i) => (
            <span key={logo.alt + i}>
              <Img
                alt={logo.alt}
                src={logo.src}
                width={logo.width ?? 100}
                style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
              />
            </span>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export const OutlinedLogoCloud = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/100x30/2" },
    { alt: "Company 2", src: "https://static.photos/business/100x30/3" },
    { alt: "Company 3", src: "https://static.photos/business/100x30/4" },
    { alt: "Company 4", src: "https://static.photos/business/100x30/5" },
  ],
  variant = "default",
}: LogosInlineProps) => (
  <Html>
    <Head />
    <Preview>logos inline</Preview>
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
          <LogosInlineSection logos={logos} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

OutlinedLogoCloud.PreviewProps = {
  logos: [
    { alt: "Acme", src: "https://static.photos/business/100x30/6", width: 100 },
    {
      alt: "TechCo",
      src: "https://static.photos/business/100x30/7",
      width: 100,
    },
    {
      alt: "Global",
      src: "https://static.photos/business/100x30/8",
      width: 100,
    },
    { alt: "Nova", src: "https://static.photos/business/100x30/9", width: 100 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosInlineProps;
