import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  DataTableEmailShell,
  DataTableFrame,
  DataTableText,
} from "@/registry/bases/react-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTable4ColumnsProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: string[][];
}

export const DataTable4ColumnsSection = ({
  headers = ["Name", "Type", "Status", "Value"],
  rows = [["Item A", "Standard", "Active", "$100"]],
}: Omit<DataTable4ColumnsProps, "theme">) => (
  <DataTableFrame
    headers={headers}
    rows={rows.map((row) =>
      headers.map((_, index) => ({
        content: <DataTableText>{row[index] ?? ""}</DataTableText>,
      }))
    )}
  />
);

export const DataTable4Columns = ({
  theme = defaultTheme,
  headers = ["Name", "Type", "Status", "Value"],
  rows = [["Item A", "Standard", "Active", "$100"]],
}: DataTable4ColumnsProps) => (
  <DataTableEmailShell preview="Four-column product data table" theme={theme}>
    <DataTable4ColumnsSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTable4Columns.PreviewProps = {
  headers: ["Product", "Category", "Stock", "Price"],
  rows: [
    ["Widget A", "Electronics", "In Stock", "$29.00"],
    ["Widget B", "Accessories", "Low Stock", "$49.00"],
    ["Widget C", "Home", "Out of Stock", "$19.00"],
  ],
  theme: defaultTheme,
} satisfies DataTable4ColumnsProps;
