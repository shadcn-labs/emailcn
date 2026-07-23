import { LogoCloud } from "@/registry/bases/react-email/ui/marketing/logos/logo-cloud";
import type { LogoCloudVariant } from "@/registry/bases/react-email/ui/marketing/logos/logo-cloud";

export default function BoxedLogoCloudDemo({
  variant,
}: {
  variant?: LogoCloudVariant;
}) {
  return (
    <LogoCloud
      {...LogoCloud.PreviewProps}
      tone="boxed"
      variant={variant ?? LogoCloud.PreviewProps.variant}
    />
  );
}
