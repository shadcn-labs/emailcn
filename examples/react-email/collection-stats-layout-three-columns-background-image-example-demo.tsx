import { CollectionStats } from "@/registry/bases/react-email/components/marketing/stats/collection-stats";

export default function CollectionStatsLayoutThreeColumnsBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="three-columns"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
