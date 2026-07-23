import { Grid } from "@/registry/bases/jsx-email/ui/ui-elements/grids/grid";

export default function TwoColumnsGridVariantLeftExampleDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      align="left"
      cells={[
        "Feature one description with key benefits.",
        "Feature two description with key benefits.",
      ]}
      variant="two-columns"
    />
  );
}
