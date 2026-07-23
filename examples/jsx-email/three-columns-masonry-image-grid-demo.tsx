import { ThreeColumnsMasonryImageGrid } from "@/registry/bases/jsx-email/ui/marketing/images/3-columns-masonry-image-grid";
import type { ThreeColumnsMasonryImageGridVariant } from "@/registry/bases/jsx-email/ui/marketing/images/3-columns-masonry-image-grid";

export default function ThreeColumnsMasonryImageGridDemo({
  variant,
}: {
  variant?: ThreeColumnsMasonryImageGridVariant;
}) {
  return (
    <ThreeColumnsMasonryImageGrid
      {...ThreeColumnsMasonryImageGrid.PreviewProps}
      variant={variant ?? ThreeColumnsMasonryImageGrid.PreviewProps.variant}
    />
  );
}
