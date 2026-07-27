import { CollectionStats } from "@/registry/bases/mjml-react/components/marketing/stats/collection-stats";

export default function CollectionStatsLayoutBentoReverseBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="bento"
      reverse
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
