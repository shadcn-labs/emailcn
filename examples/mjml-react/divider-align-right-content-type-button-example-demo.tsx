import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

export default function DividerAlignRightContentTypeButtonExampleDemo() {
  return (
    <Divider
      align="right"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        type: "button",
      }}
    />
  );
}
