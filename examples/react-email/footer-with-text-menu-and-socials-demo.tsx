import { FooterWithTextMenuAndSocials } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-text-menu-and-socials";
import type { FooterWithTextMenuAndSocialsVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-text-menu-and-socials";

export default function FooterWithTextMenuAndSocialsDemo({
  variant,
}: {
  variant?: FooterWithTextMenuAndSocialsVariant;
}) {
  return (
    <FooterWithTextMenuAndSocials
      {...FooterWithTextMenuAndSocials.PreviewProps}
      variant={variant ?? FooterWithTextMenuAndSocials.PreviewProps.variant}
    />
  );
}
