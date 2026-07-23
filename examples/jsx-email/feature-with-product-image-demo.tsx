import { FeatureWithProductImage } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-product-image";
import type { FeatureWithProductImageVariant } from "@/registry/bases/jsx-email/ui/marketing/feature/feature-with-product-image";

export default function FeatureWithProductImageDemo({
  variant,
}: {
  variant?: FeatureWithProductImageVariant;
}) {
  return (
    <FeatureWithProductImage
      {...FeatureWithProductImage.PreviewProps}
      variant={variant ?? FeatureWithProductImage.PreviewProps.variant}
    />
  );
}
