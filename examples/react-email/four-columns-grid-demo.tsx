import { Grid } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";
import type { GridAlign } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";

export default function FourColumnsGridDemo({
  variant = "center",
}: {
  variant?: GridAlign;
}) {
  return (
    <Grid
      {...Grid.PreviewProps}
      align={variant}
      cells={["Product", "Price", "Quantity", "Total"]}
      variant="four-columns"
    />
  );
}
