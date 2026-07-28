import { TallBackgroundImagesFeature } from "@/registry/bases/mjml-react/components/marketing/feature/tall-background-images-feature";
import { defaultTheme } from "@/registry/themes/default";

export default function TallBackgroundImagesFeatureDemo() {
  return (
    <TallBackgroundImagesFeature
      logoPosition="top-left"
      titleWidth="split"
      theme={defaultTheme}
    />
  );
}
