import { NavigationFooter } from "@/registry/bases/mjml-react/components/marketing/footers/navigation-footer";
import { defaultTheme } from "@/registry/themes/default";

export default function NavigationFooterDemo() {
  return (
    <NavigationFooter
      columns={2}
      alignment="left"
      logoPosition="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
