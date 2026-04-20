import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import SocialLinks from "@/registry/bases/mjml-react/ui/social-links";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function SocialLinksDemo() {
  return (
    <MjmlEmailDocument preview="social-links" theme={defaultTheme}>
      <SocialLinks {...SocialLinks.PreviewProps} />
    </MjmlEmailDocument>
  );
}
