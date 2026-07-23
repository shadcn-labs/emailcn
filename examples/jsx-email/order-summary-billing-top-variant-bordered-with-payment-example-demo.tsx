import { OrderSummaryBillingTop } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-top";

export default function OrderSummaryBillingTopVariantBorderedWithPaymentExampleDemo() {
  return (
    <OrderSummaryBillingTop
      {...OrderSummaryBillingTop.PreviewProps}
      variant="bordered-with-payment"
    />
  );
}
