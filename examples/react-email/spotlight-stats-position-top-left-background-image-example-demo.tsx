import { SpotlightStats } from "@/registry/bases/react-email/components/marketing/stats/spotlight-stats";

export default function SpotlightStatsPositionTopLeftBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="top-left"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
