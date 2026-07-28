import { SplitHero } from "@/registry/bases/mjml-react/components/marketing/hero/split-hero";
import { defaultTheme } from "@/registry/themes/default";

export default function SplitHeroDemo() {
  return (
    <SplitHero
      treatment="contained"
      imagePosition="right"
      theme={defaultTheme}
    />
  );
}
