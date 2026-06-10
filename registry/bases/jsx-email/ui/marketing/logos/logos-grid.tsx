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

export type LogosGridVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosGridProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosGridVariant;
}

const LogosGridSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosGridProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosGridVariant;
}) => {
  const items = logos ?? [];
  const rows: { src: string; alt: string; width?: number }[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {rows.map((row, ri) =>
          row.map((logo, ci) => (
            <Column
              key={`${logo.alt}-${ri}-${ci}`}
              style={{
                padding: theme.spacingBase ?? "24px",
                verticalAlign: "middle",
                width: "33.33%",
              }}
            >
              <Img
                alt={logo.alt}
                src={logo.src}
                width={logo.width ?? 120}
                style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
              />
            </Column>
          ))
        )}
      </Row>
    </Section>
  );
};

export const LogosGrid = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/120x40/2" },
    { alt: "Company 2", src: "https://static.photos/business/120x40/3" },
    { alt: "Company 3", src: "https://static.photos/business/120x40/4" },
    { alt: "Company 4", src: "https://static.photos/business/120x40/5" },
    { alt: "Company 5", src: "https://static.photos/business/120x40/6" },
    { alt: "Company 6", src: "https://static.photos/business/120x40/7" },
  ],
  variant = "default",
}: LogosGridProps) => (
  <Html>
    <Head />
    <Preview>logos grid</Preview>
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
          <LogosGridSection logos={logos} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

LogosGrid.PreviewProps = {
  logos: [
    { alt: "Acme", src: "https://static.photos/business/120x40/8", width: 120 },
    {
      alt: "TechCo",
      src: "https://static.photos/business/120x40/9",
      width: 120,
    },
    {
      alt: "Global",
      src: "https://static.photos/business/120x40/10",
      width: 120,
    },
    {
      alt: "Nova",
      src: "https://static.photos/business/120x40/11",
      width: 120,
    },
    {
      alt: "Pulse",
      src: "https://static.photos/business/120x40/12",
      width: 120,
    },
    {
      alt: "Orbit",
      src: "https://static.photos/business/120x40/13",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosGridProps;
