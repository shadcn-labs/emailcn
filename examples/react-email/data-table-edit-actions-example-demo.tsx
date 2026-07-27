import { DataTable } from "@/registry/bases/react-email/components/ui-elements/data-tables/data-table";

export default function DataTableEditActionsDemo() {
  return (
    <DataTable
      variant="edit-actions"
      headers={["User", "Department", ""]}
      rows={[
        {
          editHref: "#edit-1",
          name: "Alice Johnson",
          role: "Engineering",
        },
        { editHref: "#edit-2", name: "Bob Smith", role: "Marketing" },
        { editHref: "#edit-3", name: "Carol Davis", role: "Design" },
      ]}
    />
  );
}
