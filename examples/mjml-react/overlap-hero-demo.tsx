import { OverlapHero } from "@/registry/bases/mjml-react/components/marketing/hero/overlap-hero";
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
