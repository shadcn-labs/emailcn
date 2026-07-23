import type { ComponentProps } from "react";

import { HeroOverlayedSplit } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-overlayed-split";

export default function HeroOverlayedSplitDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroOverlayedSplit>["variant"];
}) {
  return (
    <HeroOverlayedSplit
      {...HeroOverlayedSplit.PreviewProps}
      variant={variant ?? HeroOverlayedSplit.PreviewProps.variant}
    />
  );
}
