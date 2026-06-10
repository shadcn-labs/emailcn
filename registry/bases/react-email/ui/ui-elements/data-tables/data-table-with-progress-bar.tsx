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

export interface DataTableWithProgressProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { label: string; progress: number; value: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTableWithProgressSection = ({
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1,200" }],
  variant = "default",
}: Omit<DataTableWithProgressProps, "theme">) => {
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
              {row.label}
            </Column>
            <Column className="px-3 py-2">
              <Section className="rounded-full bg-foreground-muted/10">
                <Section
                  style={{
                    width: `${Math.min(100, Math.max(0, row.progress))}%`,
                  }}
                  className="rounded-full bg-primary py-1"
                >
                  <Text className="m-0 text-center text-xs text-primary-fg">
                    {row.progress}%
                  </Text>
                </Section>
              </Section>
            </Column>
            <Column
              className={`px-3 py-2 text-sm text-foreground ${textAlign}`}
            >
              {row.value}
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableWithProgress = ({
  theme = defaultTheme,
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1,200" }],
  variant = "default",
}: DataTableWithProgressProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Progress Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableWithProgressSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableWithProgress.PreviewProps = {
  headers: ["Project", "Progress", "Budget"],
  rows: [
    { label: "Website Redesign", progress: 90, value: "$12,000" },
    { label: "Mobile App", progress: 60, value: "$8,500" },
    { label: "Backend API", progress: 35, value: "$5,000" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithProgressProps;
