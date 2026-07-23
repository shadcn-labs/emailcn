import { OrderSummaryBillingTop } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-top";

export default function OrderSummaryBillingTopVariantBasicExampleDemo() {
  return (
    <OrderSummaryBillingTop
      {...OrderSummaryBillingTop.PreviewProps}
      variant="basic"
    />
  );
}
