import type { ComponentProps } from "react";

import { BentoGridWithImagesAndDetails } from "@/registry/bases/react-email/ui/marketing/bento-grids/bento-grid-with-images-and-details";

export default function BentoGridWithImagesAndDetailsDemo({
  variant,
}: {
  variant?: ComponentProps<typeof BentoGridWithImagesAndDetails>["variant"];
}) {
  return (
    <BentoGridWithImagesAndDetails
      {...BentoGridWithImagesAndDetails.PreviewProps}
      variant={variant}
    />
  );
}
