import { FooterWithAppStoreButtons } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-app-store-buttons";
import type { FooterWithAppStoreButtonsVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-app-store-buttons";

export default function FooterWithAppStoreButtonsDemo({
  variant = "centered",
}: {
  variant?: FooterWithAppStoreButtonsVariant;
}) {
  return (
    <FooterWithAppStoreButtons
      {...FooterWithAppStoreButtons.PreviewProps}
      variant={variant}
    />
  );
}
