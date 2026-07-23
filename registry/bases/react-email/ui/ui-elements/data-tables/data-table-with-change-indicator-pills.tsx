import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import {
  DataTableChangePill,
  DataTableEmailShell,
  DataTableFrame,
  DataTableText,
} from "@/registry/bases/react-email/ui/ui-elements/data-tables/data-table-shared";

export interface DataTableChangeIndicatorProps {
  theme?: TailwindConfig;
  headers?: string[];
  rows?: {
    change: string;
    direction: "down" | "up";
    name: string;
    value: string;
  }[];
}

export const DataTableChangeIndicatorSection = ({
  headers = ["Metric", "Value", "Change"],
  rows = [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
  ],
}: Omit<DataTableChangeIndicatorProps, "theme">) => (
  <DataTableFrame
    alignments={["left", "left", "right"]}
    columnWidths={["40%", "30%", "30%"]}
    headers={headers}
    rows={rows.map((row) => [
      { content: <DataTableText>{row.name}</DataTableText> },
      { content: <DataTableText>{row.value}</DataTableText> },
      {
        content: (
          <DataTableChangePill change={row.change} direction={row.direction} />
        ),
      },
    ])}
  />
);

export const DataTableChangeIndicator = ({
  theme = defaultTheme,
  headers = ["Metric", "Value", "Change"],
  rows = [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
  ],
}: DataTableChangeIndicatorProps) => (
  <DataTableEmailShell
    preview="Metrics data table with change indicators"
    theme={theme}
  >
    <DataTableChangeIndicatorSection headers={headers} rows={rows} />
  </DataTableEmailShell>
);

DataTableChangeIndicator.PreviewProps = {
  headers: ["Metric", "Value", "Change"],
  rows: [
    { change: "+8.2%", direction: "up", name: "Revenue", value: "$12.5K" },
    { change: "+2.1%", direction: "up", name: "Costs", value: "$4.2K" },
    { change: "-1.5%", direction: "down", name: "Churn", value: "3.1%" },
  ],
  theme: defaultTheme,
} satisfies DataTableChangeIndicatorProps;
