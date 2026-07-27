import { MilestoneStats } from "@/registry/bases/mjml-react/components/marketing/stats/milestone-stats";
import { defaultTheme } from "@/registry/themes/default";

export default function MilestoneStatsDemo() {
  return (
    <MilestoneStats
      variant="default"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
