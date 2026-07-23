import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function ThreeColumnsGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={["Feature one", "Feature two", "Feature three"]}
      variant="three-columns"
    />
  );
}
