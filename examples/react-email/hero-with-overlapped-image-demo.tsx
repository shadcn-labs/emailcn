import type { ComponentProps } from "react";

import { HeroWithOverlappedImage } from "@/registry/bases/react-email/ui/marketing/hero/hero-with-overlapped-image";

export default function HeroWithOverlappedImageDemo({
  variant,
}: {
  variant?: ComponentProps<typeof HeroWithOverlappedImage>["variant"];
}) {
  return (
    <HeroWithOverlappedImage
      {...HeroWithOverlappedImage.PreviewProps}
      variant={variant ?? HeroWithOverlappedImage.PreviewProps.variant}
    />
  );
}
