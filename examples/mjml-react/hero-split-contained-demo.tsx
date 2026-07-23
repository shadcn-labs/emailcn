import type { ComponentProps } from "react";

import { HeroSplitContained } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-split-contained";

export default function HeroSplitContainedDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroSplitContained>["variant"];
}) {
  return (
    <HeroSplitContained
      {...HeroSplitContained.PreviewProps}
      variant={variant ?? HeroSplitContained.PreviewProps.variant}
    />
  );
}
