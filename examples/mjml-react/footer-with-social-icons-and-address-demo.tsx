import { FooterWithSocialIconsAndAddress } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-social-icons-and-address";
import type { FooterWithSocialIconsAndAddressVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-social-icons-and-address";

export default function FooterWithSocialIconsAndAddressDemo({
  variant,
}: {
  variant?: FooterWithSocialIconsAndAddressVariant;
}) {
  return (
    <FooterWithSocialIconsAndAddress
      {...FooterWithSocialIconsAndAddress.PreviewProps}
      variant={variant ?? FooterWithSocialIconsAndAddress.PreviewProps.variant}
    />
  );
}
