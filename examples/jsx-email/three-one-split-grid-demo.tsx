import { Grid } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";

export default function ThreeOneSplitGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={[
        "Main article content with rich details and media.",
        "Sidebar with related links and highlights.",
      ]}
      variant="three-one-split"
    />
  );
}
