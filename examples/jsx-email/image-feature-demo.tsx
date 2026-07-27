import { ImageFeature } from "@/registry/bases/jsx-email/components/marketing/feature/image-feature";
import { defaultTheme } from "@/registry/themes/default";

export default function ImageFeatureDemo() {
  return (
    <ImageFeature
      placement="right"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
