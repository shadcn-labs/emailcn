import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignLeftContentTypeButtonExampleDemo() {
  return (
    <Divider
      align="left"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        type: "button",
      }}
    />
  );
}
