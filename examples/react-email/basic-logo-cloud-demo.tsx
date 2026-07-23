import { BasicLogoCloud } from "@/registry/bases/react-email/ui/marketing/logos/basic-logo-cloud";
import type { BasicLogoCloudVariant } from "@/registry/bases/react-email/ui/marketing/logos/basic-logo-cloud";

export default function BasicLogoCloudDemo({
  variant,
}: {
  variant?: BasicLogoCloudVariant;
}) {
  return (
    <BasicLogoCloud
      {...BasicLogoCloud.PreviewProps}
      variant={variant ?? BasicLogoCloud.PreviewProps.variant}
    />
  );
}
