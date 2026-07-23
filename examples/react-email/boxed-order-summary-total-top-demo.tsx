import { BoxedOrderSummaryTotalTop } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-total-top";
import type { BoxedOrderSummaryTotalTopProps } from "@/registry/bases/react-email/ui/ecommerce/order-summary/boxed-order-summary-with-total-top";

export default function BoxedOrderSummaryTotalTopDemo({
  variant,
}: Pick<BoxedOrderSummaryTotalTopProps, "variant">) {
  return (
    <BoxedOrderSummaryTotalTop
      {...BoxedOrderSummaryTotalTop.PreviewProps}
      variant={variant ?? BoxedOrderSummaryTotalTop.PreviewProps.variant}
    />
  );
}
