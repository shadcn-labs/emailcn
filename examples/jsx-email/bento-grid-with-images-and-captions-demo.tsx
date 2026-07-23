import type { ComponentProps } from "react";

import { BentoGridWithImagesAndCaptions } from "@/registry/bases/jsx-email/ui/marketing/bento-grids/bento-grid-with-images-and-captions";

export default function BentoGridWithImagesAndCaptionsDemo({
  variant,
}: {
  variant?: ComponentProps<typeof BentoGridWithImagesAndCaptions>["variant"];
}) {
  return (
    <BentoGridWithImagesAndCaptions
      {...BentoGridWithImagesAndCaptions.PreviewProps}
      variant={variant}
    />
  );
}
