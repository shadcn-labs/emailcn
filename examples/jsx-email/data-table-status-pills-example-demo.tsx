import { DataTable } from "@/registry/bases/jsx-email/components/ui-elements/data-tables/data-table";

export default function DataTableStatusPillsDemo() {
  return (
    <DataTable
      variant="status-pills"
      headers={["User", "Status"]}
      rows={[
        {
          name: "Alice Johnson",
          status: "Active",
          statusVariant: "active",
        },
        {
          name: "Bob Smith",
          status: "Pending",
          statusVariant: "pending",
        },
        {
          name: "Carol Davis",
          status: "Cancelled",
          statusVariant: "cancelled",
        },
      ]}
    />
  );
}
