import type { ComponentProps } from "react";

import { HeroBlockOverlay } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-block-overlay";

export default function HeroBlockOverlayDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroBlockOverlay>["variant"];
}) {
  return (
    <HeroBlockOverlay
      {...HeroBlockOverlay.PreviewProps}
      variant={variant ?? HeroBlockOverlay.PreviewProps.variant}
    />
  );
}
