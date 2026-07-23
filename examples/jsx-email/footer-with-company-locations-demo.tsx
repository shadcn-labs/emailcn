import { FooterWithCompanyLocations } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-company-locations";
import type { FooterWithCompanyLocationsVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-company-locations";

export default function FooterWithCompanyLocationsDemo({
  variant = "stacked",
}: {
  variant?: FooterWithCompanyLocationsVariant;
}) {
  return (
    <FooterWithCompanyLocations
      {...FooterWithCompanyLocations.PreviewProps}
      variant={variant}
    />
  );
}
