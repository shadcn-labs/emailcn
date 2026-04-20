import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import Footer from "@/registry/bases/mjml-react/ui/footer";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function FooterDemo() {
  return (
    <MjmlEmailDocument preview="footer" theme={defaultTheme}>
      <Footer {...Footer.PreviewProps} />
    </MjmlEmailDocument>
  );
}
