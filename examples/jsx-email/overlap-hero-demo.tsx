import { OverlapHero } from "@/registry/bases/jsx-email/components/marketing/hero/overlap-hero";
import { defaultTheme } from "@/registry/themes/default";

export default function OverlapHeroDemo() {
  return (
    <OverlapHero
      target="content"
      direction="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
