import { SpotlightStats } from "@/registry/bases/jsx-email/components/marketing/stats/spotlight-stats";

export default function SpotlightStatsPositionTopRightBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="top-right"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
