import { OrderSummaryTable } from "@/registry/bases/jsx-email/components/ecommerce/order-summary/order-summary-table";
import { defaultTheme } from "@/registry/themes/default";

export default function OrderSummaryTableDemo() {
  return (
    <OrderSummaryTable
      appearance="bordered"
      totalPosition="bottom"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
