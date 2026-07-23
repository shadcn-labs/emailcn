import { SingleStatWithBackgroundImage } from "@/registry/bases/react-email/ui/marketing/stats/single-stat-with-background-image";
import type { SingleStatWithBackgroundImageVariant } from "@/registry/bases/react-email/ui/marketing/stats/single-stat-with-background-image";

export default function SingleStatWithBackgroundImageDemo({
  variant,
}: {
  variant?: SingleStatWithBackgroundImageVariant;
}) {
  return (
    <SingleStatWithBackgroundImage
      {...SingleStatWithBackgroundImage.PreviewProps}
      variant={variant ?? SingleStatWithBackgroundImage.PreviewProps.variant}
    />
  );
}
