import { SpotlightStats } from "@/registry/bases/mjml-react/components/marketing/stats/spotlight-stats";
import { emailAsset } from "@/registry/email-assets";

export default function SpotlightStatsPositionTopRightBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="top-right"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
