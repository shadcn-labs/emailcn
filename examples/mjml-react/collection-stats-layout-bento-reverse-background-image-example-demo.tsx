import { CollectionStats } from "@/registry/bases/mjml-react/components/marketing/stats/collection-stats";
import { emailAsset } from "@/registry/email-assets";

export default function CollectionStatsLayoutBentoReverseBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="bento"
      reverse
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
