/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export interface DataTableEditButtonProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { name: string; role: string; editHref?: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DataTableEditButtonSection = ({
  headers = ["Name", "Role", "Actions"],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
  variant = "default",
}: Omit<DataTableEditButtonProps, "theme">) => {
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
              {row.role}
            </Column>
            <Column className={`px-3 py-2 ${textAlign}`}>
              {row.editHref ? (
                <Button
                  href={row.editHref}
                  className="text-xs font-medium text-primary underline no-underline"
                >
                  Edit
                </Button>
              ) : null}
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export const DataTableEditButton = ({
  theme = defaultTheme,
  headers = ["Name", "Role", "Actions"],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
  variant = "default",
}: DataTableEditButtonProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Edit Table</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DataTableEditButtonSection
          headers={headers}
          rows={rows}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DataTableEditButton.PreviewProps = {
  headers: ["User", "Department", ""],
  rows: [
    { editHref: "#edit-1", name: "Alice Johnson", role: "Engineering" },
    { editHref: "#edit-2", name: "Bob Smith", role: "Marketing" },
    { editHref: "#edit-3", name: "Carol Davis", role: "Design" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies DataTableEditButtonProps;
