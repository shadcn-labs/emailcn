import { FullWidthImage } from "@/registry/bases/mjml-react/components/marketing/images/full-width-image";
import { defaultTheme } from "@/registry/themes/default";

export default function FullWidthImageDemo() {
  return (
    <FullWidthImage
      overlay={false}
      frame="none"
      frameStyle="padding"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
