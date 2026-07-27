import { Divider } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider";

export default function DividerWithButtonDemo() {
  return (
    <Divider
      align="right"
      content={{ action: { href: "#", label: "View all" }, type: "button" }}
    />
  );
}
