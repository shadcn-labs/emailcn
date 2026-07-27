import { CollageCallToAction } from "@/registry/bases/jsx-email/components/marketing/cta/collage-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function CollageCallToActionDemo() {
  return (
    <CollageCallToAction
      treatment="side"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
