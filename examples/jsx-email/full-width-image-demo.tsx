import { FullWidthImage } from "@/registry/bases/jsx-email/ui/marketing/images/full-width-image";
import type { FullWidthImageVariant } from "@/registry/bases/jsx-email/ui/marketing/images/full-width-image";

export default function FullWidthImageDemo({
  variant,
}: {
  variant?: FullWidthImageVariant;
}) {
  return (
    <FullWidthImage
      {...FullWidthImage.PreviewProps}
      variant={variant ?? FullWidthImage.PreviewProps.variant}
    />
  );
}
