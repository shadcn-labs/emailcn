import { SpotlightStats } from "@/registry/bases/react-email/components/marketing/stats/spotlight-stats";
import { defaultTheme } from "@/registry/themes/default";

export default function SpotlightStatsDemo() {
  return (
    <SpotlightStats
      position="center"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
