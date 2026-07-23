import { FeatureWithLargePortraitImage } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-large-portrait-image";
import type { FeatureWithLargePortraitImageVariant } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-large-portrait-image";

export default function FeatureWithLargePortraitImageDemo({
  variant,
}: {
  variant?: FeatureWithLargePortraitImageVariant;
}) {
  return (
    <FeatureWithLargePortraitImage
      {...FeatureWithLargePortraitImage.PreviewProps}
      variant={variant ?? FeatureWithLargePortraitImage.PreviewProps.variant}
    />
  );
}
