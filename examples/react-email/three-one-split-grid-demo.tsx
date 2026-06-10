import { Grid } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";

export default function ThreeOneSplitGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Main content", "Sidebar"]}
      layout="3-1"
    />
  );
}
