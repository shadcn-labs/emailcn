import { DataTable } from "@/registry/bases/react-email/components/ui-elements/data-tables/data-table";

export default function DataTableChangeIndicatorsDemo() {
  return (
    <DataTable
      variant="change-indicators"
      headers={["Metric", "Value", "Change"]}
      rows={[
        {
          change: "+8.2%",
          direction: "up",
          name: "Revenue",
          value: "$12.5K",
        },
        {
          change: "+2.1%",
          direction: "up",
          name: "Costs",
          value: "$4.2K",
        },
        {
          change: "-1.5%",
          direction: "down",
          name: "Churn",
          value: "3.1%",
        },
      ]}
    />
  );
}
