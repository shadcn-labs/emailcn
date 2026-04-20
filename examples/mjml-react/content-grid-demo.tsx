import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import ContentGrid from "@/registry/bases/mjml-react/ui/content-grid";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function ContentGridDemo() {
  return (
    <MjmlEmailDocument preview="content-grid" theme={defaultTheme}>
      <ContentGrid {...ContentGrid.PreviewProps} />
    </MjmlEmailDocument>
  );
}
