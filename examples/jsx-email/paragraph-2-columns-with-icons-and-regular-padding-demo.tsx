import { Content } from "@/registry/bases/jsx-email/ui/marketing/content/content";

export default function Paragraph2ColumnsWithIconsAndRegularPaddingDemo() {
  return (
    <Content
      {...Content.PreviewProps}
      type="paragraph"
      columns={2}
      withIcons
      padding="regular"
      column1="Fast and reliable delivery for all your email campaigns."
      column2="Beautiful templates that work across every email client."
      iconSrc1="https://assets.mailviews.com/images/components/icon-check-brand.png"
      iconAlt1="Fast"
      iconSrc2="https://assets.mailviews.com/images/components/icon-check-muted.png"
      iconAlt2="Reliable"
    />
  );
}
