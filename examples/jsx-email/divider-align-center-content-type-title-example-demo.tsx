import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignCenterContentTypeTitleExampleDemo() {
  return (
    <Divider
      align="center"
      content={{ title: "Order details", type: "title" }}
    />
  );
}
