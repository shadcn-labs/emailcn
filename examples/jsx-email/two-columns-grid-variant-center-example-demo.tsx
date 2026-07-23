import { Grid } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";

export default function TwoColumnsGridVariantCenterExampleDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      align="center"
      cells={[
        "Feature one description with key benefits.",
        "Feature two description with key benefits.",
      ]}
      variant="two-columns"
    />
  );
}
