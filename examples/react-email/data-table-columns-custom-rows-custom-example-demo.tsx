import { DataTable } from "@/registry/bases/react-email/components/ui-elements/data-tables/data-table";

export default function DataTableColumnsCustomRowsCustomExampleDemo() {
  return (
    <DataTable
      columns={[
        { header: "Name", key: "name" },
        { align: "right", header: "Status", key: "status" },
      ]}
      rows={[
        { name: "Ada", status: "Active" },
        { name: "Linus", status: "Pending" },
      ]}
    />
  );
}
