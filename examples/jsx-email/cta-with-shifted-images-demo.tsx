import { CTAWithShiftedImages } from "@/registry/bases/jsx-email/ui/marketing/cta/cta-with-shifted-images";
import type { CTAWithShiftedImagesVariant } from "@/registry/bases/jsx-email/ui/marketing/cta/cta-with-shifted-images";

export default function CTAWithShiftedImagesDemo({
  variant,
}: {
  variant?: CTAWithShiftedImagesVariant;
}) {
  return (
    <CTAWithShiftedImages
      {...CTAWithShiftedImages.PreviewProps}
      variant={variant ?? CTAWithShiftedImages.PreviewProps.variant}
    />
  );
}
