import { CouponsWithCenteredText } from "@/registry/bases/react-email/ui/marketing/coupons/coupons-with-centered-text";
import type { CouponsWithCenteredTextVariant } from "@/registry/bases/react-email/ui/marketing/coupons/coupons-with-centered-text";

export default function CouponsWithCenteredTextDemo({
  variant,
}: {
  variant?: CouponsWithCenteredTextVariant;
}) {
  return (
    <CouponsWithCenteredText
      {...CouponsWithCenteredText.PreviewProps}
      variant={variant ?? CouponsWithCenteredText.PreviewProps.variant}
    />
  );
}
