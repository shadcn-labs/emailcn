import { OrderSummaryBillingTop } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-top";
import type { OrderSummaryBillingTopProps } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-top";

export default function OrderSummaryBillingTopDemo({
  variant,
}: Pick<OrderSummaryBillingTopProps, "variant">) {
  return (
    <OrderSummaryBillingTop
      {...OrderSummaryBillingTop.PreviewProps}
      variant={variant ?? OrderSummaryBillingTop.PreviewProps.variant}
    />
  );
}
