import { StackedStats } from "@/registry/bases/jsx-email/components/marketing/stats/stacked-stats";
import { defaultTheme } from "@/registry/themes/default";

export default function StackedStatsDemo() {
  return (
    <StackedStats
      variant="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
