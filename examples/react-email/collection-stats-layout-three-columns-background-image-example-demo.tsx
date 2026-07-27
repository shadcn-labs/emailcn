import { CollectionStats } from "@/registry/bases/react-email/components/marketing/stats/collection-stats";
import { emailAsset } from "@/registry/email-assets";

export default function CollectionStatsLayoutThreeColumnsBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="three-columns"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
