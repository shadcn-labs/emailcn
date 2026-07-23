import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function OneColumnGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={["Single column full-width layout for headers or hero sections."]}
      variant="one-column"
    />
  );
}
