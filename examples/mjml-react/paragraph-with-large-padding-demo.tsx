import { Content } from "@/registry/bases/mjml-react/ui/marketing/content/content";

export default function ParagraphWithLargePaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      padding="large"
      text="This is a paragraph with large padding. It is used to present information with more breathing room."
    />
  );
}
