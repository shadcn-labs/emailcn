import { FeatureWithProductImage } from "@/registry/bases/mjml-react/ui/marketing/feature/feature-with-product-image";
import type { FeatureWithProductImageVariant } from "@/registry/bases/mjml-react/ui/marketing/feature/feature-with-product-image";

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
