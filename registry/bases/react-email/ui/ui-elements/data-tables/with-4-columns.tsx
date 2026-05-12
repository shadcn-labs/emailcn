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

export interface DataTable4ColumnsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: string[][];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTable4ColumnsSection = ({
  headers = ["Name", "Type", "Status", "Value"],
  rows = [["Item A", "Standard", "Active", "$100"]],
  variant = "default",
}: Omit<DataTable4ColumnsProps, "theme">) => {
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
              style={{ width: `${100 / headers.length}%` }}
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
                style={{ width: `${100 / headers.length}%` }}
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

export const DataTable4Columns = ({
  theme = defaultTheme,
  headers = ["Name", "Type", "Status", "Value"],
  rows = [["Item A", "Standard", "Active", "$100"]],
  variant = "default",
}: DataTable4ColumnsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>4 Column Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTable4ColumnsSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTable4Columns.PreviewProps = {
  headers: ["Product", "Category", "Stock", "Price"],
  rows: [
    ["Widget A", "Electronics", "In Stock", "$29.00"],
    ["Widget B", "Accessories", "Low Stock", "$49.00"],
    ["Widget C", "Home", "Out of Stock", "$19.00"],
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTable4ColumnsProps;
