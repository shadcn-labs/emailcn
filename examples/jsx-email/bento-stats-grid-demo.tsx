import { BentoStatsGrid } from "@/registry/bases/jsx-email/components/marketing/bento-grids/bento-stats-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function BentoStatsGridDemo() {
  return (
    <BentoStatsGrid
      variant="even-split"
      style="chart"
      placement="image-top-right"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
