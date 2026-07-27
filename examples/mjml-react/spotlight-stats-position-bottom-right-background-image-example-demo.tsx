import { SpotlightStats } from "@/registry/bases/mjml-react/components/marketing/stats/spotlight-stats";

export default function SpotlightStatsPositionBottomRightBackgroundImageExampleDemo() {
  return (
    <SpotlightStats
      position="bottom-right"
      backgroundImage={{
        alt: "Background",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
    />
  );
}
