import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function ThreeColumnsGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Column one", "Column two", "Column three"]}
      layout="3"
    />
  );
}
