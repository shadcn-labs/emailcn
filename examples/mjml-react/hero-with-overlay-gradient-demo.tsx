import type { ComponentProps } from "react";

import { HeroWithOverlayGradient } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-with-overlay-gradient";

export default function HeroWithOverlayGradientDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithOverlayGradient>["variant"];
}) {
  return (
    <HeroWithOverlayGradient
      {...HeroWithOverlayGradient.PreviewProps}
      variant={variant ?? HeroWithOverlayGradient.PreviewProps.variant}
    />
  );
}
