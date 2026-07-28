import { SpotlightStats } from "@/registry/bases/jsx-email/components/marketing/stats/spotlight-stats";
import { emailAsset } from "@/registry/email-assets";

export default function SpotlightStatsPositionCenterBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="center"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
