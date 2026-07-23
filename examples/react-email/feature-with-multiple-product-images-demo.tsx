import { FeatureWithMultipleProductImages } from "@/registry/bases/react-email/ui/marketing/feature/feature-with-multiple-product-images";
import type { FeatureWithMultipleProductImagesVariant } from "@/registry/bases/react-email/ui/marketing/feature/feature-with-multiple-product-images";

export default function FeatureWithMultipleProductImagesDemo({
  variant,
}: {
  variant?: FeatureWithMultipleProductImagesVariant;
}) {
  return (
    <FeatureWithMultipleProductImages
      {...FeatureWithMultipleProductImages.PreviewProps}
      variant={variant ?? FeatureWithMultipleProductImages.PreviewProps.variant}
    />
  );
}
