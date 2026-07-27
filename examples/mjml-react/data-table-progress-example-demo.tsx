import { DataTable } from "@/registry/bases/mjml-react/components/ui-elements/data-tables/data-table";

export default function DataTableProgressDemo() {
  return (
    <DataTable
      variant="progress"
      headers={["Project", "Progress", "Budget"]}
      rows={[
        { label: "Website Redesign", progress: 90, value: "$12,000" },
        { label: "Mobile App", progress: 60, value: "$8,500" },
        { label: "Backend API", progress: 35, value: "$5,000" },
      ]}
    />
  );
}
