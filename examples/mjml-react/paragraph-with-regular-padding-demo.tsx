import { Content } from "@/registry/bases/mjml-react/ui/marketing/content/content";

export default function ParagraphWithRegularPaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      padding="regular"
      text="This is a regular paragraph with standard padding. It is used to present information in a clear and readable way."
    />
  );
}
