import { TallBackgroundImagesFeature } from "@/registry/bases/jsx-email/components/marketing/feature/tall-background-images-feature";
import { defaultTheme } from "@/registry/themes/default";

export default function TallBackgroundImagesFeatureDemo() {
  return (
    <TallBackgroundImagesFeature
      logoPosition="top-left"
      titleWidth="split"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
