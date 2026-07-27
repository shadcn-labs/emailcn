import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlBreakpoint,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

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
  <MjmlSection padding="48px 0">
    {GRID_WIDTHS[variant].map((width, index) => (
      <MjmlColumn
        key={`${width}-${index}`}
        padding="12px"
        verticalAlign="top"
        width={width}
      >
        <MjmlText
          align={align}
          color="#111827"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="400"
          letterSpacing="-0.048px"
          lineHeight="24px"
          padding="0"
        >
          {cells[index] ?? ""}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);

export const Grid = ({
  align = "center",
  cells = [],
  theme = defaultTheme,
  variant = "two-columns",
}: GridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Grid</MjmlPreview>
      <MjmlBreakpoint width="600px" />
      <MjmlAttributes>
        <MjmlAll color="#111827" fontFamily={fontFamily} />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody backgroundColor="#ffffff" width={theme.containerWidth}>
      <GridSection align={align} cells={cells} variant={variant} />
    </MjmlBody>
  </Mjml>
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
