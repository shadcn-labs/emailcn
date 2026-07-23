import { CouponsWithCenteredText } from "@/registry/bases/mjml-react/ui/marketing/coupons/coupons-with-centered-text";
import type { CouponsWithCenteredTextVariant } from "@/registry/bases/mjml-react/ui/marketing/coupons/coupons-with-centered-text";

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
