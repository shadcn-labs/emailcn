import { CTAWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/cta/cta-with-background-image";
import type { CTAWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/cta/cta-with-background-image";

export default function CTAWithBackgroundImageDemo({
  variant,
}: {
  variant?: CTAWithBackgroundImageVariant;
}) {
  return (
    <CTAWithBackgroundImage
      {...CTAWithBackgroundImage.PreviewProps}
      variant={variant ?? CTAWithBackgroundImage.PreviewProps.variant}
    />
  );
}
