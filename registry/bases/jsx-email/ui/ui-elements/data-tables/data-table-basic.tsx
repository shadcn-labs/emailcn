import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTableText,
} from "@/registry/bases/jsx-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableBasicProps {
  theme?: EmailThemeTokens;
  headers?: string[];
  rows?: string[][];
}

export const DataTableBasicSection = ({
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
}: Omit<DataTableBasicProps, "theme">) => (
  <DataTableFrame
    headers={headers}
    rows={rows.map((row) =>
      headers.map((_, index) => ({
        content: <DataTableText>{row[index] ?? ""}</DataTableText>,
      }))
    )}
  />
);

export const DataTableBasic = ({
  theme = defaultTheme,
  headers = ["Column 1", "Column 2"],
  rows = [["Row 1 Data", "Row 1 Data"]],
}: DataTableBasicProps) => (
  <DataTableEmailShell preview="Product data table" theme={theme}>
    <DataTableBasicSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableBasic.PreviewProps = {
  headers: ["Product", "Price", "Quantity"],
  rows: [
    ["Widget A", "$29.00", "2"],
    ["Widget B", "$49.00", "1"],
    ["Widget C", "$19.00", "4"],
  ],
  theme: defaultTheme,
} satisfies DataTableBasicProps;
