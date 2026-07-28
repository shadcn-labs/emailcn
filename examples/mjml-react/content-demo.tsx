import { Content } from "@/registry/bases/mjml-react/components/marketing/content/content";
import { defaultTheme } from "@/registry/themes/default";

export default function ContentDemo() {
  return (
    <Content
      alignment="center"
      layout="title"
      variant="small"
      theme={defaultTheme}
    />
  );
}
