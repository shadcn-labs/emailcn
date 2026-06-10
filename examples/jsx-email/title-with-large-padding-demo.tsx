import { Content } from "@/registry/bases/jsx-email/ui/marketing/content/content";

export default function TitleWithLargePaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="title"
      padding="large"
      title="Section Title"
    />
  );
}
