import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignCenterContentTypeButtonExampleDemo() {
  return (
    <Divider
      align="center"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        type: "button",
      }}
    />
  );
}
