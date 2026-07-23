import { FeatureWithDoubleTallBackgroundImages } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-double-tall-background-images";
import type { FeatureWithDoubleTallBackgroundImagesVariant } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-double-tall-background-images";

export default function FeatureWithDoubleTallBackgroundImagesDemo({
  variant,
}: {
  variant?: FeatureWithDoubleTallBackgroundImagesVariant;
}) {
  return (
    <FeatureWithDoubleTallBackgroundImages
      {...FeatureWithDoubleTallBackgroundImages.PreviewProps}
      variant={
        variant ?? FeatureWithDoubleTallBackgroundImages.PreviewProps.variant
      }
    />
  );
}
