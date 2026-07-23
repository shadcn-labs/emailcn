import type { ComponentProps } from "react";

import { BentoGridWith3ColumnsAndPaddedImages } from "@/registry/bases/mjml-react/ui/marketing/bento-grids/bento-grid-with-3-columns-and-padded-images";

export default function BentoGridWith3ColumnsAndPaddedImagesDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWith3ColumnsAndPaddedImages
  >["variant"];
}) {
  return (
    <BentoGridWith3ColumnsAndPaddedImages
      {...BentoGridWith3ColumnsAndPaddedImages.PreviewProps}
      variant={variant}
    />
  );
}
