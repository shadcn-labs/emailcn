import { Grid } from "@/registry/bases/react-email/components/ui-elements/grids/grid";
import { defaultTheme } from "@/registry/themes/default";

export default function GridDemo() {
  return (
    <Grid
      variant="two-columns"
      align="center"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
