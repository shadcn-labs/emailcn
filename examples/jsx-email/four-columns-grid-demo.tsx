import { Grid } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";

export default function FourColumnsGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Col 1", "Col 2", "Col 3", "Col 4"]}
      layout="4"
    />
  );
}
