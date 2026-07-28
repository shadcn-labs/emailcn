import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";
import { defaultTheme } from "@/registry/themes/default";

export default function DividerDemo() {
  return (
    <Divider
      align="center"
      content={{ title: "Highlights", type: "title" }}
      theme={defaultTheme}
    />
  );
}
