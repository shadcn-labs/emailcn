import { FullWidthImageWithOverlay } from "@/registry/bases/mjml-react/ui/marketing/images/full-width-image-with-overlay";
import type { FullWidthImageWithOverlayVariant } from "@/registry/bases/mjml-react/ui/marketing/images/full-width-image-with-overlay";

export default function FullWidthImageWithOverlayDemo({
  variant,
}: {
  variant?: FullWidthImageWithOverlayVariant;
}) {
  return (
    <FullWidthImageWithOverlay
      {...FullWidthImageWithOverlay.PreviewProps}
      variant={variant ?? FullWidthImageWithOverlay.PreviewProps.variant}
    />
  );
}
