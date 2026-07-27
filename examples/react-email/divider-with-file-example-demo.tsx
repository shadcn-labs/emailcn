import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerWithFileDemo() {
  return <Divider align="left" content={{ fileType: "PDF", type: "file" }} />;
}
