import { CardCoupons } from "@/registry/bases/mjml-react/ui/marketing/coupons/card-coupons";
import type { CardCouponsVariant } from "@/registry/bases/mjml-react/ui/marketing/coupons/card-coupons";

export default function CardCouponsDemo({
  variant,
}: {
  variant?: CardCouponsVariant;
}) {
  return (
    <CardCoupons
      {...CardCoupons.PreviewProps}
      variant={variant ?? CardCoupons.PreviewProps.variant}
    />
  );
}
