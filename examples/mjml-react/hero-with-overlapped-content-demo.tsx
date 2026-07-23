import type { ComponentProps } from "react";

import { HeroWithOverlappedContent } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-with-overlapped-content";

export default function HeroWithOverlappedContentDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithOverlappedContent>["variant"];
}) {
  return (
    <HeroWithOverlappedContent
      {...HeroWithOverlappedContent.PreviewProps}
      variant={variant ?? HeroWithOverlappedContent.PreviewProps.variant}
    />
  );
}
