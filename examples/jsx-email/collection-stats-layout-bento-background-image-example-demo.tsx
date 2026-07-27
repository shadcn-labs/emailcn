import { CollectionStats } from "@/registry/bases/jsx-email/components/marketing/stats/collection-stats";
import { emailAsset } from "@/registry/email-assets";

export default function CollectionStatsLayoutBentoBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="bento"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
