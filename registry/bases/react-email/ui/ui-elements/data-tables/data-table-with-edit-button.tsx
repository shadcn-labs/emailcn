import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTableLink,
  DataTableText,
} from "@/registry/bases/react-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableEditButtonProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: { editHref?: string; name: string; role: string }[];
}

export const DataTableEditButtonSection = ({
  headers = ["Name", "Role", ""],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
}: Omit<DataTableEditButtonProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["40%", "40%", "20%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      { content: <DataTableText muted>{row.role}</DataTableText> },
      {
        content: row.editHref ? (
          <DataTableLink href={row.editHref}>Edit</DataTableLink>
        ) : null,
      },
    ])}
  />
);

export const DataTableEditButton = ({
  theme = defaultTheme,
  headers = ["Name", "Role", ""],
  rows = [{ editHref: "#", name: "Alice", role: "Admin" }],
}: DataTableEditButtonProps) => (
  <DataTableEmailShell
    preview="Team data table with edit actions"
    theme={theme}
  >
    <DataTableEditButtonSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableEditButton.PreviewProps = {
  headers: ["User", "Department", ""],
  rows: [
    { editHref: "#edit-1", name: "Alice Johnson", role: "Engineering" },
    { editHref: "#edit-2", name: "Bob Smith", role: "Marketing" },
    { editHref: "#edit-3", name: "Carol Davis", role: "Design" },
  ],
  theme: defaultTheme,
} satisfies DataTableEditButtonProps;
