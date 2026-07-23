import { FeatureWithFullTitleAndTallBackgroundImages } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-full-title-and-tall-background-images";
import type { FeatureWithFullTitleAndTallBackgroundImagesVariant } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-full-title-and-tall-background-images";

export default function FeatureWithFullTitleAndTallBackgroundImagesDemo({
  variant,
}: {
  variant?: FeatureWithFullTitleAndTallBackgroundImagesVariant;
}) {
  return (
    <FeatureWithFullTitleAndTallBackgroundImages
      {...FeatureWithFullTitleAndTallBackgroundImages.PreviewProps}
      variant={
        variant ??
        FeatureWithFullTitleAndTallBackgroundImages.PreviewProps.variant
      }
    />
  );
}
