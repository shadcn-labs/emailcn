import { LogoCloudWithBorders } from "@/registry/bases/jsx-email/ui/marketing/logos/logo-cloud-with-borders";
import type { LogoCloudWithBordersVariant } from "@/registry/bases/jsx-email/ui/marketing/logos/logo-cloud-with-borders";

export default function LogoCloudWithBordersDemo({
  variant,
}: {
  variant?: LogoCloudWithBordersVariant;
}) {
  return (
    <LogoCloudWithBorders
      {...LogoCloudWithBorders.PreviewProps}
      variant={variant ?? LogoCloudWithBorders.PreviewProps.variant}
    />
  );
}
