import { TwoColumnsImageGrid } from "@/registry/bases/react-email/ui/marketing/images/2-columns-image-grid";
import type { TwoColumnsImageGridVariant } from "@/registry/bases/react-email/ui/marketing/images/2-columns-image-grid";

export default function TwoColumnsImageGridDemo({
  variant,
}: {
  variant?: TwoColumnsImageGridVariant;
}) {
  return (
    <TwoColumnsImageGrid
      {...TwoColumnsImageGrid.PreviewProps}
      variant={variant ?? TwoColumnsImageGrid.PreviewProps.variant}
    />
  );
}
