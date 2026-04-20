import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import CtaBanner from "@/registry/bases/mjml-react/ui/cta-banner";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function CtaBannerDemo() {
  return (
    <MjmlEmailDocument preview="cta-banner" theme={defaultTheme}>
      <CtaBanner {...CtaBanner.PreviewProps} />
    </MjmlEmailDocument>
  );
}
