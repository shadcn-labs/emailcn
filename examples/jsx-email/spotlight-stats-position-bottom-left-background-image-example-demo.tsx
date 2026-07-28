import { SpotlightStats } from "@/registry/bases/jsx-email/components/marketing/stats/spotlight-stats";
import { emailAsset } from "@/registry/email-assets";

export default function SpotlightStatsPositionBottomLeftBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="bottom-left"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
