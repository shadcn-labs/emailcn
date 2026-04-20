import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import AvatarRow from "@/registry/bases/mjml-react/ui/avatar-row";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function AvatarRowDemo() {
  return (
    <MjmlEmailDocument preview="avatar-row" theme={defaultTheme}>
      <AvatarRow {...AvatarRow.PreviewProps} />
    </MjmlEmailDocument>
  );
}
