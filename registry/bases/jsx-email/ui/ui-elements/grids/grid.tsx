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

const LAYOUT_WIDTHS = {
  "1": ["100%"],
  "1-3": ["25%", "75%"],
  "2": ["50%", "50%"],
  "3": ["33.33%", "33.33%", "33.33%"],
  "3-1": ["75%", "25%"],
  "4": ["25%", "25%", "25%", "25%"],
} as const;

export interface GridProps {
  theme?: EmailThemeTokens;
  cells?: string[];
  layout?: keyof typeof LAYOUT_WIDTHS;
  align?: "left" | "center" | "right";
}

const GridSection = ({
  cells,
  theme,
  layout,
  align,
}: {
  cells: string[];
  theme: EmailThemeTokens;
  layout: NonNullable<GridProps["layout"]>;
  align: NonNullable<GridProps["align"]>;
}) => (
  <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
    <Row>
      {LAYOUT_WIDTHS[layout].map((width, index) => (
        <Column
          key={`${width}-${index}`}
          style={{ padding: theme.spacingBase ?? "16px", width }}
        >
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: align,
            }}
          >
            {cells[index] ?? ""}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);

export const Grid = ({
  theme = defaultTheme,
  cells = [],
  layout = "2",
  align = "center",
}: GridProps) => (
  <Html>
    <Head />
    <Preview>Grid</Preview>
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
          <GridSection
            cells={cells}
            theme={theme}
            layout={layout}
            align={align}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

Grid.PreviewProps = {
  align: "center",
  cells: ["Feature one", "Feature two"],
  layout: "2",
  theme: defaultTheme,
} satisfies GridProps;
