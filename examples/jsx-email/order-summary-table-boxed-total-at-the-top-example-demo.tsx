import { OrderSummaryTable } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-table";

export default function OrderSummaryTableBoxedTotalAtTheTopDemo() {
  return (
    <OrderSummaryTable
      appearance="boxed"
      totalPosition="top"
      alignment="justified"
      filled
    />
  );
}
