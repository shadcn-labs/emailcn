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
import type { CSSProperties } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type GridVariant =
  | "one-column"
  | "two-columns"
  | "three-columns"
  | "four-columns"
  | "one-three-split"
  | "three-one-split";

export type GridAlign = "center" | "left" | "right";

const GRID_WIDTHS: Record<GridVariant, readonly string[]> = {
  "four-columns": ["25%", "25%", "25%", "25%"],
  "one-column": ["100%"],
  "one-three-split": ["25%", "75%"],
  "three-columns": ["33.33%", "33.33%", "33.33%"],
  "three-one-split": ["75%", "25%"],
  "two-columns": ["50%", "50%"],
};

const textStyle: CSSProperties = {
  color: "#111827",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "-0.048px",
  lineHeight: "24px",
  margin: 0,
};

export interface GridProps {
  align?: GridAlign;
  cells?: string[];
  theme?: EmailThemeTokens;
  variant?: GridVariant;
}

export const GridSection = ({
  align = "center",
  cells = [],
  variant = "two-columns",
}: Omit<GridProps, "theme">) => (
  <Section style={{ padding: "48px 0" }}>
    <Row>
      {GRID_WIDTHS[variant].map((width, index) => (
        <Column
          className="grid-column"
          key={`${width}-${index}`}
          style={{ padding: "12px", verticalAlign: "top", width }}
          width={width}
        >
          <Text style={{ ...textStyle, textAlign: align }}>
            {cells[index] ?? ""}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);

export const Grid = ({
  align = "center",
  cells = [],
  theme = defaultTheme,
  variant = "two-columns",
}: GridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 599px) {
              .grid-column { display: block !important; width: 100% !important; }
            }
          `,
        }}
      />
    </Head>
    <Preview>Grid</Preview>
    <Body style={{ backgroundColor: theme.colorBackground, margin: 0 }}>
      <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
        <GridSection align={align} cells={cells} variant={variant} />
      </Container>
    </Body>
  </Html>
);

Grid.PreviewProps = {
  align: "center",
  cells: [
    "Feature one description with key benefits.",
    "Feature two description with key benefits.",
  ],
  theme: defaultTheme,
  variant: "two-columns",
} satisfies GridProps;
