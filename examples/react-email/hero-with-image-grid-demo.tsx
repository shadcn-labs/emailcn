import type { ComponentProps } from "react";

import { HeroWithImageGrid } from "@/registry/bases/react-email/ui/marketing/hero/hero-with-image-grid";

export default function HeroWithImageGridDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithImageGrid>["variant"];
}) {
  return (
    <HeroWithImageGrid
      {...HeroWithImageGrid.PreviewProps}
      variant={variant ?? HeroWithImageGrid.PreviewProps.variant}
    />
  );
}
