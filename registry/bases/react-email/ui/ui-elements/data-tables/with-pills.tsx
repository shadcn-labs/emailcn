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

export interface DataTableWithPillsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { name: string; status: string; statusVariant: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const statusColor: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  draft: "bg-gray-100 text-gray-800",
  pending: "bg-yellow-100 text-yellow-800",
};

export const DataTableWithPillsSection = ({
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
  variant = "default",
}: Omit<DataTableWithPillsProps, "theme">) => {
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
            <Column className={`px-3 py-2 ${textAlign}`}>
              <Text
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[row.statusVariant] ?? statusColor.draft}`}
              >
                {row.status}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableWithPills = ({
  theme = defaultTheme,
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
  variant = "default",
}: DataTableWithPillsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Pill Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableWithPillsSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableWithPills.PreviewProps = {
  headers: ["User", "Status", "Role"],
  rows: [
    { name: "Alice Johnson", status: "Active", statusVariant: "active" },
    { name: "Bob Smith", status: "Pending", statusVariant: "pending" },
    { name: "Carol Davis", status: "Cancelled", statusVariant: "cancelled" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableWithPillsProps;
