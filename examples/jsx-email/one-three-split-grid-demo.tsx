import { Grid } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";

export default function OneThreeSplitGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Sidebar", "Main content area"]}
      layout="1-3"
    />
  );
}
