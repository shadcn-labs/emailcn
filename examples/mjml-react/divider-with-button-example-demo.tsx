import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

export default function DividerWithButtonDemo() {
  return (
    <Divider
      align="right"
      content={{ action: { href: "#", label: "View all" }, type: "button" }}
    />
  );
}
