import { BoxedOrderSummaryCardDetailsTotalTop } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-card-details-and-total-top";
import type { BoxedOrderSummaryCardDetailsTotalTopProps } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-card-details-and-total-top";

export default function BoxedOrderSummaryCardDetailsTotalTopDemo({
  variant,
}: Pick<BoxedOrderSummaryCardDetailsTotalTopProps, "variant">) {
  return (
    <BoxedOrderSummaryCardDetailsTotalTop
      {...BoxedOrderSummaryCardDetailsTotalTop.PreviewProps}
      variant={
        variant ?? BoxedOrderSummaryCardDetailsTotalTop.PreviewProps.variant
      }
    />
  );
}
