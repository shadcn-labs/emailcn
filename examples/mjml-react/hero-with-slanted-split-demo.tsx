import type { ComponentProps } from "react";

import { HeroWithSlantedSplit } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-with-slanted-split";

export default function HeroWithSlantedSplitDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithSlantedSplit>["variant"];
}) {
  return (
    <HeroWithSlantedSplit
      {...HeroWithSlantedSplit.PreviewProps}
      variant={variant ?? HeroWithSlantedSplit.PreviewProps.variant}
    />
  );
}
