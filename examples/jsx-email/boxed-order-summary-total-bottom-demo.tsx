import { BoxedOrderSummaryTotalBottom } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/boxed-order-summary-with-total-bottom";
import type { BoxedOrderSummaryTotalBottomProps } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/boxed-order-summary-with-total-bottom";

export default function BoxedOrderSummaryTotalBottomDemo({
  variant,
}: Pick<BoxedOrderSummaryTotalBottomProps, "variant">) {
  return (
    <BoxedOrderSummaryTotalBottom
      {...BoxedOrderSummaryTotalBottom.PreviewProps}
      variant={variant ?? BoxedOrderSummaryTotalBottom.PreviewProps.variant}
    />
  );
}
