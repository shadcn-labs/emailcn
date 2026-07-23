import { LogoCloudWithBorders } from "@/registry/bases/mjml-react/ui/marketing/logos/logo-cloud-with-borders";
import type { LogoCloudWithBordersVariant } from "@/registry/bases/mjml-react/ui/marketing/logos/logo-cloud-with-borders";

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
