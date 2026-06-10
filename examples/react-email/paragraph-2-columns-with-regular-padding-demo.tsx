import { Content } from "@/registry/bases/react-email/ui/marketing/content/content";

export default function Paragraph2ColumnsWithRegularPaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      columns={2}
      padding="regular"
      column1="This is the first column of a two-column paragraph layout with regular padding."
      column2="This is the second column of a two-column paragraph layout with regular padding."
    />
  );
}
