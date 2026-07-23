import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTableProgress,
  DataTableText,
} from "@/registry/bases/mjml-react/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableWithProgressProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: { label: string; progress: number; value: string }[];
}

export const DataTableWithProgressSection = ({
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1,200" }],
}: Omit<DataTableWithProgressProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["30%", "45%", "25%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.label}</DataTableText> },
      { content: <DataTableProgress value={row.progress} /> },
      { content: <DataTableText>{row.value}</DataTableText> },
    ])}
  />
);

export const DataTableWithProgress = ({
  theme = defaultTheme,
  headers = ["Item", "Progress", "Value"],
  rows = [{ label: "Task 1", progress: 75, value: "$1,200" }],
}: DataTableWithProgressProps) => (
  <DataTableEmailShell
    preview="Projects data table with progress bars"
    theme={theme}
  >
    <DataTableWithProgressSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableWithProgress.PreviewProps = {
  headers: ["Project", "Progress", "Budget"],
  rows: [
    { label: "Website Redesign", progress: 90, value: "$12,000" },
    { label: "Mobile App", progress: 60, value: "$8,500" },
    { label: "Backend API", progress: 35, value: "$5,000" },
  ],
  theme: defaultTheme,
} satisfies DataTableWithProgressProps;
