import { ThreeColumnsMasonryImageGridWithFullWidthFeature } from "@/registry/bases/mjml-react/ui/marketing/images/3-columns-masonry-image-grid-with-full-width-feature";
import type { ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant } from "@/registry/bases/mjml-react/ui/marketing/images/3-columns-masonry-image-grid-with-full-width-feature";

export default function ThreeColumnsMasonryImageGridWithFullWidthFeatureDemo({
  variant,
}: {
  variant?: ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant;
}) {
  return (
    <ThreeColumnsMasonryImageGridWithFullWidthFeature
      {...ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps}
      variant={
        variant ??
        ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps.variant
      }
    />
  );
}
