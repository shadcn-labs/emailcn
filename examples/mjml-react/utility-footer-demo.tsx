import { UtilityFooter } from "@/registry/bases/mjml-react/components/marketing/footers/utility-footer";
import { defaultTheme } from "@/registry/themes/default";

export default function UtilityFooterDemo() {
  return (
    <UtilityFooter
      content="socials"
      alignment="center"
      columns={1}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
