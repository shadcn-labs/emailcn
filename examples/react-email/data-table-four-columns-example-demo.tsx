import { DataTable } from "@/registry/bases/react-email/components/ui-elements/data-tables/data-table";

export default function DataTableFourColumnsDemo() {
  return (
    <DataTable
      variant="four-columns"
      headers={["Product", "Category", "Stock", "Price"]}
      rows={[
        ["Widget A", "Electronics", "In Stock", "$29.00"],
        ["Widget B", "Accessories", "Low Stock", "$49.00"],
        ["Widget C", "Home", "Out of Stock", "$19.00"],
      ]}
    />
  );
}
