import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import FeatureRow from "@/registry/bases/mjml-react/ui/feature-row";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function FeatureRowDemo() {
  return (
    <MjmlEmailDocument preview="feature-row" theme={defaultTheme}>
      <FeatureRow {...FeatureRow.PreviewProps} />
    </MjmlEmailDocument>
  );
}
