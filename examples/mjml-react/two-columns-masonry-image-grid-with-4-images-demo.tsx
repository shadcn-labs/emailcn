import { TwoColumnsMasonryImageGridWith4Images } from "@/registry/bases/mjml-react/ui/marketing/images/2-columns-masonry-image-grid-with-4-images";
import type { TwoColumnsMasonryImageGridWith4ImagesVariant } from "@/registry/bases/mjml-react/ui/marketing/images/2-columns-masonry-image-grid-with-4-images";

export default function TwoColumnsMasonryImageGridWith4ImagesDemo({
  variant,
}: {
  variant?: TwoColumnsMasonryImageGridWith4ImagesVariant;
}) {
  return (
    <TwoColumnsMasonryImageGridWith4Images
      {...TwoColumnsMasonryImageGridWith4Images.PreviewProps}
      variant={
        variant ?? TwoColumnsMasonryImageGridWith4Images.PreviewProps.variant
      }
    />
  );
}
