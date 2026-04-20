import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import Divider from "@/registry/bases/mjml-react/ui/divider";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function DividerDemo() {
  return (
    <MjmlEmailDocument preview="divider" theme={defaultTheme}>
      <Divider {...Divider.PreviewProps} />
    </MjmlEmailDocument>
  );
}
