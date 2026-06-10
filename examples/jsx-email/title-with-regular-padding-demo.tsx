import { Content } from "@/registry/bases/jsx-email/ui/marketing/content/content";

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
