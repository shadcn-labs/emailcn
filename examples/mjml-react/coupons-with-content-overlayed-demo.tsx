import { CouponsWithContentOverlayed } from "@/registry/bases/mjml-react/ui/marketing/coupons/coupons-with-content-overlayed";
import type { CouponsWithContentOverlayedVariant } from "@/registry/bases/mjml-react/ui/marketing/coupons/coupons-with-content-overlayed";

export default function CouponsWithContentOverlayedDemo({
  variant,
}: {
  variant?: CouponsWithContentOverlayedVariant;
}) {
  return (
    <CouponsWithContentOverlayed
      {...CouponsWithContentOverlayed.PreviewProps}
      variant={variant ?? CouponsWithContentOverlayed.PreviewProps.variant}
    />
  );
}
