import { ThreeColumnsImageGridWithFullWidthFeature } from "@/registry/bases/react-email/ui/marketing/images/3-columns-image-grid-with-full-width-feature";
import type { ThreeColumnsImageGridWithFullWidthFeatureVariant } from "@/registry/bases/react-email/ui/marketing/images/3-columns-image-grid-with-full-width-feature";

export default function ThreeColumnsImageGridWithFullWidthFeatureDemo({
  variant,
}: {
  variant?: ThreeColumnsImageGridWithFullWidthFeatureVariant;
}) {
  return (
    <ThreeColumnsImageGridWithFullWidthFeature
      {...ThreeColumnsImageGridWithFullWidthFeature.PreviewProps}
      variant={
        variant ??
        ThreeColumnsImageGridWithFullWidthFeature.PreviewProps.variant
      }
    />
  );
}
