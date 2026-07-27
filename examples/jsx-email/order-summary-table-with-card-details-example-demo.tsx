import { OrderSummaryTable } from "@/registry/bases/jsx-email/components/ecommerce/order-summary/order-summary-table";

export default function OrderSummaryTableWithCardDetailsDemo() {
  return (
    <OrderSummaryTable
      appearance="bordered"
      totalPosition="bottom"
      cardDetails
    />
  );
}
