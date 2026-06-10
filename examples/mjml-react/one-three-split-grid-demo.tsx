import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function OneThreeSplitGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Sidebar", "Main content area"]}
      layout="1-3"
    />
  );
}
