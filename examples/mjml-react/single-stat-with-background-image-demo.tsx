import { SingleStatWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/stats/single-stat-with-background-image";
import type { SingleStatWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/stats/single-stat-with-background-image";

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
