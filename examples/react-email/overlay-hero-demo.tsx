import { OverlayHero } from "@/registry/bases/react-email/components/marketing/hero/overlay-hero";
import { defaultTheme } from "@/registry/themes/default";

export default function OverlayHeroDemo() {
  return (
    <OverlayHero
      treatment="block"
      position="center-left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
