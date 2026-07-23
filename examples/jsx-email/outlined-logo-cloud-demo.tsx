import { LogoCloud } from "@/registry/bases/jsx-email/ui/marketing/logos/logo-cloud";
import type { LogoCloudVariant } from "@/registry/bases/jsx-email/ui/marketing/logos/logo-cloud";

export default function OutlinedLogoCloudDemo({
  variant,
}: {
  variant?: LogoCloudVariant;
}) {
  return (
    <LogoCloud
      {...LogoCloud.PreviewProps}
      tone="outlined"
      variant={variant ?? LogoCloud.PreviewProps.variant}
    />
  );
}
