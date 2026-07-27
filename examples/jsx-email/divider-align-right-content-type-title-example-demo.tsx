import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignRightContentTypeTitleExampleDemo() {
  return (
    <Divider
      align="right"
      content={{ title: "Order details", type: "title" }}
    />
  );
}
