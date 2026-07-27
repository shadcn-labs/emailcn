import { CollectionStats } from "@/registry/bases/mjml-react/components/marketing/stats/collection-stats";

export default function CollectionStatsLayoutRowBackgroundImageExampleDemo() {
  return (
    <CollectionStats
      layout="row"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
