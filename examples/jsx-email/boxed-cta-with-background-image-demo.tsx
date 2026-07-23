import { BoxedCTAWithBackgroundImage } from "@/registry/bases/jsx-email/ui/marketing/cta/boxed-cta-with-background-image";
import type { BoxedCTAWithBackgroundImageVariant } from "@/registry/bases/jsx-email/ui/marketing/cta/boxed-cta-with-background-image";

export default function BoxedCTAWithBackgroundImageDemo({
  variant,
}: {
  variant?: BoxedCTAWithBackgroundImageVariant;
}) {
  return (
    <BoxedCTAWithBackgroundImage
      {...BoxedCTAWithBackgroundImage.PreviewProps}
      variant={variant ?? BoxedCTAWithBackgroundImage.PreviewProps.variant}
    />
  );
}
