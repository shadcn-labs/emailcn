import { Grid } from "@/registry/bases/react-email/ui/ui-elements/grids/grid";

export default function TwoColumnsGridVariantRightExampleDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      align="right"
      cells={[
        "Feature one description with key benefits.",
        "Feature two description with key benefits.",
      ]}
      variant="two-columns"
    />
  );
}
