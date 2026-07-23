import type { ComponentProps } from "react";

import { BentoGridWith3ColumnsAndFlushImages } from "@/registry/bases/react-email/ui/marketing/bento-grids/bento-grid-with-3-columns-and-flush-images";

export default function BentoGridWith3ColumnsAndFlushImagesDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWith3ColumnsAndFlushImages
  >["variant"];
}) {
  return (
    <BentoGridWith3ColumnsAndFlushImages
      {...BentoGridWith3ColumnsAndFlushImages.PreviewProps}
      variant={variant}
    />
  );
}
