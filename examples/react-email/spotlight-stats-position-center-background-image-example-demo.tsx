import { SpotlightStats } from "@/registry/bases/react-email/components/marketing/stats/spotlight-stats";

export default function SpotlightStatsPositionCenterBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="center"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
