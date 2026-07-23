import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTablePill,
  DataTableText,
} from "@/registry/bases/jsx-email/ui/ui-elements/data-tables/data-table-shared";
import type { DataTableStatusVariant } from "@/registry/bases/jsx-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableWithPillsProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: {
    name: string;
    status: string;
    statusVariant: DataTableStatusVariant;
  }[];
}

export const DataTableWithPillsSection = ({
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
}: Omit<DataTableWithPillsProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "right"]}
    columnWidths={["64%", "36%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      {
        content: (
          <DataTablePill variant={row.statusVariant}>
            {row.status}
          </DataTablePill>
        ),
      },
    ])}
  />
);

export const DataTableWithPills = ({
  theme = defaultTheme,
  headers = ["Name", "Status"],
  rows = [{ name: "Alice", status: "Active", statusVariant: "active" }],
}: DataTableWithPillsProps) => (
  <DataTableEmailShell
    preview="User data table with status pills"
    theme={theme}
  >
    <DataTableWithPillsSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableWithPills.PreviewProps = {
  headers: ["User", "Status"],
  rows: [
    { name: "Alice Johnson", status: "Active", statusVariant: "active" },
    { name: "Bob Smith", status: "Pending", statusVariant: "pending" },
    {
      name: "Carol Davis",
      status: "Cancelled",
      statusVariant: "cancelled",
    },
  ],
  theme: defaultTheme,
} satisfies DataTableWithPillsProps;
