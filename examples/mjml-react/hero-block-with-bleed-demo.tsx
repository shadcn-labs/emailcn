import type { ComponentProps } from "react";

import { HeroBlockWithBleed } from "@/registry/bases/mjml-react/ui/marketing/hero/hero-block-with-bleed";

export default function HeroBlockWithBleedDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroBlockWithBleed>["variant"];
}) {
  return (
    <HeroBlockWithBleed
      {...HeroBlockWithBleed.PreviewProps}
      variant={variant ?? HeroBlockWithBleed.PreviewProps.variant}
    />
  );
}
