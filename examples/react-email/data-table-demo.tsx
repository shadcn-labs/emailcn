import { DataTable } from "@/registry/bases/react-email/components/ui-elements/data-tables/data-table";
import { defaultTheme } from "@/registry/themes/default";

export default function DataTableDemo() {
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
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
