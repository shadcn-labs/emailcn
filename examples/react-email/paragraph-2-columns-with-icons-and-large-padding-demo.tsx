import { Content } from "@/registry/bases/react-email/ui/marketing/content/content";

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
      iconSrc1="https://emailcn.vercel.app/api/email-assets/icon-check-brand.png"
      iconAlt1="Fast"
      iconSrc2="https://emailcn.vercel.app/api/email-assets/icon-check-muted.png"
      iconAlt2="Reliable"
    />
  );
}
