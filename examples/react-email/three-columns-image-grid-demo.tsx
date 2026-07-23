import { ThreeColumnsImageGrid } from "@/registry/bases/react-email/ui/marketing/images/3-columns-image-grid";
import type { ThreeColumnsImageGridVariant } from "@/registry/bases/react-email/ui/marketing/images/3-columns-image-grid";

export default function ThreeColumnsImageGridDemo({
  variant,
}: {
  variant?: ThreeColumnsImageGridVariant;
}) {
  return (
    <ThreeColumnsImageGrid
      {...ThreeColumnsImageGrid.PreviewProps}
      variant={variant ?? ThreeColumnsImageGrid.PreviewProps.variant}
    />
  );
}
