import { Grid } from "@/registry/bases/mjml-react/ui/ui-elements/grids/grid";

export default function OneColumnGridDemo() {
  return (
    <Grid
      {...Grid.PreviewProps}
      cells={["Full width content spanning the entire row."]}
      layout="1"
    />
  );
}
