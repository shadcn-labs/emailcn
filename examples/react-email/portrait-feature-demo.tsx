import { PortraitFeature } from "@/registry/bases/react-email/components/marketing/feature/portrait-feature";
import { defaultTheme } from "@/registry/themes/default";

export default function PortraitFeatureDemo() {
  return (
    <PortraitFeature
      placement="right"
      contentPosition="top"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
