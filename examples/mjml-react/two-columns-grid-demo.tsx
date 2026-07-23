import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function TwoColumnsGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={[
        "Feature one description with key benefits.",
        "Feature two description with key benefits.",
      ]}
      variant="two-columns"
    />
  );
}
