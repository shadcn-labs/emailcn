import { DataTable } from "@/registry/bases/jsx-email/ui/ui-elements/data-tables/data-table";

export default function DataTableThreeColumnsDemo() {
  return (
    <DataTable
      columns={[
        { header: "Product", key: "product" },
        { align: "center", header: "Qty", key: "quantity" },
        { align: "right", header: "Total", key: "total" },
      ]}
      rows={[
        { product: "Desk lamp", quantity: 2, total: "$120" },
        { product: "Chair", quantity: 1, total: "$280" },
      ]}
    />
  );
}
