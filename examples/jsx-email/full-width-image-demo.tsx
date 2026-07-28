import { FullWidthImage } from "@/registry/bases/jsx-email/components/marketing/images/full-width-image";
import { defaultTheme } from "@/registry/themes/default";

export default function FullWidthImageDemo() {
  return (
    <FullWidthImage
      overlay
      frame="none"
      frameStyle="padding"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
