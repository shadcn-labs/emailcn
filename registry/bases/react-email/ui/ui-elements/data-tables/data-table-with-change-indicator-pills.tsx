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

export interface DataTableChangeIndicatorProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    name: string;
    value: string;
    change: string;
    direction: "up" | "down";
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTableChangeIndicatorSection = ({
  headers = ["Metric", "Value", "Change"],
  rows = [
    {
      change: "+8.2%",
      direction: "up" as const,
      name: "Revenue",
      value: "$12.5K",
    },
  ],
  variant = "default",
}: Omit<DataTableChangeIndicatorProps, "theme">) => {
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
            <Column
              className={`px-3 py-2 text-sm text-foreground ${textAlign}`}
            >
              {row.name}
            </Column>
            <Column
              className={`px-3 py-2 text-sm text-foreground ${textAlign}`}
            >
              {row.value}
            </Column>
            <Column className={`px-3 py-2 ${textAlign}`}>
              <Text
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                  row.direction === "up"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {row.direction === "up" ? "\u2191" : "\u2193"} {row.change}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableChangeIndicator = ({
  theme = defaultTheme,
  headers = ["Metric", "Value", "Change"],
  rows = [
    {
      change: "+8.2%",
      direction: "up" as const,
      name: "Revenue",
      value: "$12.5K",
    },
  ],
  variant = "default",
}: DataTableChangeIndicatorProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Change Indicators</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableChangeIndicatorSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableChangeIndicator.PreviewProps = {
  headers: ["Metric", "Value", "Change"],
  rows: [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
    { change: "+2.1%", direction: "up", name: "Costs", value: "$4.2K" },
    { change: "-1.5%", direction: "down", name: "Churn", value: "3.1%" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableChangeIndicatorProps;
