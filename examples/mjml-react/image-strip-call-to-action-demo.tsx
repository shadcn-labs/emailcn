import { ImageStripCallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/image-strip-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function ImageStripCallToActionDemo() {
  return (
    <ImageStripCallToAction
      placement="right"
      width="boxed"
      theme={defaultTheme}
    />
  );
}
