import { Content } from "@/registry/bases/mjml-react/ui/marketing/content/content";

export default function TitleWithRegularPaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="title"
      padding="regular"
      title="Section Title"
    />
  );
}
