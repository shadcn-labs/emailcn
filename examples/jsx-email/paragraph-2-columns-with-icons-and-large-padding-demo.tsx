import { Content } from "@/registry/bases/jsx-email/ui/marketing/content/content";

export default function Paragraph2ColumnsWithIconsAndLargePaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      columns={2}
      withIcons
      padding="large"
      column1="Fast and reliable delivery for all your email campaigns."
      column2="Beautiful templates that work across every email client."
      iconSrc1="https://api.dicebear.com/9.x/initials/png?seed=Fast&size=24"
      iconAlt1="Fast"
      iconSrc2="https://api.dicebear.com/9.x/initials/png?seed=Reliable&size=24"
      iconAlt2="Reliable"
    />
  );
}
