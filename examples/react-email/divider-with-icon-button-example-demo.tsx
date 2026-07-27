import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerWithIconButtonDemo() {
  return (
    <Divider
      align="right"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        iconSrc: "→",
        type: "icon-button",
      }}
    />
  );
}
