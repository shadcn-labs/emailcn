import type { ComponentProps } from "react";

import { HeroAlignedOverlay } from "@/registry/bases/jsx-email/ui/marketing/hero/hero-aligned-overlay";

export default function HeroAlignedOverlayDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroAlignedOverlay>["variant"];
}) {
  return (
    <HeroAlignedOverlay
      {...HeroAlignedOverlay.PreviewProps}
      variant={variant ?? HeroAlignedOverlay.PreviewProps.variant}
    />
  );
}
