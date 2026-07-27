import { SpotlightStats } from "@/registry/bases/mjml-react/components/marketing/stats/spotlight-stats";

export default function SpotlightStatsPositionBottomLeftBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="bottom-left"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
