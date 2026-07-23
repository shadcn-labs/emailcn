import { BoxedOrderSummaryCardDetailsTotalBottom } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-card-details-and-total-bottom";
import type { BoxedOrderSummaryCardDetailsTotalBottomProps } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-card-details-and-total-bottom";

export default function BoxedOrderSummaryCardDetailsTotalBottomDemo({
  variant,
}: Pick<BoxedOrderSummaryCardDetailsTotalBottomProps, "variant">) {
  return (
    <BoxedOrderSummaryCardDetailsTotalBottom
      {...BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps}
      variant={
        variant ?? BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps.variant
      }
    />
  );
}
