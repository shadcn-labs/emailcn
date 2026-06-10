import { Grid } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";

export default function TwoColumnsGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={[
        "Feature one description with key benefits.",
        "Feature two description with key benefits.",
      ]}
      layout="2"
    />
  );
}
