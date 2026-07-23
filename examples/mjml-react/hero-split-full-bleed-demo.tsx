import type { ComponentProps } from "react";

import { HeroSplitFullBleed } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-split-full-bleed";

export default function HeroSplitFullBleedDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroSplitFullBleed>["variant"];
}) {
  return (
    <HeroSplitFullBleed
      {...HeroSplitFullBleed.PreviewProps}
      variant={variant}
    />
  );
}
