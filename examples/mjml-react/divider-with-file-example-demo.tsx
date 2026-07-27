import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

export default function DividerWithFileDemo() {
  return <Divider align="left" content={{ fileType: "PDF", type: "file" }} />;
}
