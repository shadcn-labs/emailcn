import { SplitHero } from "@/registry/bases/react-email/components/marketing/hero/split-hero";
import { defaultTheme } from "@/registry/themes/default";

export default function SplitHeroDemo() {
  return (
    <SplitHero
      treatment="contained"
      imagePosition="right"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
