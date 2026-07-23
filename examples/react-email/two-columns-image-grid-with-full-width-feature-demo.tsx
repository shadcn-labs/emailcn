import { TwoColumnsImageGridWithFullWidthFeature } from "@/registry/bases/react-email/ui/marketing/images/2-columns-image-grid-with-full-width-feature";
import type { TwoColumnsImageGridWithFullWidthFeatureVariant } from "@/registry/bases/react-email/ui/marketing/images/2-columns-image-grid-with-full-width-feature";

export default function TwoColumnsImageGridWithFullWidthFeatureDemo({
  variant,
}: {
  variant?: TwoColumnsImageGridWithFullWidthFeatureVariant;
}) {
  return (
    <TwoColumnsImageGridWithFullWidthFeature
      {...TwoColumnsImageGridWithFullWidthFeature.PreviewProps}
      variant={
        variant ?? TwoColumnsImageGridWithFullWidthFeature.PreviewProps.variant
      }
    />
  );
}
