import { ImageGridHero } from "@/registry/bases/mjml-react/components/marketing/hero/image-grid-hero";
import { defaultTheme } from "@/registry/themes/default";

export default function ImageGridHeroDemo() {
  return (
    <ImageGridHero
      imagePosition="bottom"
      offset={false}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
