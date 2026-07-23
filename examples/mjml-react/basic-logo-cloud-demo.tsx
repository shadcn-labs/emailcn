import { BasicLogoCloud } from "@/registry/bases/mjml-react/ui/marketing/logos/basic-logo-cloud";
import type { BasicLogoCloudVariant } from "@/registry/bases/mjml-react/ui/marketing/logos/basic-logo-cloud";

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
