import { CollectionStats } from "@/registry/bases/mjml-react/components/marketing/stats/collection-stats";
import { emailAsset } from "@/registry/email-assets";

export default function CollectionStatsLayoutRowBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="row"
      backgroundImage={{
        alt: "Background",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
    />
  );
}
