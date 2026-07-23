import { OrderSummaryBillingInline } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";
import type { OrderSummaryBillingInlineProps } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";

export default function OrderSummaryBillingInlineDemo({
  variant,
}: Pick<OrderSummaryBillingInlineProps, "variant">) {
  return (
    <OrderSummaryBillingInline
      {...OrderSummaryBillingInline.PreviewProps}
      variant={variant ?? OrderSummaryBillingInline.PreviewProps.variant}
    />
  );
}
