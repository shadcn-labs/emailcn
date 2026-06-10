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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DataTableBasicProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: string[][];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTableBasicSection = ({
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
  variant = "default",
}: Omit<DataTableBasicProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-4">
      <Section className="border border-border rounded-md">
        <Row>
          {headers.map((header, i) => (
            <Column
              key={`h-${i}`}
              className={`bg-foreground-muted/10 px-3 py-2 text-sm font-medium text-foreground ${textAlign}`}
            >
              {header}
            </Column>
          ))}
        </Row>
        {rows.map((row, ri) => (
          <Row key={`r-${ri}`}>
            {row.map((cell, ci) => (
              <Column
                key={`c-${ri}-${ci}`}
                className={`px-3 py-2 text-sm text-foreground ${textAlign}`}
              >
                {cell}
              </Column>
            ))}
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableBasic = ({
  theme = defaultTheme,
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
  variant = "default",
}: DataTableBasicProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Data Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableBasicSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableBasic.PreviewProps = {
  headers: ["Product", "Price", "Quantity"],
  rows: [
    ["Widget A", "$29.00", "2"],
    ["Widget B", "$49.00", "1"],
    ["Widget C", "$19.00", "4"],
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableBasicProps;
