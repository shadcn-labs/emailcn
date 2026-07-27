import { CollectionStats } from "@/registry/bases/jsx-email/components/marketing/stats/collection-stats";

export default function CollectionStatsLayoutBentoBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="bento"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
