import { Content } from "@/registry/bases/mjml-react/ui/marketing/content/content";

export default function Paragraph2ColumnsWithLargePaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      columns={2}
      padding="large"
      column1="This is the first column of a two-column paragraph layout with large padding."
      column2="This is the second column of a two-column paragraph layout with large padding."
    />
  );
}
