import { Grid } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";

export default function OneThreeSplitGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={[
        "Navigation sidebar links.",
        "Primary content area with detailed information.",
      ]}
      variant="one-three-split"
    />
  );
}
