import { TwoColumnsMasonryImageGridWith3Images } from "@/registry/bases/react-email/ui/marketing/images/2-columns-masonry-image-grid-with-3-images";
import type { TwoColumnsMasonryImageGridWith3ImagesVariant } from "@/registry/bases/react-email/ui/marketing/images/2-columns-masonry-image-grid-with-3-images";

export default function TwoColumnsMasonryImageGridWith3ImagesDemo({
  variant,
}: {
  variant?: TwoColumnsMasonryImageGridWith3ImagesVariant;
}) {
  return (
    <TwoColumnsMasonryImageGridWith3Images
      {...TwoColumnsMasonryImageGridWith3Images.PreviewProps}
      variant={
        variant ?? TwoColumnsMasonryImageGridWith3Images.PreviewProps.variant
      }
    />
  );
}
