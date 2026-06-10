import { Content } from "@/registry/bases/react-email/ui/marketing/content/content";

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
