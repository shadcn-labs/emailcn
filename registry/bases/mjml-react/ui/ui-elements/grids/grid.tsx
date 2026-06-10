/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
    {LAYOUT_WIDTHS[layout].map((width, index) => (
      <MjmlColumn
        key={`${width}-${index}`}
        padding={theme.spacingBase ?? "16px"}
        width={width}
      >
        <MjmlText
          align={align}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {cells[index] ?? ""}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);

export const Grid = ({
  theme = defaultTheme,
  cells = [],
  layout = "2",
  align = "center",
}: GridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Grid</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <GridSection
          cells={cells}
          theme={theme}
          layout={layout}
          align={align}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Grid.PreviewProps = {
  align: "center",
  cells: ["Feature one", "Feature two"],
  layout: "2",
  theme: defaultTheme,
} satisfies GridProps;
