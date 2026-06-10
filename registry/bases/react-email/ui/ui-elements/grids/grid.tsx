/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

const LAYOUT_WIDTHS = {
  "1": ["100%"],
  "1-3": ["25%", "75%"],
  "2": ["50%", "50%"],
  "3": ["33.33%", "33.33%", "33.33%"],
  "3-1": ["75%", "25%"],
  "4": ["25%", "25%", "25%", "25%"],
} as const;

export interface GridProps {
  theme?: TailwindConfig;
  cells?: string[];
  layout?: keyof typeof LAYOUT_WIDTHS;
  align?: "left" | "center" | "right";
}

export const GridSection = ({
  cells = [],
  layout = "2",
  align = "center",
}: Omit<GridProps, "theme">) => {
  const widths = LAYOUT_WIDTHS[layout];
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        {widths.map((width, index) => (
          <Column
            key={`${width}-${index}`}
            style={{ width }}
            className="align-top p-3"
          >
            <Text className={`m-0 text-base text-foreground ${alignClass}`}>
              {cells[index] ?? ""}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const Grid = ({
  theme = defaultTheme,
  cells,
  layout = "2",
  align = "center",
}: GridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <GridSection cells={cells} layout={layout} align={align} />
      </Body>
    </Tailwind>
  </Html>
);

Grid.PreviewProps = {
  align: "center",
  cells: [
    "Feature one description with key benefits.",
    "Feature two description with key benefits.",
  ],
  layout: "2",
  theme: defaultTheme,
} satisfies GridProps;
