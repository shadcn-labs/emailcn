import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import LogoHeader from "@/registry/bases/mjml-react/ui/logo-header";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function LogoHeaderDemo() {
  return (
    <MjmlEmailDocument preview="logo-header" theme={defaultTheme}>
      <LogoHeader {...LogoHeader.PreviewProps} />
    </MjmlEmailDocument>
  );
}
