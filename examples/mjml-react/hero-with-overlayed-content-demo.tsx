import type { ComponentProps } from "react";

import { HeroWithOverlayedContent } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-with-overlayed-content";

export default function HeroWithOverlayedContentDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithOverlayedContent>["variant"];
}) {
  return (
    <HeroWithOverlayedContent
      {...HeroWithOverlayedContent.PreviewProps}
      variant={variant ?? HeroWithOverlayedContent.PreviewProps.variant}
    />
  );
}
